const fs = require("fs");
const path = require("path");
const child_process = require('child_process');
const navigationPages = "./src/pages/pages-structure.json";
const globalNavigation = "./src/global/app-navigation-structure.json";
const websiteUrlBase = "https://privatesky.xyz/#";


let copyRecursiveSync = function (src, dest) {
  let exists = fs.existsSync(src);
  let stats = exists && fs.statSync(src);
  let isDirectory = exists && stats.isDirectory();
  if (exists && isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
        path.join(dest, childItemName));
    });
  } else {
    fs.copyFile(src, dest, (err) => {
      if (err) throw err;
    });
  }
};

let deleteFolderRecursive = function (dir_path) {
  if (fs.existsSync(dir_path)) {
    fs.readdirSync(dir_path).forEach(function (entry) {
      var entry_path = path.join(dir_path, entry);
      if (fs.lstatSync(entry_path).isDirectory()) {
        deleteFolderRecursive(entry_path);
      } else {
        fs.unlinkSync(entry_path);
      }
    });
    fs.rmdirSync(dir_path);
  }
};


let buildWebsite = function (callback) {
  let buildProcess = child_process.exec('stencil build');

  buildProcess.stdout.on('data', (chunk) => {
    console.log(chunk)
  });


  buildProcess.on('error', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  buildProcess.on('close', (code) => {
    callback();
  });
};


let buildSitemap = function () {


  let readFileData = function (pageStructureUrl, callback) {
    fs.readFile(path.resolve(pageStructureUrl), (err, data) => {
      if (err) {
        console.log(err);
      }
      else {
        callback(JSON.parse(data));
      }
    })

  }

  let fillOptionalProps = (navigationPages, pathPrefix) => {

    navigationPages.forEach(page => {

      if (!page.path) {
        page.path = page.name;
      }

      if (pathPrefix) {
        page.path = pathPrefix + "/" + page.path;
      }


      if (page.children) {
        fillOptionalProps(page.children, page.path);
      }
    });
  };
  let siteMap = "";
  let buildXMLTag = function (websitePages) {

    websitePages.forEach(page => {
      siteMap += `<url>
        <loc>${websiteUrlBase}${page.path}</loc>
      </url>`;

      if (page.children) {
        buildXMLTag(page.children)
      }
    });

  };


  readFileData(navigationPages, function (navigationPagesData) {
    readFileData(globalNavigation, function (globalNavigation) {


      fillOptionalProps(navigationPagesData);

      let rootPages = globalNavigation.map(rootPage => rootPage.name);

      navigationPagesData.forEach((page, index) => {
        if (page.parent > -1) {
          let parentIndex = rootPages.indexOf(page.parent);
          if (parentIndex) {
            if (!globalNavigation[parentIndex].children) {
              globalNavigation[parentIndex].children = [];
            }
            page.path = globalNavigation[parentIndex].path + page.path;
            globalNavigation[parentIndex].children.push(page);
            navigationPagesData.splice(index, 1);
          }
        }
      });

      let allWebsitePages = navigationPagesData.concat(globalNavigation);
      buildXMLTag(allWebsitePages);
      siteMap = `<?xml version="1.0" encoding="UTF-8"?>
                 <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                 ${siteMap}
                 </urlset>`;
      fs.writeFile("./docs/sitemap.xml", siteMap, function (err) {
        if (err) {
          console.log("An error occurred while generating the sitemap");
        }
        else {
          console.log("Sitemap was successfully generated");
        }

      })
    })
  })

};

let makeWebsite = function () {
  buildWebsite(() => {
    console.log("Cleaning previous docs...");
    deleteFolderRecursive('./docs/assets');
    deleteFolderRecursive('./docs/build');
    console.log("Previous docs was successfully cleaned.");
    console.log("Copying current docs...");
    copyRecursiveSync("./www/assets", "./docs/assets");
    copyRecursiveSync("./www/build", "./docs/build");
    copyRecursiveSync("./www/index.html", "./docs/index.html");
    console.log("Current docs was successfully copied.");
    buildSitemap();
  });
};

makeWebsite();





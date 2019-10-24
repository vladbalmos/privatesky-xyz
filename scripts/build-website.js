const pagesStructureUrls = ["./src/pages/pages-structure.json","./src/global/app-navigation-strucutre.json"];
const fs = require("fs");
const path = require("path");
const child_process = require('child_process');


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

let makeWebsite = function () {
  buildWebsite(() => {
    console.log("Cleaning previous docs...");
    deleteFolderRecursive('./docs/assets');
    deleteFolderRecursive('./docs/build');
    console.log("Previous docs was successfully cleaned.");
    console.log("Copying current docs...");
    copyRecursiveSync("./www/assets","./docs/assets");
    copyRecursiveSync("./www/build","./docs/build");
    copyRecursiveSync("./www/index.html","./docs/index.html");
    console.log("Current docs was successfully copied.");
  });
};

let mergePagesStructure = function(){
  pagesStructureUrls.forEach(pageStructureUrl=>{


      fs.readFile(path.resolve(pageStructureUrl), (err, data) => {
        if (err)
          cb(err)
        else
          cb(null, JSON.parse(data))
      })

    let pageStructure = require(pageStructureUrl);
  })
}

//makeWebsite();
mergePagesStructure();






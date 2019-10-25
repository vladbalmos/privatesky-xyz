export default {
  basePagesUrl: globalConfig.pagesBasePath?globalConfig.pagesBasePath:"https://raw.githubusercontent.com/PrivateSky/pwc-apps/master/pages/",
  defaultPageProp: {
    icon: "fa-bars",
    type: "route",
    component: "psk-page-loader",
    exact: true
  },
  profile: {
    username: "PrivateSky",
    email: "privatesky@axiologic.net",
    avatar: "https://privatesky.xyz/assets/icon/privatesky.png"
  }
}

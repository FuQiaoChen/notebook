export const data = {
  "key": "v-69fc9e49",
  "path": "/profile.html",
  "title": "这是我的生活网站",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebar": false
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649787200000,
    "contributors": [
      {
        "name": "FuQiaoChen",
        "email": "452250588@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "profile.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

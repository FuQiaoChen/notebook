export const data = {
  "key": "v-623c2230",
  "path": "/note/vue3.html",
  "title": "vue3学习笔记",
  "lang": "zh-CN",
  "frontmatter": {},
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
  "filePathRelative": "note/vue3.md"
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

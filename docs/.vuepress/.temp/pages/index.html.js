export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/a1.jpg",
    "heroText": "这是有风景",
    "tagline": null,
    "actions": [
      {
        "text": "简介 ->",
        "link": "profile.html",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "自信"
      },
      {
        "title": "自勉"
      },
      {
        "title": "成就"
      }
    ],
    "footer": "MIT Licensed | Copyright © hehe"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "README.md"
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

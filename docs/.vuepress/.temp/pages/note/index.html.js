export const data = {
  "key": "v-15054f24",
  "path": "/note/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/a2.jpg",
    "heroText": "这是有花香",
    "tagline": null,
    "actions": [
      {
        "text": "typescript学习笔记",
        "link": "/note/",
        "type": "secondary"
      },
      {
        "text": "vue3学习笔记",
        "link": "/note/vue3.html",
        "type": "secondary"
      },
      {
        "text": "mybatis",
        "link": "mybatis.html",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "好好学习",
        "details": "以学为乐，乐此不倦。"
      },
      {
        "title": "天天向上",
        "details": "以学为乐，乐此不倦。"
      },
      {
        "title": "成就自我",
        "details": "以学为乐，乐此不倦。"
      }
    ],
    "footer": "MIT Licensed | Copyright © hehe"
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
  "filePathRelative": "note/README.md"
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

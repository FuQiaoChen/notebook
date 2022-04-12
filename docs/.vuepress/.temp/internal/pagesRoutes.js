import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-69fc9e49","/profile.html",{"title":"这是我的生活网站"},["/profile","/profile.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-36b1a79b","/document/",{"title":""},["/document/index.html","/document/README.md"]],
  ["v-d9af9fec","/note/mybatis.html",{"title":""},["/note/mybatis","/note/mybatis.md"]],
  ["v-15054f24","/note/",{"title":""},["/note/index.html","/note/README.md"]],
  ["v-225cc3d0","/note/typescript.html",{"title":"typescript学习笔记"},["/note/typescript","/note/typescript.md"]],
  ["v-623c2230","/note/vue3.html",{"title":"vue3学习笔记"},["/note/vue3","/note/vue3.md"]],
  ["v-0e58abf0","/note/%E5%9B%BE%E8%A7%A3Git.html",{"title":"图解Git"},["/note/图解Git.html","/note/%E5%9B%BE%E8%A7%A3Git","/note/图解Git.md","/note/%E5%9B%BE%E8%A7%A3Git.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)

import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    //base: "/notebook/",
    lang: 'zh-CN',
    title: 'Joey',
    description: '练习',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.png',
        navbar: [
            // NavbarItem
            {
                text: '简介',
                link: '/profile.html',
            },
            // NavbarGroup
            {
                text: '学习笔记',
                children: [{
                    text: '前导',
                    link: '/note/',
                },
                {
                    text: '图解git',
                    link: '/note/图解git.html',
                },
                {
                    text: 'ts',
                    link: '/note/typescript.html',
                },
                {
                    text: 'vue3',
                    link: '/note/vue3.html',
                }, {
                    text: 'mybatis',
                    link: '/note/mybatis.html',
                }
                ],
            }
        ],
    },
})
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { generateSidebar } from './generateSidebar'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader
} from 'vitepress-plugin-group-icons'
import fs from 'fs'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default withMermaid(

defineConfig({

  mermaid: {
    theme: 'base', // Use base theme to allow CSS variables to take effect
    // theme: 'default', // z.B. dark | forest | neutral | base
//    startOnLoad: true,
    maxTextSize: 250000,
    wrap: true
  },

  title: "Eclipse Daanse",
  description: "Data Analysis Services",
  base: "/",

  sitemap: {
    hostname: 'https://daanse.org',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },


  themeConfig: {
    search: {
      provider: 'local',
      options: {
        detailedView: true // show details in search
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    
    sidebar: {
      '/cubeserver/concept': generateSidebar('../cubeserver/concept'),
      '/cubeserver/setup':  generateSidebar('../cubeserver/setup'),
      '/cubeserver/tutorial':  generateSidebar('../cubeserver/tutorial','/cubeserver/tutorial'),
      '/cubeserver/model':  generateSidebar('../cubeserver/model','/cubeserver/model'),

      '/board/concept':  generateSidebar('../board/concept'),
      '/board/setup':  generateSidebar('../board/setup'),
      '/board/tutorial':  generateSidebar('../board/tutorial'),
      '/board/model':  generateSidebar('../board/model')

    },

    logo: { src: '/LogoDaanse.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eclipse-daanse' }
    ],

    editLink: {
      pattern: 'https://github.com/eclipse-daanse/eclipse-daanse.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the Eclipse Public License 2.0',
      copyright: 'Copyright © 2025 - Eclipse-Daanse'
    }
  }

})
)


function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Partner',
      link: '/partner',
      activeMatch: '/partner/'
    },
    {
      text: 'Blog',
      link: '/blog',
    },
    {
      text: 'Analysis Server',
      items: [
        {
          text: 'Concept',
          link: '/cubeserver/concept/index'
        },
        {
          text: 'Setup Guide',
          link: '/cubeserver/setup/index'
        },
        {
          text: 'Tutorials - Model',
          link: '/cubeserver/tutorial/index'
        },
        {
          text: 'Documentation - Model',
          link: '/cubeserver/model/index'
        },
      ]
    },
    {
      text: 'Analysis Dashboard',
      items: [
        {
          text: 'Concept',
          link: '/board/concept/index'
        },
        {
          text: 'Setup Guide',
          link: '/board/setup/index'
        },
        {
          text: 'Tutorials - Model',
          link: '/board/tutorial/index'
        },
        {
          text: 'Documentation - Model',
          link: '/board/model/index'
        },
      ]
    }
  ]
}


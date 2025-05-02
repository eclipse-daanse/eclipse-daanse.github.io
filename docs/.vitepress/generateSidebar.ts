import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { DefaultTheme } from 'vitepress'

interface SidebarEntry {
  text: string
  link: string
  order: number
  group: string
}

export function generateSidebar(dir: string, baseUrlPrefix: string): DefaultTheme.SidebarItem[] {
  const files = collectMarkdownFiles(path.resolve(__dirname, dir))
  const pages: SidebarEntry[] = []

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf-8')
    const { data } = matter(raw)

    // Skip files without required frontmatter
    if (!data || !data.title || !data.group) continue

    const relPath = file
      .replace(path.resolve(__dirname, dir), '')
      .replace(/\\/g, '/')
      .replace(/\.md$/, '')
      .replace(/\/index$/, '') // remove trailing /index

    pages.push({
      text: data.title,
      link: `${baseUrlPrefix}/${relPath}`.replace(/\/+/g, '/'),
      order: data.order ?? 999,
      group: data.group
    })
  }

  // Group and sort entries
  const grouped = new Map<string, SidebarEntry[]>()
  for (const page of pages) {
    if (!grouped.has(page.group)) grouped.set(page.group, [])
    grouped.get(page.group)!.push(page)
  }

  const sidebar: DefaultTheme.SidebarItem[] = []

  for (const [group, items] of grouped.entries()) {
    const sortedItems = items
      .sort((a, b) => a.order - b.order)
      .map(({ text, link }) => ({ text, link }))

    sidebar.push({
      text: group,
      collapsed: false,
      items: sortedItems
    })
  }

  return sidebar.sort((a, b) => a.text.localeCompare(b.text))
}

function collectMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }

  return files
}


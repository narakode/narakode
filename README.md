```js
import fs from 'fs'

if (!fs.existsSync('courses')) {
    fs.mkdirSync('courses')
}

const course = ''
const articles = []

articles.forEach((article, index) => {
    const slug = article
        .replace(/\s*\([^)]*\)/g, '')
        .replace(/[^\w\s]/g, '')
        .replace(/\b(itu|dan|ke|di|dengan|pada)\b/gi, '')
        .replace(/\s+/g, '-')
        .trim()
        .toLowerCase()

    const frontmatter = `---
slug: ${slug}
title: ${article}
description: ${article}
type: course
course: ${course}
publishedAt: 2026-01-${`${index + 1}`.padStart(2, '0')} 10:00:00 +0700
---`

    fs.writeFileSync(`courses/${index + 1}-${slug}.md`, frontmatter, null, 'w')
})
```
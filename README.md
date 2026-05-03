# Roberto Castro — Personal Blog

A personal blog built with [Eleventy](https://www.11ty.dev/).

## Stack

- **Framework:** Eleventy (11ty) v3
- **Templating:** Nunjucks
- **Styling:** Plain CSS, no frameworks
- **Output:** Static HTML

## Development

```bash
npm install
npx @11ty/eleventy --serve
```

Opens at `http://localhost:8080` with live reload.

## Writing a post

Add a Markdown file to `posts/` with this front matter:

```markdown
---
title: Your Post Title
date: 2025-06-01
layout: post.njk
tags: posts
---

Your content here.
```

## License

MIT
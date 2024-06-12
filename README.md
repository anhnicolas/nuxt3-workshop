# Nuxt 3 Workshop

Welcome to the Nuxt 3 workshop! This guide will take you through the steps to set up your environment, create a Nuxt 3 blog and portfolio.

## Table of Contents
1. [Introduction](#introduction)
2. [Setup](#setup)
3. [Exercice 1](#exercise-1-installation-and-setup)
4. [Exercice 2]()

## Introduction
[Nuxt3](https://nuxt.com/) is an open-source Vue framework for building modern web applications that makes development painless and powerful with a great developer experience.

Some of these features are what make Nuxt performant and a good choice for your app:

* Automatic Code Splitting
* Server-Side Rendered, Static-Site Generated / Jamstack, SPA
* Powerful routing system with asynchronous data
* Extend with modular architecture
* Hot Module Replacement in Development
* Write Vue Files **(*.vue)**
* ES6 Transpilation
* Powerful Lighthouse scores out of the box!
* Pre-processing - SCSS, SASS, LESS.

## Setup
### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- Text editor - We recommend Visual Studio Code with the official Vue extension (previously known as Volar)
- npm

## Exercise 1 (Installation and Setup)
1. Open your terminal and run the following command to create a new Nuxt 3 project:
   ```bash
   npx nuxi@latest init <project-name>
   cd <project-name>
   # if using Visual Studio
   code .
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
   OR you can install npm when creating the project

3. Install talwindcss and tailwind typography
- https://tailwindcss.com/docs/guides/nuxtjs
- https://github.com/tailwindlabs/tailwindcss-typography

4. Install Nuxt Content
- https://content.nuxt.com/get-started/installation

5. Install Nuxt Icon
- https://nuxt.com/modules/icon

6. Install Nuxt Apollo
- https://apollo.nuxtjs.org/getting-started/quick-start

7. Development Server:
   ```bash
   npm run dev
   ```

## Exercice 2 (Pages and Components)
Pages represent views for each specific route pattern. components are reusable pieces of the user interface, like buttons and menus.

1. Create your first page `index.vue` displaying "Hello World !" in `pages/` directory in the root directory of your project, and add it to `app.vue`
- https://nuxt.com/docs/getting-started/views
2. Add to your `app.vue` a "SiteHeader.vue" and "SiteFooter.vue" component in `components/` directory in the root directory of your project
- https://nuxt.com/docs/getting-started/views
3. Customize the home page and the components as your liking (you can inspire yourself from the folder associated to this workshop)

## Exercice 3 (Content)
1. Place Markdown Files (blog post) inside the `content/blog/` directory in the root directory of your project
2. Create a catch-all-route in `pages/blog/` and use `<ContentDoc />` to display your content
- https://nuxt.com/docs/guide/directory-structure/pages
- https://content.nuxt.com/components/content-doc
3. Use tailwind typography to make your markdown look good
```
<ContentDoc class="prose"/>
```
4. Create a markdown component that is reusable in `components/content/`

## Exercice 4 (Query Content)
1. Add a front matter to each of your blog posts
```example_blog_post.md
---
title: Hello, World!
description: This is my very first blog post and I'm so excited to share it with you!
date: 2023-05-23
cover: nasa-Q1p7bh3SHj8-unsplash.jpg
tags:
  - blog
---
```
2. In your catch all route in `pages/blog/` add a script to query the content and replace `<ContentRenderer />` to display your content
- https://content.nuxt.com/usage/render
3. Create a page `index.vue` that can display all your blog posts front matter in `pages/blog/`. Use a script to query all your posts
4. Try to use a component to display your blog post front matter

# Journal

This is a quick journal on how I develop this website. It will be used for documentation for both tools used and thought process.

- [Journal](#journal)
  - [13 July](#13-july)
    - [Starting from the beginning (again)](#starting-from-the-beginning-again)
    - [Mr. Ranedeer](#mr-ranedeer)
    - [DevTools](#devtools)
    - [Structure of HTML](#structure-of-html)
      - [`<head>` Element Uses](#head-element-uses)
  - [14 July](#14-july)
    - [Playing around](#playing-around)
  - [15 July](#15-july)
    - [Today's To-Do List](#todays-to-do-list)
    - [GitHub Pages using GitHub Actions](#github-pages-using-github-actions)

## 13 July

### Starting from the beginning (again)

I have restarted my repository to the minimum through the "learning" branch. This may break the [pages](.github\workflows\pages.yml) workflow to deploy.
I had set up next.js before this entry. That set up is now removed. I have never built a website before and have always struggled to use tools such as node and Jekyll to build websites. The goal of this project is to understand the basics of front-end development. I don't need tools for that, except HTML, CSS and JS. In the future I should take time to learn React.

I have installed Live Server to my VS Code. I don't know if I need it. It will host my website locally for me to edit.

### Mr. Ranedeer

I use Mr. Ranedeer to teach me about the basics of web development. It is a GPT model, which also means I can ask questions. <https://mr-ranedeer.com/>

Asking questions helps a lot. I have already learned that you can in fact write CSS and JS inside an HTML document. This makes sense, but I never thought how this could be executed considering a browser has the rendering engine and a script engine separated. Also learned that `defer` attribute makes the JavaScript wait until the HTML has loaded, in contrast to `async` that will run alongside it.

### DevTools

Mr Ranedeer gave me an example of using Elements, Console and Sources in the web browser's DevTools. There are more tools, but I think only those 3 should be enough for my static website for now.

### Structure of HTML

I've learned that `<!DOCTYPE html>` declares HTML version, but all browsers assume the "unspecified version" as I would like to call it refers to HTML5.

The `<html>` element can specify a language using the `lang` attribute. This is mainly used for accessibility screen readers, search engine indexing, and browsers spell-checking. To name a few.

You can't display things horizontally by using only HTML, CSS is required for that by using either: inline, flex or grid.

#### `<head>` Element Uses

- Title: `<title>My Webpage</title>`
- Character Set: `<meta charset="UTF-8">`
- Viewport Settings: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- CSS Links: `<link rel="stylesheet" href="styles.css">`
- JavaScript Links: `<script src="script.js"></script>`
- Meta Tags for SEO: `<meta name="description" content="This is a sample webpage">`
- Favicons: `<link rel="icon" href="favicon.ico">`
- Social Media Metadata: Open Graph tags for Facebook, Twitter cards, etc.  
Open Graph tags (prefixed with `og:`) are used by social media platforms to generate rich link previews.

```html
<meta property="og:title" content="My Webpage">
<meta property="og:description" content="This is a sample webpage">
<meta property="og:image" content="image.jpg">
```

## 14 July

### Playing around

I have added the index.html file that I played around with yesterday and added a favicon of my logo and a styles.css to play around with today. The ZuliusRoolfLogo.svg is my own work with the use of my own Font that I plan to release in the future.

While I'm committing my work so far, I wanted to take the opportunity and see if I can update to GitHub Pages alongside with it. According to this [Stack Overflow post](https://stackoverflow.com/a/56911185) I'm supposed to add a file named `.nojekyll` for a website that does not use Jekyll. Not sure if it actually matters.

## 15 July

### Today's To-Do List

- [x] Setup GitHub actions to work with static builds
- [ ] Reach step 1.4 in the website curriculum
- [ ] Reach step 1.16 in the website curriculum
- [ ] Get answers on how to use Markdown to then convert into HTML

### GitHub Pages using GitHub Actions

Finally, did it!  
GitHub Actions now successfully publish a static website to [zulius.me](https://zulius.me) correctly.

I find it fascinating that it is so difficult to find resources on this kind of matter. If I search for "GitHub pages HTML action" on Google I get [peaceiris' action](https://github.com/peaceiris/actions-gh-pages) for github pages. That is not the one I am using. I use the official static website action provided by GitHub, but I can't find a link for it as they are only accessable through `github.com/<user>/<repository>/actions/new`.

I also took the opportunity to add a grammatical linter for my markdown files. Because, I noticed some grammatical errors and wished to get them corrected for me instead of manually skimming through.

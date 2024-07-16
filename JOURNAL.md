# Journal

This is a quick journal on how I develop this website. It will be used for documentation for both tools used and thought process.

- [Journal](#journal)
  - [July 13](#july-13)
    - [Starting from the beginning (again)](#starting-from-the-beginning-again)
    - [Mr. Ranedeer](#mr-ranedeer)
    - [DevTools](#devtools)
    - [Structure of HTML](#structure-of-html)
      - [`<head>` Element Uses](#head-element-uses)
  - [July 14](#july-14)
    - [Playing around](#playing-around)
  - [July 15](#july-15)
    - [Today's To-Do List](#todays-to-do-list)
    - [GitHub Pages using GitHub Actions](#github-pages-using-github-actions)
    - [CSS](#css)
    - [JavaScript](#javascript)
      - [DOM Modification](#dom-modification)
    - [Some small things I've learned](#some-small-things-ive-learned)
      - [JSON Content Structure](#json-content-structure)
    - [Reflection](#reflection)
  - [July 16](#july-16)
    - [Today's agenda](#todays-agenda)

## July 13

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

## July 14

### Playing around

I have added the index.html file that I played around with yesterday and added a favicon of my logo and a styles.css to play around with today. The ZuliusRoolfLogo.svg is my own work with the use of my own Font that I plan to release in the future.

While I'm committing my work so far, I wanted to take the opportunity and see if I can update to GitHub Pages alongside with it. According to this [Stack Overflow post](https://stackoverflow.com/a/56911185) I'm supposed to add a file named `.nojekyll` for a website that does not use Jekyll. Not sure if it actually matters.

## July 15

### Today's To-Do List

- [x] Setup GitHub actions to work with static builds
- [x] Reach step 1.4 in the website curriculum
- [ ] Reach step 1.16 in the website curriculum
- [X] Get answers on how to use Markdown to then convert into HTML

### GitHub Pages using GitHub Actions

Finally, did it!  
GitHub Actions now successfully publish a static website to [zulius.me](https://zulius.me) correctly.

I find it fascinating that it is so difficult to find resources on this kind of matter. If I search for "GitHub pages HTML action" on Google I get [peaceiris' action](https://github.com/peaceiris/actions-gh-pages) for github pages. That is not the one I am using. I use the official static website action provided by GitHub, but I can't find a link for it as they are only accessable through `github.com/<user>/<repository>/actions/new`.

I also took the opportunity to add a grammatical linter for my markdown files. Because, I noticed some grammatical errors and wished to get them corrected for me instead of manually skimming through.  
<https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex>

### CSS

I can already tell by the deceptible huge amount of functionality CSS brings with Attribute and Pseudo-Classes Selectors that it will be very easy to confuse how CSS works.

Overall I think classes is the way to go when it comes to CSS, it is not often you want a singular element for style using ID Selector.

### JavaScript

I found out that IDs of HTML elements is more used for scripts rather than CSS. This makes sense considering a script most likely want to find a specific item to change.

The difference between `var` and `let` is subtle. What I understand so is `let` a more restricted `var`, if it is in a block it will be restricted while `var` would keep a value after a block ends (except for functions). I should probably just use var to make it simple.

Comparison Operators have been a bit confusing for me as JavaScript has triple `===` operator. I now finally understand what it means as the triple `===` is strict and is a regular double `==` in many other languages. The difference is that double `==` in JavaScript means the language automatically performs type conversion. In other words I can see if the integer `5` is equal to the string `"5"`, e.g. `5 == "5";` results in `true`. What I should keep in mind is that this applies to `0 == false` as well, meaning bolean is not represented as an int like the C languages does.

Arrays are more linked list types. `pop()` & `push()` and `shift()` & `unshift()` removes and adds elements from the back and front respectively.

Objects are python dictionaries, they work the same, support both period and string in brackets, e.g. `dictionary.key` and `dictionary["key"]`.

#### DOM Modification

You can retrive and edit HTML and CSS elements using these following fucntions:

```js
let element = document.getElementById("myId");
let elements = document.getElementsByClassName("myClass");
let elements = document.getElementsByTagName("p");
let element = document.querySelector(".myClass");
let elements = document.querySelectorAll("p");
```

Worth of note is that some return multiple items as an array. To change all of them you will need to loop through them.

```js
element.innerHTML = "New Content";
element.textContent = "New Text";
element.style.color = "blue";

for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("newClass");
    elements[i].classList.remove("oldClass");
}
```

### Some small things I've learned

When you add an alt text for an image in HTML, like this `<img src="image.jpg" alt="Description of image">`, I never realized the alt text is displayed after the "broken image file" icon. This explains all the times I visited a website, and it couldn't properly load, I got "broken image file" icons sometimes with and sometimes without text.

I learned that it is very easy to change color for SVG files, considering that it is only a style attribute change for fill. So I inverted the colors for my [favicon](website/favicon.svg) file.

My initial idea was to use Markdown for my portfolio. In case my website would be down then I could just showcase my GitHub repository. However, because I am using only static content to build everything from scratch, I can't use libraries to convert Markdown to HTML. I can of course install them locally, or run them on GitHub Actions, but then I will troubleshoot that and the website on my local machine won't refelct what will be published. I could resolve this using Docker, but there are so many tools to make things easier when the simplest solution is to just use JSON to convert into JavaScript Object to then insert into HTML/DOM.

Three JSON files will be used to represent my content on the website. Biography, Portfolio and Experiences. I don't know if there will be a performance issue, but my idea is to host all images and videos on the GitHub repository. The plan is to host less than 15 seconds video per portfolio item on github, keeping it under 2 MB per item if possible.

#### JSON Content Structure

- **Biography:** Portrait | Name | Title, workplace | Links to social media | About me text
- **Portfolio:** Title | Video link | Descriptive title, year, company?, collaborators?, reason why I did the project
- **Experiences:** Year | Start date?, End date? | Description | Image link of company

### Reflection

I was not able to reach step 1.16 in the curriculum, only to step 1.4. Reaching step 1.16 or even finishing the corriculum which ends at 1.20 will be my goal tomorrow. Maybe a bit optimistic considering I will without a doubt work on my website alongside the learning corriculum Mr. Ranedeer has provided me. Will see tomorrow. I'm happy with today's effort on all the subjects I've learned.

## July 16

### Today's agenda

Completely forgot I had laundry and cleaning planned today in the afternoon. Hence, only half a workday is available to me.
To change up the plan I could write an HTML template to load JSON data into. Then I have content to work with even if the JSON converter is not set up properly.

- [ ] Template for Biography
- [ ] Template for Portfolio
- [ ] Reach step 1.10 in the website curriculum (if possible)


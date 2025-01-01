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
    - [GitHub Pages using GitHub Actions](#github-pages-using-github-actions)
    - [CSS](#css)
    - [JavaScript](#javascript)
      - [DOM Modification](#dom-modification)
    - [Some small things I've learned](#some-small-things-ive-learned)
      - [JSON Content Structure](#json-content-structure)
    - [Reflection](#reflection)
  - [July 16](#july-16)
    - [Biography Template](#biography-template)
      - [Graphical Assets are Difficult](#graphical-assets-are-difficult)
    - [Git Cherry Pick Tangent](#git-cherry-pick-tangent)
  - [July 19](#july-19)
    - [Portfolio UI](#portfolio-ui)
    - [JSON creation](#json-creation)
  - [July 27](#july-27)
    - [Train work](#train-work)
    - [Converting JSON to HTML using JS](#converting-json-to-html-using-js)
    - [Learning CSS](#learning-css)
      - [Descendant vs. Child Selectors](#descendant-vs-child-selectors)
      - [Flexbox and Grid](#flexbox-and-grid)
    - [Design Considerations](#design-considerations)
    - [JSON to HTML in Biography](#json-to-html-in-biography)
  - [July 31](#july-31)
    - [Learning as much as I can](#learning-as-much-as-i-can)
      - [JavaScript Asynchronous Functions](#javascript-asynchronous-functions)
      - [JavaScript Event Handling and Listeners](#javascript-event-handling-and-listeners)
  - [August 02](#august-02)
    - [Learning even more](#learning-even-more)
      - [Neat tricks I found analyzing chatGPT's To-Do List sample page](#neat-tricks-i-found-analyzing-chatgpts-to-do-list-sample-page)
      - [Best practices](#best-practices)
      - [The last lesson](#the-last-lesson)
    - [HTML templates and JSON pre-fetching](#html-templates-and-json-pre-fetching)
  - [August 04](#august-04)
    - [Applying everything I've learned from August 02](#applying-everything-ive-learned-from-august-02)
      - [HTML Biography Template](#html-biography-template)
      - [HTML Portfolio Template](#html-portfolio-template)
  - [August 05](#august-05)
    - [JSON Conversion](#json-conversion)
  - [August 09](#august-09)
    - [CSS Layout](#css-layout)
    - [Styling Tricks](#styling-tricks)
    - [Exploring CSS](#exploring-css)
    - [Design considerations](#design-considerations-1)
  - [August 10](#august-10)
    - [Clickable button items](#clickable-button-items)
    - [Hiding "About" in mobile view](#hiding-about-in-mobile-view)
    - [Fade CSS animation](#fade-css-animation)
  - [September 02](#september-02)
    - [Relearning](#relearning)
  - [September 08](#september-08)
    - [CSS `display: none` Replacement](#css-display-none-replacement)
  - [September 9](#september-9)
    - [Layout Positioning](#layout-positioning)
  - [September 10](#september-10)
    - [Portfolio Column Width Issue](#portfolio-column-width-issue)
  - [September 30](#september-30)
  - [October 28](#october-28)
  - [November 28](#november-28)
  - [January 01](#january-01)

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

- [x] Setup GitHub actions to work with static builds
- [x] Reach step 1.4 in the website curriculum
- [ ] Reach step 1.16 in the website curriculum
- [X] Get answers on how to use Markdown to then convert into HTML

### GitHub Pages using GitHub Actions

Finally, did it!  
GitHub Actions now successfully publish a static website to [zulius.me](https://zulius.me) correctly.

I find it fascinating that it is so difficult to find resources on this kind of matter. If I search for "GitHub pages HTML action" on Google I get [peaceiris' action](https://github.com/peaceiris/actions-gh-pages) for GitHub pages. That is not the one I am using. I use the official static website action provided by GitHub, but I can't find a link for it as they are only accessible through `github.com/<user>/<repository>/actions/new`.

I also took the opportunity to add a grammatical linter for my markdown files. Because, I noticed some grammatical errors and wished to get them corrected for me instead of manually skimming through.  
<https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex>

### CSS

I can already tell by the deceptively huge amount of functionality CSS brings with Attribute and Pseudo-Classes Selectors that it will be very easy to confuse how CSS works.

Overall I think classes is the way to go when it comes to CSS, it is not often you want a singular element for style using ID Selector.

### JavaScript

I found out that IDs of HTML elements is more used for scripts rather than CSS. This makes sense considering a script most likely want to find a specific item to change.

The difference between `var` and `let` is subtle. What I understand so is `let` a more restricted `var`, if it is in a block it will be restricted while `var` would keep a value after a block ends (except for functions). I should probably just use var to make it simple.

Comparison Operators have been a bit confusing for me as JavaScript has triple `===` operator. I now finally understand what it means as the triple `===` is strict and is a regular double `==` in many other languages. The difference is that double `==` in JavaScript means the language automatically performs type conversion. In other words I can see if the integer `5` is equal to the string `"5"`, e.g. `5 == "5";` results in `true`. What I should keep in mind is that this applies to `0 == false` as well, meaning Boolean is not represented as an int like the C languages does.

Arrays are more linked list types. `pop()` & `push()` and `shift()` & `unshift()` removes and adds elements from the back and front respectively.

Objects are python dictionaries, they work the same, support both period and string in brackets, e.g. `dictionary.key` and `dictionary["key"]`.

#### DOM Modification

You can retrieve and edit HTML and CSS elements using these following functions:

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

My initial idea was to use Markdown for my portfolio. In case my website would be down then I could just showcase my GitHub repository. However, because I am using only static content to build everything from scratch, I can't use libraries to convert Markdown to HTML. I can of course install them locally, or run them on GitHub Actions, but then I will troubleshoot that and the website on my local machine won't reflect what will be published. I could resolve this using Docker, but there are so many tools to make things easier when the simplest solution is to just use JSON to convert into JavaScript Object to then insert into HTML/DOM.

Three JSON files will be used to represent my content on the website. Biography, Portfolio and Experiences. I don't know if there will be a performance issue, but my idea is to host all images and videos on the GitHub repository. The plan is to host less than 15 seconds video per portfolio item on GitHub, keeping it under 2 MB per item if possible.

#### JSON Content Structure

- **Biography:** Portrait | Name | Title, workplace | Links to social media | About me text
- **Portfolio:** Title | Video link | Descriptive title, year, company?, collaborators?, reason why I did the project
- **Experiences:** Year | Start date?, End date? | Description | Image link of company

### Reflection

I was not able to reach step 1.16 in the curriculum, only to step 1.4. Reaching step 1.16 or even finishing the curriculum which ends at 1.20 will be my goal tomorrow. Maybe a bit optimistic considering I will without a doubt work on my website alongside the learning curriculum Mr. Ranedeer has provided me. Will see tomorrow. I'm happy with today's effort on all the subjects I've learned.

## July 16

Completely forgot I had laundry and cleaning planned today in the afternoon. Hence, only half a workday is available to me.
To change up the plan I could write an HTML template to load JSON data into. Then I have content to work with even if the JSON converter is not set up properly.

- [X] Template for Biography
- [ ] Template for Portfolio
- [ ] Reach step 1.10 in the website curriculum (if possible)

### Biography Template

I first focused on structuring up the three columns: Portfolio, Biography and Timeline. For now only Portfolio and Biography will be used. I already had a portfolio template up, so my priority was to set up a biography template.

My goal is to make the content modular, mostly for me to learn but if anyone wants to take inspiration then feel free to use my system.

The JSON should be able to change profile picture, name, profession, company/place, social links and a description. I do need some template in case the JavaScript breaks. It would be bad if someone visits the site and can not see anything because the JavaScript failed to load the information.

Whenever JavaScript failure would happen, I think using this repository as a social link would be fitting. Acting a bit like a backup.

#### Graphical Assets are Difficult

Inserting an icon for a social media company is extremely easy but also difficult. Because I am trying to achieve modularity by using a JSON, I cannot use external resources like [Font Awesome icons](https://fontawesome.com/start) that require a special syntax in an HTML element. I would much rather prefer to have the icons locally and load them as images instead with a path. The issue occurs when icons are SVG files which are not really supported by the `<img>` element. It can load, but it is not stylable by CSS afterwards.

The solution I came up with is to take the defined icon path in the JSON, open the SVG file and then copy its contents to the appropriate HTML element.

The proposed solution has not been implemented yet. Did not have enough time until my laundry was due.  
Anyway, I am also a bit torn over the biography description as it can easily overwhelm the visitor. [Seyit Yilmaz](https://www.seyityilmaz.com/) designed his portfolio to be as clean as possible, using the principle of "show, don't tell". I feel a bit like an over-explainer, so perhaps I should avoid information as much as possible. I could potentially show more information if the user clicked "About" or a "Show more..." button, so that the very least it is hidden when you first visit the site. That sounds like a good idea.

### Git Cherry Pick Tangent

I got annoyed that my current profile picture in the HTML template is just my logo. The logo is good now, but I want a professional photo when the website gets deployed. An image has already been uploaded to the git, on commit 9a0ce500 specifically. I wondered how to go back in history and get the `cv-picture.jpg` back without re-uploading.

Today I found out that you can cherry-pick commits into your branch and just get the changes. This is a very nice feature of git I never knew existed nor how it could be done. I will keep this in mind when creating commits, as every commit should be a complete feature so that you can remove and add features easily. Very cool.

## July 19

- [x] Cleanup Biography Template
- [x] Portfolio Template
- [ ] JavaScript convert JSON to HTML
- [ ] Upload 2 videos to portfolio (hopefully)
- [ ] Reach step 1.10 in Mr. Ranedeer website curriculum

### Portfolio UI

I am not too sure how to make the portfolio UI. I thought about a way to maybe make clickable links to redirect to the source code. The mobile UI always ruins my ideas though, unfortunately. At the same time; I also need to get myself together that this is a showcase of my work.

The reason I am so worried about clickable links is to be able to showcase the entire project. One example is my high school graduation documentary. It is already a video to begin with, so I could just embed the entire YouTube video instead.

A solution could be that you can in fact click on the portfolio items and they "open up" or rather persist after the mouse stopped hovering. This would also be easy to integrate into mobile view because they already click on the items.

An extension to the idea would be to show the descriptive text only when the user clicks on the portfolio item. Hover will still be in effect for the other portfolio items, but the selected portfolio item will persist. Essentially it will replace the Biography section until the user clicks 'x' in the upper right corner.

### JSON creation

I made [JSON content structure](#json-content-structure) on the 15 of July. I'll use that to make templates for both Biography and Portfolio.

## July 27

- [x] Translate portfolio HTML into JSON structure
- [x] JavaScript convert JSON to HTML
  - [x] Portfolio
  - [x] Biography
- [x] Recap Mr. Ranedeer lessons
- [ ] Reach step 1.10 in Mr. Ranedeer website curriculum

### Train work

Today I am sitting on the train towards back home. I took a minute to regather my thoughts of what my next step is. Confused over what I meant with portfolio template, as I assumed it referred to JSON and not HTML, I have updated it accordingly.

This is a minor detail, but I also updated the tab spacing to be 2 instead of 4 in the JSON files. This is to save some space and make it look a little prettier when reading. Installed this JSON extension to help format the documents: [JSON Tools](https://marketplace.visualstudio.com/items?itemName=eriklynd.json-tools)

### Converting JSON to HTML using JS

Converting JSON to HTML will be an interesting challenge. I imagine it cannot be too difficult, but this is the first time doing this. Currently, the [script.js](website/script.js) contains an auto-generated converter from chat GPT. It is now broken since I updated the JSON structure.

I have been working for an hour to change the old converter to use the new JSON structure. It does not mirror the HTML template perfectly, but close enough to work with for now. The function is now very messy. I find it difficult to read and would love to find a way to make it more readable. One idea is to split the function into smaller functions, but then the script would be a mess of smaller functions instead. Hopefully Mr. Ranedeer can give good suggestions on this later. Right now the train Wi-Fi is a bit unstable and websites have trouble loading.

### Learning CSS

Before learning CSS a bit more, I went ahead and asked Mr. Ranedeer if they could recap the curriculum so far. It was maybe not as detailed as I wished it to be. It would have been more effective to copy, paste and ask for a summary of this journal. Anyway, Mr. Ranedeer was clever enough to remember some of my questions and added them to the recap. One question for example was if JSON is suitable for storing content.

#### Descendant vs. Child Selectors

Today I learned the difference between "descendant" and "child" selectors in CSS. In essence the difference is the distance between elements. A descendant `div p` would apply on both `div(tb(rw(p(I'm a value in a table))))` and `div(p(I'm a regular text))`, while a child selector `div > p` would only apply on the latter.

```CSS
div p {...} /* Descendant Selector */
div > p {...} /* Child Selector */
```

#### Flexbox and Grid

We are now at the complex end of CSS. Not that flexbox and grids are complex by themselves, but when combined with margins, paddings and other positional properties it will be really difficult to understand what exactly is going on. I made a Google search to see if any visualization tools existed, and I found [Flexbox Playground](https://flexbox.tech). It is a handy little website that helped me see what the different settings will result in, and then ask GPT if there's something I don't understand.

From the lesson and playing around with grid property I thought that maybe grid is the best tool to represent my (eventual) three columns of Portfolio, Biography and Experiences. Grid property automatically makes padding and general form factor suitable for mobile.

I looked up if you can define the grid to collapse three columns to three rows instead of individual items dropping to the next row. It is possible to do so using media queries, but I am pretty sure I can just as well use flexboxes that go from horizontal to vertical placement. Which makes sense in retrospect.

### Design Considerations

Learning about CSS made me think about what the best way to layout the website. I will have three columns which will naturally switch to three rows in mobile view. In mobile view it needs some form of definition of "this is a phone" to convert the timeline user interface into a simple scrollable timeline. Don't want users to press a year to then be shown a segment of continuous timeline.

Also need to think about how to handle a square screen. Will three columns still suffice, or should one be hidden? If yes, how should it be accessible?  
One solution could be to have an arrow that opens the timeline column or shift the entire view towards the timeline, hiding the portfolio until the left arrow is pressed.  
All of these solutions are extra steps to a simple design, making it more complex. For now, especially considering I only have two columns at the moment, I will implement the flexbox for now with media queries.

### JSON to HTML in Biography

I only did portfolio converter earlier today. Now I will attempt to use chatGPT to make a biography converter.

That went surprisingly easy...  
ChatGPT just took the HTML template as a string and inserted replaceable values to then insert JSON into. I changed some class names as well, nothing major. On a sidenote, I have begun liking two space indentation more than four, so I switched the `script.js` to be that as well.

## July 31

### Learning as much as I can

I have done pretty good progress on the website so far. Perhaps I will change the design a bit in the future, but for now the template is good. Today then I will focus on learning as much as possible with Mr. Ranedeer! A future lecture is about how to structure up a website project, which I have been winging so far. Learn as you go or go as you learn :)

I am on *1.6 Advanced JavaScript Concepts* which is now I realized Mr. Ranedeer is hallucinating the curriculum 😂  
1.6 was supposed to be more about CSS in the original, but I guess we are changing things up. Good to know that hallucinations are still a flaw even in a more strict definition. Makes me wonder how the GPT is coded to behave and organize information.

#### JavaScript Asynchronous Functions

- `.then()`
- `.catch()`
- `.finally()`

This is confusing, but I kind of see how it is utilized. It is all about parallelization like I knew before, but it uses promises to work with. You can use *Promise() object* to then add *.then()* to process that particular request. You can even return a new promise to create a chain of "synchronous" function calls. Please NOTE that the code below is not functional, it is mainly a way for me to remember the concept.

```js
Promise(FetchURL)
  .then(response1 => {
    display(response1);
    return new Promise(FetchURL);
    })
  .then(response2 => {
    display(response2);
  })
  .catch(error => {
    display(error);
  })
```

Another way to use asynchronous functions to display at the same time instead is to use `Promises.all()` which checks through all promises first and if all passes then proceeds to process the responses.

```js
response1 = new Promise(FetchURL)
response2 = new Promise(FetchURL)
Promise.all([response1, response2])
  .then(responses => {
    responses.forEach(response => {
      display(response);
    })
    })
  .catch(error => {
    display(error);
  })
```

#### JavaScript Event Handling and Listeners

An interesting functionality of JavaScript. I haven't used event listeners, but I can imagine them being useful to track everything about the user. Mr. Ranedeer proposes to use event listener to make sure forms are properly formatted before submitting. No clue how valid this is in standard practice.

There are three `useCapture` (`Capturing`, `Target` and `Bubbling`) which define if the listener should capture child elements, only the specific target, or bubble up to capture parent elements...

```js
element.addEventListener(event, function, useCapture);
```

## August 02

### Learning even more

According to Mr. Ranedeer there are only three lectures left.  
I would like to have an additional lecture on **JavaScript and CSS Interactions** and **Web Development Best Practices**. I think they could be useful. They were part of the main curriculum but not anymore.

1. Creating a Simple Web Application
2. Debugging and Testing
3. Deployment

Today I'll solely focus on learning two more lectures from Mr. Ranedeer and be done with my day. I'll write down interesting notes if there are any.

#### Neat tricks I found analyzing chatGPT's To-Do List sample page

The JavaScript uses an event listener to see if `DOMContentLoaded` before running any code, this is to make the logic more robust in case the script is loaded earlier in the HTML file. My immediate idea is to use this to load the script in the beginning of the HTML file and prefetch the JSON data to be used immediately after DOM content has been loaded. Maybe bad practice, but it seems possible to make.

I also really like the JS structure. Define global variables in the beginning, define them and then add a bunch of functions afterwards. This is typical code practice, but I just forgot from imagining web development to be messy.

```js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('toDoForm');
  const taskInput = document.getElementById('taskInput');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
  });

  function x(){}
  function y(){}
  function etc(){}
})
```

Analyzing the HTML and CSS structure made me realize that HTML already has an included list tag of `<ul>` I could use instead of `<div>` with a "rows" class. Both works of course, but it could be neat to use the proper HTML element to make CSS styling less cluttered or more readable.

#### Best practices

Nothing much here. A lot of general advice like make a prototype in Figma before coding. The only JavaScript tip was to use modern libraries like React or Vue. I am avoiding them in the first place, so the practice doesn't apply to this particular project. The tips are of course good, but I was looking for more code and file structure specific tips. This website is based on [Seyit Yilmaz website](https://www.seyityilmaz.com/) which is very minimalist and niche. A portfolio website doesn't need much maintainability nor optimization as long as it is lightweight and easy to edit the content.

The best practices Mr. Ranedeer recommends are to use semantic HTML tags like `<header>`, `<nav>`, etc. All HTML elements can be found at [Mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) to know which elements may be deprecated.

CSS benefits from BEM methodology or using preprocessors like SASS or LESS. This benefits maintainability, it could be worth a look at for my learning.  
I immediately took a look and preprocessors is too much for this project. They are basically compilers that transform an easier CSS format into a full CSS style file. This enables variables, nesting and mix-ins to much easier change CSS styling.  
BEM methodology on the other hand is very simple, at least on the surface. BEM stands for **B**lock, **E**lement, **M**odifier. The names refer to the different roles CSS styles can apply. Below you can see we have a `menu` block with a `menu--active` modifier. Inside the block you have a `menu__item` element which has its own `selected` modifier.

```css
<div class="menu menu--active">
    <div class="menu__item menu__item--selected"></div>
</div>
```

#### The last lesson

Debugging and testing was simple or doesn't apply to this project much, and deployment is already done with GitHub Pages. So there is nothing more to learn according to the curriculum. There is of course **JavaScript and CSS Interactions** left which I asked about.

The result I got was another rabbit hole one could go through. In essence JavaScript can change CSS styling and also animate using `setInterval` or `requestAnimationFrame`. Through this I also learned that CSS also support transitions like transform/translate. Animation is a complex mathematical wonder, and if I want fancy transitions between opening up projects or the *about* link I can do that, but that will be a lecture some other time.

### HTML templates and JSON pre-fetching

I got curious if there were any better way of getting a template from the HTML file and populate it with content afterwards. There is [template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) in HTML that can be used.

I looked into the template element, it does have its use cases, but I can just make a "template" of any element using `element.cloneNode(true)`. Making template just a way to create a "hidden" HTML element.

Going to my next curiosity of the possibility to pre-fetch the JSON files before the DOM loads. It is possible, but it complicated the readability of the code and is probably meaningless considering how quick JavaScript can fetch a literal local file. It could be viable when it is actually hosted on the internet. If the user has 100 milliseconds in ping then the JSON will load 100 ms later. That is how I imagine it works the very least. Could experiment on deployment environment in future update.

Another way I found to pre-fetch is to include it as a `<link>` in the HTML `<header>` element. I think that should be enough.

Here is HTML and JavaScript code that builds a project showcase site using an element as a template and pre-fetching the JSON.

`index.html`

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="script.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Showcase</title>
    <style>
        .project-item {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px 0;
        }
        .project-item img {
            max-width: 100%;
            height: auto;
        }
    </style>
    <link rel="preload" href="projects.json" as="fetch" type="application/json" crossorigin="anonymous">
</head>
<body>
    <h1>My Projects</h1>

    <!-- Fallback content -->
    <div id="projects-container">
        <div class="project-item" id="default-project">
            <img src="default.jpg" alt="Default Project">
            <h2>Default Project</h2>
            <p>This is a fallback project in case the fetch fails or JavaScript is disabled.</p>
            <a href="#">View Project</a>
        </div>
    </div>

</body>
</html>
```

`script.js`

```JavaScript
let projectData = null;

// Fetch JSON data immediately
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        projectData = data.projects; // Store the fetched data
    })
    .catch(error => {
        console.error('Error fetching project data:', error);
    });

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const defaultProject = document.getElementById('default-project');

    // Function to populate projects
    function populateProjects(projects) {
        projectsContainer.innerHTML = ''; // Clear the fallback content

        projects.forEach(project => {
          const clone = defaultProject.cloneNode(true);
          clone.querySelector('img').src = project.image;
          clone.querySelector('img').alt = project.title;
          clone.querySelector('h2').textContent = project.title;
          clone.querySelector('p').textContent = project.description;
          clone.querySelector('a').href = project.link;
          projectsContainer.appendChild(clone);
        });
    }

    // Check if the data has already been fetched
    if (projectData) {
        populateProjects(projectData);
    } else {
        // If data is not yet fetched, wait for it
        const intervalId = setInterval(() => {
            if (projectData) {
                populateProjects(projectData);
                clearInterval(intervalId); // Clear the interval once data is populated
            }
        }, 100); // Check every 100ms
    }
});
```

`projects.json`

```JSON
{
    "projects": [
        {
            "image": "project1.jpg",
            "title": "Project 10",
            "description": "This is the first project.",
            "link": "http://example.com/project1"
        },
        {
            "image": "project2.jpg",
            "title": "Project 2",
            "description": "This is the second project.",
            "link": "http://example.com/project2"
        }
    ]
}
```

## August 04

- [x] Change HTML to be more of a template
- [ ] Change JavaScript to use updated template
- [x] Prefetch JSON files
- [x] Update style classes to follow BEM

### Applying everything I've learned from [August 02](#august-02)

First and foremost is to add HTML code to prefetch JSON files for the `script.js` to load. According to the [JSON Content Structure](#json-content-structure) there is supposed to be three files, so I'll preemptively add [`experiences.json`](/website/content/experience.json) to the `content` folder. This might not be necessary, considering I could write a script that inserts all JSON values into HTML before deployment. On the other hand I have learned a lot about fetching resources and the inner workings of websites by doing it this way.

Doing a quick google search on CV examples to verify my terminology The standard title for experiences is "*work history*" or "*work experience*". Some exceptions of course, one said something like "*previous employment*".  
I wanted to call mine timeline, as that is more of what it should represent. It includes education, work experiences and achievements. The term "*history*" would fit much better than experiences or timeline as previously suggested. However, "*experience*" is more professional sounding and I personally connect that term to a CV context.  
I'll keep the experience term but make it singular. Right now the JSON was referred to [`experiences.json`](/website/content/experience.json) instead of simply [`experience.json`](/website/content/experience.json).

#### HTML Biography Template

I've completed the biography to become more of a template as well as changed classes to follow [BEM methodology](https://getbem.com/). I had to rethink some stuff, but in the end it is much more structured now, and I can read the HTML without being confused now.

Trying to get if statements into HTML was not an easy task. Of course HTML doesn't have if statements, but I wanted an easy way to identify which elements should be removed if the JSON is missing information. For example, the company you're working at. Right now the HTML is pre-formatted with "*profession* at *company*". But what if you are unemployed? Unemployment is more of a profession than a company, so the company needs to be removed, and so does the "at" which ties the company and profession together.

My solution is to use ID of whatever class that is supposed to be deleted if irrelevant. A tricky one is the "About" link whenever there is no "about text" to be display. As the "About" link is the first in the biography__links it is supposed to be the template for all other biography links, but those can't have IDs as they won't be unique.  
Perhaps another solution will rise when I process the template in JavaScript, but for now it is still a bit of a hassle.

#### HTML Portfolio Template

Now the portfolio template is done! It was much harder to give names to as everything is a `project__<insert name>` relation, but I got some good names at the end. I marked the "[Update style classes to follow BEM](#august-04)" as done even though there is no style classes that are updated. The intention was to update class names in HTML to make CSS the next step in development. Don't think I have enough time for JavaScript today, unfortunately. Will aim to fix it tomorrow :)

## August 05

- [x] Change JavaScript to use updated template

### JSON Conversion

Started to convert biography JSON into HTML using JavaScript. I feel the about and links section can be made better, but it should work for now. The full conversion is not complete, I think the portfolio is easier, so I'll aim to finish it this evening.

Portfolio conversion was much easier. Mostly because I don't have a bullshit "about" link that points to a later HTML element which are dependent to create more links. I am not that clever. There is probably a much smarter way of doing it, but it works, and I am not going to complain. The next on the agenda is to style everything with CSS.

On a similar note, there is not much JavaScript to be written as well, only when the "about" is clicked and animations I guess.

## August 09

- [x] Create CSS frames of elements
- [x] Write UI layout
- [x] Code logic for toggling “about” ~~and “project button”~~

### CSS Layout

The goal today is to make a CSS layout so that the portfolio, biography and experience is in their own respected columns. The hidden elements, such as project details and the "about" information shall be hidden until it is selected. The layout should support mobile view using media query.

The idea for displaying projects is that you have an "on hover" effect where only the video and contribution is displayed. If the user clicks on the project then it will stick (visually replace the biography column) and display additional text about the project. On mobile, you will simply click the project button as there is no hover effect. There should be an "x" button on the top right for both pc and mobile when a project is selected.

### Styling Tricks

YouTube's recommendations came in clutch with videos from [Coding2GO](https://www.youtube.com/@coding2go). Mainly [`CSS PRO Tips & Tricks`](https://youtu.be/PL3Odw-k8W4) and [`Learn CSS Flexbox in 20 Minutes`](https://youtu.be/wsTv9y931o8) will be used for today's agenda. There is a couple of points in the first video that may be useful.

- [`Levitating effect`](https://youtu.be/PL3Odw-k8W4?t=19) (button shadows)
- [`Checkboxes instead of event listeners`](https://youtu.be/PL3Odw-k8W4?t=70) (for toggleable buttons)
- [`Use min() and max() to define size`](https://youtu.be/PL3Odw-k8W4?t=110) (or [`clamp()`](https://youtu.be/PL3Odw-k8W4?t=160))
- [`Make material look like glass`](https://youtu.be/PL3Odw-k8W4?t=170)
- [`Dark mode option`](https://youtu.be/PL3Odw-k8W4?t=284)
- [`Gradient Text`](https://youtu.be/PL3Odw-k8W4?t=309)

### Exploring CSS

Figured out how to use flex-boxes to emulate [Seyit Yilmaz's website](https://www.seyityilmaz.com/). In the beginning I tried to use padding to make sure the projects were properly pushed away from the left edge and pushed the biography away to the right. This was not necessary as just using a 40% width on the column and a flex attribute on the column's children meant it achieved better flexibility.

I got to utilize the entire height of the viewport, apparently you need to give `<body>` a `height: 100vh` in CSS. Now the columns display its children in the middle of the page.

I got to use media query to define a PC view. I thought about separating them into two queries, but that seems unnecessary.

Learned a little on how to use JavaScript to toggle hidden elements. It is not difficult if the element is pre-defined, but I got stuck on making the `project__button`s to function. I think it applies event listeners to the template project and not on the JSON loaded projects. I tried to fix this, but clearly I have worked too long and got nowhere, hence the strike-through on [today's agenda](#august-09).

Lastly, I got the opportunity to learn a little about the different measurements CSS uses and changed the about loading function to include line breaks.

### Design considerations

Displaying a profile picture is difficult as the original website from [Seyit Yilmaz](https://www.seyityilmaz.com/) is supposed to be minimalistic. It is only first clicking on "about" the user gets redirected to a proper CV with picture and experience. I agree on the minimalist design to only show the necessary information. My face doesn't matter that much, the point is the portfolio. However, I do wish to provide my profile picture if the user asks about it. Clicking "about" would be considered such an event, so perhaps I will only display my picture alongside the about me text. On a mobile viewport both picture and about text will be displayed either way.

Another idea could be to make my picture grayscale and only when clicking "about" will make the picture return to true colors. Alternatively, just put the picture together with the about text, I do feel this will look bad and unlogical.

## August 10

- [x] Project button clickable/~~hoverable~~
- [ ] ~~“About” be hidden in mobile view~~
- [ ] Profile picture has a picture
- [x] Display pf pic when “about” is selected
- [ ] Add fade transition if possible (CSS)

### Clickable button items

I made it, it wasn't too hard after some fresh debugging. The document in the JavaScript doesn't update apparently, so document is a snapshot of what I can work with, not edit it as we go. There are functions that let you edit the document continuously, but the fix for this is to add the event listener inside the `populatePortfolio` function.

I will experiment if there is a better way of editing, perhaps global variables is the way to go.  
Update on the experiment, global variable was a bit tricky to implement considering you want them inside the `DOMContentLoaded` event listener, which by definition can't make them global. Then, when I have the global variable and move the `addEventListenerToPortfolio();` from the `populatePortfolio` function to the `DOMContentLoaded` event listener, it doesn't work. Some more research is definitely needed.

There needs to be 4 event listeners, three on each button and one outside the buttons.

- If a button is selected, it will remove the previous selection and apply the new selection.
- If user selects the same button, it should be toggled to be unselected.
- If the user hovers their mouse over a button, it will hide the selected information and display the hovered element instead.
- If the hover is enabled and mouse leaves the area, then the video will be hidden, and the previous selected state will be displayed.

### Hiding "About" in mobile view

I tried to hide the "About" link with media query. I scratched the idea because I need to use some JavaScript to detect so that it automatically hides the information if the viewport gets changed. Discussing this matter with a colleague also made me realize that it is a very small issue that complicates things a ton to implement. Just keep the about link in mobile view too.

### Fade CSS animation

This was an attempt to add fade animation to the about text. It only works when closing, there is some issue with `display: none` as it can't animate from that state. I'll do some more research in this area as a fading and even a "pop" effect from the original would look good.

## September 02

There has been some time since I last worked on the website. Today I will spend time reading the last log entries and research about two features I wish to have.

- [X] Read journal to recap.
- [ ] Learn how to scale CSS elements (Replace `display: none`) or how to smoothly hide elements.
- [ ] Learn how to place CSS elements on top of each other (stacking on the Z axis)
- [ ] ~~Research if you can run the JavaScript functions before deployment, using GitHub Actions or otherwise.~~

### Relearning

Reading the Journal I realized that functions can be created within the `DOMContentLoaded` event listener. It would fix the difficulties I had on [August 9th when Exploring CSS](#exploring-css) and [August 10, Clickable button items](#clickable-button-items) from adding event listeners to the portfolio projects in a separate function.

## September 08

- [x] Learn how to scale CSS elements (Replace `display: none`) or how to smoothly hide elements.
- [ ] Learn how to place CSS elements on top of each other (stacking on the Z axis)
- [ ] ~~Research if you can run the JavaScript functions before deployment, using GitHub Actions or otherwise.~~

### CSS `display: none` Replacement

The `About` link in the bio now smoothly introduces the picture and gets smoothly hidden away when clicked again. In mobile view the information is shown automatically and the `About` button is disabled. The project buttons are still instant, but that will be replaced with placing CSS elements on top.

## September 9

### Layout Positioning

I went a little bit on a tangent today. I was supposed to research the Z axis from yesterday, but the layout was a bit broken from the change of CSS animation. When clicking "About" and scrolled down, the biography info started to be scrollable again, even though it is supposed to be sticky. Confused over this revelation I dig into the sourcecode of [Seyit Yilmaz](https://www.seyityilmaz.com/) and found their solution. I think the solution was to remove the 100% height from main class (as that would limit children to refer 100% height to be 100vh), which is not good as one of the child elements will be longer than viewport. Then define the right column to have `height: 100vh` which applied the `position: sticky` correctly for my use case. I also tried to use chatGPT for solutions, but they only came up with making the left column scrollable, which I don't want as the entire viewport should be scrollable.

The CSS is now good for the animation and content within the columns. There were many minor positional bugs, which are infuriating as they are difficult to debug. The `styles.css` is a bit messy, will need to refactor it at some point. Next will be stacking elements on top, thenb design the project view with video playback.

## September 10

### Portfolio Column Width Issue

Made good progress on stacking project information. Right now however the project details are in an absolute position, but I think it would benefit if it "replaced" the biography column instead. It would save me the hassle of adding javascript to fix a minor issue. The issue is when a title of a project is too long and becomes "larger" than 40% of viewport width, it will prevent the portfolio column to schrink any further. Right now it is changed to `width: 40%` instead of the prior `min-width: 40%`. This enables the column to shrink further and stacking is better aligned.

I really don't like two text lines in a button. My solution for the long title was to have a descriptive title within the project description. So if possible, I would like to revert it back to single line again.

## September 30

I have skipped writing some logs for a while now. Felt a bit unnecessary considering I have less time now and there really isn't anything new I'm learning. However, I have experimented with the new GPT o1-preview (strawberry) to see how it can code for me. I gave it two seperate tasks, one is to handle events of click, mouseover and mouseout on the project buttons. The other task was to display an element on top of another element using the same dimensions when clicking a button. Both was a success in their respective isolated tasks. I tried to sew them together and bug squashed to the best of my ability until there was one bug where clicking the project button would restart the video showcase. This is because through the advise from GPT, a good way of displaying a thing ontop of another is to have a sibling element with the absolute position CSS on it. Then we load this sibling element with a project template using HTML identifying attributes. This meant that everytime we switched project, the "preview element" got unloaded and loaded with a new project, which created problems with CSS animations.

Asking the GPT o1-preview to solve this issue worked to some extent, but some other animations got broken instead. Going back to it now, I realize that there is a much simpler way of doing it. Just have three siblings with different z-index, background (biography), selected and hover. Creating a simple state machine where hover is a "middle man" between background and selection state. Mobile will ignore the hover making it easier. Tablet will become an edgecase, but we'll see if that will become a problem or if it just works.

```txt
Layers:
z-index: 2 - Hover project (video preview)
z-index: 1 - Selected project (video + description)
z-index: 0 - Background biography (text)

States:
0 <-> 1 (For mobile only)
0 <-> 2 <-> 1 (For PC)
0 <-------> 1 (edgecase on tablets)
```

## October 28

It's been a while sincle last time. Got preoccupied with studies but I'm here now to finish this project. The remainder is mainly CSS styling for how all elements should look. The behaviour is correct for the most part, maybe a tiny addition is needed for CSS animations. What I've identified is left is the following:

- [x] Correct Project Stacking on Hover
- [x] Background
- [x] Text and Fonts
- [x] Island
- [x] Button (selected)
- [x] "Last Edited" Date (Copyright)
- [x] "Template by Zulius, inspired by Seyit" Watermark together with the copyright
- [ ] Cleanup
- [ ] Add README.md
- [ ] Fill with content!

## November 28

Removed the transparency effect today. When adding a background the blur was contstrained to it's container, as well as slow to load evenly when applied. This was very noticible and ugly to the eye. The uneveness is most likely due to two layers of blurring and a moving video in the background (in this case a gif) which makes it a difficult task to render properly.
There are solutions such as bluring the whole background instead of the container, but that would require an overhaul of how the project selection handled animations, which would take a lot more time. I'm 100 hours into this project, and that is what I initially gave myself so I will restrain myself from feature creep.
My solution to the rendering bugs for now is to copy from [Seyit Yilmaz](https://www.seyityilmaz.com/) once again. Instead of blurring the background elements, just hide them instead. Hiding looks cleaner as the text is easier to read, but I really liked the blur effect and are a bit bummed about it not working as I wanted it to. All the original code for the effect is still there and I'm uncertain if I will clean it up considering it is a bit of a mess. On mobile view the background still blurs, so that's something I guess.

## January 01

**Happy New Years!** 🥳

I thought I should convert this repository into a template and configured it to be two branches now. The main branch is now called template. Default for visitors who want to use this repository for their own portfolio or to learn. Then another branch named personal... I was unsure if I should name it "publish" or something else. Portfolio projects and biography is personal information, so "personal" is a suitable name.

Updated the github workflows to reflect this change. No clue however if the settings of the GitHub environment is also copied over when users "use this template". Need to ask a friend to see what they need to do to get the project up and running.

I will also move this journal to the personal branch. I predict that no one really needs to have access to this journal in the "template" branch itself. The journal is mostly for a personal documentation and verification that this project is indeed my work.

Today's goal is to clean up the template branch and make it presentable.

# Journal

This is a quick journal on how I develop this website. It will be used for documentation for both tools used and thought process.

## 13 July

### Starting from the beginning (again)

I have restarted my repository to the minimum through the "learning" branch. This may brake the [pages](.github\workflows\pages.yml) workflow to deploy.
I had setup next.js before this entry. That setup is now removed. I have never build a website before and have always struggled using tools such as node and Jekyll to build websites. The goal of this proejct is to understand the basics of front-end development. I don't need tools for that, except HTML, CSS and JS. In the future I should take time to learn React.

I have installed Live Server to my VS Code. I don't know if I need it. It will host my website locally for me to edit.

### Mr. Ranedeer

I use Mr. Ranedeer to teach me about the basics of web development. It is a GPT model, which also means I can ask questions. <https://mr-ranedeer.com/>

Asking questions helps a lot. I have already learned that you can in fact write CSS and JS inside a HTML document. This makes sense, but I never thought how this could be executed considering a browser has the rendering engine and a script engine seperated. Also learned that `defer` attribute makes the javascript wait until the HTML has loaded, in contrast to `async` that will run along side it.

### DevTools

Mr Ranedeer gave me an example of using Elements, Console and Sources in the webbrowser's DevTools. There are more tools, but I think only those 3 should be enough for my static website for now.

# **Documentation of learning had in this Episode.**

## Q. What is Emmet?
A: `Emmet` is a plugin and the essential toolkit for web-developers to write lightning-fast code. It allows you to type short hand expression that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules. Emmet can be utilized by including emmet plugins in the IDEs.

Using most common Emmet commands:
1. `Child: > `- To nest elements inside each other.
2. `Sibling: + `- To place elements near each other, on the same level.
3. `Multiplication: * `- To specify the no of times an element should be displayed.	
4. `Addition: + `- To write a complete tag in short.
5. `HTML:! `- To create the default body for HTML code.

## **Q: Difference between a Library and Framework?**
A: Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less verbose way.
The technical difference between a framework and library lies in a term called inversion of control.
| Library | Framework |
|---------|----------|
|It is a collection of helper modules , classes , objects , functions , pre-written code , etc.|It comprises of lot of APIs , compilers , support programs , libraries etc.|
|When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library.|When you use a framework, it inverts the control of the program. It tells the developer what they need.  It provides some places for you to plug in your code, but it calls the code you plugged in as needed.
|Libraries can be integrated easily into existing projects to add some specific functionality.| Foundation upon which applications are built. The framework is in charge of the flow.|
|A library is a piece of code that we can incorporate in our existing project via a CDN or as a package. A library does not affect our project structure.| A framework is a structured set of libraries and packages implementing a particular methodology that we have to follow to create a project.|
|Its example are JQuery , React JS , etc.|Its example are AngularJS , Spring , NodeJS , etc.|

## **Q: What is CDN ? Why do we use it?**
A: A `content delivery network` (CDN) is a geographically distributed group of servers that caches content close to end users which improves website performance. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos in a secure and efficient way.\
Many websites struggle to have their performance needs met by traditional hosting services, which is why they opt for CDNs. Using a CND reduces our effort to implement a functionality that is already existing somewhere else that we can simply use via CND.

## **Q: Why is React known as React?**
A: `React` is called React because it is a JavaScript-based UI development library that reacts to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. It was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. Originally developed by Facebook and was released as an open-source project in 2013.

## **Q: What is cross-origin in script tag?**
A: CORS stands for `cross-origin resource sharing`. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains. The resources may include Audio, Video, Images, Link or external script that specifies whether to support a cross-origin request or not from the third party server without leaking their credentials information. If cross-origin is set to "user-credential", then user authentication is required to access the file.

## **Q: What is difference between React and ReactDOM?**
A: `React`: React is a javascript library, designed for building better user interfaces. React library contains functionality utilized in web and mobile apps (react native). The react package holds the react source for components, state, props and all the code that is react.

`React-DOM`: React-DOM is a complimentary library to React which glues React to the browser DOM.  ReactDOM library contains functionality utilized in web browser. It contains DOM manipulation utilities. Often, you will only use it for one single thing: mounting your application to the index.html file with ReactDOM.render().

In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.

## **Q: What is the difference between react.production.js and react.development.js?**
A: `react.development.js` - It's the core fundamental of react and used for development purpose.\
`react.production.js` - Production code of react library that is minified and production ready. The code for this library is compressed.\
In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

## **Q: What is async and defer?**
A: async and defer are boolean attributes which are used along with the script tag to load the external scripts efficiently in our web page.\
`Without async/defer` : Browser stops the html parsing once script tag is encountered. It resumes parsing only after script is fetched and executed.

Differences between async and defer.
|Difference|async|defer|
|----------|-----|-----|
|code|```<script async src = '...'></script>```|```<script defer src = '...'></script>```|
|Loading sequence|	Does not guarantee the execution sequence of the script.|Guarantees the execution sequence of scripts in which they are ordered.
|Execution sequence|	Loads the scripts while HTML is being rendered. When scripts are loaded, then HTML rendering stops and execution of script starts. When execution is completed, HTML rendering resumes.|	Loads the scripts while HTML is being rendered. Executes the scripts only after the HTML is completely rendered.|
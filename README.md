# EmberCLI HTML to JSP (Deprecated)

Copy compiled index.html to index.jsp

## Deprecated
**This addon is deprecated and no longer being maintained.**  
You can use [ember-index](https://github.com/ramybenaroya/ember-index) addon to achieve the same.

## Usage

`npm install --save-dev ember-cli-html-to-jsp`

After build `dist/index.html` will be copied to `dist/index.jsp`

## Configuration
```
var app = new EmberApp({
	htmlToJsp: {
		/*
		Default options are:
			enabled: true,
			outputFilename: 'index.jsp'
		*/
	}	
})
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

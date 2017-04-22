## What year was a movie released?

### One pager that demos the imdb-api npm module by taking a movie title submission from the user and returning the year that movie was made.

Probably.

It might also return the year that something with a syntactically similar title was made.

The NPM package used here is the [imdb-api](https://www.npmjs.com/package/imdb-api), which is an unofficial API that taps the shoulder of another unofficial API.  

I also modified [one_page_template_nodejs](https://github.com/goldenthumb/one_page_template_nodejs) in order to have a simple nodejs page to start from.  It uses Express, which I'm not exactly familiar with, and it seems to be cacheing very aggressively.  So you might want to run it in an incognito window.

### Installation

1.    node.js install

### Usage

Type in the name of a movie in the search box/input field.  Click the button, or press enter, and the year of that movie's release will be fetched and displayed.  Unless you spelled something wrong.  Another use for this tool would be to check if the title of that screenplay you're working on has already been used.  If it throws an error then you're in luck, at least you know the title of your movie is original, or misspelled.

### Run npm

The package.json file includes what you'll need, but to be clear, you will need these two NPM packages:

[imdb-api](https://www.npmjs.com/package/imdb-api)

[body-parser](https://www.npmjs.com/package/body-parser)

2.    npm install --save imdb-api

3.    npm install --save body-parser

4.    npm install

### Run node

5.    node app

6.    http://localhost:8888

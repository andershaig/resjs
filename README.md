### To compile new template:

From within /public/js folder:  
`handlebars resources.handlebars -f template.js -k each -k if`

### MVP TODO

* Add a form to submit libraries or host the json on Github and accept commits.
* Add a simple message in the noscript.html page.

### Would Be Nice TODO:

* Consider a url shortner for the really long links - Maybe not needed, just better, more generic names for the links.
* Everything must have a Name, URL & Description or it's not ready
* Note direct downloads when they are the only thing available. (currently jXHR) 
* What's the difference between code and download? Which do you want to provide a link to or both?
* Pull more info with calls to the Github API when possible? http://developer.github.com/v3/#json-p-callbacks
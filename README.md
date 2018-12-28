![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Event Driven Development

### Author: Hannah Ingham
### Pair: Becca Lee

### Links and Resources
* [repo]( https://github.com/hingham/06-event-driven-apps-hi )
* [travis]( https://www.travis-ci.com/hingham/06-event-driven-apps )
* [![Build Status](https://www.travis-ci.com/hingham/06-event-driven-apps.svg?branch=impli)]

### Modules
#### event.js
#### read-write.js
#### logger.js
#### app.js


## Usage Notes or examples
#### set environment: npm init
#### intall fs
#### enter file name in the console to be rewritten

EX: node app.js "path/to/file/name.txt"

#### Running the app
## run app in the console with node

#### Tests
* How do you run tests?: npm run test-watch
* What assertions were made?: Asserts that console.log and console.error were called on the handler functions
* What assertions need to be / should be made?: Should test that emits are listening correction, and that functions are sending out approriate emits


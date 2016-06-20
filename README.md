# Writing Unit Tests

An important yet often overlooked part of writing code is to actually 
write good tests. Well written tests means less chance of the app
breaking in production, and less time checking if new code breaks 
old code.

In `functions.js`, there are a number of functions. Your goal is to write
an appropriate number of unit tests for each of them.

We will be using the Jasmine test suite to run the tests. 
https://jasmine.github.io/2.4/introduction.html

To get you've started I've written up the first few tests in 
`test/spec/test.js`.


## Running the tests
To run the tests, simply open `test/index.html` which will run all the tests
in `test/spec/test.js`.

If any of your unit tests fails, perhaps the functions aren't working 
correctly to specification. Rewrite the functions to conform to the 
function description (in the comments).
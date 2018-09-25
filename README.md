# wrkshpr: JavaScript Testing and Jasmine!

The TDD Cycle: Red-Green-Refactor

## Built with
1. [HTML](whatwg.org) - Hypertext Markup Language
2. [Jasmine](https://jasmine.github.io/) - an open source testing framework for JavaScript


## Why Jasmine?
1. Runs on any JavaScript-enabled platform
2. Easy to read 
3. Heavily influenced by ScrewUnit, JSSpec, JSpec, etc


## Jasmine Usage

The code below test this function
```
function helloRobots() {
	return 'Hello Robots!';
}
```
and verifies that its output is text, 'Hello Robots!'
```
describe('Hello Robots!',function(){
	it('says hello', function() {
		expect(helloRobots()).toEqual('Hello Robots!');
	});
});
```
In the above example, toEqual checks the equality between the value returned from the helloRobots() funciton and the 'Hello Robots!' string. This is the same as assertions used in other testing frameworks. Jasmine matchers return a Boolean value: true if the expectation is matched (passed test) or false if the expectation does not match.  A good guideline is to put a single expectation in an individual it() test specification.


## task list
- [ ] create red-green-refactor cycle for *address book*
- [ ] create wrkshpr series notes

## Author
* **Scott Randolph Edmonds** [sedmonds](https://github.com/sedmonds/)




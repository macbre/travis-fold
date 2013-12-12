#!/usr/bin/env node
var fold = require('./index.js'),
	ret;

ret = [
	fold.start('foo'),
	'bar',
	'next line',
	'next line',
	fold.start('bar'),
	'next line',
	'next line',
	'next line',
	fold.end('bar'),
	'next line',
	'next line',
	'next line',
	fold.end('foo')
];

console.log(ret.join('\n').trim());

console.log('Hello, ' + process.env.USERNAME);

console.log(
	fold.wrap('FooBar', "test\n123\ntest\n")
);

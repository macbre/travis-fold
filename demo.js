#!/usr/bin/env node
var fold = require('./index.js'),
	ret;

console.error('stderr output...');
console.error('stderr output...');

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
	fold.end('foo'),
	'test',
	'test',
	fold.start('https://github.com/macbre/phantomas/issues/141'),
	'Testing <https://github.com/macbre/phantomas/issues/141>',
	'foo',
	'bar',
	fold.end('https://github.com/macbre/phantomas/issues/141')
];

console.log(ret.join('\n').trim());

console.log('Hello, ' + process.env.USER + '!');

console.log(
	fold.wrap('FooBar', "test\n123\ntest\n")
);

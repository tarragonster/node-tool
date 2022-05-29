import { parse } from 'node-html-parser';

const root = parse('<ul id="list"><li>Hello World</li><li>Hello Tung</li></ul>');

// console.log(root.firstChild.structure);
// ul#list
//   li
//     #text

console.log(root.querySelector('#list').children); // https://www.youtube.com/watch?v=EQBhOTt2ASg
// { tagName: 'ul',
//   rawAttrs: 'id="list"',
//   childNodes:
//    [ { tagName: 'li',
//        rawAttrs: '',
//        childNodes: [Object],
//        classNames: [] } ],
//   id: 'list',
//   classNames: [] }
// console.log(root.toString());
// // <ul id="list"><li>Hello World</li></ul>
// root.set_content('<li>Hello World</li>');
// root.toString();	// <li>Hello World</li>

// node module/node-html-parser/index.js
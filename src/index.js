// require: CommonJS 스펙의 모듈 가져오기
// CommonJS 란? 브라우저에서 쓰이는 한정 언어였으나
//var _ = require('lodash');

// require 대신 import(es6문법) 써보기
import _ from 'lodash';

// named import :     {}안에 동일한 이름을 명시
import {area, circumference} from './js/circle';
// default import :   {}없고 이름을 바꿀 수 있다.
import cube1 from './js/cube';


import './style.css';
import '../css/tt.css';
import './hello.scss';


function component() {
  let element = document.createElement('div');
 
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
  return element;
}

console.log(area(5), circumference(5));
console.log(cube1.volume(5));

document.body.appendChild(component());
import _ from 'lodash';
import $ from 'jquery';
import pageHeader from '../../blocks/page-header/page-header';

pageHeader();

$('.page-header');

_.now();

let arr = [];

arr = [...[1, '2', 3]];

arr.forEach(item => {
  item += 1;

  console.log(item);
});

import _ from 'lodash';

_.now();

let arr = [];

arr = [...[1, '2', 3]];

arr.forEach(item => {
  item += 1;

  console.log(item);
});

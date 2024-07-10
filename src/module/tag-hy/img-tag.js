import { item } from '../../../static/item.js';

const itemContainer = document.querySelector('.item-container');
export const itemImg = () => {
  item.forEach((element) => {
    console.log(element);
  });
};

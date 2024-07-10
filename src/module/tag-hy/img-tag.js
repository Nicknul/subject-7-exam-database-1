import { item } from '../../../static/item.js';
import { createTags } from './create-tags.js';

export const itemContainer = document.querySelector('.item-container');
export const itemImg = () => {
  item.forEach((element) => {
    console.log(element);
  });
};

itemContainer.appendChild(createTags('div'));

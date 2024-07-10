import { item } from '../../../static/item.js';
import { tagMaker } from './tag-maker.js';

export const itemContainer = document.querySelector('.item-container');

export const itemImg = () => {
  item.forEach((element) => {
    const title = tagMaker('div');
    title.innerHTML = element.name;
    title.className = 'item';
    title.setAttribute('data-name', element.name);
    console.log(title);
  });
};

itemContainer.appendChild(tagMaker('div'));

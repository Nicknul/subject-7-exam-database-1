import { item } from '../../../static/item.js';
import { container } from './item-container.js';
/**
 * * 24.07.10 (Wed) 정호연
 * * tags in item-container
 * @param {element} parents item-container
 */
export const itemImg = (parents) => {
  item.forEach((element) => {
    parents.appendChild(container(element));
  });
};

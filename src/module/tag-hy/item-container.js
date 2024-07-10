import { tagMaker } from './tag-maker.js';
import { classAtt } from '../attribute/class.js';
import { dataNameAtt } from '../attribute/data-name.js';
import { itemTitle } from './item-title.js';
import { itemIamge } from './item-image.js';
import { itemButton } from './item-button.js';
/**
 * * 24.07.10 (Wed) 정호연
 * * 각 아이템의 div, img, button를 담고 있는 container
 * @param {object} element item.name
 * @returns 아이템 제목, 이미지, 버튼을 포함한 div
 */
export const container = (element) => {
  const container = tagMaker('div');
  // attribute
  classAtt(container, 'item');
  dataNameAtt(container, 'data-name', element.name);

  container.appendChild(itemTitle(element)); // <div>
  container.appendChild(itemIamge(element)); // <img>
  container.appendChild(itemButton(element)); // <button>
  return container;
};

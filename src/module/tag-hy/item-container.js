import { tagMaker } from './tag-maker.js';
import { classAtt } from '../attribute/class.js';
import { dataNameAtt } from '../attribute/data-name.js';
/**
 * * 24.07.10 (Wed) 정호연
 * * 각 아이템의 div, img, button를 담고 있는 container
 * @param {object} element item.name
 * @returns
 */
export const container = (element) => {
  const container = tagMaker('div');
  classAtt(container, 'item');
  dataNameAtt(container, 'data-name', element.name);
  return container;
};

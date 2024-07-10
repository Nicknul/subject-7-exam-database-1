import { tagMaker } from './tag-maker.js';
/**
 * * 24.07.10 (wed) 정호연
 * * 아이템 제목
 * @param {object} itemName item.name
 * @returns
 */
export const itemTitle = (itemName) => {
  const title = tagMaker('div');
  title.innerHTML = itemName;
  return title;
};

import { tagMaker } from './tag-maker.js';
/**
 * * 24.07.10 (wed) 정호연
 * * 아이템 제목
 * @param {object} element item.name
 * @returns 아이템 이름이 들어간 div
 */
export const itemTitle = (element) => {
  const title = tagMaker('div');
  title.innerHTML = element.name;
  return title;
};

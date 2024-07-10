import { tagMaker } from './tag-maker.js';
import { classAtt } from '../attribute/class.js';
/**
 * * 24.07.10 (Wed) 정호연
 * * 금액 버튼 생성
 * @param {object} element
 * @returns 생성된 button tag
 */
export const itemButton = (element) => {
  const button = tagMaker('button');
  button.innerHTML = `${element.price}원`;
  classAtt(button, 'price');
  return button;
};

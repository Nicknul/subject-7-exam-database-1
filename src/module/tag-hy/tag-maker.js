/**
 * * 24.07.10 (Wed) 정호연
 * * 태그 생성 함수
 * @param {string} tagName 생성할 태그 이름
 * @returns 문서에 태그 생성
 */
export const tagMaker = (tagName) => {
  return document.createElement(tagName);
};

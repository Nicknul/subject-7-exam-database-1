/**
 * * 24.07.10 (Wed) 정호연
 * * data-name attribute
 * @param {element} element tag
 * @param {string} type attribute type
 * @param {string} dataNames attribute name
 */
export const dataNameAtt = (element, type, dataNames) => {
  element.setAttribute(type, dataNames);
};

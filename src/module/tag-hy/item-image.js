/**
 * * 24.07.10 (Wed) 정호연
 * * image 태그 생성
 * @param {object} element
 * @returns image tag
 */
export const itemIamge = (element) => {
  const image = new Image(0, 50);
  image.src = `../img/item/${element}.png`;
  return image;
};

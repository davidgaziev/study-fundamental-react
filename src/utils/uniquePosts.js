export const uniquePosts = (array) => {
  return array.filter(
    (obj, index) => array.findIndex((item) => item.id === obj.id) === index
  );
};

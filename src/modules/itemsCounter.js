const getItemsCount = () => {
  const itemsSection = document.querySelector('.movie-display');
  const itemsCount = itemsSection.childElementCount;
  return itemsCount;
};

export default getItemsCount;
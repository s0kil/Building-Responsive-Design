let categoriesListItem = [...document.getElementsByClassName("category-item-list-popular")];
categoriesListItem.forEach(listItem => {
  let categoryItemBgimage = listItem.dataset.categoryItemBgimage;
  if (categoryItemBgimage !== undefined) {
    listItem.style.backgroundImage = `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 1)
      ), url(${categoryItemBgimage})`;
  }
});

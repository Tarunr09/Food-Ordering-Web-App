// Filter the restaurant data according input type
export const filterData = (searchText, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}
export const groupByCity = (array) => {
  const groupedData = array.reduce((items, item, index) => {
    const { city } = item;

    const key = city;

    if (!items[key]) {
      items[key] = {
        name: city,
        value: 0,
      };
    }

    items[key].value++;

    return items;
  }, {});

  return Object.keys(groupedData).map((key) => groupedData[key]);
};

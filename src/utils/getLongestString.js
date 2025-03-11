const getLongestString = (array) => {
  let longestLength = 0;
  let longestText = "";

  array.forEach((item) => {
    if (item.length > longestLength) {
      longestLength = item.length;
      longestText = item;
    }
  });

  return longestText;
};
export default getLongestString;

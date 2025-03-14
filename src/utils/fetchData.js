const fetchData = async (url) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
export default fetchData;

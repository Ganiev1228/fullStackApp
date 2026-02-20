export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log("saving data error in localStorage");
  }
};

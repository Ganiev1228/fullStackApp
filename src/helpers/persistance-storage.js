export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log("saving data error in localStorage");
  }
};
export const getItem = (key)=>{
  try {
    return localStorage.getItem(key)
  } catch (error) {
    console.log("getItem error")
  }
};
export const removeItem = (key)=>{
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.log('error while removing localStorageItem')
  }
}

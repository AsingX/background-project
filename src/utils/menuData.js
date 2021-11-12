export default function recursionMenu(arr, data) {
  let menu = [];
  data.forEach((value) => {
    arr.forEach((item) => {
      if (value.path === item) {
        value.children = recursionMenu(arr, value.children);
        menu.push(value);
      }
    });
  });

  return menu;
}

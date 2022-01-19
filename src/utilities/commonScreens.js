import Home from "../SpaceContainer/Home/Home";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
];

// titration to get the available screens index
export const GET_SCREEN_INDEX = (screen_name) => {
  // If the screen name doesn't exist, return -1 (not such screen on the array)
  if (!screen_name) return -1;

  // Loop thru the array of screens
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    // if the screen does exist, return the screen
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1; // else return -1.
};

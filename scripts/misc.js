// set gol to a theme matching the user system's preferences
function getTheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  }

const cell = document.getElementsByClassName("cell");

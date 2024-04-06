var str = "";
setWindow();

function clicked(val) {
  if ((val == '+') || (val == '-') || (val == '*') || (val == '/')) {
    if (str != "") {
      if ((str.slice(-1) == '+') || (str.slice(-1) == '-') || (str.slice(-1) == '*') || (str.slice(-1) == '/')) {
        str = str.substr(0, str.length - 1) + val;
      }
      else str += val;
    } else if (val == '-') {
      str += val;
    }
  } else if (val == 'c') {
    str = "";
  } else if (val == '=') {
    str = eval(str).toString();
  } else {
    str += val;
  }
  setWindow();
}

function setWindow() {
  let div = document.querySelector("#vis");
  div.innerHTML = '<p align="right">' + str + '</p>';
}
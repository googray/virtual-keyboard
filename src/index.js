import "./styles.css";

const Keyboard = {
  row1: [
    {
      keyCode: "192",
      name: "Backquote",
      sign: ["ё", "Ё", "`", "~"],
      class: "key",
    },
    {
      keyCode: "49",
      name: "Digit1",
      sign: ["1", "!", "1", "!"],
      class: "key",
    },
    {
      keyCode: "50",
      name: "Digit2",
      sign: ["2", '"', "2", "@"],
      class: "key",
    },
    {
      keyCode: "51",
      name: "Digit3",
      sign: ["3", "№", "3", "#"],
      class: "key",
    },
    {
      keyCode: "52",
      name: "Digit4",
      sign: ["4", ";", "4", "$"],
      class: "key",
    },
    {
      keyCode: "53",
      name: "Digit5",
      sign: ["5", "%", "5", "%"],
      class: "key",
    },
    {
      keyCode: "54",
      name: "Digit6",
      sign: ["6", ":", "6", "^"],
      class: "key",
    },
    {
      keyCode: "55",
      name: "Digit7",
      sign: ["7", "?", "7", "&"],
      class: "key",
    },
    {
      keyCode: "56",
      name: "Digit8",
      sign: ["8", "*", "8", "*"],
      class: "key",
    },
    {
      keyCode: "57",
      name: "Digit9",
      sign: ["9", "(", "9", "("],
      class: "key",
    },
    {
      keyCode: "48",
      name: "Digit0",
      sign: ["0", ")", "0", ")"],
      class: "key",
    },
    {
      keyCode: "189",
      name: "Minus",
      sign: ["-", "_", "-", "_"],
      class: "key",
    },
    {
      keyCode: "187",
      name: "Equal",
      sign: ["=", "+", "=", "+"],
      class: "key",
    },
    {
      keyCode: "8",
      name: "Backspace",
      sign: ["Backspace", "Backspace", "Backspace", "Backspace"],
      class: "key backspace",
    },
  ],
  row2: [
    {
      keyCode: "9",
      name: "Tab",
      sign: ["Tab", "Tab", "Tab", "Tab"],
      class: "key tab",
    },
    {
      keyCode: "81",
      name: "KeyQ",
      sign: ["й", "Й", "q", "Q"],
      class: "key",
    },
    {
      keyCode: "87",
      name: "KeyW",
      sign: ["ц", "Ц", "w", "W"],
      class: "key",
    },
    {
      keyCode: "69",
      name: "KeyE",
      sign: ["у", "У", "e", "E"],
      class: "key",
    },
    {
      keyCode: "82",
      name: "KeyR",
      sign: ["к", "К", "r", "R"],
      class: "key",
    },
    {
      keyCode: "84",
      name: "KeyT",
      sign: ["е", "Е", "t", "T"],
      class: "key",
    },
    {
      keyCode: "89",
      name: "KeyY",
      sign: ["н", "Н", "y", "Y"],
      class: "key",
    },
    {
      keyCode: "85",
      name: "KeyU",
      sign: ["г", "Г", "u", "U"],
      class: "key",
    },
    {
      keyCode: "73",
      name: "KeyI",
      sign: ["ш", "Ш", "i", "I"],
      class: "key",
    },
    {
      keyCode: "79",
      name: "KeyO",
      sign: ["щ", "Щ", "o", "O"],
      class: "key",
    },
    {
      keyCode: "80",
      name: "KeyP",
      sign: ["з", "З", "p", "P"],
      class: "key",
    },
    {
      keyCode: "219",
      name: "BracketLeft",
      sign: ["х", "Х", "[", "{"],
      class: "key",
    },
    {
      keyCode: "221",
      name: "BracketRight",
      sign: ["ъ", "Ъ", "]", "}"],
      class: "key",
    },
    {
      keyCode: "220",
      name: "Backslash",
      sign: ["\\", "/", "\\", "|"],
      class: "key",
    },
    {
      keyCode: "46",
      name: "Delete",
      sign: ["DEL", "DEL", "DEL", "DEL"],
      class: "key del",
    },
  ],
  row3: [
    {
      keyCode: "20",
      name: "CapsLock",
      sign: ["CapsLock", "CapsLock", "CapsLock", "CapsLock"],
      class: "key capslock",
    },
    {
      keyCode: "65",
      name: "KeyA",
      sign: ["ф", "Ф", "a", "A"],
      class: "key",
    },
    {
      keyCode: "83",
      name: "KeyS",
      sign: ["ы", "Ы", "s", "S"],
      class: "key",
    },
    {
      keyCode: "68",
      name: "KeyD",
      sign: ["в", "В", "d", "D"],
      class: "key",
    },
    {
      keyCode: "70",
      name: "KeyF",
      sign: ["а", "А", "f", "F"],
      class: "key",
    },
    {
      keyCode: "71",
      name: "KeyG",
      sign: ["п", "П", "g", "G"],
      class: "key",
    },
    {
      keyCode: "72",
      name: "KeyH",
      sign: ["р", "Р", "h", "H"],
      class: "key",
    },
    {
      keyCode: "74",
      name: "KeyJ",
      sign: ["о", "О", "j", "J"],
      class: "key",
    },
    {
      keyCode: "75",
      name: "KeyK",
      sign: ["л", "Л", "k", "K"],
      class: "key",
    },
    {
      keyCode: "76",
      name: "KeyL",
      sign: ["д", "Д", "l", "L"],
      class: "key",
    },
    {
      keyCode: "186",
      name: "Semicolon",
      sign: ["ж", "Ж", ";", ":"],
      class: "key",
    },
    {
      keyCode: "222",
      name: "Quote",
      sign: ["э", "Э", "'", '"'],
      class: "key",
    },
    {
      keyCode: "13",
      name: "Enter",
      sign: ["ENTER", "ENTER", "ENTER", "ENTER"],
      class: "key enter",
    },
  ],
  row4: [
    {
      keyCode: "16",
      name: "ShiftLeft",
      sign: ["Shift", "Shift", "Shift", "Shift"],
      class: "key shift",
    },
    {
      keyCode: "90",
      name: "KeyZ",
      sign: ["я", "Я", "z", "Z"],
      class: "key",
    },
    {
      keyCode: "88",
      name: "KeyX",
      sign: ["ч", "Ч", "x", "X"],
      class: "key",
    },
    {
      keyCode: "67",
      name: "KeyC",
      sign: ["с", "С", "c", "C"],
      class: "key",
    },
    {
      keyCode: "86",
      name: "KeyV",
      sign: ["м", "М", "v", "V"],
      class: "key",
    },
    {
      keyCode: "66",
      name: "KeyB",
      sign: ["и", "И", "b", "B"],
      class: "key",
    },
    {
      keyCode: "78",
      name: "KeyN",
      sign: ["т", "Т", "n", "N"],
      class: "key",
    },
    {
      keyCode: "77",
      name: "KeyM",
      sign: ["ь", "Ь", "m", "M"],
      class: "key",
    },
    {
      keyCode: "188",
      name: "Comma",
      sign: ["б", "Б", ",", "<"],
      class: "key",
    },
    {
      keyCode: "190",
      name: "Period",
      sign: ["ю", "Ю", ".", ">"],
      class: "key",
    },
    {
      keyCode: "191",
      name: "Slash",
      sign: [".", ",", "/", "?"],
      class: "key",
    },
    {
      keyCode: "38",
      name: "ArrowUp",
      sign: ["▲", "▲", "▲", "▲"],
      class: "key arrow",
    },
    {
      keyCode: "16",
      name: "ShiftRight",
      sign: ["Shift", "Shift", "Shift", "Shift"],
      class: "key shift-right",
    },
  ],
  row5: [
    {
      keyCode: "17",
      name: "ControlLeft",
      sign: ["Ctrl", "Ctrl", "Ctrl", "Ctrl"],
      class: "key ctrl",
    },
    {
      keyCode: "91",
      name: "MetaLeft",
      sign: ["Win", "Win", "Win", "Win"],
      class: "key win",
    },
    {
      keyCode: "18",
      name: "AltLeft",
      sign: ["Alt", "Alt", "Alt", "Alt"],
      class: "key alt",
    },
    {
      keyCode: "32",
      name: "Space",
      sign: [" ", " ", " ", " "],
      class: "key space",
    },
    {
      keyCode: "18",
      name: "AltRight",
      sign: ["Alt", "Alt", "Alt", "Alt"],
      class: "key alt",
    },
    {
      keyCode: "37",
      name: "ArrowLeft",
      sign: ["◄", "◄", "◄", "◄"],
      class: "key arrow",
    },
    {
      keyCode: "40",
      name: "ArrowDown",
      sign: ["▼", "▼", "▼", "▼"],
      class: "key arrow",
    },
    {
      keyCode: "39",
      name: "ArrowRight",
      sign: ["►", "►", "►", "►"],
      class: "key arrow",
    },
    {
      keyCode: "17",
      name: "ControlRight",
      sign: ["Ctrl", "Ctrl", "Ctrl", "Ctrl"],
      class: "key ctrl",
    },
  ],
};

function init() {
  if (localStorage.getItem("lang") === null) {
    localStorage.setItem("lang", "en");
  }

  let track;
  let lang = localStorage.getItem("lang");
  let on = " en";
  let off = " ru";
  if (lang === "ru") {
    on = " ru";
    off = " en";
  }
  const wrapper = document.createElement("div");
  const outcome = document.createElement("textarea");
  const keyboardBlock = document.createElement("div");
  wrapper.className = "wrapper";
  document.body.append(wrapper);
  outcome.setAttribute("id", "outcome");
  outcome.setAttribute("cols", 60);
  outcome.setAttribute("rows", 6);
  wrapper.appendChild(outcome);
  keyboardBlock.className = "keyboard";
  wrapper.appendChild(keyboardBlock);
  for (track in Keyboard) {
    let row = document.createElement("div");
    row.className = "row";
    keyboardBlock.appendChild(row);

    for (let i = 0; i < Keyboard[track].length; i++) {
      let container = document.createElement("div");
      container.className = Keyboard[track][i].class;
      container.innerHTML = `<span class="${Keyboard[track][i].name}${off}"><span class="case down">${Keyboard[track][i].sign[0]}</span>`
        + `<span class="case up">${Keyboard[track][i].sign[1]}</span>`;
      container.innerHTML
        += `<span class="${Keyboard[track][i].name}${on}"><span class="case down">${Keyboard[track][i].sign[2]}</span>`
        + `<span class="case up">${Keyboard[track][i].sign[3]}</span>`;
      row.appendChild(container);
    }
  }
}

init();

let pushed = new Set();
let capslock = false;

window.addEventListener("keydown", (EVT) => {
  EVT = EVT || window.event;
  EVT.preventDefault();
  let elem;
  let key;
  let textarea = document.getElementById("outcome");
  let lang = localStorage.getItem("lang");
  let btns;
  let stringTextFiel;
  pushed.add(EVT.key);
  if (pushed.has("Shift") && pushed.has("Alt")) {
    lang = lang == "en" ? "ru" : "en";
    localStorage.setItem("lang", lang);
    btns = document.getElementsByClassName("key");
    for (let btn of btns) {
      let { className } = btn.firstChild;
      btn.firstChild.className = btn.lastChild.className;
      btn.lastChild.className = className;
    }
  }

  switch (EVT.key) {
    case "Alt":
    case "Meta":
    case "Control":
      break;
    case "ArrowUp":
      textarea.value += "▲";
      break;
    case "ArrowRight":
      textarea.value += "►";
      break;
    case "ArrowDown":
      textarea.value += "▼";
      break;
    case "ArrowLeft":
      textarea.value += "◄";
      break;
    case "Delete":
      textarea.value = "";
      break;
    case "CapsLock":
      btns = document.getElementsByClassName("case");
      for (let btn of btns) {
        btn.className = btn.className == "case up" ? "case down" : "case up";
      }
      capslock = !capslock;
      break;
    case "Tab":
      textarea.value += "      ";
      break;
    case "Backspace":
      textarea.value = textarea.value.substring(0, textarea.value.length - 1);
      break;
    case " ":
      textarea.value += " ";
      break;
    case "Enter":
      textarea.value += "\n";
      break;
    case "Shift":
      btns = document.getElementsByClassName("case");
      for (let btn of btns) {
        btn.className = btn.className == "case up" ? "case down" : "case up";
      }
      break;
    default:
      for (elem in Keyboard) {
        for (let i = 0; i < Keyboard[elem].length; i++) {
          if (EVT.keyCode == Keyboard[elem][i].keyCode) {
            if (
              (!pushed.has("Shift") && capslock)
              || (pushed.has("Shift") && !capslock)
            ) {
              stringTextFiel = lang == "en"
                  ? Keyboard[elem][i].sign[3]
                  : Keyboard[elem][i].sign[1];
            } else if (
              (!pushed.has("Shift") && !capslock)
              || (pushed.has("Shift") && capslock)
            ) {
              stringTextFiel = lang == "en"
                  ? Keyboard[elem][i].sign[2]
                  : Keyboard[elem][i].sign[0];
            }
            textarea.value += stringTextFiel;
          }
        }
      }
      break;
  }

  key = document.getElementsByClassName(EVT.code);
  if (key[0].parentNode.className.indexOf(" active") == -1) {
    let string = `${key[0].parentNode.className} active`;
    key[0].parentNode.className = string;
  }
});

window.addEventListener("click", (EVT) => {
  EVT = EVT || window.event;
  EVT.preventDefault();
  let textarea = document.getElementById("outcome");
  let btns = document.getElementsByClassName("case");
  if (
    EVT.target.className == "case down"
    || (EVT.target.className.indexOf("key") == 0
      && EVT.target.className.indexOf("keyboard") == -1)
  ) {
    switch (EVT.target.innerText) {
      case "ENTER":
        textarea.value += "\n";
        break;
      case "Backspace":
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        break;
      case "":
        textarea.value += " ";
        break;
      case "Tab":
        textarea.value += "      ";
        break;
      case "◄":
        textarea.value += "◄";
        break;
      case "▼":
        textarea.value += "▼";
        break;
      case "►":
        textarea.value += "►";
        break;
      case "▲":
        textarea.value += "▲";
        break;
      case "DEL":
        textarea.value = "";

        break;
      case "Shift":
      case "Ctrl":
      case "Alt":
      case "Win":
        break;
      case "CapsLock":
        for (let btn of btns) {
          btn.className = btn.className == "case up" ? "case down" : "case up";
        }
        capslock = !capslock;
        break;
      default:
        textarea.value += EVT.target.innerText;
    }
  }
});

window.addEventListener("keyup", (EVT) => {
  EVT = EVT || window.event;
  EVT.preventDefault();
  let key;
  switch (EVT.key) {
    case "Shift":
      let btns = document.getElementsByClassName("case");
      for (let btn of btns) {
        btn.className = btn.className == "case up" ? "case down" : "case up";
      }

      break;
  }

  key = document.getElementsByClassName(EVT.code);
  let string = key[0].parentNode.className;
  key[0].parentNode.className = string.replace(" active", "");
  if (EVT.key !== "Shift" && pushed.has("Shift")) {
    pushed.clear();
    pushed.add("Shift");
  } else {
    pushed.clear();
  }
});

const body = document.querySelector("body");
const title = document.createElement("h1");
title.className = "main-title";
title.innerText = "Virtual keyboard";
body.prepend(title);

const description = document.createElement("h3");
description.className = "desc-title";
description.innerText = "The keyboard create in Windows OS.\nIf you need to change keyboard language please use Shift+Alt keys.\nPress Shift if you need use additional symbols.";
body.after(description);

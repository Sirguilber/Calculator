const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

// Lista de frases aleatorias para mostrar en los resultados
const randomSentences = [
  "idk bruh",
  "poggers moment",
  "big yikes",
  "sus sus",
  "no cap",
  "bruh why",
  "sadge",
  "based",
  "ez clap",
  "wtf moment"
];

// Calcula la operación y muestra una frase aleatoria
function calculate(value) {
  let calculatedValue;
  try {
    calculatedValue = eval(value || null);
  } catch {
    calculatedValue = NaN;
  }

  const randomIndex = Math.floor(Math.random() * randomSentences.length);
  const randomSentence = randomSentences[randomIndex];

res.value = randomSentence;

}

// Limpia la pantalla
function clearScreen() {
  res.value = "";
}

// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
  const theme = document.getElementById("theme");
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Light Mode ☀️";
  }

  setTimeout(() => { toast.innerHTML = "Calculator"; }, 1500);
}

// Muestra el valor ingresado en la pantalla
function liveScreen(enteredValue) {
  res.value += enteredValue;
}

// Evento para capturar teclas del teclado
document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
  const key = e.key;

  // Números
  if (key >= "0" && key <= "9") {
    res.value += key;
  }

  // Operadores
  if (["+", "-", "*", "/"].includes(key)) {
    res.value += key;
  }

  // Decimal
  if (key === ".") {
    res.value += ".";
  }

  // Enter => calcula
  if (key === "Enter") {
    calculate(res.value);
  }

  // C o c => limpiar
  if (key === "c" || key === "C") {
    clearScreen();
  }

  // Backspace => eliminar último carácter
  if (key === "Backspace") {
    res.value = res.value.substring(0, res.value.length - 1);
  }
}

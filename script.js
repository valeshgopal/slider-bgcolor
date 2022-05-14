const redSlider = document.querySelector(".redslider");
console.log(redSlider.value);
const greenSlider = document.querySelector(".greenslider");
const blueSlider = document.querySelector(".blueslider");
const sliders = document.querySelectorAll(".slider");

const redInput = document.querySelector(".red-input");
const greenInput = document.querySelector(".green-input");
const blueInput = document.querySelector(".blue-input");

const hexValue = document.querySelector(".hexvalue");
const clipboard = document.querySelector(".clipboard");

redSlider.addEventListener("input", () => {
  redInput.value = redSlider.value;
});

greenSlider.addEventListener("input", () => {
  greenInput.value = greenSlider.value;
});

blueSlider.addEventListener("input", () => {
  blueInput.value = blueSlider.value;
});

redInput.addEventListener("input", () => {
  redSlider.value = redInput.value;
});

greenInput.addEventListener("input", () => {
  greenSlider.value = greenInput.value;
});

blueInput.addEventListener("input", () => {
  blueSlider.value = blueInput.value;
});

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

sliders.forEach((slider) => {
  slider.addEventListener("input", () => {
    document.body.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    hexValue.innerText = ConvertRGBtoHex(
      +redSlider.value,
      +greenSlider.value,
      +blueSlider.value
    );
  });
});

hexValue.innerText = ConvertRGBtoHex(
  +redSlider.value,
  +greenSlider.value,
  +blueSlider.value
);

hexValue.addEventListener("click", () => {
  navigator.clipboard.writeText(`${hexValue.innerText}`);
  clipboard.style.opacity = 1;
  setTimeout(() => {
    clipboard.style.opacity = 0;
  }, 1500);
});

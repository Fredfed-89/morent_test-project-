const slider = document.getElementById("myRange");
const output = document.getElementById("current");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

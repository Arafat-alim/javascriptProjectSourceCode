function display(num) {
  document.getElementById("textarea").value += num;
}
function calc() {
  var currVal = document.getElementById("textarea").value;
  var answer = eval(currVal);
  document.getElementById("textarea").value = answer;
}
function clr() {
  document.getElementById("textarea").value = " ";
}

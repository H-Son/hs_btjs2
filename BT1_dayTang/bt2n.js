function sapXep() {
  var num1value = document.getElementById("num1").value * 1;
  var num2value = document.getElementById("num2").value * 1;
  var num3value = document.getElementById("num3").value * 1;
  var tg;
  if (num1value > num2value) {
    tg = num1value;
    num1value = num2value;
    num2value = tg;
  }
  if (num1value > num3value) {
    tg = num1value;
    num1value = num3value;
    num3value = tg;
  }
  if (num2value > num3value) {
    tg = num2value;
    num2value = num3value;
    num3value = tg;
  }
  console.log(num1value, num2value, num3value);

  //   // Get the value of the input field with id="numb"

  //   var result = (num1value + num2value + num3value + num4value + num5value) / 5;
  //   //console.log({ y });

  document.getElementById("xuatKetQua").innerText =
    "Dãy số tăng dần là : " + num1value + " " + num2value + " " + num3value;
}

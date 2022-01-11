function xdTamGiac() {
  // Get the value of the input field with id="numb"
  var a = document.getElementById("num1").value * 1;
  var b = document.getElementById("num2").value * 1;
  var c = document.getElementById("num3").value * 1;
  if (a < b + c && b < a + c && c < a + b) {
    if (
      a * a == b * b + c * c ||
      b * b == a * a + c * c ||
      c * c == a * a + b * b
    ) {
      document.getElementById("xuatTamGiac").innerText =
        "Đây là tam giác vuông";
    } else if (a == b && b == c) {
      document.getElementById("xuatTamGiac").innerText = "Đây là tam giác đều";
    } else if (a == b || a == c || b == c) {
      document.getElementById("xuatTamGiac").innerText = "Đây là tam giác cân";
    } else if (
      a * a > b * b + c * c ||
      b * b > a * a + c * c ||
      c * c > a * a + b * b
    ) {
      document.getElementById("xuatTamGiac").innerText = "Đây là tam giác tù";
    } else {
      document.getElementById("xuatTamGiac").innerText = "Đây là tam giác nhọn";
    }
  } else {
    alert("Đây không phải 3 cạnh 1 tam giác");
  }
}

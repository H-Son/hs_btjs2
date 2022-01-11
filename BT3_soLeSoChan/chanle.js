function timSo() {
  // Get the value of the input field with id="numb"
  var num1value = document.getElementById("num1").value * 1;
  var num2value = document.getElementById("num2").value * 1;
  var num3value = document.getElementById("num3").value * 1;
  var soChan = 0;
  var soLe = 0;
  if (num1value % 2 === 0) {
    soChan += 1;
  } else {
    soLe += 1;
  }
  if (num2value % 2 === 0) {
    soChan += 1;
  } else {
    soLe += 1;
  }
  if (num3value % 2 === 0) {
    soChan += 1;
  } else {
    soLe += 1;
  }
  //var result = (num1value + num2value + num3value + num4value + num5value) / 5;
  //console.log({ y });
  // document.write("tien luong la :" + c);
  document.getElementById("xuatSoChan").innerText = "Số Chẵn Là : " + soChan;
  document.getElementById("xuatSoLe").innerText = "Số Lẻ Là : " + soLe;
}

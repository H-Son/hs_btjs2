function khoangCach() {
  // Get the value of the input field with id="numb"
  var toaDoSV1x = document.getElementById("sinhVien1x").value * 1;
  var toaDoSV1y = document.getElementById("sinhVien1y").value * 1;
  var toaDoTruongx = document.getElementById("truongx").value * 1;
  var toaDoTruongy = document.getElementById("truongy").value * 1;
  var c = Math.pow((toaDoTruongx-toaDoSV1x), 2) + Math.pow((toaDoTruongy-toaDoSV1y), 2);
  var b=Math.sqrt(c)
  document.getElementById("xuatKetQua").innerText = "Số Chẵn Là : " + b;

  //var result = (num1value + num2value + num3value + num4value + num5value) / 5;
  //console.log({ y });
  // document.write("tien luong la :" + c);
  //document.getElementById("xuatSoChan").innerText =
  // "Số Chẵn Là : " + soChan;
  /*  document.getElementById("xuatTamGiac").innerText =
     "Đây là tam giác : "; */
}

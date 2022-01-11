function tinhKhoangCach() {
  // Get the value of the input field with id="numb"
  var toaDoTruongx = document.getElementById("truongx").value * 1;
  var toaDoTruongy = document.getElementById("truongy").value * 1;
  var toaDoSV1x = document.getElementById("sinhVien1x").value * 1;
  var toaDoSV1y = document.getElementById("sinhVien1y").value * 1;
  var hoTenSV1Value = document.getElementById("hoTenSV1").value;
  var sinhvien1 =
    Math.pow(toaDoTruongx - toaDoSV1x, 2) +
    Math.pow(toaDoTruongy - toaDoSV1y, 2);
  var tinhKhoangCachSV1 = Math.sqrt(sinhvien1);
  document.getElementById("xuatKetQua").innerText =
    "Số Chẵn Là : " + tinhKhoangCachSV1;
  document.getElementById("xuatHoTen").innerText = hoTenSV1Value;
}

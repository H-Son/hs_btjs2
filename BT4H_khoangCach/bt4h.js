function tinhKhoangCach() {
  // Get the value of the input field with id="numb"
  var toaDoTruongx = document.getElementById("truongx").value * 1;
  var toaDoTruongy = document.getElementById("truongy").value * 1;
  var toaDoSV1x = document.getElementById("sinhVien1x").value * 1;
  var toaDoSV1y = document.getElementById("sinhVien1y").value * 1;
  var hoTenSV1Value = document.getElementById("hoTenSV1").value;
  var toaDoSV2x = document.getElementById("sinhVien2x").value * 1;
  var toaDoSV2y = document.getElementById("sinhVien2y").value * 1;
  var hoTenSV2Value = document.getElementById("hoTenSV2").value;
  var toaDoSV3x = document.getElementById("sinhVien3x").value * 1;
  var toaDoSV3y = document.getElementById("sinhVien3y").value * 1;
  var hoTenSV3Value = document.getElementById("hoTenSV3").value;
  var sinhvien1 =
    Math.pow(toaDoTruongx - toaDoSV1x, 2) +
    Math.pow(toaDoTruongy - toaDoSV1y, 2);
  var tinhKhoangCachSV1 = Math.sqrt(sinhvien1);
  var sinhvien2 =
    Math.pow(toaDoTruongx - toaDoSV2x, 2) +
    Math.pow(toaDoTruongy - toaDoSV2y, 2);
  var tinhKhoangCachSV2 = Math.sqrt(sinhvien2);
  var sinhvien3 =
    Math.pow(toaDoTruongx - toaDoSV3x, 2) +
    Math.pow(toaDoTruongy - toaDoSV3y, 2);
  var tinhKhoangCachSV3 = Math.sqrt(sinhvien3);
  // document.getElementById("xuatKetQua").innerText =
  //   "Số Chẵn Là : " +
  //   tinhKhoangCachSV1 +
  //   "  " +
  //   tinhKhoangCachSV2 +
  //   "  " +
  //   tinhKhoangCachSV3;
  // document.getElementById("xuatHoTen").innerText = hoTenSV1Value;
  if (
    tinhKhoangCachSV1 > tinhKhoangCachSV2 &&
    tinhKhoangCachSV1 > tinhKhoangCachSV3
  ) {
    document.getElementById("xuatKetQua").innerText =
      "Sinh viên xa trường nhất là: " + hoTenSV1Value;
  } else if (
    tinhKhoangCachSV2 > tinhKhoangCachSV1 &&
    tinhKhoangCachSV2 > tinhKhoangCachSV3
  ) {
    document.getElementById("xuatKetQua").innerText =
      "Sinh viên xa trường nhất là: " + hoTenSV2Value;
  } else if (
    tinhKhoangCachSV3 > tinhKhoangCachSV1 &&
    tinhKhoangCachSV3 > tinhKhoangCachSV2
  ) {
    document.getElementById("xuatKetQua").innerText =
      "Sinh viên xa trường nhất là: " + hoTenSV3Value;
  }
}

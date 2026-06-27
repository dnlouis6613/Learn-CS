// dùng for tính TỔNG các số CHẴN từ 1 đến 50. (gợi ý: i % 2 === 0 là số chẵn)

tong = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    tong = tong + i;
  }
}
console.log(tong);

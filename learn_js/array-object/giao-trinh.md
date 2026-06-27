# BÀI 5: MẢNG (ARRAY) VÀ ĐỐI TƯỢNG (OBJECT)

> 🎯 **Mục tiêu buổi học:** Sau buổi này, học viên có thể **lưu trữ nhiều giá trị** trong mảng, **xử lý từng phần tử** bằng các phương thức mạnh mẽ (map, filter, reduce), và **tổ chức dữ liệu phức tạp** bằng Object — đủ để xây dựng các tính năng như lưu kết quả bài thi, lọc bài tập theo chủ đề, tính thống kê cho app YouPass.
>
> 🧩 **Bối cảnh xuyên suốt:** Mọi ví dụ xoay quanh app luyện thi tiếng Anh **YouPass**: danh sách học viên, điểm các bài thi, thông tin chi tiết của từng học viên, thống kê kết quả...

---

## PHẦN 1: MẢNG (ARRAY) CƠ BẢN

### 1.1 Mảng là gì?

**Mảng (Array)** là một **danh sách có thứ tự** chứa nhiều giá trị, mỗi giá trị được xác định bằng **chỉ số** (index), bắt đầu từ **0**.

```
Mảng danh sách điểm IELTS của các học viên:
┌─────┬─────┬─────┬─────┬─────┐
│ 6.5 │ 7.0 │ 5.5 │ 8.0 │ 6.0 │  ← giá trị (value)
└─────┴─────┴─────┴─────┴─────┘
│  0  │  1  │  2  │  3  │  4  │  ← chỉ số (index)
```

### 1.2 Tạo mảng

**Cách 1: Dùng dấu ngoặc vuông `[ ]`** (phổ biến nhất)

```js
// Mảng điểm IELTS
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// Mảng tên học viên
const danhSachHocVien = ["Lan Anh", "Minh Tuấn", "Thu Hà"];

// Mảng hỗn hợp (không nên — ít sử dụng)
const duLieu = [1, "chuỗi", true, null];

// Mảng rỗng
const mangRong = [];
```

**Cách 2: Dùng constructor `new Array()`** (ít dùng)

```js
const mang = new Array(1, 2, 3);
console.log(mang); // [1, 2, 3]
```

### 1.3 Truy cập phần tử trong mảng

Dùng **chỉ số** trong dấu ngoặc vuông:

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

console.log(danhSachDiem[0]); // 6.5 (phần tử đầu)
console.log(danhSachDiem[2]); // 5.5 (phần tử thứ 3)
console.log(danhSachDiem[4]); // 6.0 (phần tử cuối)

// Truy cập vô tồn tại → undefined
console.log(danhSachDiem[10]); // undefined
```

**Độ dài mảng: dùng `.length`**

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];
console.log(danhSachDiem.length); // 5

// Phần tử cuối: index = length - 1
console.log(danhSachDiem[danhSachDiem.length - 1]); // 6.0
```

### 1.4 Sửa đổi phần tử trong mảng

```js
let danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// Sửa phần tử tại chỉ số 2
danhSachDiem[2] = 7.5;
console.log(danhSachDiem); // [6.5, 7.0, 7.5, 8.0, 6.0]

// Thêm vào cuối (nếu chỉ số vượt quá)
danhSachDiem[5] = 6.5;
console.log(danhSachDiem); // [6.5, 7.0, 7.5, 8.0, 6.0, 6.5]
```

---

## PHẦN 2: CÁC PHƯƠNG THỨC CƠ BẢN CỦA MẢNG

### 2.1 `push()` — thêm vào cuối

```js
let danhSachDiem = [6.5, 7.0, 5.5];
danhSachDiem.push(8.0);
console.log(danhSachDiem); // [6.5, 7.0, 5.5, 8.0]

// Thêm nhiều cùng lúc
danhSachDiem.push(6.5, 7.5);
console.log(danhSachDiem); // [6.5, 7.0, 5.5, 8.0, 6.5, 7.5]

// `push()` trả về độ dài mảng mới
let chieuDai = danhSachDiem.push(5.0);
console.log(chieuDai); // 7
```

### 2.2 `pop()` — lấy ra cuối

```js
let danhSachDiem = [6.5, 7.0, 5.5, 8.0];
let diemLaysRa = danhSachDiem.pop();
console.log(diemLaysRa); // 8.0 (lấy ra)
console.log(danhSachDiem); // [6.5, 7.0, 5.5] (mảng thay đổi)

// pop() mảng rỗng → undefined
const mangRong = [];
console.log(mangRong.pop()); // undefined
```

### 2.3 `shift()` — lấy ra đầu

```js
let danhSachDiem = [6.5, 7.0, 5.5, 8.0];
let diemDau = danhSachDiem.shift();
console.log(diemDau); // 6.5
console.log(danhSachDiem); // [7.0, 5.5, 8.0]
```

### 2.4 `unshift()` — thêm vào đầu

```js
let danhSachDiem = [7.0, 5.5, 8.0];
danhSachDiem.unshift(6.5);
console.log(danhSachDiem); // [6.5, 7.0, 5.5, 8.0]

// Thêm nhiều
danhSachDiem.unshift(5.0, 6.0);
console.log(danhSachDiem); // [5.0, 6.0, 6.5, 7.0, 5.5, 8.0]
```

### 2.5 `slice()` — cắt mảng (không thay đổi mảng gốc)

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// slice(bắt đầu, kết thúc)
const mangCon1 = danhSachDiem.slice(1, 3);
console.log(mangCon1); // [7.0, 5.5] (bao gồm 1, không bao gồm 3)
console.log(danhSachDiem); // [6.5, 7.0, 5.5, 8.0, 6.0] (không đổi)

// Lấy từ chỉ số 2 đến cuối
const mangCon2 = danhSachDiem.slice(2);
console.log(mangCon2); // [5.5, 8.0, 6.0]

// Lấy 3 phần tử cuối
const mangCon3 = danhSachDiem.slice(-3);
console.log(mangCon3); // [5.5, 8.0, 6.0]
```

### 2.6 `splice()` — xóa/thay thế phần tử (thay đổi mảng gốc)

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// splice(vị trí, số lượng xóa, phần tử thay thế...)
const xoa = danhSachDiem.splice(2, 1); // Xóa 1 phần tử từ chỉ số 2
console.log(xoa); // [5.5]
console.log(danhSachDiem); // [6.5, 7.0, 8.0, 6.0]

// Thay thế: xóa 1 rồi chèn 2
danhSachDiem.splice(2, 1, 9.0, 9.5);
console.log(danhSachDiem); // [6.5, 7.0, 9.0, 9.5, 6.0]

// Chèn mà không xóa
danhSachDiem.splice(1, 0, 7.5);
console.log(danhSachDiem); // [6.5, 7.5, 7.0, 9.0, 9.5, 6.0]
```

> ⚠️ **splice vs slice:**
>
> - `slice()` trả về mảng mới, **không thay đổi** mảng gốc.
> - `splice()` **thay đổi** mảng gốc, trả về phần tử đã xóa.

---

## PHẦN 3: VÒNG LẶP QUA MẢNG

### 3.1 Vòng lặp `for` thường

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

for (let i = 0; i < danhSachDiem.length; i++) {
  console.log(`Học viên ${i + 1}: ${danhSachDiem[i]}`);
}
// Kết quả:
// Học viên 1: 6.5
// Học viên 2: 7.0
// ...
```

### 3.2 Vòng lặp `for...of` (duyệt giá trị)

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

for (const diem of danhSachDiem) {
  console.log(`Điểm: ${diem}`);
}
// Không cần quan tâm đến index, chỉ cần giá trị
```

### 3.3 Vòng lặp `forEach()` (phương thức)

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

danhSachDiem.forEach((diem, index) => {
  console.log(`Vị trí ${index}: ${diem}`);
});

// Hoặc với hàm thường
danhSachDiem.forEach(function (diem, index) {
  console.log(`Vị trí ${index}: ${diem}`);
});
```

---

## PHẦN 4: CÁC PHƯƠNG THỨC NÂNG CAO: MAP, FILTER, REDUCE

### 4.1 `map()` — biến đổi từng phần tử

`map()` **nhập vào một mảng, **trả về mảng mới** với **mỗi phần tử được biến đổi\*\* theo hàm callback.

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// Nâng điểm lên 1 bậc
const diemNang = danhSachDiem.map((diem) => diem + 1);
console.log(diemNang); // [7.5, 8.0, 6.5, 9.0, 7.0]
console.log(danhSachDiem); // [6.5, 7.0, 5.5, 8.0, 6.0] (không thay đổi)
```

**Ứng dụng thực tế:**

```js
// Danh sách tên → danh sách tên viết hoa
const danhSachHocVien = ["Lan Anh", "Minh Tuấn", "Thu Hà"];
const tenVietHoa = danhSachHocVien.map((ten) => ten.toUpperCase());
console.log(tenVietHoa); // ["LAN ANH", "MINH TUẤN", "THU HÀ"]

// Danh sách điểm → danh sách xếp loại
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];
const xepLoai = danhSachDiem.map((diem) => {
  if (diem >= 8.0) return "Expert";
  if (diem >= 6.5) return "Competent";
  if (diem >= 5.0) return "Modest";
  return "Beginner";
});
console.log(xepLoai); // ["Competent", "Competent", "Modest", "Expert", "Competent"]
```

### 4.2 `filter()` — lọc phần tử

`filter()` trả về **mảng mới** chứa chỉ những **phần tử thoả điều kiện**.

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// Lọc những ai đủ điểm (>= 6.5)
const duDiem = danhSachDiem.filter((diem) => diem >= 6.5);
console.log(duDiem); // [6.5, 7.0, 8.0]

// Lọc những ai chưa đủ
const chuaDu = danhSachDiem.filter((diem) => diem < 6.5);
console.log(chuaDu); // [5.5, 6.0]
```

**Ứng dụng thực tế:**

```js
// Lọc những học viên đạt cao (>= 7.5)
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0, 7.8, 8.5];
const diemCao = danhSachDiem.filter((diem) => diem >= 7.5);
console.log(diemCao); // [8.0, 7.8, 8.5]

// Lọc những số chẵn
const danhSachSo = [1, 2, 3, 4, 5, 6];
const soChann = danhSachSo.filter((so) => so % 2 === 0);
console.log(soChann); // [2, 4, 6]
```

### 4.3 `reduce()` — gộp thành một giá trị

`reduce()` **tích luỹ** (accumulate) tất cả phần tử thành một giá trị duy nhất.

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// Tính tổng
const tong = danhSachDiem.reduce((tong, diem) => tong + diem, 0);
console.log(tong); // 33.0

// Tính trung bình
const trungBinh = tong / danhSachDiem.length;
console.log(trungBinh); // 6.6
```

**Giải thích `reduce((accumulator, currentValue) => ..., initialValue)`:**

```
Vòng 1: accumulator = 0, currentValue = 6.5  → 0 + 6.5 = 6.5
Vòng 2: accumulator = 6.5, currentValue = 7.0 → 6.5 + 7.0 = 13.5
Vòng 3: accumulator = 13.5, currentValue = 5.5 → 13.5 + 5.5 = 19.0
Vòng 4: accumulator = 19.0, currentValue = 8.0 → 19.0 + 8.0 = 27.0
Vòng 5: accumulator = 27.0, currentValue = 6.0 → 27.0 + 6.0 = 33.0
Kết quả: 33.0
```

**Ứng dụng thực tế:**

```js
// Tìm điểm cao nhất
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];
const diemCaoNhat = danhSachDiem.reduce(
  (max, diem) => (diem > max ? diem : max),
  danhSachDiem[0],
);
console.log(diemCaoNhat); // 8.0

// Đếm số lần xuất hiện của phần tử
const danhSachLoaiCau = [
  "Listening",
  "Reading",
  "Listening",
  "Writing",
  "Reading",
  "Listening",
];
const dem = danhSachLoaiCau.reduce((dem, loai) => {
  dem[loai] = (dem[loai] || 0) + 1;
  return dem;
}, {});
console.log(dem);
// { Listening: 3, Reading: 2, Writing: 1 }
```

### 4.4 `find()` — tìm phần tử đầu tiên

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// Tìm điểm đầu tiên >= 8.0
const timDiem = danhSachDiem.find((diem) => diem >= 8.0);
console.log(timDiem); // 8.0

// Nếu không tìm thấy → undefined
const timKhong = danhSachDiem.find((diem) => diem > 9.0);
console.log(timKhong); // undefined
```

### 4.5 `findIndex()` — tìm chỉ số

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// Tìm chỉ số của phần tử đầu tiên >= 8.0
const index = danhSachDiem.findIndex((diem) => diem >= 8.0);
console.log(index); // 3

// Nếu không tìm thấy → -1
const indexKhong = danhSachDiem.findIndex((diem) => diem > 9.0);
console.log(indexKhong); // -1
```

### 4.6 `includes()` — kiểm tra sự tồn tại

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

console.log(danhSachDiem.includes(7.0)); // true
console.log(danhSachDiem.includes(9.0)); // false
```

### 4.7 `some()` — kiểm tra có tồn tại phần tử thoả điều kiện

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// Có ai đạt điểm cao (>= 8.0) không?
const coDatCao = danhSachDiem.some((diem) => diem >= 8.0);
console.log(coDatCao); // true

// Có ai chưa đủ điểm (< 5.0) không?
const coChuaDu = danhSachDiem.some((diem) => diem < 5.0);
console.log(coChuaDu); // false
```

### 4.8 `every()` — kiểm tra tất cả phần tử

```js
const danhSachDiem = [6.5, 7.0, 6.5, 8.0, 7.0];

// Tất cả đều đủ điểm (>= 6.5)?
const tatCaDu = danhSachDiem.every((diem) => diem >= 6.5);
console.log(tatCaDu); // true

// Tất cả đều >= 8.0?
const tatCaCao = danhSachDiem.every((diem) => diem >= 8.0);
console.log(tatCaCao); // false
```

---

## PHẦN 5: ĐỐI TƯỢNG (OBJECT)

### 5.1 Đối tượng là gì?

**Đối tượng (Object)** là một **tập hợp không có thứ tự** của **cặp khóa-giá trị (key-value pairs)**, dùng để tổ chức dữ liệu liên quan.

```
Thay vì:
let tenHocVien = "Lan Anh";
let diemListening = 7.0;
let diemReading = 6.5;
let diemWriting = 7.5;
let diemSpeaking = 6.0;

Hãy dùng Object:
const hocVien = {
  ten: "Lan Anh",
  diemListening: 7.0,
  diemReading: 6.5,
  diemWriting: 7.5,
  diemSpeaking: 6.0
};
```

### 5.2 Tạo đối tượng

**Cách 1: Literal syntax** (phổ biến nhất)

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
  passed: true,
  viTri: 1,
};

// Key có dấu cách → dùng ngoặc kép
const phim = {
  "tên phim": "Avatar",
  "năm phát hành": 2009,
};

// Truy cập: phim["tên phim"]
```

**Cách 2: Constructor `new Object()`** (ít dùng)

```js
const hocVien = new Object();
hocVien.ten = "Lan Anh";
hocVien.diem = 7.0;
```

### 5.3 Truy cập dữ liệu trong Object

**Cách 1: Dấu chấm (dot notation)**

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
  passed: true,
};

console.log(hocVien.ten); // "Lan Anh"
console.log(hocVien.diem); // 7.0
console.log(hocVien.passed); // true
```

**Cách 2: Dấu ngoặc vuông (bracket notation)**

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
};

console.log(hocVien["ten"]); // "Lan Anh"
console.log(hocVien["diem"]); // 7.0

// Dùng biến làm key
const key = "ten";
console.log(hocVien[key]); // "Lan Anh"
```

**Truy cập key không tồn tại → `undefined`**

```js
const hocVien = {
  ten: "Lan Anh",
};

console.log(hocVien.loai); // undefined
```

### 5.4 Thêm/sửa/xóa dữ liệu trong Object

**Thêm hoặc sửa:**

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
};

// Thêm key mới
hocVien.tien = 250000;
console.log(hocVien); // { ten: "Lan Anh", diem: 7.0, tien: 250000 }

// Sửa key cũ
hocVien.diem = 8.0;
console.log(hocVien); // { ten: "Lan Anh", diem: 8.0, tien: 250000 }
```

**Xóa key:**

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
  tien: 250000,
};

delete hocVien.tien;
console.log(hocVien); // { ten: "Lan Anh", diem: 7.0 }
```

### 5.5 Duyệt Object

**Duyệt key: `for...in`**

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
  passed: true,
};

for (const key in hocVien) {
  console.log(`${key}: ${hocVien[key]}`);
}
// Kết quả:
// ten: Lan Anh
// diem: 7.0
// passed: true
```

**Lấy danh sách key: `Object.keys()`**

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
  passed: true,
};

const keys = Object.keys(hocVien);
console.log(keys); // ["ten", "diem", "passed"]
```

**Lấy danh sách giá trị: `Object.values()`**

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
  passed: true,
};

const values = Object.values(hocVien);
console.log(values); // ["Lan Anh", 7.0, true]
```

**Lấy cặp [key, value]: `Object.entries()`**

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
  passed: true,
};

const entries = Object.entries(hocVien);
console.log(entries);
// [["ten", "Lan Anh"], ["diem", 7.0], ["passed", true]]

// Duyệt với destructuring
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
```

### 5.6 Kiểm tra key tồn tại

**Cách 1: `in` operator**

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
};

console.log("ten" in hocVien); // true
console.log("tinh" in hocVien); // false
```

**Cách 2: So sánh với `undefined`**

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
};

console.log(hocVien.tinh !== undefined); // false
console.log(hocVien.diem !== undefined); // true
```

---

## PHẦN 6: MẢNG CÓ CHỨA ĐỐI TƯỢNG

### 6.1 Tạo mảng các Object

Đây là **cách lưu dữ liệu thực tế** nhất — danh sách những thứ có dạng giống nhau.

```js
const danhSachHocVien = [
  { ten: "Lan Anh", diem: 7.0, passed: true },
  { ten: "Minh Tuấn", diem: 6.5, passed: true },
  { ten: "Thu Hà", diem: 5.5, passed: false },
];

// Truy cập
console.log(danhSachHocVien[0].ten); // "Lan Anh"
console.log(danhSachHocVien[1].diem); // 6.5
```

### 6.2 Duyệt và lọc

```js
const danhSachHocVien = [
  { ten: "Lan Anh", diem: 7.0, passed: true },
  { ten: "Minh Tuấn", diem: 6.5, passed: true },
  { ten: "Thu Hà", diem: 5.5, passed: false },
];

// map: lấy danh sách tên
const tenHocVien = danhSachHocVien.map((hv) => hv.ten);
console.log(tenHocVien); // ["Lan Anh", "Minh Tuấn", "Thu Hà"]

// filter: lấy những người đã đậu
const daoDau = danhSachHocVien.filter((hv) => hv.passed);
console.log(daoDau);
// [{ ten: "Lan Anh", ... }, { ten: "Minh Tuấn", ... }]

// find: tìm học viên có tên "Lan Anh"
const lanAnh = danhSachHocVien.find((hv) => hv.ten === "Lan Anh");
console.log(lanAnh); // { ten: "Lan Anh", diem: 7.0, passed: true }

// reduce: tính tổng điểm
const tongDiem = danhSachHocVien.reduce((tong, hv) => tong + hv.diem, 0);
console.log(tongDiem); // 19.0
```

### 6.3 Thêm/cập nhật phần tử

```js
const danhSachHocVien = [
  { ten: "Lan Anh", diem: 7.0 },
  { ten: "Minh Tuấn", diem: 6.5 },
];

// Thêm
danhSachHocVien.push({ ten: "Thu Hà", diem: 5.5 });

// Cập nhật
danhSachHocVien[0].diem = 8.0;
console.log(danhSachHocVien[0]); // { ten: "Lan Anh", diem: 8.0 }

// Xóa
danhSachHocVien.splice(1, 1);
console.log(danhSachHocVien); // [{ ten: "Lan Anh", ... }, { ten: "Thu Hà", ... }]
```

---

## PHẦN 7: SPREAD OPERATOR & DESTRUCTURING

### 7.1 Spread Operator `...` cho mảng

```js
const mang1 = [1, 2, 3];
const mang2 = [4, 5, 6];

// Gộp mảng
const gop = [...mang1, ...mang2];
console.log(gop); // [1, 2, 3, 4, 5, 6]

// Copy mảng
const copy = [...mang1];
console.log(copy); // [1, 2, 3]
console.log(copy === mang1); // false (là Object khác)
```

### 7.2 Spread Operator cho Object

```js
const hocVien1 = { ten: "Lan Anh", diem: 7.0 };
const hocVien2 = { ten: "Minh Tuấn", loai: "Việt" };

// Gộp Object
const gop = { ...hocVien1, ...hocVien2 };
console.log(gop);
// { ten: "Minh Tuấn", diem: 7.0, loai: "Việt" }

// Copy
const copy = { ...hocVien1 };
console.log(copy); // { ten: "Lan Anh", diem: 7.0 }
```

### 7.3 Destructuring mảng

```js
const diem = [7.0, 6.5, 8.0];

const [listening, reading, writing] = diem;
console.log(listening); // 7.0
console.log(reading); // 6.5

// Bỏ qua phần tử
const [l, , w] = diem;
console.log(l); // 7.0
console.log(w); // 8.0
```

### 7.4 Destructuring Object

```js
const hocVien = {
  ten: "Lan Anh",
  diem: 7.0,
  loai: "Việt",
};

const { ten, diem } = hocVien;
console.log(ten); // "Lan Anh"
console.log(diem); // 7.0

// Đổi tên
const { ten: hoTen, diem: diemToan } = hocVien;
console.log(hoTen); // "Lan Anh"
console.log(diemToan); // 7.0
```

---

## PHẦN 8: CÁC PHƯƠNG THỨC KHÁC CỦA ARRAY

### 8.1 `join()` — nối phần tử thành chuỗi

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0];

const chuoi = danhSachDiem.join(", ");
console.log(chuoi); // "6.5, 7.0, 5.5, 8.0"

const chuoi2 = danhSachDiem.join(" - ");
console.log(chuoi2); // "6.5 - 7.0 - 5.5 - 8.0"
```

### 8.2 `split()` — tách chuỗi thành mảng

```js
const chuoi = "6.5, 7.0, 5.5, 8.0";
const mang = chuoi.split(", ");
console.log(mang); // ["6.5", "7.0", "5.5", "8.0"]

// Chú ý: được mảng chuỗi, không phải số
console.log(typeof mang[0]); // "string"
```

### 8.3 `reverse()` — đảo ngược mảng

```js
const mang = [1, 2, 3, 4, 5];
mang.reverse();
console.log(mang); // [5, 4, 3, 2, 1]
```

### 8.4 `sort()` — sắp xếp mảng

**Sắp xếp số (cần hàm so sánh):**

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// Sắp xếp tăng dần
const tang = [...danhSachDiem].sort((a, b) => a - b);
console.log(tang); // [5.5, 6.0, 6.5, 7.0, 8.0]

// Sắp xếp giảm dần
const giam = [...danhSachDiem].sort((a, b) => b - a);
console.log(giam); // [8.0, 7.0, 6.5, 6.0, 5.5]
```

**Sắp xếp chuỗi:**

```js
const danhSachHocVien = ["Lan Anh", "Minh Tuấn", "Thu Hà"];

const sap = [...danhSachHocVien].sort();
console.log(sap); // ["Lan Anh", "Minh Tuấn", "Thu Hà"]

// Giảm dần (A-Z → Z-A)
const giam = [...danhSachHocVien].sort((a, b) => b.localeCompare(a));
console.log(giam); // ["Thu Hà", "Minh Tuấn", "Lan Anh"]
```

> 💡 **Mẹo:** `sort()` thay đổi mảng gốc. Dùng spread `[...mang]` để copy trước nếu cần giữ mảng gốc.

### 8.5 `concat()` — gộp mảng

```js
const mang1 = [1, 2, 3];
const mang2 = [4, 5, 6];

const gop = mang1.concat(mang2);
console.log(gop); // [1, 2, 3, 4, 5, 6]
console.log(mang1); // [1, 2, 3] (không thay đổi)

// Tương đương spread
const gop2 = [...mang1, ...mang2];
```

### 8.6 `lastIndexOf()` và `indexOf()`

```js
const danhSachDiem = [6.5, 7.0, 6.5, 8.0, 6.5];

// Chỉ số đầu tiên của 6.5
console.log(danhSachDiem.indexOf(6.5)); // 0

// Chỉ số cuối cùng của 6.5
console.log(danhSachDiem.lastIndexOf(6.5)); // 4

// Không tìm thấy
console.log(danhSachDiem.indexOf(10)); // -1
```

---

## CHEAT SHEET: TÓM TẮT PHƯƠNG THỨC THƯỜNG DÙNG

| Phương thức   | Tác dụng              | Thay đổi gốc? | Ví dụ                            |
| ------------- | --------------------- | ------------- | -------------------------------- |
| `push()`      | Thêm vào cuối         | ✅            | `arr.push(1)`                    |
| `pop()`       | Lấy ra cuối           | ✅            | `arr.pop()`                      |
| `shift()`     | Lấy ra đầu            | ✅            | `arr.shift()`                    |
| `unshift()`   | Thêm vào đầu          | ✅            | `arr.unshift(1)`                 |
| `slice()`     | Cắt (copy)            | ❌            | `arr.slice(0, 3)`                |
| `splice()`    | Xóa/thay thế          | ✅            | `arr.splice(1, 1)`               |
| `map()`       | Biến đổi từng phần tử | ❌            | `arr.map(x => x * 2)`            |
| `filter()`    | Lọc phần tử           | ❌            | `arr.filter(x => x > 5)`         |
| `reduce()`    | Gộp thành 1 giá trị   | ❌            | `arr.reduce((s, x) => s + x, 0)` |
| `find()`      | Tìm phần tử           | ❌            | `arr.find(x => x > 5)`           |
| `findIndex()` | Tìm chỉ số            | ❌            | `arr.findIndex(x => x > 5)`      |
| `includes()`  | Kiểm tra có không     | ❌            | `arr.includes(5)`                |
| `forEach()`   | Duyệt từng phần tử    | ❌            | `arr.forEach(x => {})`           |
| `join()`      | Nối thành chuỗi       | ❌            | `arr.join(", ")`                 |
| `sort()`      | Sắp xếp               | ✅            | `arr.sort()`                     |
| `reverse()`   | Đảo ngược             | ✅            | `arr.reverse()`                  |
| `concat()`    | Gộp mảng              | ❌            | `arr1.concat(arr2)`              |
| `indexOf()`   | Tìm chỉ số            | ❌            | `arr.indexOf(5)`                 |

---

## GỢI Ý TƯ DUY GIẢI QUYẾT BÀI TOÁN

### Khi gặp bài toán với mảng/Object:

1. **Xác định dữ liệu đầu vào:** mảng hay Object? Chứa gì?
2. **Xác định kết quả cần:** mảng mới? Một giá trị? Một Object?
3. **Chọn phương thức:**
   - **Thay đổi mảng gốc?** → `push/pop/shift/unshift/splice/sort`
   - **Lọc?** → `filter`
   - **Biến đổi?** → `map`
   - **Tính toán?** → `reduce`
   - **Tìm?** → `find / findIndex / includes`
   - **Duyệt?** → `forEach / for...of`

### Ví dụ: "Tính điểm trung bình của những ai đạt 6.5 trở lên"

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// Bước 1: Lọc những ai >= 6.5
const dachay = danhSachDiem.filter((d) => d >= 6.5);
// [6.5, 7.0, 8.0]

// Bước 2: Tính trung bình
const tb = dachay.reduce((s, d) => s + d, 0) / dachay.length;
// (6.5 + 7.0 + 8.0) / 3 = 7.166...

// Hoặc một dòng (chain)
const tb2 =
  danhSachDiem.filter((d) => d >= 6.5).reduce((s, d) => s + d, 0) /
  danhSachDiem.filter((d) => d >= 6.5).length;
```

---

## NHỮNG CẢI BIỆT PHỔ BIẾN

### mảng vs Object

| Vấn đề           | mảng                      | Object                                |
| ---------------- | ------------------------- | ------------------------------------- |
| **Dữ liệu**      | Danh sách (có thứ tự)     | Cặp key-value (không thứ tự)          |
| **Truy cập**     | Theo chỉ số: `arr[0]`     | Theo key: `obj.key` hoặc `obj["key"]` |
| **Khi nào dùng** | Danh sách, chuỗi thao tác | Thông tin chi tiết, cấu hình          |

### Filter vs Map

|               | filter()                     | map()                           |
| ------------- | ---------------------------- | ------------------------------- |
| **Kết quả**   | mảng có ít phần tử hơn (lọc) | mảng cùng kích thước (biến đổi) |
| **Điều kiện** | Trả về boolean               | Trả về giá trị mới              |
| **Ví dụ**     | `filter(x => x > 5)`         | `map(x => x * 2)`               |

### Slice vs Splice

|                  | slice()             | splice()                   |
| ---------------- | ------------------- | -------------------------- |
| **Thay đổi gốc** | ❌                  | ✅                         |
| **Trả về**       | mảng mới            | Phần tử xóa                |
| **Tham số**      | (bắt đầu, kết thúc) | (vị trí, số xóa, thay thế) |

---

## GIẢI QUYẾT BÀI TOÁN THỰC TẾ

### Bài toán 1: Lọc và tính tổng

**Đề:** Cho danh sách điểm, tìm những ai >= 7.0 rồi tính điểm trung bình của họ.

```js
const diem = [6.5, 7.0, 5.5, 8.0, 6.0, 7.5];

const duCao = diem.filter((d) => d >= 7.0); // [7.0, 8.0, 7.5]
const tb = duCao.reduce((s, d) => s + d, 0) / duCao.length; // 7.5
console.log(`Trung bình: ${tb}`);
```

### Bài toán 2: Biến đổi Object trong mảng

**Đề:** Thêm trường "xếp loại" vào danh sách học viên.

```js
const hocVien = [
  { ten: "Lan Anh", diem: 7.0 },
  { ten: "Minh Tuấn", diem: 6.5 },
  { ten: "Thu Hà", diem: 5.5 },
];

const keThem = hocVien.map((hv) => ({
  ...hv,
  xepLoai: hv.diem >= 7.0 ? "Excellent" : hv.diem >= 6.5 ? "Good" : "Fair",
}));

console.log(keThem);
// [
//   { ten: "Lan Anh", diem: 7.0, xepLoai: "Excellent" },
//   { ten: "Minh Tuấn", diem: 6.5, xepLoai: "Good" },
//   { ten: "Thu Hà", diem: 5.5, xepLoai: "Fair" }
// ]
```

### Bài toán 3: Nhóm dữ liệu (group by)

**Đề:** Nhóm học viên theo xếp loại.

```js
const hocVien = [
  { ten: "Lan Anh", xepLoai: "Excellent" },
  { ten: "Minh Tuấn", xepLoai: "Good" },
  { ten: "Thu Hà", xepLoai: "Fair" },
  { ten: "Hùng", xepLoai: "Excellent" },
];

const nhom = hocVien.reduce((nhom, hv) => {
  if (!nhom[hv.xepLoai]) {
    nhom[hv.xepLoai] = [];
  }
  nhom[hv.xepLoai].push(hv.ten);
  return nhom;
}, {});

console.log(nhom);
// {
//   Excellent: ["Lan Anh", "Hùng"],
//   Good: ["Minh Tuấn"],
//   Fair: ["Thu Hà"]
// }
```

---

## CÂU HỎI THƯỜNG GẶP

**Q: Tại sao `arr.splice()` thay đổi mảng gốc nhưng `arr.slice()` thì không?**

A: Đó là thiết kế của JavaScript. `splice()` dùng để **sửa mảng**, `slice()` dùng để **copy một phần**. Khi cần giữ mảng gốc, dùng `slice()` hoặc spread `[...arr]`.

**Q: Khi nào dùng `for`, `forEach`, `for...of`, hay `map`?**

- Dùng `for` nếu cần điều khiển vòng lặp (break, continue, biến chỉ số).
- Dùng `forEach` để duyệt và thực hiện thao tác (không cần mảng mới).
- Dùng `for...of` để duyệt khi chỉ cần giá trị, không cần chỉ số.
- Dùng `map` khi cần **mảng mới** từ phép biến đổi.

**Q: Object vs `Map` (dạng khác)?**

A: Object dùng cho dữ liệu thường ngày. `Map` dùng khi cần key phức tạp (Object, Array làm key) hoặc cần duyệt theo thứ tự thêm vào. Bài này tập trung Object.

---

## CHEAT SHEET: TEMPLATE CODE

### Template 1: Xử lý danh sách đơn giản

```js
const danhSachDiem = [6.5, 7.0, 5.5, 8.0, 6.0];

// Lọc & biến đổi
const ketQua = danhSachDiem
  .filter((d) => d >= 6.5)
  .map((d) => Math.round(d * 2) / 2); // Làm tròn 0.5

console.log(ketQua);
```

### Template 2: Xử lý mảng Object

```js
const hocVien = [
  { ten: "Lan Anh", diem: 7.0, passed: true },
  { ten: "Minh Tuấn", diem: 6.5, passed: true },
  { ten: "Thu Hà", diem: 5.5, passed: false },
];

// Tìm & trích xuất
const daoDau = hocVien.filter((hv) => hv.passed).map((hv) => hv.ten);
console.log(daoDau); // ["Lan Anh", "Minh Tuấn"]

// Tính tổng điểm
const tongDiem = hocVien.reduce((tong, hv) => tong + hv.diem, 0);
console.log(tongDiem); // 19.0
```

### Template 3: Tạo Object từ mảng

```js
const tenCauHoi = ["Q1", "Q2", "Q3", "Q4"];
const dapAn = [true, false, true, false];

// Gộp thành Object
const ketQua = {};
tenCauHoi.forEach((ten, i) => {
  ketQua[ten] = dapAn[i];
});

console.log(ketQua);
// { Q1: true, Q2: false, Q3: true, Q4: false }
```

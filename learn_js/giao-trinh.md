# BÀI 4: NHẬP MÔN JAVASCRIPT (Buổi 1)

> 🎯 **Mục tiêu buổi học:** Sau buổi này, học viên có thể tự viết một đoạn JavaScript nhỏ để **lưu dữ liệu (biến)**, **ra quyết định (điều kiện)**, **đóng gói logic (function)** và **lặp lại công việc (vòng lặp)** — đủ để xây phần "tính điểm" cho một app luyện thi IELTS.
>
> 🧩 **Bối cảnh xuyên suốt:** Mọi ví dụ trong bài đều xoay quanh app luyện thi tiếng Anh **YouPass** (giống `learning_english`): học viên làm bài 4 kỹ năng *Listening / Reading / Writing / Speaking*, học từ vựng, và nhận **band điểm** + **xếp loại**.

---

## PHẦN 0: JAVASCRIPT LÀ GÌ & CHẠY Ở ĐÂU?

### 0.1 JavaScript dùng để làm gì?

- **HTML** = bộ khung (nội dung trang).
- **CSS** = trang điểm (màu sắc, bố cục — đã học ở LS1–LS3).
- **JavaScript** = bộ não (xử lý logic, phản ứng khi người dùng bấm nút, tính toán điểm, đổi giao diện...).

Ví dụ thực tế trong `learning_english`: khi bấm nút **"Bắt đầu làm bài"**, JS quyết định mở `exam.html` (chế độ luyện) hay hiện thông báo (chế độ thi thật). Toàn bộ "quyết định" đó là JavaScript.

### 0.2 Chạy thử JavaScript ở đâu?

1. **Console của trình duyệt** (nhanh nhất để thử): mở Chrome → `F12` → tab **Console** → gõ lệnh, Enter.
2. **Trong file HTML** qua thẻ `<script>`:

```html
<body>
  <h1>YouPass</h1>

  <!-- Script đặt cuối body để HTML tải xong trước -->
  <script src="app.js"></script>
</body>
```

3. **File `.js` riêng** (cách chuyên nghiệp, ta sẽ dùng).

> 💡 **Quy ước trong giáo trình:** mỗi đoạn code đều kèm `console.log(...)` để học viên **nhìn thấy kết quả**. Hãy mở Console (F12) khi chạy demo.

---

## PHẦN 1: BIẾN VÀ CÁC KIỂU DỮ LIỆU CƠ BẢN

### 1.1 Biến là gì?

**Biến (variable)** là một "chiếc hộp có dán nhãn" dùng để **lưu một giá trị** và gọi lại sau này bằng tên nhãn.

```
   ┌───────────────────────┐
   │  tenHocVien           │  ← nhãn (tên biến)
   │   "Lan Anh"           │  ← giá trị bên trong
   └───────────────────────┘
```

Thay vì viết lại `"Lan Anh"` khắp nơi, ta lưu một lần vào biến rồi dùng lại:

```js
let tenHocVien = "Lan Anh";
console.log(tenHocVien); // "Lan Anh"
```

### 1.2 Khai báo biến: `let` và `const`

JavaScript hiện đại dùng **2 từ khoá** để khai báo biến:

```js
let bandHienTai = 6.5;       // GIÁ TRỊ CÓ THỂ THAY ĐỔI
const TONG_SO_CAU = 40;      // HẰNG SỐ — KHÔNG đổi được
```

| Từ khoá | Gán lại được không? | Dùng khi nào                                  |
| ------- | ------------------- | --------------------------------------------- |
| `let`   | ✅ Có                | Giá trị sẽ thay đổi (điểm, số câu đúng, bộ đếm) |
| `const` | ❌ Không             | Giá trị cố định (tổng số câu, số kỹ năng, π)   |

```js
let soCauDung = 30;
soCauDung = 35;            // ✅ OK — let cho phép gán lại
console.log(soCauDung);   // 35

const TONG_SO_CAU = 40;
TONG_SO_CAU = 50;         // ❌ LỖI: Assignment to constant variable
```

> ⭐ **Nguyên tắc nghề nghiệp:** **luôn ưu tiên `const`**. Chỉ đổi sang `let` khi bạn *chắc chắn* giá trị cần thay đổi. Điều này giúp giảm bug do lỡ tay sửa giá trị.
>
> ⚠️ Có một từ khoá cũ là `var` — **tránh dùng** vì nó gây nhiều lỗi khó hiểu về phạm vi (scope). Trong khoá học ta chỉ dùng `let` / `const`.

### 1.3 Quy tắc đặt tên biến

**Bắt buộc:**

- Bắt đầu bằng **chữ cái**, `_` hoặc `$` (không bắt đầu bằng số).
- Không chứa dấu cách, không dùng dấu tiếng Việt có dấu, không trùng từ khoá (`let`, `if`, `return`...).
- **Phân biệt hoa–thường:** `band` và `Band` là hai biến khác nhau.

**Quy ước (nên theo):**

- Dùng **camelCase**: `soCauDung`, `bandTrungBinh`, `tenHocVien`.
- Hằng số "cứng" thường viết HOA + gạch dưới: `TONG_SO_CAU`, `BAND_TOI_DA`.
- Đặt tên **có nghĩa**: `b` ❌ → `bandReading` ✅.

```js
// ❌ Khó hiểu          // ✅ Rõ ràng
let x = 30;             let soCauDungReading = 30;
let d = 6.5;            let bandTrungBinh = 6.5;
```

### 1.4 Kiểu dữ liệu cơ bản

Buổi này tập trung 3 kiểu cơ bản nhất:

| Kiểu      | Ý nghĩa             | Ví dụ trong app YouPass                  |
| --------- | ------------------- | ---------------------------------------- |
| `number`  | Số (nguyên & thực)  | `40` (số câu), `6.5` (band), `87.5` (%)  |
| `string`  | Chuỗi ký tự (chữ)   | `"Lan Anh"`, `"Reading"`, `"B2"`         |
| `boolean` | Đúng/Sai            | `true` (đã đậu), `false` (chưa đậu)      |

```js
// number — không có dấu nháy
let soCauDung = 32;
let band = 7.5;

// string — BẮT BUỘC trong dấu nháy ("..." hoặc '...')
let tenHocVien = "Lan Anh";
let kyNang = "Listening";

// boolean — chỉ có 2 giá trị: true hoặc false
let daDau = true;
let dangThiThat = false;
```

> 💡 **JS tự suy ra kiểu** khi bạn gán giá trị (không cần khai báo kiểu như Java/C++). Đây gọi là *dynamic typing*. Nhưng ta vẫn nên **tự ý thức** mỗi biến đang giữ kiểu gì.

#### "Khai báo biến kèm kiểu dữ liệu" — thói quen tốt

JavaScript thuần không bắt khai báo kiểu, nhưng người đi làm thường **ghi chú kiểu bằng comment** (hoặc dùng TypeScript sau này):

```js
let soCauDung = 32;        // number
let kyNang = "Reading";    // string
let daDau = true;          // boolean
```

### 1.5 In ra màn hình với `console.log`

`console.log(...)` in giá trị ra Console — công cụ **quan trọng nhất** để xem chương trình đang chạy gì.

```js
let band = 6.5;

// In GIÁ TRỊ của biến
console.log(band);                 // 6.5
console.log("Band của bạn:", band); // Band của bạn: 6.5

// In KIỂU DỮ LIỆU của biến bằng toán tử typeof
console.log(typeof band);          // "number"
console.log(typeof "Reading");     // "string"
console.log(typeof true);          // "boolean"
```

> 🔎 `typeof` trả về **một chuỗi** mô tả kiểu. Rất hữu ích khi debug: "Ủa sao phép cộng ra sai? À, hoá ra biến này là `string` chứ không phải `number`!".

### 1.6 Xử lý toán cơ bản

| Toán tử | Tên          | Ví dụ      | Kết quả |
| ------- | ------------ | ---------- | ------- |
| `+`     | Cộng         | `30 + 5`   | `35`    |
| `-`     | Trừ          | `40 - 32`  | `8`     |
| `*`     | Nhân         | `6 * 1.5`  | `9`     |
| `/`     | Chia         | `35 / 40`  | `0.875` |
| `%`     | Chia lấy dư  | `17 % 2`   | `1`     |
| `**`    | Luỹ thừa     | `2 ** 3`   | `8`     |

Ví dụ: tính **phần trăm làm đúng** của bài Reading:

```js
const TONG_CAU = 40;
let soCauDung = 35;

let phanTram = (soCauDung / TONG_CAU) * 100;
console.log("Bạn đúng", phanTram, "%"); // Bạn đúng 87.5 %
```

Toán tử `%` (lấy dư) rất hay dùng để kiểm tra **chẵn/lẻ**:

```js
console.log(10 % 2); // 0  → 10 là số chẵn
console.log(7 % 2);  // 1  → 7 là số lẻ
```

> ⚠️ **Bẫy `+` với string:** nếu một bên là chuỗi, `+` sẽ **nối chuỗi** chứ không cộng số!
>
> ```js
> console.log(3 + 4);       // 7   (number + number)
> console.log("3" + 4);     // "34" (string + number → nối chuỗi!)
> console.log(2 + "câu");   // "2câu"
> ```

### 1.7 Hàm toán học với module `Math`

`Math` là một "hộp công cụ" có sẵn chứa các hàm toán hữu ích.

| Lệnh                | Tác dụng                       | Ví dụ                       |
| ------------------- | ------------------------------ | --------------------------- |
| `Math.round(x)`     | Làm tròn về số nguyên gần nhất | `Math.round(6.5)` → `7`     |
| `Math.floor(x)`     | Làm tròn **xuống**             | `Math.floor(6.9)` → `6`     |
| `Math.ceil(x)`      | Làm tròn **lên**               | `Math.ceil(6.1)` → `7`      |
| `Math.max(a, b...)` | Số lớn nhất                    | `Math.max(6, 7.5, 5)` → `7.5` |
| `Math.min(a, b...)` | Số nhỏ nhất                    | `Math.min(6, 7.5, 5)` → `5` |
| `Math.sqrt(x)`      | Căn bậc hai                    | `Math.sqrt(81)` → `9`       |
| `Math.random()`     | Số ngẫu nhiên trong `[0, 1)`   | `0.4271...`                 |

Ví dụ: làm tròn **band trung bình** 4 kỹ năng (IELTS làm tròn về 0.5 gần nhất):

```js
let tong = 6.5 + 7 + 6 + 7;          // 26.5
let trungBinh = tong / 4;            // 6.625
let band = Math.round(trungBinh * 2) / 2; // làm tròn về .0 hoặc .5
console.log(band);                   // 6.5
```

Ví dụ: random một câu hỏi trong số 40 câu:

```js
let viTri = Math.floor(Math.random() * 40); // số nguyên 0..39
console.log("Bốc trúng câu số", viTri + 1);
```

### 1.8 Format String (Template Literals)

Thay vì nối chuỗi bằng `+` rườm rà, hãy dùng **dấu backtick** `` ` `` và cú pháp `${...}` để nhúng biến.

```js
let ten = "Lan Anh";
let band = 6.5;

// ❌ Cách cũ — nối bằng +
console.log("Học viên " + ten + " đạt band " + band + ".");

// ✅ Template literal — gọn, dễ đọc
console.log(`Học viên ${ten} đạt band ${band}.`);
// Học viên Lan Anh đạt band 6.5.
```

Bên trong `${...}` có thể đặt **cả biểu thức**:

```js
let dung = 35;
const TONG = 40;
console.log(`Bạn đúng ${dung}/${TONG} câu (${(dung / TONG) * 100}%).`);
// Bạn đúng 35/40 câu (87.5%).
```

Template literal còn cho phép viết chuỗi **nhiều dòng** dễ dàng:

```js
let ketQua = `=== KẾT QUẢ ===
Tên: ${ten}
Band: ${band}`;
console.log(ketQua);
```

> ⭐ **Ghi nhớ:** dùng backtick `` ` `` (phím bên trái số 1), **không** phải nháy đơn `'`.

---

## PHẦN 2: CẤU TRÚC ĐIỀU KIỆN

### 2.1 Giá trị `boolean` — nền tảng của mọi quyết định

Mọi câu hỏi "Đúng hay sai?" đều cho ra một giá trị `boolean` (`true` / `false`). Máy tính **ra quyết định dựa trên boolean**.

```js
let band = 6.5;
console.log(band >= 6.0); // true  → "band có >= 6.0 không?" → Có
console.log(band >= 7.0); // false → "band có >= 7.0 không?" → Không
```

### 2.2 Toán tử so sánh

| Toán tử | Ý nghĩa            | Ví dụ        | Kết quả |
| ------- | ------------------ | ------------ | ------- |
| `===`   | Bằng (cả kiểu)     | `6 === 6`    | `true`  |
| `!==`   | Khác               | `6 !== 7`    | `true`  |
| `>`     | Lớn hơn            | `7 > 6.5`    | `true`  |
| `<`     | Nhỏ hơn            | `5 < 6`      | `true`  |
| `>=`    | Lớn hơn hoặc bằng  | `6 >= 6`     | `true`  |
| `<=`    | Nhỏ hơn hoặc bằng  | `6 <= 5`     | `false` |

> ⚠️ **Luôn dùng `===` (3 dấu bằng), KHÔNG dùng `==` (2 dấu).**
> `==` tự ý ép kiểu gây bug: `"6" == 6` → `true` (sai bản chất). Còn `"6" === 6` → `false` (đúng, vì khác kiểu).
>
> 📌 **Đừng nhầm:** `=` là **gán giá trị**, `===` là **so sánh**. `band = 7` (gán) ≠ `band === 7` (hỏi).

### 2.3 Toán tử logic

Dùng để **ghép nhiều điều kiện**:

| Toán tử | Tên | Đúng khi...               | Ví dụ                              |
| ------- | --- | ------------------------- | ---------------------------------- |
| `&&`    | AND | **cả hai** đều đúng       | `band >= 6 && band <= 7`           |
| `\|\|`  | OR  | **ít nhất một** đúng      | `kyNang === "IELTS" \|\| daThi`    |
| `!`     | NOT | đảo ngược                 | `!daDau` (chưa đậu)                |

```js
let band = 6.5;
let daNopBai = true;

// Đậu khi: band >= 6.0 VÀ đã nộp bài
console.log(band >= 6.0 && daNopBai);   // true

// Cần thi lại khi: band < 6.0 HOẶC chưa nộp bài
console.log(band < 6.0 || !daNopBai);   // false
```

### 2.4 Cấu trúc `if`, `if-else`, `if-else if-else`

**`if`** — chỉ làm gì đó *khi* điều kiện đúng:

```js
let band = 6.5;
if (band >= 6.0) {
  console.log("🎉 Chúc mừng, bạn đã đạt mục tiêu!");
}
```

**`if-else`** — hai nhánh, đúng làm A, sai làm B:

```js
let soCauDung = 25;
if (soCauDung >= 20) {
  console.log("Đạt yêu cầu tối thiểu.");
} else {
  console.log("Chưa đạt, cần luyện thêm.");
}
```

**`if-else if-else`** — nhiều mức (xếp loại band):

```js
let band = 7.5;

if (band >= 8.0) {
  console.log("Trình độ: Expert (C2)");
} else if (band >= 6.5) {
  console.log("Trình độ: Competent (B2)");
} else if (band >= 5.0) {
  console.log("Trình độ: Modest (B1)");
} else {
  console.log("Trình độ: Beginner — cần lộ trình cơ bản");
}
// In ra: Trình độ: Competent (B2)
```

> 💡 JS kiểm tra **lần lượt từ trên xuống**, gặp điều kiện đúng đầu tiên thì chạy nhánh đó rồi **bỏ qua phần còn lại**. Vì vậy **thứ tự điều kiện rất quan trọng** — xếp từ chặt đến lỏng (lớn → nhỏ).

### 2.5 Điều kiện lồng nhau (Nested if)

Đôi khi một quyết định phụ thuộc vào quyết định khác:

```js
let daNopBai = true;
let band = 6.5;

if (daNopBai) {
  // chỉ xét band KHI đã nộp bài
  if (band >= 6.0) {
    console.log("Đậu ✅");
  } else {
    console.log("Trượt ❌ — thi lại");
  }
} else {
  console.log("Bạn chưa nộp bài.");
}
```

> ⚠️ Lồng quá sâu (3–4 tầng) khiến code khó đọc. Mẹo: nhiều khi có thể **gộp bằng `&&`**:
>
> ```js
> if (daNopBai && band >= 6.0) {
>   console.log("Đậu ✅");
> }
> ```

### 2.6 Cấu trúc `switch-case`

Khi cần so sánh **một biến** với **nhiều giá trị cố định**, `switch` gọn hơn chuỗi `if-else if`:

```js
let kyNang = "Reading";

switch (kyNang) {
  case "Listening":
    console.log("Thời lượng: 30 phút");
    break;
  case "Reading":
    console.log("Thời lượng: 60 phút");
    break;
  case "Writing":
    console.log("Thời lượng: 60 phút");
    break;
  case "Speaking":
    console.log("Thời lượng: 11–14 phút");
    break;
  default:
    console.log("Kỹ năng không hợp lệ");
}
// In ra: Thời lượng: 60 phút
```

> ⚠️ **Đừng quên `break`!** Thiếu `break`, JS sẽ "chạy tràn" xuống các case bên dưới. `default` chạy khi không case nào khớp (giống `else`).

### 2.7 Toán tử 3 ngôi (Ternary Operator)

Viết tắt cho `if-else` **trả về một giá trị**:

```
điều_kiện ? giá_trị_nếu_ĐÚNG : giá_trị_nếu_SAI
```

```js
let band = 6.5;

// Cách dài
let ketQua;
if (band >= 6.0) {
  ketQua = "Đậu";
} else {
  ketQua = "Trượt";
}

// Cách ngắn — TƯƠNG ĐƯƠNG
let ketQua2 = band >= 6.0 ? "Đậu" : "Trượt";
console.log(ketQua2); // "Đậu"
```

Hay dùng ngay trong template literal:

```js
let soCauDung = 18;
console.log(`Bạn ${soCauDung >= 20 ? "đã" : "chưa"} đạt yêu cầu.`);
// Bạn chưa đạt yêu cầu.
```

> 💡 Ternary tốt cho lựa chọn **ngắn gọn**. Logic phức tạp nhiều nhánh thì vẫn nên dùng `if-else` cho dễ đọc.

### 2.8 Debug logic với `console.log`

Khi điều kiện chạy "không như mong đợi", hãy **in ra giá trị thật** để soi:

```js
let band = "6.5"; // ⚠️ vô tình là string!

console.log("band =", band, "| kiểu:", typeof band); // band = 6.5 | kiểu: string

if (band >= 6.0) {
  console.log("Đậu");      // vẫn chạy được do JS ép kiểu...
}
console.log(band === 6.5); // false! vì "6.5" (string) !== 6.5 (number)
```

> 🔎 **Quy trình debug 3 bước:** (1) In giá trị biến, (2) In `typeof` để chắc kiểu, (3) In kết quả của chính biểu thức điều kiện (`console.log(band >= 6.0)`).

---

## PHẦN 3: FUNCTION (HÀM)

### 3.1 Ý nghĩa của function

**Function** là một "cỗ máy" đóng gói một đoạn việc, đặt cho nó cái tên, để **gọi lại nhiều lần** mà không phải chép code.

Nguyên tắc vàng: **DRY — Don't Repeat Yourself** (Đừng lặp lại chính mình).

```
   nguyên liệu (tham số)          sản phẩm (return)
        │                              ▲
        ▼                              │
   ┌─────────────────────────────────────┐
   │   FUNCTION: tinhPhanTram(dung, tong) │
   │   phanTram = dung / tong * 100       │
   └─────────────────────────────────────┘
```

### 3.2 Khai báo function

**Cách 1 — Function declaration (kinh điển):**

```js
function chaoMung(ten) {
  console.log(`Xin chào ${ten}, chúc bạn học tốt!`);
}

chaoMung("Lan Anh"); // Gọi hàm → Xin chào Lan Anh, chúc bạn học tốt!
chaoMung("Minh");    // Tái sử dụng → Xin chào Minh, chúc bạn học tốt!
```

**Cách 2 — Arrow function (hiện đại, ngắn gọn):**

```js
const chaoMung = (ten) => {
  console.log(`Xin chào ${ten}, chúc bạn học tốt!`);
};

chaoMung("Lan Anh");
```

Nếu hàm chỉ có **một dòng return**, arrow function rút gọn được:

```js
const tinhPhanTram = (dung, tong) => (dung / tong) * 100;
console.log(tinhPhanTram(35, 40)); // 87.5
```

### 3.3 Quy tắc đặt tên function

- Dùng **camelCase**, bắt đầu bằng **động từ** mô tả hành động: `tinhBand`, `xepLoai`, `kiemTraDau`, `inKetQua`.
- Tên nói rõ "hàm này làm gì": `tinhBandTrungBinh()` ✅ tốt hơn `xuLy()` ❌.
- Hàm trả về boolean nên bắt đầu bằng `is/has/can` hoặc `la/da/co`: `isPassed`, `daDau`.

### 3.4 Function với parameter (tham số)

**Parameter** là "nguyên liệu đầu vào". Khi gọi hàm, ta truyền **argument** (giá trị thật) vào.

```js
//                tham số: dung, tong
function tinhPhanTram(dung, tong) {
  let pt = (dung / tong) * 100;
  console.log(`${dung}/${tong} = ${pt}%`);
}

tinhPhanTram(35, 40); // argument: 35, 40 → 35/40 = 87.5%
tinhPhanTram(28, 40); // 28/40 = 70%
```

Có thể đặt **giá trị mặc định** cho tham số:

```js
function tinhPhanTram(dung, tong = 40) {
  return (dung / tong) * 100;
}
console.log(tinhPhanTram(35)); // dùng tong mặc định = 40 → 87.5
```

### 3.5 `return` — trả kết quả về

`console.log` chỉ **in ra**. Muốn **lấy kết quả để dùng tiếp**, hàm phải `return`.

```js
function tinhPhanTram(dung, tong) {
  return (dung / tong) * 100; // TRẢ giá trị ra ngoài
}

let pt = tinhPhanTram(35, 40); // hứng kết quả vào biến
console.log(pt + 5);           // dùng tiếp được! → 92.5
```

> ⚠️ **`return` kết thúc hàm ngay lập tức.** Mọi dòng sau `return` sẽ không chạy:
>
> ```js
> function check(band) {
>   if (band >= 6) return "Đậu"; // gặp return → thoát luôn
>   return "Trượt";
> }
> ```
>
> 🔑 **Phân biệt:** hàm có `console.log` → *cho người xem*. Hàm có `return` → *cho code khác dùng*. Hàm tính toán nên `return`, không nên `console.log` bên trong.

### 3.6 Phân tích & xây dựng logic trong function

Quy trình suy nghĩ khi viết một hàm — ví dụ hàm **xếp loại band**:

1. **Đầu vào là gì?** → một số `band`.
2. **Đầu ra là gì?** → một chuỗi xếp loại.
3. **Các bước xử lý?** → so sánh band với các mốc.

```js
function xepLoaiBand(band) {
  if (band >= 8.0) return "Expert";
  if (band >= 6.5) return "Competent";
  if (band >= 5.0) return "Modest";
  return "Beginner";
}

console.log(xepLoaiBand(7.5)); // "Competent"
```

### 3.7 Tư duy phân rã hàm (Decomposition)

**Bài toán lớn = nhiều hàm nhỏ.** Mỗi hàm làm **đúng một việc** (Single Responsibility).

Bài toán: *"Tính band trung bình từ 4 kỹ năng, làm tròn IELTS, rồi xếp loại."*

Phân rã thành 3 hàm nhỏ:

```js
// Hàm 1: tính trung bình
function tinhTrungBinh(l, r, w, s) {
  return (l + r + w + s) / 4;
}

// Hàm 2: làm tròn về .0 / .5 theo chuẩn IELTS
function lamTronIelts(diem) {
  return Math.round(diem * 2) / 2;
}

// Hàm 3: xếp loại
function xepLoaiBand(band) {
  if (band >= 8.0) return "Expert";
  if (band >= 6.5) return "Competent";
  if (band >= 5.0) return "Modest";
  return "Beginner";
}

// Ghép lại — mỗi hàm là một "mắt xích"
let tb = tinhTrungBinh(6.5, 7, 6, 7); // 6.625
let band = lamTronIelts(tb);          // 6.5
let loai = xepLoaiBand(band);         // "Competent"
console.log(`Band ${band} — Trình độ ${loai}`);
```

> ⭐ **Lợi ích:** dễ đọc, dễ test từng phần, dễ sửa. Khi `lamTronIelts` sai, ta chỉ sửa đúng một chỗ.

### 3.8 Tách chức năng thành module: `import` / `export`

Khi dự án lớn, ta để các hàm liên quan vào **file riêng (module)** rồi mới import dùng.

**📄 File `tinhDiem.js` — định nghĩa và `export`:**

```js
// export từng hàm (named export)
export function tinhTrungBinh(l, r, w, s) {
  return (l + r + w + s) / 4;
}

export function lamTronIelts(diem) {
  return Math.round(diem * 2) / 2;
}

export const BAND_TOI_DA = 9.0; // export cả hằng số
```

**📄 File `main.js` — `import` về dùng:**

```js
import { tinhTrungBinh, lamTronIelts, BAND_TOI_DA } from "./tinhDiem.js";

let tb = tinhTrungBinh(6.5, 7, 6, 7);
console.log(lamTronIelts(tb), "/", BAND_TOI_DA); // 6.5 / 9
```

**📄 File `index.html` — nhớ thêm `type="module"`:**

```html
<script type="module" src="main.js"></script>
```

> ⚠️ Lưu ý khi dùng module:
> - Phải có `type="module"` trên thẻ `<script>`.
> - Đường dẫn import cần đầy đủ đuôi `.js` và bắt đầu bằng `./`.
> - Module cần chạy qua **server** (mở bằng Live Server của VS Code), không mở trực tiếp file `file://`.

> 💡 Còn **`export default`** (mỗi file một export chính) — sẽ học kỹ ở buổi sau. Buổi này dùng **named export** (`export function...`) là đủ.

---

## PHẦN 4: CẤU TRÚC LẶP (VÒNG LẶP)

### 4.1 Vì sao cần vòng lặp?

Muốn chấm 40 câu, cộng điểm 100 bài test, in 1 đến 100... ta **không** chép `console.log` 100 lần. Vòng lặp giúp **lặp lại một khối lệnh** nhiều lần.

### 4.2 Vòng lặp `for`

Dùng khi **biết trước số lần lặp**. Cấu trúc 3 phần:

```
for (khởi_tạo ; điều_kiện ; cập_nhật) {
  // khối lệnh lặp
}
```

```js
// In từ câu 1 đến câu 5
for (let i = 1; i <= 5; i++) {
  console.log(`Đang chấm câu số ${i}`);
}
```

Giải thích từng phần:
- `let i = 1` — **khởi tạo** biến đếm (chạy 1 lần đầu).
- `i <= 5` — **điều kiện** tiếp tục (kiểm tra trước mỗi vòng).
- `i++` — **cập nhật** (tăng `i` thêm 1 sau mỗi vòng). `i++` là viết tắt của `i = i + 1`.

> 💡 Lập trình viên thường **đếm từ 0** khi duyệt theo chỉ số: `for (let i = 0; i < 40; i++)`.

### 4.3 Vòng lặp `while`

Dùng khi **không biết trước số lần**, chỉ biết **điều kiện dừng**:

```js
let band = 4.5;
let soBuoiHoc = 0;

// Học cho đến khi đạt band 6.0
while (band < 6.0) {
  band = band + 0.5; // mỗi buổi tăng 0.5
  soBuoiHoc++;
}
console.log(`Cần ${soBuoiHoc} buổi để đạt band 6.0`); // 3 buổi
```

> ⚠️ **Coi chừng vòng lặp vô tận!** Nếu điều kiện **không bao giờ sai**, chương trình treo. Luôn đảm bảo có dòng làm điều kiện tiến dần tới `false` (ở trên là `band` tăng dần).

### 4.4 Vòng lặp `do...while`

Giống `while` nhưng **chạy ít nhất 1 lần** (kiểm tra điều kiện **sau** khi chạy):

```js
let luaChon;
do {
  // luôn hỏi ít nhất 1 lần
  luaChon = "Reading"; // (giả lập người dùng chọn)
  console.log("Bạn chọn kỹ năng:", luaChon);
} while (luaChon === "Quiz tiếp"); // chỉ lặp nếu còn muốn làm tiếp
```

| Loại        | Kiểm tra điều kiện | Chạy tối thiểu | Dùng khi                       |
| ----------- | ------------------ | -------------- | ------------------------------ |
| `for`       | Trước mỗi vòng     | 0 lần          | Biết trước số lần lặp          |
| `while`     | Trước mỗi vòng     | 0 lần          | Lặp theo điều kiện             |
| `do...while`| Sau mỗi vòng       | 1 lần          | Cần chạy ít nhất một lần (menu)|

### 4.5 💻 Code: Average Score (Điểm trung bình)

> *Bài kinh điển "Average Height" — phiên bản app YouPass: tính band trung bình của cả lớp.*

Cho mảng band của các học viên, tính band trung bình.

```js
const bandHocVien = [6.5, 7, 5.5, 8, 6, 7.5];

let tong = 0;
for (let i = 0; i < bandHocVien.length; i++) {
  tong = tong + bandHocVien[i]; // cộng dồn
}
let trungBinh = tong / bandHocVien.length;
console.log(`Band trung bình lớp: ${trungBinh}`); // 6.75
```

> 🔑 Mẫu hình **"tích luỹ" (accumulator)**: khởi tạo `tong = 0`, cộng dồn trong vòng lặp, chia cho số phần tử. `mang.length` cho biết số phần tử.

### 4.6 💻 Code: High Score (Điểm cao nhất)

Tìm band cao nhất trong lớp **mà không dùng `Math.max`**:

```js
const bandHocVien = [6.5, 7, 5.5, 8, 6, 7.5];

let caoNhat = 0;
for (let i = 0; i < bandHocVien.length; i++) {
  if (bandHocVien[i] > caoNhat) {
    caoNhat = bandHocVien[i]; // gặp đứa cao hơn → cập nhật "quán quân"
  }
}
console.log(`Band cao nhất: ${caoNhat}`); // 8
```

> 🔑 Mẫu hình **"giữ kỷ lục"**: giả định một mốc khởi đầu, mỗi vòng so sánh, gặp giá trị lớn hơn thì thay thế.

### 4.7 💻 Code: Adding Even Numbers (Cộng các số chẵn)

Tính tổng các **câu chẵn** (câu 2, 4, 6...) từ 1 đến 40 — luyện toán tử `%`:

```js
let tong = 0;
for (let i = 1; i <= 40; i++) {
  if (i % 2 === 0) {     // i chia hết cho 2 → số chẵn
    tong = tong + i;
  }
}
console.log(`Tổng các số chẵn từ 1–40: ${tong}`); // 420
```

> 💡 Có thể tối ưu: cho `i` nhảy 2 đơn vị `for (let i = 2; i <= 40; i += 2)` — khỏi cần `if`.

### 4.8 🎯 Luyện tập: FizzBuzz (câu hỏi phỏng vấn kinh điển)

> Bài test "loại" ứng viên rớt vòng gửi xe. Tưởng dễ mà nhiều người sai!

**Đề:** In các số từ 1 đến 100, nhưng:
- Chia hết cho **3** → in `"Fizz"`.
- Chia hết cho **5** → in `"Buzz"`.
- Chia hết cho **cả 3 và 5** → in `"FizzBuzz"`.
- Còn lại → in chính con số đó.

```js
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");        // ⚠️ phải xét điều kiện này TRƯỚC
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

> 🔑 **Bẫy kinh điển:** phải kiểm tra `chia hết cho cả 3 và 5` **đầu tiên**. Nếu để sau, số 15 đã rơi vào nhánh `Fizz` mất rồi → không bao giờ ra `FizzBuzz`. **Thứ tự điều kiện = sống còn** (nhắc lại bài Phần 2.4!).

---

## PHẦN 5: TỔNG KẾT NHANH (Cheat Sheet)

**Biến & kiểu dữ liệu**

| Khái niệm        | Cú pháp                              |
| ---------------- | ------------------------------------ |
| Khai báo (đổi được)| `let x = 5;`                       |
| Hằng số          | `const TONG = 40;`                   |
| Kiểu cơ bản       | `number`, `string`, `boolean`        |
| In + xem kiểu     | `console.log(x); console.log(typeof x);` |
| Hàm toán          | `Math.round / floor / ceil / max / min` |
| Format chuỗi      | `` `Xin chào ${ten}` ``              |

**Điều kiện**

| Khái niệm     | Cú pháp                                |
| ------------- | -------------------------------------- |
| So sánh        | `=== !== > < >= <=`                    |
| Logic          | `&&` (và), `\|\|` (hoặc), `!` (không)  |
| Rẽ nhánh        | `if / else if / else`                 |
| Nhiều giá trị   | `switch (x) { case ...: break; }`     |
| Rút gọn         | `dk ? A : B` (ternary)                |

**Function**

| Khái niệm        | Cú pháp                              |
| ---------------- | ------------------------------------ |
| Khai báo          | `function ten(thamSo) { ... }`       |
| Arrow             | `const ten = (thamSo) => { ... };`   |
| Trả kết quả        | `return giaTri;`                    |
| Module            | `export function...` / `import { } from "./file.js"` |

**Vòng lặp**

| Loại         | Cú pháp                                    |
| ------------ | ------------------------------------------ |
| `for`        | `for (let i = 0; i < n; i++) { }`          |
| `while`      | `while (điều_kiện) { }`                    |
| `do...while` | `do { } while (điều_kiện);`                |

> 💡 **Mẹo luyện tập:** lên [freeCodeCamp](https://www.freecodecamp.org/) hoặc mở Console của trình duyệt gõ thử mọi ví dụ trong bài. Lập trình là **học bằng tay**, không học bằng mắt!

---

## 📌 CHECKLIST SAU BUỔI HỌC

Học viên tự đánh giá — đã làm được chưa?

- [ ] Khai báo biến `let` / `const`, phân biệt khi nào dùng cái nào.
- [ ] Gọi tên 3 kiểu cơ bản và dùng `typeof` để kiểm tra.
- [ ] In ra màn hình và format chuỗi bằng `` `${...}` ``.
- [ ] Dùng `Math` để làm tròn và tìm max/min.
- [ ] Viết `if-else if-else` và `switch-case` để xếp loại band.
- [ ] Dùng toán tử 3 ngôi cho lựa chọn ngắn.
- [ ] Viết function có tham số và `return`, hiểu DRY.
- [ ] Phân rã một bài toán thành nhiều hàm nhỏ.
- [ ] `export` / `import` giữa 2 file.
- [ ] Viết `for` / `while`, giải được Average / High Score / Even / FizzBuzz.

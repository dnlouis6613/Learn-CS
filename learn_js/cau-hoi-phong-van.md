# CÂU HỎI PHỎNG VẤN - BÀI 4 (Nhập môn JavaScript)

> Bộ câu hỏi kiểm tra mức độ hiểu bài của học sinh sau LS4 (Biến, Điều kiện, Function, Vòng lặp).
> 📄 **Đáp án dành cho giáo viên** nằm ở file riêng: [`dap-an-phong-van.md`](./dap-an-phong-van.md)

---

## PHẦN 1: BIẾN & KIỂU DỮ LIỆU

### Câu hỏi lý thuyết

**Q1.** Biến là gì? Vì sao ta cần dùng biến thay vì viết thẳng giá trị?

---

**Q2.** Phân biệt `let` và `const`. Khi nào nên dùng cái nào? Vì sao nên ưu tiên `const`?

---

**Q3.** Kể tên 3 kiểu dữ liệu cơ bản đã học và cho một ví dụ thực tế của mỗi kiểu trong app luyện thi.

---

**Q4.** Nêu ít nhất 3 quy tắc đặt tên biến. `band` và `Band` có phải cùng một biến không?

---

**Q5.** `typeof` dùng để làm gì? `typeof "6.5"` trả về gì?

---

### Câu hỏi tình huống

**Q6.** Kết quả của `console.log("3" + 4)` là gì? Vì sao? Còn `console.log(3 + 4)`?

---

**Q7.** Viết một dòng dùng template literal để in: `Học viên Minh đạt band 6.5.` từ 2 biến `ten` và `band`.

---

**Q8.** Cần làm tròn `6.625` về `6.5` (chuẩn IELTS). Viết biểu thức dùng `Math`.

---

## PHẦN 2: CẤU TRÚC ĐIỀU KIỆN

### Câu hỏi lý thuyết

**Q9.** Một giá trị `boolean` có những giá trị nào? Cho ví dụ một biểu thức so sánh trả về `boolean`.

---

**Q10.** Vì sao nên dùng `===` thay vì `==`? Cho ví dụ minh hoạ sự khác nhau.

---

**Q11.** Phân biệt 3 toán tử logic `&&`, `||`, `!`. Mỗi cái cho một ví dụ.

---

**Q12.** Trong `switch-case`, từ khoá `break` có tác dụng gì? Điều gì xảy ra nếu quên `break`?

---

**Q13.** Viết lại đoạn `if-else` sau bằng toán tử 3 ngôi:
```js
let kq;
if (band >= 6.0) {
  kq = "Đậu";
} else {
  kq = "Trượt";
}
```

---

### Câu hỏi tình huống

**Q14.** Cho đoạn code xếp loại sau. Với `band = 9.0` nó in ra gì? Có vấn đề gì về **thứ tự** điều kiện không?
```js
if (band >= 5.0) console.log("Modest");
else if (band >= 6.5) console.log("Competent");
else if (band >= 8.0) console.log("Expert");
```

---

**Q15.** `=` và `===` khác nhau thế nào? Điều gì xảy ra nếu viết nhầm `if (band = 6.0)`?

---

## PHẦN 3: FUNCTION

### Câu hỏi lý thuyết

**Q16.** Function dùng để làm gì? Nguyên tắc DRY nghĩa là gì?

---

**Q17.** Phân biệt **parameter** và **argument**.

---

**Q18.** `console.log` và `return` khác nhau ở điểm cốt lõi nào? Khi nào dùng cái nào?

---

**Q19.** Điều gì xảy ra với các dòng code nằm **sau** `return` trong một hàm?

---

**Q20.** "Tư duy phân rã hàm" là gì? Vì sao nên chia một bài toán lớn thành nhiều hàm nhỏ?

---

### Câu hỏi tình huống

**Q21.** Viết hàm `tinhPhanTram(dung, tong)` trả về phần trăm. Sau đó gọi để in `87.5` cho 35/40 câu.

---

**Q22.** Để dùng một hàm ở file khác, ta cần làm 2 việc gì (ở file định nghĩa và ở file sử dụng)? Thẻ `<script>` cần thuộc tính gì?

---

## PHẦN 4: VÒNG LẶP

### Câu hỏi lý thuyết

**Q23.** Nêu 3 phần trong cú pháp `for (...; ...; ...)`. Mỗi phần chạy khi nào?

---

**Q24.** Khi nào dùng `for`, khi nào dùng `while`? `do...while` khác `while` ở điểm gì?

---

**Q25.** "Vòng lặp vô tận" là gì? Làm sao để tránh?

---

### Câu hỏi tình huống

**Q26.** Cho `const arr = [6.5, 7, 5.5, 8];`. Viết vòng `for` tính **tổng** rồi in **trung bình** (không dùng hàm có sẵn).

---

**Q27.** Viết vòng lặp tính **tổng các số chẵn** từ 1 đến 50.

---

**Q28.** (FizzBuzz) Trong bài FizzBuzz, vì sao **bắt buộc** phải kiểm tra điều kiện "chia hết cho cả 3 và 5" **trước tiên**? Nếu để cuối thì sao?

# CÂU HỎI PHỎNG VẤN - BÀI 5: MẢNG & OBJECT

> 📋 Tập hợp 35 câu kiểm tra hiểu bài cho học viên. Dùng để ôn tập, kiểm tra, hoặc làm bài trắc nghiệm.

---

## PHẦN 1: MẢNG CƠ BẢN (Câu 1–8)

**Câu 1:** mảng `[1, 2, 3]` có độ dài bao nhiêu? Chỉ số của phần tử `3` là bao nhiêu?

**Câu 2:** Khác nhau giữa truy cập phần tử bằng `arr[0]` và `arr.get(0)` là gì?

**Câu 3:** Cho mảng `[5, 10, 15]`, dùng lệnh nào để thêm `20` vào cuối?

**Câu 4:** Phương thức `push()` trả về giá trị gì?

**Câu 5:** Viết đoạn code lấy ra phần tử cuối cùng của mảng `arr` (mà không biết độ dài).

**Câu 6:** Cho mảng `[1, 2, 3, 4, 5]`, dùng `slice()` để lấy ra `[2, 3]` (mà không thay đổi mảng gốc).

**Câu 7:** Khác nhau chính giữa `slice()` và `splice()` là gì?

**Câu 8:** Cho mảng `[10, 20, 30, 40]`, viết code để xóa phần tử `30`.

---

## PHẦN 2: VÒ LẶP QUA MẢNG (Câu 9–14)

**Câu 9:** Viết vòng lặp `for` để in tất cả phần tử của mảng `[1, 2, 3]` ra Console.

**Câu 10:** Khác nhau giữa `for` và `forEach()` là gì? Khi nào dùng cái nào?

**Câu 11:** Viết code dùng `for...of` để duyệt mảng `["A", "B", "C"]`.

**Câu 12:** `forEach()` có trả về mảng mới không?

**Câu 13:** Cho mảng `[1, 2, 3]`, viết `forEach` để in ra: "Index 0: 1", "Index 1: 2", ...

**Câu 14:** Khi dùng `forEach`, làm sao để dừng vòng lặp sớm (giống `break`)?

---

## PHẦN 3: MAP & FILTER (Câu 15–21)

**Câu 15:** `map()` và `filter()` có gì giống nhau và khác nhau?

**Câu 16:** Cho mảng `[1, 2, 3]`, viết `map()` để được mảng `[2, 4, 6]`.

**Câu 17:** `map()` có thể trả về mảng có kích thước khác với mảng gốc không?

**Câu 18:** Cho mảng `[1, 2, 3, 4, 5]`, viết `filter()` để lọc ra những số chẵn.

**Câu 19:** Viết `filter()` để lọc ra những Object `{ name: "...", age: ... }` có `age > 18`.

**Câu 20:** Kết hợp `filter()` và `map()` để: lọc những số lẻ trong `[1, 2, 3, 4, 5]`, rồi bình phương chúng.

**Câu 21:** `filter()` trả về mảng rỗng khi nào?

---

## PHẦN 4: REDUCE (Câu 22–26)

**Câu 22:** `reduce()` có mục đích gì? Trả về gì?

**Câu 23:** Cho mảng `[1, 2, 3, 4]`, viết `reduce()` để tính tổng.

**Câu 24:** Giải thích tham số thứ hai của `reduce()` (initial value) là gì.

**Câu 25:** Viết `reduce()` để tìm số lớn nhất trong mảng `[5, 2, 8, 1, 9]`.

**Câu 26:** Viết `reduce()` để đếm số lần xuất hiện của mỗi phần tử. Ví dụ: `["A", "B", "A"]` → `{ A: 2, B: 1 }`.

---

## PHẦN 5: FIND, FINDINDEX, INCLUDES (Câu 27–30)

**Câu 27:** `find()` và `filter()` có gì khác nhau?

**Câu 28:** Cho mảng `[1, 2, 3, 4, 5]`, dùng `find()` để tìm số đầu tiên > 3.

**Câu 29:** `findIndex()` trả về gì nếu không tìm thấy?

**Câu 30:** Viết code dùng `includes()` để kiểm tra mảng `["A", "B", "C"]` có chứa `"B"` không.

---

## PHẦN 6: OBJECT CƠ BẢN (Câu 31–35)

**Câu 31:** Khác nhau giữa `obj.key` và `obj["key"]` là gì?

**Câu 32:** Cho Object `{ name: "An", age: 25 }`, viết code để sửa `age` thành 26 và thêm `city: "Hà Nội"`.

**Câu 33:** Viết code để xóa thuộc tính `age` khỏi Object.

**Câu 34:** `Object.keys()`, `Object.values()`, `Object.entries()` trả về cái gì?

**Câu 35:** Viết vòng lặp `for...in` để duyệt Object `{ a: 1, b: 2, c: 3 }` và in từng cặp key-value.

---

## BONUS: MẢNG OBJECT & BÀI TOÁN THỰC TẾ (Câu 36–40)

**Câu 36:** Tạo mảng chứa 3 Object học viên với thuộc tính `name` và `score`.

**Câu 37:** Dùng `map()` để lấy danh sách tên từ mảng Object học viên.

**Câu 38:** Dùng `filter()` để lọc những học viên có `score >= 7.0` từ mảng Object.

**Câu 39:** Dùng `reduce()` để tính tổng điểm của tất cả học viên.

**Câu 40:** Viết code dùng `reduce()` để nhóm học viên theo `score >= 7.0` hoặc `score < 7.0`.

---

## GỢI Ý TRẢ LỜI

| Câu | Gợi ý                                                                                                                | Ý chính                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 1   | `arr.length`, `arr.indexOf(3)`                                                                                       | Độ dài và chỉ số bắt đầu từ 0                           |
| 2   | `.get()` không tồn tại, dùng `arr[0]`                                                                                | JavaScript dùng `[]`, không phải `.get()`               |
| 3   | `arr.push(20)`                                                                                                       | push thêm vào cuối                                      |
| 4   | Độ dài mảng sau khi thêm                                                                                             | push() trả về chiều dài mới                             |
| 5   | `arr[arr.length - 1]`                                                                                                | Phần tử cuối = length - 1                               |
| 6   | `arr.slice(1, 3)`                                                                                                    | slice(start, end) không bao gồm end                     |
| 7   | slice không đổi gốc, splice đổi                                                                                      | slice trả về mảng mới, splice thay đổi gốc              |
| 8   | `arr.splice(2, 1)` hoặc `arr.splice(arr.indexOf(30), 1)`                                                             | splice(index, count) xóa                                |
| 9   | `for(let i=0; i<arr.length; i++) console.log(arr[i])`                                                                | Vòng for thường dùng được                               |
| 10  | for có index, forEach không thể break                                                                                | for lạnh lẽo, forEach dạo chơi                          |
| 11  | `for(const el of arr) console.log(el)`                                                                               | for...of duyệt giá trị, không cần index                 |
| 12  | Không, forEach() trả về undefined                                                                                    | forEach là vòng lặp, không tạo mảng mới                 |
| 13  | `arr.forEach((el, i) => console.log(...))`                                                                           | forEach nhận 2 tham số: giá trị, index                  |
| 14  | Không thể dùng break. Dùng return để bỏ qua hoặc để flag                                                             | forEach không hỗ trợ break, phải dùng cách khác         |
| 15  | Cả hai trả về mảng mới, map biến đổi, filter lọc                                                                     | map: 1 input → 1 output, filter: 1 input → có/không     |
| 16  | `arr.map(x => x * 2)`                                                                                                | map nhân đôi mỗi phần tử                                |
| 17  | Không, map luôn cùng kích thước                                                                                      | map(f) trả về mảng dài bằng input                       |
| 18  | `arr.filter(x => x % 2 === 0)`                                                                                       | filter giữ những x mà điều kiện true                    |
| 19  | `arr.filter(obj => obj.age > 18)`                                                                                    | filter hoạt động với Object giống array                 |
| 20  | `[1,2,3,4,5].filter(x=>x%2!==0).map(x=>x*x)`                                                                         | Chain filter rồi map                                    |
| 21  | Khi không có phần tử thoả điều kiện                                                                                  | filter([...], false) → []                               |
| 22  | Gộp tất cả phần tử thành 1 giá trị                                                                                   | reduce: (accumulator, current) => ...                   |
| 23  | `arr.reduce((s, x) => s + x, 0)`                                                                                     | reduce với initial 0, cộng dần                          |
| 24  | Giá trị khởi đầu của accumulator                                                                                     | Bắt đầu từ giá trị này, nếu bỏ qua thì dùng phần tử đầu |
| 25  | `arr.reduce((max, x) => x > max ? x : max)`                                                                          | reduce so sánh, giữ giá trị lớn hơn                     |
| 26  | `reduce((cnt, el) => { cnt[el] = (cnt[el] \|\| 0) + 1; return cnt; }, {})`                                           | reduce tích luỹ thành Object                            |
| 27  | find trả về 1 phần tử, filter trả về mảng                                                                            | find dừng ở phần tử đầu, filter lọc tất cả              |
| 28  | `arr.find(x => x > 3)`                                                                                               | find trả về 4 (phần tử đầu > 3)                         |
| 29  | -1                                                                                                                   | findIndex(...) → -1 nếu không tìm                       |
| 30  | `arr.includes("B")`                                                                                                  | includes trả về boolean                                 |
| 31  | Cả hai đều truy cập, `obj[key]` dùng được với key động                                                               | obj.key cho key cố định, obj[key] cho key biến          |
| 32  | `obj.age = 26; obj.city = "Hà Nội"`                                                                                  | Gán trực tiếp vào Object                                |
| 33  | `delete obj.age`                                                                                                     | delete xóa thuộc tính                                   |
| 34  | Keys = mảng khóa, values = mảng giá trị, entries = mảng [key, value]                                                 | Object.keys/values/entries trả về mảng                  |
| 35  | `for(const key in obj) console.log(key, obj[key])`                                                                   | for...in duyệt key của Object                           |
| 36  | `[{ name: "An", score: 7.0 }, ...]`                                                                                  | mảng chứa Object                                        |
| 37  | `arr.map(hv => hv.name)`                                                                                             | map lấy từng name                                       |
| 38  | `arr.filter(hv => hv.score >= 7.0)`                                                                                  | filter lọc theo điều kiện                               |
| 39  | `arr.reduce((s, hv) => s + hv.score, 0)`                                                                             | reduce cộng score                                       |
| 40  | `arr.reduce((nhom, hv) => { nhom[hv.score >= 7.0 ? "pass" : "fail"].push(hv); return nhom; }, {pass: [], fail: []})` | reduce nhóm Object                                      |

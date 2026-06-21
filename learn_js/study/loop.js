/*
in ra số từ 1 - 100
 console.log(1)
 console.log(2)
 console.log(3)
 console.log(4)
 console.log(5)
 ...
 console.log(100)
 for (let i = 1; i <= 100; i++) {
    i = 1, 2, 3, 4, 5, 6, 7, 8, 9, ..., 100
   console.log(i);
 }
*/

// In ra các số chia hết cho 3 và 5 trong khoảng từ 10 - 100
for (let i = 10; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

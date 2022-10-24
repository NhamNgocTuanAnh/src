# Bài kiểm tra week 3 JS Basic

## Câu 1.  Hoisting trong Javascript xảy ra như thế nào?

```
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

A: Lydia and undefined<br>
B: Lydia and ReferenceError <br>
C: ReferenceError and 21 <br>
D: undefined and ReferenceError

---
**Đáp án:** D

Bên trong Function này, trước tiên chúng ta khai báo biến name bằng từ khóa var. Điều này có nghĩa là hoisting đã xảy ra (không gian bộ nhớ được thiết lập trong giai đoạn tạo, nhưng chưa thực hiện phép gán giá trị) với giá trị mặc định là undefined, tiếp sau đó chúng ta mới thực sự định nghĩa biến name.


Trước khi cố gắng log biến name thì chúng ta chưa hề định nghĩa biến name nào, vì hoisting xảy ra và biến name giữ giá trị là undefined.


Các biến với từ khóa let (và const) cũng được hoisting, nhưng không giống như từ khóa var, chúng không thể truy cập trước khi chúng thực sự được khởi tạo.


Đây được gọi là "Vùng chết tạm thời". Do đó, khi cố gắng truy cập các biến này trước khi được khai báo. Javascript sẽ ném ra ReferenceError.

## Câu 2. Vòng lặp sử dụng var hoặc let trong Javascript có gì khác nhau?

```
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

A: `0 1 2` and `0 1 2`<br>
B: `0 1 2` and `3 3 3`<br>
C: `3 3 3` and `0 1 2`<br>

---
**Đáp án:** C

Bởi vì hàng đợi sự kiện trong JavaScript, hàm callback setTimeout() được gọi sau khi vòng lặp được thực thi.

Và do biến i trong vòng lặp đầu tiên được khai báo bằng từ khóa var, nên giá trị này là toàn cục.

Trong vòng lặp, chúng ta đã tăng giá trị của i lên 1 lần, bằng cách sử dụng toán tử ++. Vào thời điểm hàm callback setTimeout() được gọi, i đã có giá trị bằng 3 ở trong vòng lặp for đầu tiên.

Trong vòng lặp for thứ hai, biến i được khai báo bằng từ khóa let: Biến được khai báo với từ khóa let (và const) có phạm vi dạng block hay còn gọi là block-scoped (Phạm vi trong dấu ngoặc { }).

Trong mỗi lần lặp, ta sẽ có một giá trị mới và mỗi giá trị nằm trong phạm vi của vòng lặp.

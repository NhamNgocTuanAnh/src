# Chương 10. Number javascript.
Bạn có thể sử dụng bốn loại literals số: thập phân, nhị phân, bát phân, và hệ thập lục phân.
## 10.1. Decimal numbers - thập phân
Lưu ý rằng các số hệ thập phân có thể bắt đầu với một số không (0) theo sau bởi một chữ số thập phân, nhưng nếu mỗi chữ số sau khi số 0 đứng đầu nhỏ hơn 8, số được phân tích cú pháp như một số bát phân.
```
1234567890
42

// Caution when using leading zeros:

0888 // 888 parsed as decimal
0777 // parsed as octal in non-strict mode (511 in decimal)

```
## 10.2. Binary numbers - nhị phân
Cú pháp số nhị phân sử dụng số 0 đứng đầu, sau đó là chữ thường hoặc chữ hoa Latin "B" (0b hoặc 0B). Nếu các chữ số sau 0b không phải là 0 hoặc 1, thì lỗi SyntaxError sau đây được ném ra: "Missing binary digits after 0b".
```
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607

```
## 10.3. Octal numbers - bát phân
Octal cú pháp số sử dụng một số không hàng đầu. Nếu các chữ số sau 0 nằm ngoài phạm vi từ 0 đến 7, số sẽ được diễn giải như một số thập phân.
```
var n = 0755; // 493
var m = 0644; // 420

```
Chế độ nghiêm ngặt trong ECMAScript 5 cấm cú pháp bát phân. Cú pháp Octal không phải là một phần của ECMAScript 5, nhưng nó được hỗ trợ trong tất cả các trình duyệt bằng cách đặt trước số bát phân với số không: 0644 === 420 và "\ 045" === "%". Trong ECMAScript 2015, số bát phân được hỗ trợ nếu chúng được đặt trước bằng 0o, ví dụ:
```
var a = 0o10; // ES2015: 8
```
## 10.4. Hexadecimal numbers - thập lục phân
Cú pháp số thập lục phân sử dụng số 0 đứng đầu, sau đó là chữ thường hoặc chữ hoa X "" (0x hoặc 0X). Nếu các chữ số sau 0x nằm ngoài phạm vi (0123456789ABCDEF), thì lỗi SyntaxError sau đây được ném ra: "Identifier starts immediately after numeric literal".
```
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

## 10.5. Exponentiation - lũy thừa
```
1E3   // 1000
2e6   // 2000000
0.1e2 // 10
```

## 10.6. Hàm có sẵn
| Method | Description |
| --- | --- |
| Number.parseFloat() | Phân tích một đối số chuỗi và trả về một số floating point. Giống như hàm parseFloat() |
| Number.parseInt() | Phân tích một đối số chuỗi và trả về một số interger. Giống như hàm parseInt() |
| Number.isFinite() | Xác định xem giá trị được truyền có là một số hữu hạn. |
| Number.isInteger() | Xác định xem giá trị được truyền có phải là số nguyên hay không. |
| Number.isNaN() | Xác định xem giá trị được truyền là NaN hay không |
| Number.isSafeInteger() | Xác định xem giá trị được cung cấp có phải là số nguyên là số nguyên an toàn. |
# Chương 11. Math object
| Method | Description |
| --- | --- |
| abs() | Giá trị tuyệt đối |
| sin(), cos(), tan() | Các hàm lượng giác chuẩn; với các đối số trong radian. |
| asin(), acos(), atan(), atan2() | Hàm lượng giác nghịch đảo; giá trị trả về theo radian. |
| sinh(), cosh(), tanh() | Hàm hyperbol; đối số trong góc hyperbol. |
| asinh(), acosh(), atanh() | Hàm hyperbol đảo ngược; trả lại các giá trị trong góc hyperbol. |
| pow(), exp(), expm1(), log10(), log1p(), log2() | Hàm mũ và logarithmic. |
| floor(), ceil() | Trả về số nguyên lớn nhất / nhỏ nhất ít hơn hoặc bằng đối số. |
| min(), max() | Trả về giá trị nhỏ nhất hoặc lớn nhất (tương ứng) của một danh sách các số được phân cách bằng dấu phẩy làm đối số. |
| random() | Trả về một số ngẫu nhiên giữa 0 và 1. |
| round(), fround(), trunc(), | Các hàm làm tròn và cắt xén. |
| sqrt(), cbrt(), hypot() | căn bậc hai, căn bậc ba, căn bậc hai của tổng các đối số vuông. |
| sign() | Dấu của một số, cho biết số đó là dương, âm hay không. |
| clz32(), imul() | Số lượng các bit không bằng 0 hàng đầu trong biểu diễn nhị phân 32 bit. Kết quả của nhân giống như C-32 bit của hai đối số. |

# Chương 12. Date object
```
var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //returns days left in the year

```

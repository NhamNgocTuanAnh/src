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

# Chương 8.  Toán tử JavaScript
* Assignment operators
* Comparison operators
* Arithmetic operators
* Bitwise operators
* Logical operators
* String operators
* Conditional (ternary) operator
* Comma operator
* Unary operators
* Relational operator
## 8.1. Assignment operators
Toán tử gán đơn giản bằng `(=)`, nó chỉ định giá trị của toán hạng bên phải cho toán hạng trái của nó. Đó là, `x = y` gán giá trị của y cho x.

Ngoài ra còn có các toán tử gán phức hợp được viết tắt cho các hoạt động được liệt kê trong bảng sau:

### 8.1.1. Toán tử gán phức hợp
| Name | Shorthand operator | Meaning |
| --- | --- | --- |
| Assignment | x = y | x = y |
| Addition assignment | x += y | x = x + y |
| Subtraction assignment | x -= y | x = x - y |
| Multiplication assignment | x \*= y | x = x \* y |
| Division assignment | x /= y | x = x / y |
| Remainder assignment | x %= y | x = x % y |
| Exponentiation assignment | x \*\*= y | x = x \*\* y |
| Left shift assignment | x \<\<= y | x = x \<\< y |
| Right shift assignment | x >>= y | x = x >> y |
| Unsigned right shift assignment | x >>>= y | x = x >>> y |
| Bitwise AND assignment | x &= y | x = x & y |
| Bitwise XOR assignment | x ^= y | x = x ^ y |
| Bitwise OR assignment | x | \= y |

> Đối với phép gán phức tạp hơn, cú pháp gán destructuring là một biểu thức JavaScript mà làm cho nó có thể để trích xuất dữ liệu từ mảng hoặc đối tượng sử dụng một cú pháp phản ánh việc xây dựng các mảng và đối tượng literals.
### 8.1.2.  Destructuring
```
var foo = ['one', 'two', 'three'];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// with destructuring
var [one, two, three] = foo;
```
## 8.2. Comparison operators
Một toán tử so sánh sẽ so sánh các toán hạng của nó và trả về giá trị logic dựa trên việc so sánh là đúng hay không. Các toán hạng có thể là số, chuỗi, logical, hoặc các giá trị đối tượng. Các chuỗi được so sánh dựa trên tiêu chuẩn lexicography ordering, sử dụng các giá trị Unicode. Trong hầu hết các trường hợp, nếu hai toán hạng không cùng kiểu, JavaScript sẽ cố gắng chuyển đổi chúng thành một loại thích hợp để so sánh. Hành vi này thường kết quả trong việc so sánh các toán hạng về số lượng. Ngoại lệ duy nhất đối với chuyển đổi kiểu trong các so sánh liên quan đến các toán tử === và !==, thực hiện các so sánh nghiêm ngặt và bất bình đẳng. Các toán tử này không cố gắng chuyển đổi các toán hạng thành các kiểu tương thích trước khi kiểm tra sự bình đẳng. Bảng dưới đây mô tả các toán tử so sánh cho đoạn code sau:
```
var var1 = 3;
var var2 = 4;
```
| Operator | Description | Examples returning true |
| --- | --- | --- |
| Equal (==) | trả về true nếu toán hạng là bằng nhau. | 3 == var1 hoặc "3" == var1 hoặc 3 == '3' |
| Not equal (!=) | trả về true nếu toán hạng là không bằng nhau. | var1 != 4 hoặc var2 != "3" |
| Strict equal (===) | trả về true nếu toán hạng là bằng nhau và cùng kiểu. | 3 === var1 |
| Strict not equal (!==) | trả về true nếu toán hạng cùng kiểu nhưng khác giá trị, hoặc là khác kiểu. | var1 !== "3" hoặc 3 !== '3' |
| Greater than (>) | trả về true nếu toán hạng bên trái là lớn hơn toán hạng bên phải. | var2 > var1 hoặc "12" > 2 |
| Greater than or equal (>=) | trả về true nếu toán hạng bên trái là lớn hơn hoặc bằng toán hạng bên phải. | var2 >= var1 hoặc var1 >= 3 |
| Less than (\<) | trả về true nếu toán hạng bên trái là nhỏ hơn toán hạng bên phải. | var1 \< var2 hoặc "2" \< 12 |
| Less than or equal (\<=) | trả về true nếu toán hạng bên trái là nhỏ hơn hoặc bằng toán hạng bên phải. | var1 \<= var2 hoặc var2 \<= 5 |

Lưu ý: (=>) không phải là toán tử, nhưng ký hiệu cho các hàm Arrow.
## 8.3. Arithmetic operators
Một Arithmetic operators - toán tử số học lấy các giá trị số (hoặc literals hoặc các biến) như các toán hạng của chúng và trả về một giá trị số duy nhất. Các toán tử số học tiêu chuẩn được bổ sung (+), trừ (-), nhân (*), và chia (/). Các toán tử này hoạt động giống như hầu hết các ngôn ngữ lập trình khác khi được sử dụng với các số dấu phẩy động. Ví dụ:
```
1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // this is true
```
Ngoài các phép tính số học chuẩn (+, -, * /), JavaScript cung cấp các toán tử số học được liệt kê trong bảng sau:
| Operator | Description | Example |
| --- | --- | --- |
| Remainder (%) | Toán tử nhị phân. Trả về số nguyên còn lại của phép chia hai toán hạng. | 12 % 5 kết quả trả về: 2. |
| Increment (++) | Toán tử Unary. Thêm một toán hạng vào toán hạng của nó. Nếu được sử dụng làm toán tử tiền tố (++ x), trả về giá trị của toán hạng sau khi thêm một; nếu được sử dụng như một toán tử postfix (x ++), trả về giá trị của toán hạng của nó trước khi thêm một. | Nếu x là 3, sau đó gọi ++x đặt x là 4 và trả về 4, trong khi x++ trả về 3 và, chỉ sau đó mới đặt x thành 4. |
| Decrement (--) | Toán tử Unary. Loại trừ một từ toán hạng của nó. Giá trị trả về tương tự như đối với toán tử (++). | Nếu x là 3, sau đó gọi --x thiết lập x thành 2 và trả về giá trị 2, trong khi x-- trả về giá trị 3 và sau đó mới đặt x thành 2. |
| Unary negation (-) | Toán tử Unary. Trả về giá trị ngược lại của toán hạng của nó. | Nếu x là 3, sau đó -x trả về giá trị là -3. |
| Unary plus (+) | Toán tử Unary. Cố gắng chuyển đổi toán hạng thành một số, nếu nó chưa là số. | +"3" trả về giá trị là 3. +true trả về giá trị là 1. |
| Exponentiation operator ( \*\* ) | Tính toán cơ bản theo mũ | 2 \*\* 3 trả về giá trị 8. 10 \*\* -1 trả về giá trị là 0.1. |
## 8.4. Bitwise operators
Một toán tử bitwise xử lý các toán hạng của chúng như là một bộ 32 bit (zeros và một), chứ không phải là số thập phân, số thập lục phân hoặc số bát phân. Ví dụ, số thập phân số chín có một biểu diễn nhị phân của 1001. Các toán tử Bitwise thực hiện hoạt động của chúng trên các đại diện nhị phân, nhưng chúng trả lại các giá trị số JavaScript chuẩn.

Bảng dưới đây tóm tắt các toán tử Bitwise của JavaScript.
| Operator | Usage | Description |
| --- | --- | --- |
| Bitwise AND | a & b | Trả về 1 trong mỗi vị trí bit mà các bit tương ứng của cả hai toán hạng đều là 1. |
| Bitwise OR | a | b |
| Bitwise XOR | a ^ b | Trả về 0 trong mỗi vị trí bit mà các bit tương ứng đều giống nhau. (Trả về 1 trong mỗi vị trí bit mà các bit tương ứng khác nhau.) |
| Bitwise NOT | ~ a | Đảo ngược các bit của toán hạng của nó. |
| Left shift | a \<\< b | dịch chuyển a sang trái b bit. các số bên phải sẽ chuyển thành 0 |
| Sign-propagating right shift | a >> b | dịch chuyển a sang phải b bit. ngược lại với phép dịch trái. |
| Zero-fill right shift | a >>> b | a bị dịch chuyển sang phải b bit và đệm 0 vào bên trái tương ứng |
# Chương 9. Expressions javascript

JavaScript có các loại biểu thức sau:

* Arithmetic - Số học: đánh giá một số, ví dụ 3.14159. (Nói chung sử dụng toán tử số học.)
* String - Chuỗi: đánh giá một chuỗi ký tự, ví dụ: "Fred" hoặc "234". (Nói chung sử dụng các toán tử chuỗi.)
* Logical- logic: đánh giá đúng hoặc sai. (Thường bao gồm các toán tử logic.)
* Primary expressions - Biểu thức chính: Các từ khóa cơ bản và các biểu thức chung trong JavaScript.
* Left-hand-side expressions - Phía bên trái biểu thức: Các giá trị còn lại là đích đến của một phép gán.

## 9.1. Grouping operator

Toán tử nhóm `()` kiểm soát sự ưu tiên của việc đánh giá trong các biểu thức. Ví dụ, bạn có thể ghi đè lên phép nhân và phân chia trước tiên, sau đó bổ sung và phép trừ để đánh giá bổ sung đầu tiên.
```
var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence
// addition before multiplication
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9
```
## 9.2. Logical operators

Toán tử logic thường được sử dụng với các giá trị Boolean (logic); khi chúng được, chúng trả về một giá trị Boolean. Tuy nhiên, && và || các toán tử thực sự trả lại giá trị của một trong những toán hạng được chỉ định, vì vậy nếu các toán tử này được sử dụng với các giá trị không phải Boolean, chúng có thể trả về một giá trị không phải Boolean. Các toán tử logic được mô tả trong bảng dưới đây.
| Toán tử | sử dụng | mô tả |
| --- | --- | --- |
| Toán tử AND (&&) | expr1 && expr2 | trả về expr1 nếu nó có thể chuyển thành false, nếu không, trả về expr2. Do đó, khi được sử dụng với các giá trị Boolean, & & trả về true nếu cả hai toán hạng là đúng; ngược lại, trả về false. |
| Toán tử OR \[ |   | \] |
| Toán tử NOT (!) | !expr1 | Trả về false nếu toán hạng đơn của nó có thể được chuyển thành true; nếu không, trả về true. |

Ví dụ về các biểu thức có thể được chuyển đổi thành false là các giá trị đánh giá là null, 0, NaN, chuỗi rỗng ("") hoặc không xác định.

Đoạn mã sau cho thấy các ví dụ của toán tử && (logical AND).
```
// Đoạn mã sau cho thấy các ví dụ của toán tử && (logical AND).
var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = 'Cat' && 'Dog';    // t && t returns Dog
var a6 = false && 'Cat';    // f && t returns false
var a7 = 'Cat' && false;    // t && f returns false
// Đoạn mã sau cho thấy các ví dụ của || (OR logic).
var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = 'Cat' || 'Dog';    // t || t returns Cat
var o6 = false || 'Cat';    // f || t returns Cat
var o7 = 'Cat' || false;    // t || f returns Cat
// Các mã sau đây cho thấy các ví dụ của! (logic NOT).
var n1 = !true;  // !t returns false
var n2 = !false; // !f returns true
var n3 = !'Cat'; // !t returns false
```
## 9.3. String operators
```
console.log('my ' + 'string'); // console logs the string "my string".
```
Ngoài các toán tử so sánh, có thể được sử dụng trên các giá trị chuỗi, toán tử nối (+) kết nối hai giá trị chuỗi với nhau, trả về một chuỗi khác là sự kết hợp của hai toán hạng string.
Toán tử gán vắn tắt += cũng có thể được sử dụng để nối các chuỗi.
```
var mystring = 'alpha';
mystring += 'bet'; // evaluates to "alphabet" and assigns this value to mystring.
```
## 9.4. Conditional (ternary) operator
```
var status = (age >= 18) ? 'adult' : 'minor';
```
Câu lệnh này chỉ định giá trị "adult" cho biến status nếu age từ 18 trở lên. Nếu không, nó chỉ định giá trị "minor" cho status.

Toán tử điều kiện là toán tử JavaScript duy nhất có ba toán hạng.
* Toán tử có thể có một trong hai giá trị dựa trên điều kiện.
* Nếu condition là true, toán tử có giá trị của val1.
* Nếu không nó có giá trị của val2. Bạn có thể sử dụng toán tử điều kiện bất cứ nơi nào bạn sẽ sử dụng một toán tử chuẩn.
## 9.5. Operator precedence

Thứ tự ưu tiên của toán tử xác định thứ tự chúng được áp dụng khi đánh giá một biểu thức. Bạn có thể ghi đè lên ưu tiên toán tử bằng cách sử dụng dấu ngoặc đơn.

Bảng dưới đây mô tả sự ưu tiên của các toán tử, từ cao nhất đến thấp nhất.
| Operator type | individual operators |
| --- | --- |
| member | . \[\] |
| call / create instance | () new |
| negation/increment | ! ~ - + ++ -- typeof void delete |
| multiply/divide | \* / % |
| addition/subtraction | \+ - |
| bitwise shift | \<\< >> >>> |
| relational | \< \<= > >= in instanceof |
| equality | \== != === !== |
| bitwise-and | & |
| bitwise-xor | ^ |
| bitwise-or | \[ |
| logical-and | && |
| logical-or | \[ |
| conditional | ?: |
| assignment | \= += -= \*= /= %= \<\<= >>= >>>= &= ^= |
| comma | , |

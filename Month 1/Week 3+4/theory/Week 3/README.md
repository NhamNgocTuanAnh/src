# Chương 1. Javascript là gì?

JavaScript chứa một thư viện chuẩn các đối tượng, chẳng hạn như Array, Date và Math, và một bộ các phần tử ngôn ngữ chính như toán tử, các cấu trúc điều khiển và các câu lệnh. JavaScript cốt lõi có thể được mở rộng cho nhiều mục đích khác nhau bằng cách bổ sung thêm các đối tượng; ví dụ:

Client-side JavaScript: Mở rộng ngôn ngữ cốt lõi bằng cách cung cấp các đối tượng để điều khiển một trình duyệt và nó là Document Object Model (DOM). Ví dụ: tiện ích mở rộng phía máy khách cho phép ứng dụng đặt các phần tử trên biểu mẫu HTML và đáp ứng các sự kiện của người dùng chẳng hạn như nhấp chuột, hình thức nhập và điều hướng trang.

Server-side JavaScript: Mở rộng ngôn ngữ cốt lõi bằng cách cung cấp các đối tượng liên quan đến việc chạy JavaScript trên máy chủ. Ví dụ, phần mở rộng phía máy chủ cho phép một ứng dụng giao tiếp với cơ sở dữ liệu, cung cấp sự liên tục của thông tin từ một lời gọi đến một ứng dụng khác, hoặc thực hiện các thao tác tập tin trên một máy chủ.
# Chương 2. Cú pháp cơ bản

## 2.1. Comments
```{javascript}
// a one line comment

/* this is a longer,
   multi-line comment
 */
```
## 2.2. Declarations
Có 3 kiểu khai báo trong javascript:
* `var`: khai báo một biến, tùy chọn khởi tạo cho nó một giá trị.
* `let`: khai báo một biến chỉ có thể truy cập được trong block bao quanh nó, khác với `var` - tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó.
* `const`: dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.
### 2.2.1. Variables
Tên của các biến, được gọi là định danh, phù hợp với quy tắc nhất định:

* Tên biến phải bắt đầu bằng một chữ cái hoặc ký tự gạch dưới `("_")` hoặc dấu `($)`
* Tên biến có thể chứa chữ số, dài ngắn tùy ý.
* JavaScript phân biệt rõ chữ hoa và chữ thường, vì vậy tên biến bao gồm các ký tự từ "A" đến "Z" `(chữ hoa)` và các ký tự từ "a" đến "z" `(chữ thường)`

**Ví dụ:** tên biến: `Number_hits`, `temp99`, `$credit`, `_name`, ...
### 2.2.2. Declaring variables
khai báo một biến theo ba cách:

* Với từ khóa `var`. Ví dụ, `var x = 42`. Cú pháp này có thể được sử dụng để khai báo cả biến địa phương và toàn cục.
* Bằng cách gán nó một giá trị. Ví dụ, `x = 42`. Điều này luôn khai báo một biến toàn cục, nếu nó được khai báo bên ngoài bất kỳ hàm nào. Nó tạo ra một cảnh báo JavaScript nghiêm ngặt. Bạn không nên sử dụng biến này.
* Với từ khóa cho. Ví dụ `let y = 13`. Cú pháp này có thể được sử dụng để khai báo một biến địa phương khối. Xem phạm vi biến bên dưới.
### 2.2.3. Evaluating variables

Một biến được khai báo sử dụng câu lệnh var hoặc let không có giá trị được gán nào được mặc định có giá trị undefined.

Nếu bạn cố gắng truy cập vào một biến chưa được khai báo sẽ sinh ra một ngoại lệ ReferenceError:
```{javascript}
var a;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined

console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;

```
Bạn có thể sử dụng undefined để xác định xem một biến có giá trị hay không. Trong đoạn mã sau đây, đầu vào biến không được gán giá trị, và câu lệnh if:
```{javascript}
var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}
```
Giá trị undefined hành xử như false khi được sử dụng trong ngữ cảnh boolean. Ví dụ, trong đoạn code sau thức hiện chức năng myFunction bởi vì phần tử myArray là undefined:
```{javascript}
var myArray = [];
if (!myArray[0]) myFunction();
```
Giá trị undefined chuyển thành NaN khi được sử dụng khi tính toán với số.
```{javascript}
var a;
a + 2;  // Evaluates to NaN
```
Khi một biến được gán là null, giá trị null có thể là 0 trong bối cảnh số và tương ứng false trong bối cảnh boolean. Ví dụ:
```{javascript}
var n = null;
console.log(n * 32); // Will log 0 to the console
```
### 2.2.4. Variable scope
Khi bạn khai báo một biến bên ngoài bất kỳ hàm nào, nó được gọi là một biến toàn cục, bởi vì nó có thể sử dụng cho bất kỳ đoạn code nào khác trong document hiện tại. Khi bạn khai báo một biến trong một hàm, nó được gọi là một biến địa phương, bởi vì nó chỉ có thể sử dụng bên trong hàm đó.

Một biến được khai báo trong một khối sẽ có phạm vi là trong một hàm mà khối đó nằm trong hàm đó. Ví dụ, biến x được khai báo trong khối lệnh if, nhưng nó được sử dụng bên ngoài khối lệnh if, trong hàm mà nó đc khai báo:
```{javascript}
if (true) {
  var x = 5;
}
console.log(x);  // x is 5
```
Nó sẽ thay đổi nếu bạn sử dụng `let` để khai báo biến trong khối, hãy xem ví dụ sau:
```{javascript}
if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y is not defined
```
### 2.2.5. Variable hoisting

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
Một điều bất thường khác về các biến trong javascript là bạn có thể tham chiếu đến một biến đã đc khai báo sau đó, mà ko nhận đc một ngoại lệ. Khái niệm được biết như hoisting; các biến trong javascript là trong một "hoisted hoặc đưa lên trên đầu các function hoặc statement. Tuy nhiên, các biến mà được đưa lên sẽ trả về một gía trị undefined. Vì vậy ngay cả khi bạn khai báo và khởi tạo sau đó bạn sử dụng hoặc tham chiếu đên biến này, nó vẫn sẽ là undefined.
```{javascript}
/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();
```
Những ví dụ trên sẽ được giải thích tương tự như sau:
```{javascript}
/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();
```
Bởi vì, tất cả các lệnh `var` trong một function nên được đặt phía trên cùng của hàm các tốt. Thức tế nó làm tăng tính rõ ràng của code.
### 2.2.6. Function hoisting
Đối với hàm thì bạn có thể dùng lời gọi hàm ở phía trên định nghĩa, khai báo hàm.
```{javascript}
/* Function declaration */

foo(); // "bar"

function foo() {
  console.log('bar');
}


/* Function expression */

baz(); // TypeError: baz is not a function

var baz = function() {
  console.log('bar2');
};
```
### 2.2.7. Global variables.
Biến toàn cục là thuộc tính của đối tượng toàn cục. Trong trang web đối tượng toàn cục là window, vì vậy bạn có thể thiết lập và truy cập đến các biến bằng cách sử dụng: window.variable syntax.

Do đó, bạn có thể truy cập các biến toàn cục được khai báo trong một window hoặc frame từ window hay frame khác bằng cách chỉ định tên window hoặc frame. Ví dụ: nếu một biến được gọi **phoneNumber** được khai báo trong một document, bạn có thể tham chiếu nó từ một iframe như sau: **parent.phoneNumber**
### 2.2.8. Constants.
Bạn có thể tạo một read-only, đặt tên hằng số với từ khóa const. Cấu trúc đặt tên hằng số là giống với cách đặt tên biến: nó phải bắt đầu bằng một chữ, dấu gạch dưới hoặc ký hiệu `($)` và có thể chứa các chữ cái, số hoặc dấu gạch dưới.a
```{javascript}
const PI = 3.14;
```
Hằng số không thể thay đổi giá trị thông qua việc gán hoặc được tái khai báo trong khi tập lệnh đang chạy. Nó phải được khởi tạo với một giá trị.

Các quy tắc phạm vi cho các hằng số giống như các quy tắc khối-phạm vi của biến. Nếu từ khoá const bị bỏ qua, thì định danh được giả định là đại diện cho một biến.

Bạn không thể khai báo một hằng có cùng tên với hàm hoặc biến trong cùng một phạm vi. Ví dụ:
```{javascript}
// THIS WILL CAUSE AN ERROR
function f() {};
const f = 5;

// THIS WILL CAUSE AN ERROR ALSO
function f() {
  const g = 5;
  var g;

  //statements
}
```
Tuy nhiên, các thuộc tính của các đối tượng được gán cho các hằng số không được bảo vệ, do đó câu lệnh sau được thực hiện mà không có vấn đề.
```{javascript}
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';
```
Trên đây là một số kiến thức cơ bản về cú pháp và khai báo biến, hằng số trong javascipt. Cảm ơn vì đã theo dõi bài viết. Mong rằng bài viết có thể giúp ích cho các bạn.
# Chương 3. Sáu kiểu dữ liệu nguyên thủy
Trong phần trước chúng ta đã tìm hiểu về một số cú pháp cơ bản và khai báo biến. Trong phần này chúng ta sẽ tìm hiểu về các kiểu dữ liệu và literals trong javaScript.

## 3.1. Data structures and types
Các tiêu chuẩn ECMAScript mới nhất xác định bảy loại dữ liệu:

Sáu kiểu **dữ liệu nguyên thủy**:
* Boolean: true và false.
* null: là từ khóa đặc biệt biểu thị một giá trị null. Bởi vì JavaScript là trường hợp nhạy cảm, null là không thể giống Null, NULL, hoặc bất kỳ biến khác.
* undefined một thuộc tính cao nhất mà giá trị là không xác định.
* Number: là kiểu số ví dụ: 42 hoặc 3.14159.
* String: kiểu chuỗi ví dụ: "Howdy"
* Symbol (trong ECMAScript 2015): là một kiểu dữ liệu mà trường hợp là unique và immutable.

Và **Object**

Mặc dù số lượng kiểu dữ liệu ít nhưng nó đủ để bạn có thể thực hiện các chức năng cho ứng dụng của mình. **Objects** and **functions** là 2 yếu tố cơ bản khác trong ngôn ngữ. Bạn có thể nghĩ về các **object** như nơi chứa các giá trị đc đặt tên và các functions như các phương thức mà ứng dụng của bạn cần thực hiện.
### 3.1.1. Data type conversion
JavaScript là một ngôn ngữ dynamically typed. Điều đó có nghĩa là bạn không phải xác định kiểu dữ liệu của một biến khi bạn khai báo, và các kiểu dữ liệu được chuyển đổi tự động khi cần thiết trong quá trình thực thi script. Ví dụ, bạn có thể định nghĩa một biến như sau:
```{javascript}
var answer = 42;
// Và sau đó, bạn có thể gán cho cùng một biến một giá trị string, ví dụ:
answer = 'Thanks for all the fish...';
```
Trong biểu thức liên quan đến các giá trị số và string với toán tử `(+)`, javascript sẽ chuyển đổi giá trị số thành các chuỗi. Hãy xem ví dụ sau:
```{javascript}
x = 'The answer is ' + 42 // "The answer is 42"
y = 42 + ' is the answer' // "42 is the answer"
```
Trong các lệnh liên quan đến các toán tử khác, javaScript không thể chuyển đổi các giá trị số thành chuỗi. Ví dụ:
```{javascript}
'37' - 7 // 30
'37' + 7 // "377"
```
### 3.1.2. Converting strings to numbers
* parseInt()
* parseFloat()
```
'1.1' + '1.1' = '1.11.1'
(+'1.1') + (+'1.1') = 2.2
// Note: the parentheses are added for clarity, not required.
```
### 3.1.3. Literals
* Array literals
* Boolean literals
* Floating-point literals
* Integers
* Object literals
* RegExp literals
* String literals

**Lưu ý:**
RegExp literals: Một regex literal là một mẫu kèm theo giữa các dấu gạch chéo. Dưới đây là một ví dụ về một cú pháp regex literal.

**A.** Using special characters in strings

Ngoài các ký tự bình thường, bạn cũng có thể bao gồm các ký tự đặc biệt trong các chuỗi, như thể hiện trong ví dụ sau.
```
'one line \n another line'
```
Bảng dưới đây liệt kê các ký tự đặc biệt mà bạn có thể sử dụng trong các chuỗi trong JavaScript.
| Column 1 | Column 2 |
| --- | --- |
| \\0 | Null Byte |
| \\b | Backspace |
| \\f | Form feed |
| \\n | Dòng mới |
| \\r | Carriage return |
| \\t | Tab |
| \\v | Tab dọc |
| ' | Dấu phẩy hoặc trích dẫn đơn |
| " | Dấu ngoặc kép |
| \\ | Ký tự dấu gạch chéo ngược |
| \\XXX | Ký tự được mã hóa Latin-1 xác định tối đa ba chữ số thập phân XXX giữa 0 và 377. Ví dụ: \\ 251 là trình tự bát phân |
| \\xXX | Ký tự được mã hoá Latin-1 xác định bởi hai số thập lục phân XX giữa 00 và FF. Ví dụ: \\ xA9 là dãy số thập lục phân |
| \\uXXXX | Ký tự Unicode được chỉ định bởi bốn chữ số thập lục phân XXXX. Ví dụ: \\ u00A9 là chuỗi Unicode |
| \\u{XXXXX} | Cho ví dụ: \\u{2F804} |

**B.** Escaping characters

Đối với các ký tự không được liệt kê trong bảng, dấu gạch chéo ngược trước đó sẽ bị bỏ qua nhưng cách sử dụng này không được dùng nữa và cần tránh.

Bạn có thể chèn dấu ngoặc kép bên trong một chuỗi bằng cách sử dụng dấu gạch chéo ngược. Đây được gọi là thoát khỏi dấu ngoặc kép. Ví dụ:

```
var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
// Kết quả của đoạn mã trên là:
// He read "The Cremation of Sam McGee" by R.W. Service.
```
Để bao gồm một dấu gạch chéo ngược trong một chuỗi, bạn phải thoát khỏi ký tự dấu gạch chéo ngược. Ví dụ, để chỉ định đường dẫn tập tin c: \ temp vào một chuỗi, sử dụng như sau:
```
var home = 'c:\\temp';
```
Bạn cũng có thể thoát khỏi các ngắt dòng bằng cách trước bằng dấu gạch chéo ngược. Dấu gạch chéo ngược và ngắt dòng đều được gỡ bỏ khỏi giá trị của chuỗi.
```
var str = 'this string \
is broken \
across multiple \
lines.'
console.log(str);   // this string is broken across multiplelines.
```
Mặc dù JavaScript không có cú pháp "heredoc", bạn có thể đóng lại bằng cách thêm dòng thoát thoát và thoát dòng thoát ở cuối mỗi dòng:

```
var poem = 'Roses are red,\n\
            Violets are blue.\n\
            Sugar is sweet,\n\
            and so is foo.'
```
# Chương 4. Các câu lệnh, cấu trúc lệnh của javaScript
Trong phần này sẽ tiếp tục tìm hiểu về các câu lệnh, cấu trúc lệnh của javaScript.
## 4.1. Block statement - Khối lệnh
Ví dụ: khối lệnh thường được sử dụng với các câu lệnh điều khiển (ví dụ: if, for, while).
```
while (x < 10) {
  x++;
}
// Ở đây, {x ++; } Là câu khối lệnh.
```
## 4.2. Conditional statements - câu lệnh điều kiện
Một câu lệnh điều kiện là một tập hợp các lệnh được thực hiện nếu điều kiện xác định là true. JavaScirpt hỗ trợ 2 lệnh điều kiện: `if ... else` và `switch`.

### 4.2.1. Lệnh if...else

Sử dụng câu lệnh if để thực hiện một câu lệnh nếu một điều kiện hợp lý là đúng. Sử dụng mệnh đề tùy chọn else để thực hiện một câu lệnh nếu điều kiện là sai. Câu lệnh if như sau:
```
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}
```
### 4.2.2. Falsy values - Các giá trị được coi là False.
* false
* undefined
* null
* 0
* NaN
* string rỗng ("")

Tất cả các giá trị khác, bao gồm tất cả các đối tượng, đánh giá là true khi pass một câu lệnh có điều kiện.

Không nhầm lẫn các giá trị boolean nguyên thủy true và false với các giá trị true và false của đối tượng Boolean. Ví dụ:
```
var b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false
```
Ví du: Trong ví dụ sau, hàm checkData trả về true nếu số ký tự trong một đối tượng Text là 3; Nếu không, nó sẽ hiển thị một alert và trả về false.
```
function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert('Enter exactly three characters. ' +  document.form1.threeChar.value + ' is not valid.');
    return false;
  }
}
```
### 4.2.3. Lệnh switch
Một câu lệnh switch cho phép một chương trình đánh giá một biểu thức và thử khớp giá trị của biểu thức (expression) với các case (label_1, label_2, ...). Nếu tìm thấy case phù hợp, chương trình sẽ thực thi câu lệnh trong case đó. Một câu lệnh switch có dạng như sau:
```
switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log('Sorry, we are out of ' + fruittype + '.');
}
console.log("Is there anything else you'd like?");

```
## 4.3. Exception handling statements
Bạn có thể ném các ngoại lệ bằng cách sử dụng câu lệnh throw và xử lý chúng bằng cách sử dụng câu lệnh `try ... catch`.

* `throw` statement
* `try...catch` statement

Exception types
Về bất kỳ đối tượng có thể được ném ra trong JavaScript. Tuy nhiên, không phải tất cả các đối tượng ném ra được tạo ra đều như nhau. Mặc dù việc ném ra numbers hoặc strings như các errors là khá phổ biến, nhưng nó sẽ hiệu quả hơn nếu sử dụng một trong các loại ngoại lệ được tạo ra đặc biệt cho mục đích này:

* ECMAScript exceptions
* DOMException và DOMError

```
try {
  try {
    throw new Error('oops');
  }
  catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

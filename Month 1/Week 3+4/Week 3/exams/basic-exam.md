# Bài kiểm tra week 3 -  JS Basic

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

Trong vòng lặp for thứ hai, biến i được khai báo bằng từ khóa let: Biến được khai báo với từ khóa let (và const) có phạm vi dạng block hay còn gọi là block-scoped (Phạm vi trong dấu ngoặc `{ }`).

Trong mỗi lần lặp, ta sẽ có một giá trị mới và mỗi giá trị nằm trong phạm vi của vòng lặp.

## Câu 3. parseInt và map

```
["1", "2", "3"].map(parseInt)

// A. ["1", "2", "3"]
// B. [1, 2, 3]
// C. [0, 1, 2]
// D. other
```

**Đáp án trả lời là D.**

Trên thực tế, kết quả trả về là \[1, NaN, NaN\] do hàm parseInt chỉ yêu cầu hai tham số parseInt(value, radix), trong khi hàm map có callbacks nhận ba tham số callback(currentValue, index, array).

Tài liệu MDN đã nói đến việc chỉ định trong parseInt() ở tham số thứ hai đó là radix là một giá trị số nguyên từ 2-36 (cơ số trong các hệ thống số toán học), để chuyển đổi cơ sở được chỉ định được sử dụng. Các mô tả [dưới đây](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt#description) giải thích một cách chi tiết hơn những gì sẽ xảy ra khi radix không được cung cấp.

Quay lại với giải thích thì nếu tham số này bị bỏ qua hoặc giá trị của nó là 0, số sẽ được phân tích cú pháp trên cơ sở 10. Nếu tham số nhỏ hơn 2 hoặc lớn hơn 36, thì parseInt trả về [NaN](https://anonystick.com/blog-developer/numberisnan-va-isnan-hieu-ve-su-khac-biet-trong-javascript-20201225545925). Ngoài ra, lỗi chuyển đổi sẽ được trả lại NaN.

Bây giờ chúng ta hãy phân tích vấn đề.

* parseInt("1", 0). Kết quả của được phân tích cú pháp dưới dạng số thập phân và trả về 1;
* parseInt("2", 1) tham số thứ hai là không hợp lệ, trả về NaN;
* parseInt("3", 2) trong hệ nhị phân, nó "3" là ký tự không hợp lệ và chuyển đổi không thành công, trả về NaN.

**Những tài liệu tham khảo:**

* MDN: [Array.prototype.map ()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* MDN: [parseInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
* Anonystick: [Number.isNaN và isNaN](https://anonystick.com/blog-developer/numberisnan-va-isnan-hieu-ve-su-khac-biet-trong-javascript-20201225545925)

## Câu 4. Null và Object

```
[typeof null, null instanceof Object]

// A. ["object", false]
// B. [null, false]
// C. ["object", true]
// D. other
```

**Đáp án trả lời là A.**

Trong MDN và blog javascript cũng đề cập về null khá nhiều, thực tế cho đến bây giờ null cũng là một object cho nên typeof null có kết quả bằng object. Những đó là một lỗi của ECMAScript, đã đươc thừa nhận. Trên thực tế, là null là phải là null. Vì sao những nhà phát triển js thừa nhận type null sẽ bằng null nhưng vẫn phải thừa nhận là một object.

_**Quay lại lịch sử lâu đời đã tồn tại trong JavaScript gần hai thập kỷ và có thể không bao giờ được sửa vì liên quan đến quá nhiều hệ thống Web. Việc sửa nó sẽ tạo ra nhiều lỗi hơn và khiến nhiều hệ thống không thể hoạt động bình thường. Cho nên chấp nhận cho đến ngay hôm nay và có khi đến mai sau.**_

Cũng chính lý do đó cho nên instanceof được các nhà phát hành cho ra đời nhằm để kiểm tra xem một Object có một cấu trúc chuỗi chức năng nguyên mẫu của nó prototype sở hữu giá trị null. Và dùng để check lại vấn đề này, cho nên một cách dứt khoát để check là dùng instanceof.

Theo bản thân tôi thì hiểu về instanceof thì cẩn phải có một bài viết thật chi tiết hơn nữa. Vì nó liên quan đến quá trình lịch sử js.

Tài liệu tham khảo:

* MDN: [Null](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)
* MDN: [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
* Anonystick: [Tips and tricks](https://anonystick.com/tips-and-tricks/nullish-coalescing-javascript)

## Câu 5. Reduce javascript

```
[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]

// A. an error
// B. [9, 0]
// C. [9, NaN]
// D. [9, undefined]
```

Đáp án trả lời là **A**. Tài liệu MDN cho biết về Array.prototype.reduce() rất rõ ràng như sau:

"Nếu mảng rỗng, và initialValue không được cung cấp, gọi reduce() sẽ gây ra lỗi TypeError. Nếu mảng chỉ có một phần tử có giá trị (bất kể vị trí index) đồng thời không có initialValue, hoặc có initialValue nhưng mảng lại rỗng, thì giá trị duy nhất đó sẽ được trả về và callback sẽ không được gọi."

Những tài liệu tham khảo:

* MDN: [reduce](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
* AST: [25 trường hợp sử dụng reduce javascript](https://anonystick.com/blog-developer/25-truong-hop-su-dung-reduce-javascript-2020062089156060)
* AST: [Reduce nâng cao](https://anonystick.com/blog-developer/javascript-reduce-nang-cao-arrayprototypereduce-tutorial-2019041273772614)

## Câu 6. Độ ưu tiên của toán tử

```
var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');

// A. Value is Something
// B. Value is Nothing
// C. NaN
// D. other
```

Câu trả lời là **D**.

Thực tế sẽ có kết quả là "Something", bởi vì trong js thì có một khía cạnh là độ ưu tiên của toán tử sử dụng trong mỗi câu lệnh, và ở đây là toán tử +.

Tài liệu tham khảo:

* MDN: [Toán tử ưu tiên trong javascript](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Câu 7. Tìm hiểu về Hoisting

```
var name = 'World!'; (function () { if (typeof name === 'undefined') { var name = 'Jack'; console.log('Goodbye ' + name); } else { console.log('Hello ' + name); } })(); // A. Goodbye Jack // B. Hello Jack // C. Hello undefined // D. Hello World

```

Câu trả lời là A.

Để hiểu được về những bài toán này thì trước hết bạn phải hiểu về khái niệm Hoisting trong javascript.  Để hiều hơn chúng ta có thể chuyển đổi hàm về như sau:

```
var name = 'World!';
(function () {
    var name;
    if (typeof name === 'undefined') {
      name = 'Jack';
      console.log('Goodbye ' + name);
    } else {
      console.log('Hello ' + name);
    }
})();
```

Điều này có nghĩa là bạn có thể tham chiếu đến một hàm hoặc biến trước khi khai báo nó, hoặc bạn có thể nói: một biến hoặc hàm có thể được khai báo sau khi nó được tham chiếu.

Tài liệu nên tham khảo:

* MDN: Hoisting

* ANS: Hoisting trong javascript

## Câu 8. Bẫy sử dụng vòng lặp

```
var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
  count++;
}
console.log(count);

// A. 0
// B. 100
// C. 101
// D. other
```

Câu trả lời là `D`.

Trong JavaScript, **2^53** là giá trị lớn nhất và không có giá trị nào lớn hơn. Do đó **2^53 + 1 == 2^53**, chu kỳ này không thể được chấm dứt.

## Câu 9. Filter

```
var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x) {
  return x === undefined;
});

// A. [undefined x 7]
// B. [0, 1, 2, 10]
// C. []
// D. [undefined]
```

Câu trả lời là `C`.

Xem mô tả của tài liệu MDN chính thức: Filter gọi hàm callbacks một lần cho mỗi phần tử trong mảng và tạo một mảng mới với tất cả các phần tử thực hiện lệnh callbacks trả về true hoặc giá trị tương đương với true. callback sẽ chỉ được gọi trên các chỉ mục đã được gán và sẽ không được gọi trên các chỉ mục đã bị xóa hoặc không bao giờ được gán. Những phần tử không đạt yêu cầu kiểm tra gọi lại sẽ bị bỏ qua và sẽ không được đưa vào mảng mới.

Tài liệu nên đọc:

* MDN: Filter

* ANS: Filter nâng cao!

# Câu 10. IEEE 754 là gì?

```
var two = 0.2;
var one = 0.1;
var eight = 0.8;
var six = 0.6;
[two - one == one, eight - six == two]

// A. [true, false]
// B. [false, false]
// C. [true, false]
// D. other
```

Câu trả lời là **C**.

JavaScript sử dụng định dạng số dấu phẩy động có độ chính xác kép, là tiêu chuẩn **IEEE 754** . Ở định dạng này, một số con số không thể được thể hiện, chẳng hạn như :, **0.1 + 0.2 = 0.30000000000000004** đây không phải là JavaScript, tất cả các ngôn ngữ áp dụng tiêu chuẩn này đều có vấn đề này, chẳng hạn như: Java, Python, v.v.

Tài liệu tham khảo:

* Wiki: [Double-precision floating-point format](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)

## Câu 10. Một cái bẫy với switch

```
function showCase(value) {
  switch(value) {
    case 'A':
      console.log('Case A');
      break;
    case 'B':
      console.log('Case B');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('Do not know!');
  }
}
showCase(new String('A'));

// A. Case A
// B. Case B
// C. Do not know!
// D. undefined
```

Câu trả lời là **C**.

Trong switch việc sử dụng toán tử **\===** phán đoán bình đẳng nội bộ , và **new String("A")** trả về một đối tượng, và **String("A")** là một chuỗi trả về trực tiếp là "A".

Trong MDN có đề cập: Lưu ý rằng JavaScript phân biệt giữa các đối tượng Chuỗi và các giá trị chuỗi nguyên thủy. (Điều này cũng đúng với Boolean và Numbers.)

 Tài liệu nên tham khảo:

* MDN: [Reference](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#%E5%AF%B9%E5%8E%9F%E5%A7%8B%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%92%8C_String_%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8C%BA%E5%88%86)
* ANS: [Kiểu dữ liệu nguyên thủy](https://anonystick.com/blog-developer/kieu-du-lieu-trong-javascript-gioi-thieu-8-loai-va-cach-luu-tru-kiem-tra-du-lieu-2020120111778744)

## Câu 11. Bẫy tiếp của một trường hợp khác switch

```
function showCase(value) {
  switch(value) {
    case 'A':
      console.log('Case A');
      break;
    case 'B':
      console.log('Case B');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('Do not know!');
  }
}
showCase(String('A'));

// A. Case A
// B. Case B
// C. Do not know!
// D. undefined
```

Câu trả lời rõ ràng là **A**.

Sự khác biệt duy nhất là ở trên không sử dụng từ khóa new, vì vậy trực tiếp trả về một chuỗi, trên thực tế, **typeof string("A") === "string"** kết quả là **true**. Để giải thích, vui lòng tham khảo giải thích của Câu hỏi trước đó.

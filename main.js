// @Note Một số ký hiệu khi học

// @fn function
// @todo việc cần làm hoặc chương
// @err Lỗi
// @ex ví dụ

// @todo 1. JavaScript 1 - Variables, Strings, Numbers
// @todo So sánh var vs let/const



// https://freetuts.net/tinh-tong-hai-so-bang-javascript-5423.html
let diem = 5;   //khai báo biến kiểu số

// Xử lý số https://viblo.asia/p/phuong-thuc-xu-ly-so-trong-javascript-4P856X3aZY3

let hoten = "Đỗ Đạt Cao";    //biến kiểu chuỗi
let phai = true;  //biến phái là kiểu boolean

let kh1 = {  // khai báo 1 đối tượng
    ho: "Mai Thanh",
    ten: "Toán",
    tuoi: 23,
    hoten: function () { this.ho + " " + this.ten }
}

// @todo 2. JavaScript 2 - Arrays, Functions

// @todo 2.1. Arrays
let names = ["Mơ", "Bình", "Lộc"]
let soluongSP = [9, 3, 2, 1, 5]; // khai báo 1 mảng số
let giohang = [
    { id: 43, tensp: "Sam Sung Galaxy S8", soluong: 2 },
    { id: 12, tensp: "HTC M9", soluong: 4 },
    { id: 26, tensp: "Iphone 12", soluong: 1 }
]
// @todo 2.2. Functions
// @todo a) function declaration

// Công cụ console.log: là một function in ra ...
console.log("Số điểm: " + diem);

// Giải thích về function

// @fn
// @ex
function sayHello() {
    // @init khởi tạo biến cục bộ message
    const message = "Hello from completejavascript.com";
    // in ra ngoài màn hình cosole
    console.log(message);
}
//  gọi hàm sayHello()
sayHello(); // Hello from completejavascript.com
// console.log(message); // @error: message là biến cục bộ nền ngoài phạm vi func sayHello() thì không gọi được

//@note Truyền tham số vào 1 fn, gắn 1 biến một định
// @fn
function isPrime(number) {
    if (isNaN(number)) return false;
    if (number < 2) return false;
    if (number === 2) return true;

    for (i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;
    }

    return true;
}

// @ex Ví dụ:
console.log("anh" + " isPrime: " + isPrime("anh")); // false
console.log("0" + " isPrime: " + isPrime(0)); // false
console.log("2" + " isPrime: " + isPrime(2)); // true

// @todo b) "function expression" hay dịch ra là "biểu thức hàm".
let isVietnamese = function () {
    console.log("Chào bạn!");
};

// @todo 3. JavaScript 3 - Conditionals, Comparisons, Booleans

// @ex
// @init
let student = {};
let name = "anh";
// @todo: switch
// 1. Lệnh switch case trong Javascript
// 2. Ví dụ lệnh switch case trong Javascript
// Trường hợp không có default
// Trường hợp không có break
// Trường hợp gom nhóm case
// 3. Lời kết
switch (name) {
    case 'hoa':
        student.name = 'hoa';
        break;
    case 'lan':
        student.name = 'lan';
        break;
    case 'thao':
        student.name = 'thao';
        break;
    default:
        break;
}
// @note đề xuất thay thế
const userFactory = {
    hoa: { name: 'hoa' },
    lan: { name: 'lan' },
    thao: { name: 'thao' },
};

console.log(userFactory['hoa']); // { name: 'hoa' }
// @todo if else
if (name === 'hoa' || name === 'lan' || name === 'thao') {
    // return true;
}
// @note đề xuất thay thế
const admins = ['hoa', 'lan', 'thao'];
if (admins.includes(name)) {
    // return true;
}
// @todo: toán tử ba ngôi

var exp = 3;
var salary;
if (exp > 3) {
    salary = 1000;
} else {
    salary = 500;
}

//@note đề xuất thay thế
exp = 1;
salary = exp > 3 ? 1000 : 500;
console.log("salary:: ", salary) //500

// @todo 4. JavaScript 4 - Loops

// @todo 4.1. for

// @ex
for (var i = 0; i < 10; i++) {
    console.log(i)
}
// result
// 0
// 1
// 2
// ...
// 9

// @todo 4.2. while
//@ex
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// result
// 0
// 1
// 2
// ...
// 9
// @todo 4.3. do while
// **do-while** về cơ bản khá giống với **while**, chúng chỉ khác nhau duy nhất. Đối với **Do While** dù điều kiện lặp như thế nào thì đoạn code vẫn được chạy ít nhất 1 lần còn nếu điều kiện thỏa mãn thì sẽ tương tự như **While** : tạo ra thêm vòng lặp
//@ex
var i = 10;
do {
    console.log(i);
    i++;
}
while (i > 10 && i < 12)
// result
// 10
// 11

//@todo 4.4. forEach()
// Hàm này thì có vẻ đã không quá còn basic như những hàm phía trên nữa. forEach sẽ lặp lại từng phần tử trong mảng theo thứ tự index và thực thi function được truyền vào. Lưu ý rằng forEach sẽ không thực thi function đầu vào cho các phần tử không có giá trị
//@ex
var arr = [10, 20, "hi", , {}];

arr.forEach(function (currentValue, index, arr) {
    console.log(' arr[' + index + '] is ' + currentValue);
    return;
});

// Trong đó:
// arr là  toàn bộ array đang gọi đến forEach
// currentValue: Giá trị đang được vòng lặp xử lý
// index: Chí số của giá trị (currentValue) trong mảng

// Nhìn qua thì thấy forEach khá là đem lại nhiều điều đơn giản cho lập trình viên, không cần quan tâm đến khởi tạo biến đếm, điều kiện dừng .... Tuy nhiên trong đó cũng tiềm tàng khá nhiều điều hay ho mà mình sẽ trình bày trong phần tiếp theo của series

// Không thể break, return,
//Để lí giải cho việc này thì các bạn có thể hiểu là chúng ta đã truyền callback vào hàm forEach, chúng được coi như những hàm thông thường và được apply vào từng phẩn tử trong forEach, do đó khi return chúng chỉ return khỏi hàm callback chứ không phá toàn bộ hàm forEach.



// @todo 4.5. map
// Tiếp tục là một hàm sẽ giúp bạn loop các phần tử của một Array. Tuy nhiên **map** sẽ tạo ra một mảng mới chứ không phải thực thi với mảng gọi đến nó như **forEach**.

var num = [1, 5, 10, 15];
var doubles = num.map(function (x, index, array) {
    return x * 2;
});
console.log("doubles::", doubles)
//@todo 4.6. for in
// For ... in mục đích chủ yếu được dùng để loop trong một object chứ không phải array . Số lượng vòng lặp sẽ tương ứng với số lượng thuộc tính của object
//@ex
var obj = {a: 1, b: 2, c: 3};
for (var prop in obj) {
   console.log('obj.'+prop+'='+obj[prop]);
};
// ! lưu ý

// Return không dừng được vòng lặp

// for...in không được khuyến khích sử dụng với những mảng mà thứ tự index của nó quan trọng.

// với for...in, nó sẽ duyệt qua cả những thuộc tính kế thừa của object . Do đó nếu muốn chỉ duyệt qua thuộc tính riêng của object thì cú pháp cần thay đổi một chút
// for(var prop in obj){
//     if(obj.hasOwnProperty(prop)){
//         Code block here
//     }
//  }

//@todo 4.7. for of
// Tạo một mảng chuẩn bị để lặp
let letters = ["a", "b", "c", "d", "e", "f"];

for(let letter of letters) {
    console.log(letter); // a,b,c,d,e,f
}

// Lặp qua một chuỗi
let greet = "Hello World!";

for(let character of greet) {
    console.log(character); // H,e,l,l,o, ,W,o,r,l,d,!
}

//@ nâng cao
//https://viblo.asia/p/hieu-ve-dong-bo-va-khong-dong-bo-trong-javascript-lxrRXNYpzeO
// https://viblo.asia/p/dung-viet-for-nua-cac-bo-oi-ZalGrNAPGqX
// https://viblo.asia/p/mot-so-ham-javascript-huu-ich-ve-array-va-object-bWrZnggOlxw
// https://viblo.asia/p/lam-viec-voi-array-trong-javascript-RnB5p7X2lPG


// @note Lưu ý khi hết bài
// với câu điều kiện
// if (length >= 10)
//Đối số bên trái                               //Đối số bên phải
//Thường sẽ là biến số, giá trị đem ra so sánh  // Thường sẽ là một hằng số hoặc một giá trị nào đó để làm thước đo cho việc so sánh

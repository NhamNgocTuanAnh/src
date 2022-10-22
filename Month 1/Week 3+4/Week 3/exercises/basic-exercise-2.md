<p><h1>Exercise Day 2</h1></p>

### Ex7. Bài tập vòng lặp for Javascript
Vòng lặp for đóng vai trò quan trọng khi học lập trình với Javascript, nên việc nắm vững nó là điều bắt buộc.<br>
**Ex7.1:** Cho 1 chuỗi số, hãy viết hàm có tác dụng sao chép chuỗi số lên 10 lần, ngăn cách nhau bởi ký tự "-". Ví dụ cho chuỗi "123" thì kết quả sẽ là "123-123-123-123-123-123-123-123-123-123".
```
function loopTheStringTenTimes() {
  var str = prompt("Nhập vào 1 chuỗi kí tự bất kì");
  var loopResult = "";
  for (var i = 0; i < 10; i++) {
    loopResult += `${str}-`;
  }
  document.getElementById("result-1").innerHTML = loopResult.slice(0, -1);
}
```
**Ex7.2:** Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.
```
function factorial() {
  var num = prompt("Nhập vào 1 số bất kì để tính ra giai thừa của số đó");
  var factorialResult = 1;
  for (var i = 1; i <= num; i++) {
    factorialResult *= i;
  }
  document.getElementById("result-2").innerHTML = factorialResult;
}
```
**Ex7.3:** Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh". Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.
```
//@note: Option 1

function reverseStrOne() {
  var strForReverseOne = prompt("Nhập vào một chuỗi kí tự bất kì");
  for (var i = strForReverseOne.length - 1; i >= 0; i--) {
    document.getElementById("result-3-1").innerHTML += strForReverseOne[i];
  }
}

//@note: Option 2

function reverseStrTwo() {
  var strForReverseTwo = prompt("Nhập vào một chuỗi kí tự bất kì");
  var reverseResult = "";
  for (var i in strForReverseTwo) {
    reverseResult += strForReverseTwo[i];
  }
  document.getElementById("result-3-2").innerHTML = reverseResult
    .split("")
    .reverse()
    .join("");
}

```
**Ex7.4:** Cho 1 mảng tên của n học viên. Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên kèm theo số thứ tự (sử dụng `document.write()`).

```
//@note: Option 1
function sortStudentsOne() {
  var studentsNameOne = prompt(
    "Nhập vào tên các học viên, giữa các tên cách nhau bởi dấu ','. Ví dụ: dinh,linh,huy,ngoc,an "
  ).split(",");
  var order = 0;
  for (var i = 0; i < studentsNameOne.length; i++) {
    order++;
    studentsNameOne.sort();
    document.getElementById("result-4-1").innerHTML +=
      "Thứ tự học viên " + order + ". " + studentsNameOne[i] + "<br>" + "<hr>";
  }
}
//@note: Option 2
function sortStudentsTwo() {
  var studentsNameTwo = prompt(
    "Nhập vào tên các học viên, giữa các tên cách nhau bởi dấu ','. Ví dụ: dinh,linh,huy,ngoc,an "
  ).split(",");
  var order = 0;
  for (var i in studentsNameTwo) {
    order++;
    studentsNameTwo.sort();
    document.getElementById("result-4-2").innerHTML +=
      "Thứ tự học viên " + order + ". " + studentsNameTwo[i] + "<br>" + "<hr>";
  }
}
```
**Ex7.5:** Cho 1 mảng các số. Viết function tạo ra 1 mảng mới với các số là số dư tương ứng khi chia các số trong mảng cũ cho 2. Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1).
```
function remainder() {
  var num = prompt(
    "Nhập vào chuỗi số bất kì, mỗi số cách nhau bởi dấu phẩy ','. Ví dụ: 1,2,3,4,5,6,7,8,9,10 "
  ).split(",");
  var remainderResult = [];
  for (var i in num) {
    remainderResult.push(num[i] % 2);
  }
  document.getElementById("result-5").innerHTML = remainderResult;
}
```
**Ex7.6:** Chỉ dùng vòng lặp for hoặc while, viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.
```
function evenIsBlueOddIsRed() {
  var j = 0;
  for (var i = 1; i <= 100; i += 2) {
    document.write(
      '<font color="red">' + i + "</font>",
      '<font color="blue">' + (j += 2) + "</font>"
    );
  }
}
```

### Ex8. Bài tập vòng lặp while javascript
**Ex8.1:** Tính tổng các số chẵn từ 0 tới n bằng cách sử dụng vòng lặp while trong javascript

```
function tinh_tong(n)
{
    var tong = 0;
    var index = 0;

    while (index <= n)
    {
        // Nếu số chẵn thì cộng vào
        if (index % 2 == 0){
            tong += index;
        }

        // tăng biến đếm
        index++;
    }

    document.write("Tổng số chẵn từ 1 tới " + n + " là: " + tong + "<br/>");
}

tinh_tong(1000);
tinh_tong(2000);
tinh_tong(3000);
```
**Ex8.2:** In ra các số nguyên tố từ 1 tới giá trị của n
```
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <script language="javascript">
            // hàm kiểm tra số nguyên tố
            function kiem_tra_snt(n)
            {
                // Biến cờ hiệu
                var flag = true;

                // Nếu n bé hơn 2 tức là không phải số nguyên tố
                if (n < 2) {
                    flag = false;
                }
                else if (n == 2) {
                    flag = true;
                }
                else if (n % 2 == 0) {
                    flag = false;
                }
                else {
                    // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
                    for (var i = 3; i <= Math.sqrt(n); i += 2)
                    {
                        if (n % i == 0) {
                            flag = false;
                            break;
                        }
                    }
                }

                return flag;
            }

            // Hàm in ra các số nguyên tố từ 1 tới n
            function print_snt()
            {
                // Lấy number
                var number = document.getElementById("number").value;

                // Ép number sang kiểu INT
                number = parseInt(number);

                // Lặp để in kết quả
                var html = '';
                for (var i = 1; i <= number; i++) {
                    // Nếu là số nguyên tố thì in ra
                    if (kiem_tra_snt(i)){
                        html += i + ' <br/>';
                    }
                }
                document.getElementById("result").innerHTML = html;
            }
        </script>
        <form method="get" action="">
            Nhập số: <input type="text" id="number" value="0"/>
            <input type="button" value="In kết quả" onclick="print_snt()"/>
        </form>
        <div id="result">

        </div>
    </body>
</html>
```
## Ex9. Bài tập tạo hàm trong Javascript
**Ex9.1:** Tính tổng các số lẻ trong mảng
```
var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];

// Hàm tính tổng số lẻ
function tong_so_le(mang)
{
    // Biến lưu trữ tổng
    var tong = 0;

    // Lặp qua mảng và cộng thêm tổng nếu là số lẻ
    for (var i = 0; i < mang.length; i++){
        if (mang[i] % 2 != 0){
            tong += mang[i];
        }
    }

    // Trả kết quả về
    return tong;
}

// In ra trình duyệt
document.write("Tổng số lẻ là: " + tong_so_le(mang));
```
**Ex9.2:** Tính giá trị của biểu thức
Viết chương trình cho người dùng nhập vào số n lớn hơn 0, sau đó dựa vào n tính giá trị của biểu thức: expres = 1/n + 2/n + 3/n + ... + n/n.<br>
**HD:** Với bài này chúng ta chỉ cần sử dụng vòng lặp for là được. Tuy nhiên, mình vẫn lưu ý với bạn là nên chuyển đổi kiểu dữ liệu và kiểm tra điều kiện nhập của người dùng nhé.
```
function tinh_bieu_thuc(n)
{
    // Biến tính tổng
    var tong = 0;

    // Tính toán
    for (var i = 1; i <= n; i++){
        tong += (1/i);
    }

    return tong;
}

// Lấy giá trị
var n = parseInt(prompt("Nhập số cần tính"));

// Kiểm tra giá trị
if (n <= 0){
    alert("Bạn phải nhập số lớn hơn 0");
}
else{
    document.write("Tổng giá trị biểu thức là: " + tinh_bieu_thuc(n));
}
```


JS - Một số hàm validate dữ liệu
Tạo menu dropdown Javascript
JS - Một số ví dụ học javascript
JS - Thêm thẻ HTML

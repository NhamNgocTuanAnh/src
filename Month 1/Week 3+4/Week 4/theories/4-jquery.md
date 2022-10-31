# JQuery cơ bản

Website hầu hết đề là kết quả của sự cấu thành giữa CSS và Javascript. Và đề tạo hiệu ứng như vậy cần code javascript rất dài. Vì vậy jquery ra đời nhằm giúp giải quyết vấn đề trên => Jquery là thư viện được xây dựng từ javascript nhằm giúp coder xây dựng ứng dụng javascript dễ dàng hơn.

## Các module chính mà của Jquery sử bao gồm

* Ajax - xử lý Ajax
* Atributes - xử lý thuộc tính của dối tượng HTML
* Effect - xử lý hiệu ứng
* Event - xử lý sự kiện
* Form - xử lý form
* DOM - xử lý Data Object Model
* Selector - xử lý luồng lách các đối tượng HTML

## Cú pháp của jquery

> Cú pháp của jquery luôn bắt đầu bằng kí tự $ hoặc jQuery

```
Ví dụ 1

# Lấy đối tượng có id = button-id trong jquery
var object = $('#button-id');
hoặc
var object = jQuery('#button-id');
```

```
Ví dụ 2
$('#button-id').on('click', function(){
  var textbox = $('#textbox-id');
  alert(textbox.val());

  # $('#button-id').on('click', function(){}
  # => Hàm sự kiện click vào button có id = button-id
  # var textbox = $('#textbox-id');
  # => Lấy ra thẻ HTML có id = textbox-id
  # alert(textbox.val()); in ra giá trị của textbox.
};

```

## Document Ready

```
$('document').ready(function(){
});
# Đây là hàm mà các câu lệnh trong hàm này sẽ được thực hiện khi mà trang html đã được load xong.

```

## Selector trong jQuery

Trong jQuery thường sử dụng cú pháp của CSS để truy vấn và đây chính là cú pháp của Selector của jQuery

```
#Ví dụ bạn muốn truy vấn đề thẻ div có id = mydiv

var myjquery = $('#mydiv');

# => Nó sẽ trả về thẻ div cho bạn. Nếu có nhiều thẻ div với id giống nhau thì nó sẽ trả về 1 mảng thẻ div

# Còn với class thì bạn dùng dấu chấm (.)

var myjquery = $('.myclass');
```

## Selector Attributes

Selector Attributes là sàn lọc thẻ HMTL dựa vào thuộc tính và giá trị của thuộc tính của các thẻ HTML đó

```
Ví dụ:
<input type="text" name="username" value="TheHalfHeart"/>

# type="text", name="username" value="TheHalfHeart" chính là các thuộc tính của thẻ input

```

Danh sách các selector theo thuộc tính trong Jquery

1. $('\[title|="value"\]') => Tìm thẻ HTML có thuộc tính title có giá trị bắt đầu bằng chuỗi value
2. $('\[title\*="value"\]') => Tìm thẻ HTML có thuộc tính title có giá trị trong title tồn tại chuỗi value
3. $('\[title~="value"\]') => Tìm thẻ có thuộc tính với giá trị title xuất hiện chữ value. Tức là value phải cách nhau bằng 1 khoảng trắng với các chữ khác
4. $(′\[_title_\="value"\]') => Tìm thẻ HTML có thuộc tính title có giá trị Kết thúc bằng value
5. $('\[title="value"\]') => Tìm thẻ HTML có thuộc tính title có giá trị thuộc tính title phải bằng value
6. $('\[title!="value"\]') => giá trị title khác value
7. $('\[title\]') => Thẻ HTML chỉ cần có thuộc tính html

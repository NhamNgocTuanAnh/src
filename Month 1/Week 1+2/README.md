
### 1. Cấu trúc html
Để hiển thị tiếng Việt trong HTML, bạn cần phải cài đặt encoding là UTF-8.
```{hmtl}
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Tiêu đề trang web</title>
</head>

<body>
...Phần thân viết ở đây...
</body>
</html>
```
### 2. Comment trong html

```{hmtl}
<!DOCTYPE html>
<html>
<head>
<title>Tiêu đề trang web</title>
</head>

<body>
<!--
comment
-->
</body>
</html>
```

### 3. Thẻ Html thông dụng
#### 3.1. Thẻ đơn
```{hmtl}
1	<html>	Thể mở đầu của trang HTML
2	<head></head>	Thẻ chứa các thẻ trong phần đầu của trang HTML
3	<title></title>	Tiêu đề trang web
4	<meta>	Mô tả tổng quát về nội dung trang web
5	<link>	Dùng để nhúng một tập tin nào đó vào trang web
6	<script></script>	Dùng để nhúng các tệp tin javascript
7	<style></style>	Dùng để bao bọc một nội dung về CSS
8	<body></body>	Thẻ chứa nội dung chính của website
9	<h1></h1>	Thẻ thể hiện tiêu đề của một vấn đề nào đó
10	<div></div>	Thẻ này là thẻ thường dùng để chứa nội dung
11	<span></span>	Thẻ chứa nội dung
12	<p></p>	Thẻ chứa nội dung (đoạn văn)
13	<center></center>	Thẻ căn giữa các đối tượng nằm bên trong
14	<a></a>	Thẻ tạo link
15	<ul></ul>	Kết hợp với thẻ <li> để mô tả liệt kê theo dạng danh sách
16	<img>	Thẻ dùng để hiển thị một hình ảnh nào đó
17	<form></form>	Thẻ hiển thị những phần tử trong form nhập liệu
18	<br>	Thẻ xuống dòng
19	<hr>	Thẻ tạo đường kẻ ngang
20	<table></table>	Tạo bảng
 	<tr></tr>	Tạo dòng trong bảng
 	<td></td>	Tạo cột trong dòng của bảng
 	<th></th>	Tạo dòng đầu tiên của bảng
21	<iframe></iframe>	Tạo frame
22	<b></b>, <strong></strong>	Tạo chữ đậm
23	<i></i>, <em></em>	Tạo chữ nghiêng
24	<u></u>,<ins></ins>	Tạo chữ gạch dưới
25	<s></s>	Tạo chữ gạch cắt ngang
26	<sub></sub> <sup></sup>	Tạo kiểu chữ (mũ trên, mũ dưới)
27	<blockquote></blockquote>	Mô tả một phần của trích dẫn
28	<tt></tt> <code></code>	Tạo kiểu chữ cho phần tử mô tả mã nguồn
29	<pre></pre>	Định dạng nội dung

<img src="http://webcoban.vn/image/face.jpg">
```
#### 3.2. Thẻ lồng nhau
Thẻ lồng nhau thực chất chỉ là một trong những kỹ thuật cơ bản khi viết mã HTML, các thẻ được lồng vào nhau để xây dựng nên những nội dung đa dạng hơn.
```{hmtl}
<p>Trung tâm <u>luyện thi</u> đại học</p>
```


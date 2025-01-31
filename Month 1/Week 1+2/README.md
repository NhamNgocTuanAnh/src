# HTML, CSS and Dev-tool

### Projected Time

About 2.5 hours

* 2 hours for Guided Practice
* 20 minutes for the slides
* 15 minutes for Check for Understanding

### Prerequisites

* Understanding structure web
* Can create a WebSite from figma design
* Known to use tool

### Motivation

* HTML is really simple and easy to learn.
* CSS is important
* UI & UX
* Tool and Environment for DeV

### Objectives

**Participants will be able to:**

* Create an HTML file and open it in Chrome
* Code a bare-bones HTML structure
* Draw a hierarchy of the HTML elements
* Properly write opening and closing tags for commonly-used HTML elements
* Use proper indentation to improve readability
* Code an unordered and ordered list, and know how they are different
* Make a word or phrase link to an external webpage
* Separate HTML code into containers
* Identify semantic and non-semantic elements

### Specific Things to Learn

* How to open an HTML file in Chrome
* [HTML document structure](theories/1-html-elements-and-structure.md), [HTML semantic](theories/4-html-semantic-html.md)
* [HTML tables](theories/2-html-tables.md), [HTML forms](theories/3-html-forms.md)
* [CSS syntax and selectors](theories/5-css-syntax-and-selectors.md)
* [CSS visual rules](theories/6-css-visual-rules.md), [CSS the box model](theories/7-css-the-box-model.md)
* [CSS display and positioning](theories/8-css-display-and-positioning.md), [CSS colors and typography](theories/9-css-colors-and-typography.md)
* [Dev-tool](1-build-environment-dev.md)

### **Group Practice**

Swap pairs, read your new pair partner's code, and do code reviews for each other. Did your second pair partner take a different approach than you did with your first pair partner? If so, how?

Swap pairs once more and repeat.

### **Challenge**

Here are some other ways you can extend your calculator. Choose whichever one(s) sound most interesting to you!

1. [Portfolio Project: Collaboration and Review](theories/a-12-portfolio-guilde.md)
2. E-commerce Project

### **Check for Understanding**

Form small groups and discuss:

* [HTML-CSS-Interview-Questions](theories/HTML-CSS-Interview-Questions.md)
* What are some math operations that can be performed on number variables in JavaScript?

#### 1. Cấu trúc html

Để hiển thị tiếng Việt trong HTML, bạn cần phải cài đặt encoding là UTF-8.

```{html}
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

#### 2. Comment trong html

```{html}
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

#### 3. Thẻ Html thông dụng

##### 3.1. Thẻ đơn

```{html}
1 <html> Thể mở đầu của trang HTML
2 <head></head> Thẻ chứa các thẻ trong phần đầu của trang HTML
3 <title></title> Tiêu đề trang web
4 <meta> Mô tả tổng quát về nội dung trang web
5 <link> Dùng để nhúng một tập tin nào đó vào trang web
6 <script></script> Dùng để nhúng các tệp tin javascript
7 <style></style> Dùng để bao bọc một nội dung về CSS
8 <body></body> Thẻ chứa nội dung chính của website
9 Tạo heading trong HTML
    <h1>Tiêu đề H1</h1>
    <h2>Tiêu đề H2</h2>
    <h3>Tiêu đề H3</h3>
    <h4>Tiêu đề H4</h4>
    <h5>Tiêu đề H5</h5>
    <h6>Tiêu đề H6</h6>

10 <div></div> Thẻ này là thẻ thường dùng để chứa nội dung
11 <span></span> Thẻ chứa nội dung
12 <p></p> Thẻ chứa nội dung (đoạn văn)
13 <center></center> Thẻ căn giữa các đối tượng nằm bên trong
14 <a></a> Thẻ tạo link

15 Tạo list trong HTML
    <ul></ul> Kết hợp với thẻ <li> để mô tả liệt kê theo dạng danh sách
    Ex1:
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ul>
    Ex2:
    <ol>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ol>

16 <img> Thẻ dùng để hiển thị một hình ảnh nào đó
17 <form></form> Thẻ hiển thị những phần tử trong form nhập liệu
18 <br> Thẻ xuống dòng
19 <hr> Thẻ tạo đường kẻ ngang
20 <table></table> Tạo bảng
  <tr></tr> Tạo dòng trong bảng
  <td></td> Tạo cột trong dòng của bảng
  <th></th> Tạo dòng đầu tiên của bảng
21 <iframe></iframe> Tạo frame
22 <b></b>, <strong></strong> Tạo chữ đậm
23 <i></i>, <em></em> Tạo chữ nghiêng
24 <u></u>,<ins></ins> Tạo chữ gạch dưới
25 <s></s> Tạo chữ gạch cắt ngang
26 <sub></sub> <sup></sup> Tạo kiểu chữ (mũ trên, mũ dưới)
27 <blockquote></blockquote> Mô tả một phần của trích dẫn
28 <tt></tt> <code></code> Tạo kiểu chữ cho phần tử mô tả mã nguồn
29 <pre></pre> Định dạng nội dung

<img src="http://webcoban.vn/image/face.jpg">
```

##### 3.2. Thẻ lồng nhau

Thẻ lồng nhau thực chất chỉ là một trong những kỹ thuật cơ bản khi viết mã HTML, các thẻ được lồng vào nhau để xây dựng nên những nội dung đa dạng hơn.

```{html}
<p>Trung tâm <u>luyện thi</u> đại học</p>
```

#### 4. Attribute trong HTML

Ta có thể ví mỗi thẻ HTML như là một đối tượng. Lúc này đối tượng HTML sẽ có các thuộc tính để mô tả cho nó. Ví dụ thẻ input thì nó có các thuộc tính như sau:

* name: Dùng để khai báo tên
* type: Dùng để thiết lập thể loại
* id: Dùng để đặt tên khóa cho thẻ
* value: Dùng để khai báo giá trị cho thẻ

```{html}
<input type="text" name="inputname" id="inputid" value=""/>
```

##### 4.1. Dấu nháy đơn và nháy kép

```{html}
<input type="text" name="inputname" id="inputid" value="Hello 'freetuts.net'"/>
```

##### 4.2. Thuộc tính mở rộng

Mỗi thẻ HTML chỉ chấp nhận một số thuộc tính nhất định của riêng nó. Nhưng nếu bạn muốn định nghĩa thêm một thuộc tính khác thì hoàn toàn được. Tuy nhiên, trình duyệt sẽ không hiểu các thuộc tính đó nên sẽ không có tác dụng gì. Vì vậy, thông thường ta sẽ kết hợp thuộc tính tự định nghĩa với Javascript để xử lý cho các bài toán. Vấn đề này ta sẽ học ở những bài khác nhé.

Ví dụ: Trong thẻ input không có thuộc tính classname nhưng ta cũng có thể thêm vào được, tuy nhiên lúc chạy lên sẽ không có tác dụng gì.

```{html}
<input type="text" classname="Class Name" value=""/>
```

# Responsive Web Design
## Responsive Web Design là gì?
Responsive Web Design (RWD) là xu hướng mới theo đó quy trình thiết kế và phát triển web sẽ đáp ứng mọi thiết bị và môi trường của người dùng theo các tiêu chí kích thước và chiều của màn hình thiết bị. Responsive Web Design được tạo nên từ 3 thành phần cơ bản:
1. Flexible Grid based layout
2. Media Queries
3. Flexible Media
## Tại sao cần Responsive Web Design
1. Giúp tiết kiệm rất nhiều thời gian và chi phí khi mà bạn không cần phải duy trì từng phiên bản web khác nhau cho điện thoại và máy tính
2. Responsive Web Design giúp cải thiện SEO (search ranking) cho trang web của bạn khi mà mọi luồng đều chỉ dẫn đến một địa chỉ URL duy nhất thay vì nhiều URL khác nhau. Các báo cáo Google Analytics của bạn sẽ vẽ nên một bức tranh tốt hơn về việc sử dụng trang web của bạn vì dữ liệu từ người dùng di động và máy tính để bàn sẽ được hợp nhất. Điều tương tự cũng xảy ra với các chỉ số (like, chia sẻ) trên các trang mạng xã hội như Facebook, Twitter,...
3. Responsive Design giúp bạn dễ dàng bảo trì trang web khi mà nó không liên quan gì đến phía server, chỉ việc thay đổi html và css để thay đổi giao diện hoặc bố cục thích hợp với các thiết bị khác nhau.
## Flexible Grid Based Layouts
### 1. Viewport
Viewport là khung hình người dùng nhìn thấy trên thiết bị của họ khi vào một trang web bất kì. Với mỗi thiết khác nhau lại có viewport khác nhau. Nếu trang web cố định kích thước thì trình duyệt sẽ tự động thu nhỏ nội dung khi chuyển từ màn hình máy tính qua smartphone - điều này tạo nên trải nghiệm không tốt cho người dùng.
Trong html5
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Trong đó:
* `width=device-width`: thiết lập chiều rộng của trang web theo chiều rộng của thiết bị

* `initial-scale=1.0`: thiết lập mức độ zoom ban đầu khi trang web được load bởi trình duyệt
* `user-scalable=no`: Cho phép người dùng phóng to màn hình hay không (giá trị `yes` hoặc` no`)

Xem qua ví dụ sau đây để thấy rõ sự khác biệt khi sử dụng viewport và khi không sử dụng **viewport**:
<p align="center">
    <img alt="Ảnh content" src="./images/res-pon.webp" />
</p>

Cách sử dụng:
```
<!DOCTYPE HTML>
<html>
<head>
<meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no">
</head>
<body>

</body>
</html>
```

### 2. GridView

<p align="center">
    <img alt="Ảnh content" src="./images/res-pon-1.webp" />
</p>

Rất nhiều trang web được xây dựng trên gridview, có nghĩa là trang web được chia thành các cột đều nhau. Một gridview thường có 12 cột ứng với 100% độ rộng và sẽ thu nhỏ hoặc mở rộng khi bạn thay đổi kích thước trình duyệt. Việc sử dụng gridview sẽ giúp bạn dễ dàng đặt vị trí các phần tử trên trang hơn, thuận lợi cho việc thực hiện responsive về sau.

Cùng xem qua ví dụ sau:
```
.container {
  width: 538px;
}
section,
aside {
  margin: 10px;
}
section {
  float: left;
  width: 340px;
}
aside {
  float: right;
  width: 158px;
}

```

<p align="center">
    <img alt="Ảnh content" src="./images/res-pon-2.webp" />
</p>

Ở đây các phần tử được giữ cố định nên khi thay đổi kích thước container thì kích thước các phần tử bên trong vẫn không thay đổi. Thay vào đó chúng ta có thể sử dụng `%` hoặc `em` để giúp các phần tử thay đổi theo kích thước của container.
```
section,
aside {
  margin: 1.858736059%; /*  10px ÷ 538px = .018587361 */
}
section {
  float: left;
  width: 63.197026%;    /* 340px ÷ 538px = .63197026 */
}
aside {
  float: right;
  width: 29.3680297%;  /* 158px ÷ 538px = .293680297 */
}
```

<p align="center">
    <img alt="Ảnh content" src="./images/res-pon-3.webp" />
</p>

Lưu ý: Trong nội dung trên Grid-View sẽ được xây dựng hoàn toàn 1 cách thủ công để chúng ta có thể hiểu rõ cơ chế hoạt động của 1 Grid-View là như thế nào, hoàn toàn không phụ thuộc vào các thư viện CSS có sẵn như Bootstrap hay Foundation.

Ngoài ra chúng ta có thể sử dụng các class của bootstrap để chia grid.

```
<div class="row">
  <div class="col-3">...</div> <!-- 25% -->
  <div class="col-9">...</div> <!-- 75% -->
</div>
```

Tuy nhiên Flexible grid layout không là không đủ. Khi trang web có độ rộng nhỏ thì kích thước các phần tử bên trong cũng nhỏ theo khiến nội dung hiển thị không tốt. Để giải quyết vấn đề này chúng ta cùng đi đến phần tiếp theo.

### Breakpoint
Breakpoint, là những điểm (chiều rộng màn hình của thiết bị) mà ở đó giao diện được chuyển đổi cho phù hợp với thiết bị hiện tại, ví dụ như màn hình rộng hơn 1024px, thì có background-color màu đỏ, nhỏ hơn 1024px thì background-color màu xanh, khi này ta gọi 1024 là breakpoint.

Tùy vào chiều rộng hiển thị của thiết bị mà breakpoint sẽ khác nhau, hiện nay có rất nhiều thiết bị, tương ứng sẽ có nhiều chiều rộng khác nhau, nên sẽ có nhiều breakpoint khác nhau, do đó ta không thể thiết lập beakpoint cho từng loại thiết bị được.

Điểm breakpoint thường gặp
* 320 px	Màn hình chiều dọc cho smartphone nhỏ (VD iPhone 5)
* 480 px	Màn hình chiều ngang cho smartphone nhỏ
* 640 px	Màn hình chiều ngang cho smartphone vừa
* 768 px	Màn hình chiều dọc cho tablet (VD: iPad)
* 1024 px	Màn hình chiều ngang cho tablet (VD: iPad), hoặc chiều dọc cho tablet lớn (VD iPad Pro)

### Media Queries
Media Queries là một kỹ thuật CSS được giới thiệu trong CSS3. Ta sử dụng cú pháp **@media** để bao gồm một khối các thuộc tính CSS chỉ khi một điều kiện nhất định là đúng. Nói một cách đơn giản là ta sẽ định nghĩa CSS riêng cho một nhóm các thiết bị có kích thước giống nhau.<br>
Media Queries có thể được sử dụng trực tiếp trong thẻ HTML hoặc viết bên trong file css. ( Nên sử dụng @media bên trong css để tránh việc phải viết lặp lại nhiều lần)
```
<!-- Separate CSS File -->
<link href="styles.css" rel="stylesheet" media="all and (max-width: 1024px)">
```
```
/* @media Rule */
@media all and (max-width: 1024px) {...}

/* @import Rule */
@import url(styles.css) all and (max-width: 1024px) {...}
```sql
Mỗi media query có thể bao gồm một media type và theo sau bởi nhiều biểu thức. Các media types phổ biến bao gồm `all`, `screen`, `tv`,`print`. HTML5 còn bao gồm cả `3d-glasses`. Nếu media type không được chỉ định thì media query sẽ mặc định media type là `screen`.
## 1. Các biểu thức logic bên trong Media Queries
Có 3 loại toán tử logic khác nhau có thể sử dụng bên trong  media queries bao gồm `and`, `not` và `only`.

Sử dụng toán tử `and` trong media queries cho phép ta thêm điều kiện bổ sung. Ví dụ sau chọn tất cả các màn hình có độ rộng từ 800 đến 1024 pixels:
```js
@media all and (min-width: 800px) and (max-width: 1024px) {...}
```
Trong khi đó toán tử not lại phủ định truy vấn được xác định. Ví dụ dưới đây áp dụng với các thiết bị màn hình không màu ( đen và trắng screen):
```
@media not screen and (color) {...}
```
Cuối cùng là toán tử only áp dụng cho truy vấn thỏa mãn điều kiện. Biểu thức dưới đây chỉ chọn màn hình hướng theo chiều dọc:
```
@media only screen and (orientation: portrait) {...}
```
###  Media Queries
Media Queries có thể được sử dụng trực tiếp trong thẻ HTML hoặc viết bên trong file css. ( Nên sử dụng @media bên trong css để tránh việc phải viết lặp lại nhiều lần)
```
<!-- Separate CSS File -->
<link href="styles.css" rel="stylesheet" media="all and (max-width: 1024px)">
```
```
/* @media Rule */
@media all and (max-width: 1024px) {...}

/* @import Rule */
@import url(styles.css) all and (max-width: 1024px) {...}
```sql
Mỗi media query có thể bao gồm một media type và theo sau bởi nhiều biểu thức. Các media types phổ biến bao gồm `all`, `screen`, `tv`,`print`. HTML5 còn bao gồm cả `3d-glasses`. Nếu media type không được chỉ định thì media query sẽ mặc định media type là `screen`.
## 1. Các biểu thức logic bên trong Media Queries
Có 3 loại toán tử logic khác nhau có thể sử dụng bên trong  media queries bao gồm `and`, `not` và `only`.

Sử dụng toán tử `and` trong media queries cho phép ta thêm điều kiện bổ sung. Ví dụ sau chọn tất cả các màn hình có độ rộng từ 800 đến 1024 pixels:
```js
@media all and (min-width: 800px) and (max-width: 1024px) {...}

```
Trong khi đó toán tử **not** lại phủ định truy vấn được xác định. Ví dụ dưới đây áp dụng với các thiết bị màn hình không màu ( đen và trắng screen):
```
@media not screen and (color) {...}
```
Cuối cùng là toán tử only áp dụng cho truy vấn thỏa mãn điều kiện. Biểu thức dưới đây chỉ chọn màn hình hướng theo chiều dọc:
```
@media only screen and (orientation: portrait) {...}
```
### Media Features trong Media Queries

Media feature xác định các thuộc tính hoặc thành phần nào sẽ được nhắm tới trong media queries.

#### Height & Width
Đây chính là một trong những media feature phổ biến nhất xoay quanh việc xác định chiều cao và chiều rộng cho viewport của thiết bị hoặc browser. Chiều cao và chiều rộng được chỉ định qua từ khóa height và width. Giá trị của height hoặc width có thể là đơn vị độ dài, tương đối hoặc tuyệt đối. Chúng còn thường được đi kèm với các tiền tố min và max để xác định giới hạn màn hình mà các truy vấn được áp dụng. Ví dụ
```
@media all and (min-width: 320px) and (max-width: 780px) {...}
```
#### Orientation: Portrait / Landscape
Media queries còn được sử dụng để xác định hướng của browser thiết bị sử dụng từ khóa orientation, cho phép ta xác định thiết bị đang được xem nằm ở hướng dọc (portrait) hay ngang (landscape). Tính năng này được áp dụng chủ yếu trên các thiết bị di động.
```
@media all and (orientation: landscape) {...}
```
#### Aspect Ratio
Tỉ lệ khung hình (aspect ratio) trong media queries cho phép ta chỉ định tỉ lệ chiều rộng\chiều cao của thiết bị mà truy vấn được áp dụng . Chúng cũng thường đi kèm với các tiền tố `min` và `max`.
```
@media all and (min-device-aspect-ratio: 16/9) {...}
```
#### Resolution
Tính năng độ phân giải (resolution) chỉ định độ phân giải của thiết bị đầu ra theo mật độ pixel, hay còn được gọi là điểm ảnh trên mỗi inch (DPI - Dots Per Inch) . Chúng sẽ không đi kèm với các tiền tố `min` và `max` mà thay vào đó là số điểm ảnh trên mỗi pixel `dppx` và số điểm ảnh trên cm `dpcm`.
```
@media print and (min-resolution: 300dpi) {...}
```
#### Nguyên tắc Mobile First trong Responsive
<p align="center">
    <img alt="Ảnh content" src="./images/res-pon-4.webp" />
</p>
Moble First nghĩa là bạn luôn thiết kế ứng dụng cho màn hình mobile trước rồi mới đến các màn hình lớn dần. ( Điều này giúp trang web hiển thị nhanh hơn trên các thiết bị màn hình nhỏ hơn) . Ví dụ :

```
/*Smart phone nhỏ*/
@media screen and (min-width: 240px){

}
/*Iphone(480 x 640)*/
@media screen and (min-width: 320px){

}
/*Tablet nhỏ(480 x 640)*/
@media screen and (min-width: 480px){

}
/*Ipad dọc(768 x 1024)*/
@media screen and (min-width: 768px){

}
/*Ipad ngang(1024 x 768)*/
@media screen and (min-width: 1024px){

}
```
#### Media Queries Demo
```
@media all and (max-width: 420px) {
  section, aside {
    float: none;
    width: auto;
  }
}
```
<p align="center">
    <img alt="Ảnh content" src="./images/res-pon-5.webp" />
</p>

### Flexible Media
Cuối cùng nhưng không kém phần quan trọng chính là flexible media. Khi mà viewport thay đổi kích thước thì các đa phương tiện (ảnh, video,..) cũng cần có khả năng thay đổi sao cho phù hợp.

Một cách thông dụng là set width là `100%` cùng với `height: auto`. Khi đó ảnh hoặc video sẽ thay đổi chiều rộng và chiều cao sao cho phù hợp với độ dãn của màn hình.
```
img {
  width: 100%;
  height: auto;
}
```
Nếu muốn ảnh hoặc video thay đổi theo viewport nhưng không quá kích thước gốc của nó ta có thể sử dụng thuộc tính `max-width`:
```
img {
  max-width: 100%;
  height: auto;
}
```

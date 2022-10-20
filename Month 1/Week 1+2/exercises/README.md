## Công thức chung HTML
* Cần xác định rõ: đâu là image, đâu là text, đâu là button, để biết khi nào dùng hình, khi nào dùng text để sử dụng CSS cho đúng.
*  Thông thường image sẽ là hình chụp, hình design phức tạp,... trong các bài tập của hocwebchuan, image sẽ được thể hiện bằng nội dung có chữ "Học Web Chuẩn", hoặc số VD: "500x600".
* Một số bài tập có sử dụng font icon, hocwebchuan sẽ sử dụng bộ font của fontawesome cho thuận lợi việc code.
*  Nếu cấu trúc là một nhóm có nội dung cụ thể, ta dùng `<section>` bao ngoài.
* Nếu cấu trúc là tiêu đề thì dùng `<hx>`, khi code thực tế thì bạn cần sử dụng `<hx>` cho đúng thứ tự.
* Nếu cấu trúc là image thì dùng `<img>`.
* Nếu cấu trúc là đoạn văn thì dùng `<p>`.
* Nếu cấu trúc là một danh sách thì dùng `<ul> <li>`.
* Nếu cấu trúc là một danh sách có thứ tự, thì dùng `<ol> <li>`.
* Nếu cấu trúc có chứa thông tin nhập liệu, thì ta dùng các thẻ `<form>`.
* Đối với các thành phần lớn gần nhau, theo các nhóm riêng biệt, ta dùng `<div>` để gom lại sẽ thuận lợi cho việc layout.
* Với mỗi thành bao ngoài như `<section>` hay `<div>` ta cần sử dụng id hoặc class để thuận lợi cho việc layout sau này.


## Công thức chung về CSS
* Bài giải này dựa trên bài học CSS3, do đó các bạn cần nắm vững kiến thức về CSS và CSS3 để hiểu rõ về bài giải này.
* Đối với các tag có class, thì sẽ sử dụng tên .class để viết CSS, tránh viết dạng tag.class, việc này sẽ giúp code không ảnh hưởng nếu tag có thay đổi.
* Thứ tự ưu tiên viết CSS (tham khảo):
* Từ trên xuống dưới.
* Sắp xếp cho đúng tương đối vị trí các thành phần bao ngoài, vd: .class-ông .class-cha .class-con.
* Định dạng, sắp xếp vị trí của từng thành phần, sau đó mới trang trí cho các thành phần bên trong.
* Chỉnh lại cho chính xác vị trí của các thành phần bên ngoài và bên trong.
* Một số thuộc tính kết hợp hiệu quả:
  * `margin: 0 auto;` và `width: 600px;`: dịch chuyển toàn bộ thành phần canh giữa, nhưng không ảnh hưởng các thành phần con bên trong.
  * `line-height: 60px;` và `height: 60px;`: nếu cùng giá trị, sẽ giúp cho thành phần bên trong canh giữa theo chiều dọc.
  * `max-width: 300px;` và `width: 90%;`: thường dùng cho image lớn hoặc các khối lớn, gặp nhiều trong responsive; Khi màn hình có chiều rộng nhỏ, thì thành phần sẽ theo phần trăm là width, ngược lại khi màn hỉnh có chiều rộng lớn, thì thành phần có chiều rộng lớn nhất sẽ theo pixcel là max-width.
  * `min-width: 200px;` và `padding: 0 20px;`: thường sử dụng cho button, khi chiều rộng lớn thì thành phần sẽ cách đều trái và phải `20px`, còn khi chiều rộng nhỏ, thì chiều rộng nhỏ nhất sẽ theo `min-width`.
* Để cho gọn bài giảng, hocwebchuan sẽ không tập trung vào việc chỉnh chính xác font-family, image, hay khoảng cách nhe (tương đối thôi).
* Trong bài giải, hocwebchuan đã code các thuộc tính theo việc sắp xếp thứ tự ABC, indent 2 spaces, các vị trí khoảng cách như nhau, mục đích của việc này sẽ giúp cho code được đẹp hơn, dễ quản lý hơn.
## Bài tập 1: Thực hiện code HTML theo nội dung design dưới đây:
![alt](images/img_exercise_basic01.png)
#### Hướng dẫn: Cấu trúc design không phức tạp:

* Xem công thức chung bên dưới.
*  Riêng bên trong <hx> có một đoạn nhấn mạnh "Shared Hosting", nên ta cần sử dụng thẻ <strong>
*  2 liên kết button có dạng danh sách, nên ta sử dụng thẻ `<ul> <li>`, nếu không quan trọng SEO chỗ này, thì có thể không cần cũng được.

### Bài giải chưa kèm css

```{html}
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học web chuẩn</title>
</head>
<body>
  <section class="best-shared">
    <p class="logo"><img src="/exercises/images/img_190x50.png" alt=""></p>
    <h2>Best <strong>Shared Hosting</strong> Company</h2>
    <p class="lead-text">With this responsive landing page template, you can promote your all hosting, domain and email services.</p>
    <ul class="btn-list">
      <li><a href="./">View Plans</a></li>
      <li><a href="./">All Features</a></li>
    </ul>
  </section>
</body>
</html>
```

### Bài giải kèm css
```{html}
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học web chuẩn</title>
<style>
  /* Reset */
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  body {
    color: #333;
    font-family: Helvetica,sans-serif;
    font-size: 16px;
  }

  /* Layout */
  .best-shared {
    margin: 20px auto;
    text-align: center;
    width: 800px;
  }
  .logo {
    margin-bottom: 15px;
  }
  .best-shared h2 {
    font-size: 45px;
    font-weight: normal;
    margin-bottom: 25px;
  }
  .best-shared h2 strong {
    color: #00aeef;
    font-weight: 600;
  }
  .lead-text {
    margin-bottom: 40px;
  }
  .btn-list {
    text-align: center;
  }
  .btn-list li {
    display: inline;
    margin: 0 12px;
  }
  .btn-list li a {
    background-color: #2d3032;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    height: 56px;
    line-height: 56px;
    min-width: 170px;
    text-decoration: none;
    transition: 0.3s background-color;
  }
  .btn-list li a:hover {
    background-color: #00aeef;
  }
</style>
</head>

<body>
  <section class="best-shared">
    <p class="logo"><img src="/exercises/images/img_190x50.png" alt=""></p>
    <h2>Best <strong>Shared Hosting</strong> Company</h2>
    <p class="lead-text">With this responsive landing page template, you can promote your all hosting, domain and email services.</p>
    <ul class="btn-list">
      <li><a href="./">View Plans</a></li>
      <li><a href="./">All Features</a></li>
    </ul>
  </section>
</body>
</html>
```

## Bài tập 2: Thực hiện code HTML theo nội dung design dưới đây:
![alt](images/img_exercise_basic02.png)
### Hướng dẫn

Cấu trúc design không phức tạp, gồm `<hx>`, đoạn văn dùng `<p>`, và một liên kết `<a>` hoặc có thể dùng `<button>` nếu nó không phải là liên kết.

Do cấu trúc là một nhóm có nội dung cụ thể, do đó ta có thể dùng `<section>` bao ngoài.
Đối với background thì ta dùng CSS cho `<section>` là được.

Nhìn vào design, ta thấy ngay hình nền (background) bên dưới, với hình này ta sử dụng background image cho `<section>` là được.

Nội dung bên trong canh giữa, nên ta sẽ sử dụng text-align: center; để canh giữa các phần này.

Liên kết button cần phải chỉnh nhiều kỹ thuật CSS3 như: background-gradient, box-shadow, ..., nếu bạn chưa học qua CSS3 thì bạn có thể bỏ qua các thuộc tính ở phần liên kết button này, chỉ cần dùng background-color cho đơn giản là được.

### Giải (chưa bao gồm css)
```{html}
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học web chuẩn</title>
</head>
<body>
  <section class="offer">
    <h2>Don't miss this special offer!</h2>
    <p>Get it now for just $10! the price will be increased after 50 downloads.</p>
    <p class="btn"><a href="./">Get the latest version of Bootslander</a></p>
  </section>
</body>
</html>
```
### Giải (bao gồm css)
```{html}
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học web chuẩn</title>
<style>
  /* Reset */
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  body {
    color: #333;
    font-family: Helvetica,sans-serif;
    font-size: 14px;
  }

  /* Layout */
  .offer {
    background: url(/exercises/images/bg_special.png) no-repeat left top;
    color: #fff;
    padding: 80px 0 60px;
    text-align: center;
    width: 100%;
  }
  .offer h2 {
    font-weight: normal;
    margin-bottom: 30px;
  }
  .offer .info {
    margin-bottom: 30px;
  }
  .offer .btn a {
    box-shadow: inset 0px 0px 0px 0px #cf866c;
    background: linear-gradient(to bottom, #e4553f 5%, #d83f2e 100%);
    border-radius: 4px;
    border: 1px solid #942911;
    color: #fff;
    display: inline-block;
    font-size: 16px;
    opacity: 1;
    padding: 16px 14px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #854629;
    transition: 0.3s all;
  }
  .offer .btn a:hover {
    opacity: 0.8;
  }
</style>
</head>
<body>
  <section class="offer">
    <h2>Don't miss this special offer!</h2>
    <p class="info">Get it now for just $10! the price will be increased after 50 downloads</p>
    <p class="btn"><a href="./">Get the latest version of Bootslander</a></p>
  </section>
</body>
</html>
```

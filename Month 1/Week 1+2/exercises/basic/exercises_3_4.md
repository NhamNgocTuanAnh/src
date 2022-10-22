### Bài tập 3: Thực hiện code HTML theo nội dung design dưới đây:
![alt](../images/img_exercise_basic03.png)
##### Hướng dẫn: Cấu trúc design không phức tạp:

* Hình lá thư, thật ra là một font icon, nên chúng ta sử dụng font-awesome là được.
* Cấu trúc bên dưới không có gì đặc biệt, ngoại trừ phần nhập liệu và `<button>`, ta cần sử dụng các thành phần của `<form>`.
* Ta thấy nội dung canh giữa, do đó cần dùng `text-align: center;` cho thành phần bao ngoài để canh giữa các nội dung bên trong.
* Hình lá thư, ta thấy ngay có một border hình tròn bao quanh lá thư, nên ta sử dụng 2 thuộc tính kết hợp là `border` và `border-radius: 50%;`, để canh giữa lá thư ta cần kết hợp `height` `line-height` và `text-align: center;`.
* Cấu trúc bên dưới không có gì đặc biệt, ngoại trừ phần `<input>`, cố gắng sử dụng `background-color`, `height`, `padding` và `width` để chỉnh cho giống với design.

#### Bài giải chưa kèm css

```{html}
<!doctype html>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học web chuẩn</title>
<link rel="stylesheet" href="/exercises/css/fontawesome.css" media="all">
</head>
<body>
  <section class="invite">
    <p class="icon"><i class="far fa-envelope"></i></p>
    <h2>Get the invite</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <form action="/" method="">
      <p><input type="email" value="" placeholder="Enter Email"></p>
      <p><button type="submit">REQUEST INVITE</button></p>
    </form>
  </section>
</body>
</html>
</html>
```

#### Bài giải kèm css
```{html}
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học web chuẩn</title>
<link rel="stylesheet" href="/exercises/css/fontawesome.css" media="all">
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
    color: #231f20;
    font-family: Helvetica,sans-serif;
    font-size: 16px;
  }

  /* Layout */
  .invite {
    background-color: #f2f2f2;
    margin: 20px auto;
    padding: 30px 0 100px;
    text-align: center;
    width: 870px;
  }
  .invite .icon {
    border: 2px solid #5ac6d0;
    border-radius: 50%;
    display: inline-block;
    height: 56px;
    margin-bottom: 35px;
    line-height: 64px;
    text-align: center;
    width: 56px;
  }
  .invite .icon i {
    color: #5ac6d0;
    font-size: 24px;
  }
  .invite h2 {
    font-size: 40px;
    margin-bottom: 30px;
  }
  .invite .info {
    margin-bottom: 25px;
  }
  .invite form .email {
    margin-bottom: 16px;
  }
  .invite form input[type=email] {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 17px;
    padding: 20px 10px;
    width: 360px;
  }
  .invite form button {
    background-color: #70cbce;
    border: 1px solid #70cbce;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    height: 60px;
    min-height: 60px;
    padding: 0 30px;
    transition: 0.3s all;
  }
  .invite form button:hover {
    background-color: #de4a1e;
    border: 1px solid #de4a1e;
  }
</style>
</head>
<body>
  <section class="invite">
    <p class="icon"><i class="far fa-envelope"></i></p>
    <h2>Get the invite</h2>
    <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit varius malesuada nisi ut lobortis.</p>
    <form action="/" method="">
      <p class="email"><input type="email" value="" placeholder="Enter Email"></p>
      <p class="btn"><button type="submit">REQUEST INVITE</button></p>
    </form>
  </section>
</body>
</html>
```

### Bài tập 4: Thực hiện code HTML theo nội dung design dưới đây:
![alt](../images/img_exercise_basic04.png)
#### Hướng dẫn

Nội dung không có gì đặc biệt, theo phần công thức chung bên dưới là được, chú ý trong nội dung có 2 tiêu đề, nên cần sử dụng `<hx>`.

#### Giải (chưa bao gồm css)
```{html}
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học web chuẩn</title>
</head>
<body>
  <section class="funiture">
    <h2>Learn more about beautiful funiture web design combinations</h2>
    <p class="photo"><img src="/exercises/images/img_700x400.png" alt=""></p>
    <h3>Today we will teach you how to find professional materials for your funiture web design.</h3>
    <p class="description">Cras malesuada lacus sed eros egestas iaculis. In malesuada ligula justo, eu ornare felis fermentum non. Nunc porta aliquet eros sed varius. Duis feugiat, risus eget tincidunt cursus.</p>
    <p class="more"><a href="./">Read More</a></p>
  </section>
</body>
</html>
```
#### Giải (bao gồm css)
```{html}
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học web chuẩn</title>
<link rel="stylesheet" href="/common/css/all.css" media="all">
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
    color: #a3a3a3;
    font-family: Helvetica,sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  /* Layout */
  .funiture {
    margin: 30px auto;
    width: 700px;
  }
  .funiture h2 {
    color: #000;
    font-size: 30px;
    margin-bottom: 20px;
  }
  .funiture .photo {
    margin-bottom: 20px;
  }
  .funiture h3 {
    color: #000;
    margin-bottom: 20px;
  }
  .funiture .description {
    margin-bottom: 20px;
  }
  .funiture .more a {
    background-color: #01bacf;
    color: #fff;
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    height: 48px;
    line-height: 48px;
    min-width: 90px;
    padding: 0 30px;
    text-align: center;
    text-decoration: none;
    transition: 0.3s all;
  }
  .funiture .more a:hover {
    background-color: #de4a1e;
  }
</style>
</head>
<body>
  <section class="funiture">
    <h2>Learn more about beautiful funiture web design combinations</h2>
    <p class="photo"><img src="/exercises/images/img_700x400.png" alt=""></p>
    <h3>Today we will teach you how to find professional materials for your funiture web design.</h3>
    <p class="description">Cras malesuada lacus sed eros egestas iaculis. In malesuada ligula justo, eu ornare felis fermentum non. Nunc porta aliquet eros sed varius. Duis feugiat, risus eget tincidunt cursus quis venenatis sapien ultricies accumsan. Duis pharetra tempus vestibulum.</p>
    <p class="more"><a href="./">Read More</a></p>
  </section>
</body>
</html>
```

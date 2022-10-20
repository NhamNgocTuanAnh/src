## Bài tập 5: Thực hiện code HTML theo nội dung design dưới đây:
![alt](../images/img_exercise_e.png)
#### Hướng dẫn: Cấu trúc design không phức tạp:

Áp dụng kết quả của bài tập trước, ta phân tích design như sau:
* Bên trên là tiêu đề `<hx>` và đoạn văn.
* Một nhóm nội dung bên trái gồm:
  * Image.
  * `<hx>` nhỏ.
  * Đoạn văn.
* Một nhóm nội dung bên phải cấu trúc giống bài tập trước.
* Nhớ sử dụng `<div>` bao ngoài các nội dung lớn.
Ta thấy nội dung layout chia làm 3 phần, sử dụng layout bình thường, không có điểm đặc biệt:
* Phần: tiêu đề hx và đoạn văn.
* Phần nhóm nội dung bên trái gồm
* Phần nội dung bên phải, áp dụng kết quả của bài trước.


### Bài giải chưa kèm css

```{html}
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học web chuẩn</title>
</head>
<body>
  <section class="plans">
    <h2>Issues &amp; Plans</h2>
    <p class="lead-text">Quisque efficitur ipsum ante, eu pretium neque tristique vitae.<br>
Donec ac ipsum in lorem molestie.</p>
    <div class="clearfix">
      <div class="left-group">
        <p class="image"><img src="/exercises/images/img_460x315.png" alt=""></p>
        <h3>&quot;Turkey Will Continues To Make Structure Economic Reforms&quot;</h3>
        <p>Quisque efficitur ipsum ante, eu pretium neque tristique vitae. Donec ac ipsum in lorem molestie vestibulum ornare eu nibh. Donec ac velit.<br>
Praesent commodo nunc eros. Vivamus iaculis eleifend est, non blandit risus interdum id.</p>
      </div>
      <div class="right-group">
        <ul class="info-list">
          <li>
            <div class="image"><img src="/exercises/images/img_100x100.png" alt="CLIMATE CHANGE"></div>
            <section class="detail">
              <h3>CLIMATE CHANGE</h3>
              <p>Etiam cras ac sapien ipsum. Morbi scelerisque efficitur nibh a fringilla. Nam et diam vel justo praesent rhoncus volutpat turpis vitae hendrerit.</p>
            </section>
          </li>

          <li>
            <div class="image"><img src="/exercises/images/img_100x100.png" alt="COMPREHENSIVE IMMIGRATION REFORM"></div>
            <section class="detail">
              <h3>COMPREHENSIVE IMMIGRATION REFORM</h3>
              <p>Morbi scelerisque efficitur nibh a fringilla. Nam et diam vel justo feugiat venenatis. Praesent rhoncus volutpat turpis vitae hendrerit.</p>
            </section>
          </li>

          <li>
            <div class="image"><img src="/exercises/images/img_100x100.png" alt="ECONOMIC OPPORTUNITY"></div>
            <section class="detail">
              <h3>ECONOMIC OPPORTUNITY</h3>
              <p>Phasellus vulputate pharetra tempor. Aliquam in tortor in arcu iaculis malesuada, nam et diam vel justo feugiat venenatis.</p>
            </section>
          </li>

          <li>
            <div class="image"><img src="/exercises/images/img_100x100.png" alt="HEALTH CARE"></div>
            <section class="detail">
              <h3>HEALTH CARE</h3>
              <p>onec feugiat ipsum ac risus auctor dignissim. Phasellus ante dolor, molestie vitae malesuada id, posuere non est.</p>
            </section>
          </li>
        </ul>
      </div>
    </div>
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
    background-color: #f2f3f5;
    color: #9b9b9b;
    font-family: Helvetica,sans-serif;
    font-size: 15px;
    line-height: 1.8;
  }
  .clearfix {
    zoom: 1;
  }
  .clearfix:after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
  }

  /* Layout */
  .plans {
    margin: 30px auto;
    width: 1145px;
  }
  .plans h2 {
    color: #1f1f1f;
    font-size: 42px;
    margin-bottom: 15px;
  }
  .plans .lead-text {
    font-size: 19px;
    margin-bottom: 40px;
  }
  .plans .left-group {
    float: left;
    margin-bottom: 20px;
    width: 460px;
  }
  .plans .left-group .image {
    margin-bottom: 8px;
  }
  .plans .left-group .image img {
    border-radius: 6px;
  }
  .plans .left-group h3 {
    color: #1f1f1f;
    font-size: 25px;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  .plans .right-group {
    float: right;
    width: 650px;
  }
  .plans .right-group .info-list li {
    border-bottom: 1px dashed #f44336;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
  .plans .right-group .info-list li:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .plans .right-group .info-list li .image {
    float: left;
    width: 100px;
  }
  .plans .right-group .info-list li .image img {
    border-radius: 6px;
  }
  .plans .right-group .info-list li .detail {
    float: right;
    padding-top: 3px;
    width: 520px;
  }
  .plans .right-group .info-list li .detail h3 {
    color: #1f1f1f;
    margin-bottom: 6px;
    font-size: 18px;
  }
</style>
</head>
<body>
  <section class="plans">
    <h2>Issues &amp; Plans</h2>
    <p class="lead-text">Quisque efficitur ipsum ante, eu pretium neque tristique vitae.<br>
Donec ac ipsum in lorem molestie.</p>
    <div class="clearfix">
      <div class="left-group">
        <p class="image"><img src="/exercises/images/img_460x315.png" alt=""></p>
        <h3>&quot;Turkey Will Continues To Make Structure Economic Reforms&quot;</h3>
        <p>Quisque efficitur ipsum ante, eu pretium neque tristique vitae. Donec ac ipsum in lorem molestie vestibulum ornare eu nibh. Donec ac velit.<br>
Praesent commodo nunc eros. Vivamus iaculis eleifend est, non blandit risus interdum id.</p>
      </div>
      <div class="right-group">
        <ul class="info-list">
          <li class="clearfix">
            <div class="image"><img src="/exercises/images/img_100x100.png" alt="CLIMATE CHANGE"></div>
            <section class="detail">
              <h3>CLIMATE CHANGE</h3>
              <p>Etiam cras ac sapien ipsum. Morbi scelerisque efficitur nibh a fringilla. Nam et diam vel justo praesent rhoncus volutpat turpis vitae hendrerit.</p>
            </section>
          </li>

          <li class="clearfix">
            <div class="image"><img src="/exercises/images/img_100x100.png" alt="COMPREHENSIVE IMMIGRATION REFORM"></div>
            <section class="detail">
              <h3>COMPREHENSIVE IMMIGRATION REFORM</h3>
              <p>Morbi scelerisque efficitur nibh a fringilla. Nam et diam vel justo feugiat venenatis. Praesent rhoncus volutpat turpis vitae hendrerit.</p>
            </section>
          </li>

          <li class="clearfix">
            <div class="image"><img src="/exercises/images/img_100x100.png" alt="ECONOMIC OPPORTUNITY"></div>
            <section class="detail">
              <h3>ECONOMIC OPPORTUNITY</h3>
              <p>Phasellus vulputate pharetra tempor. Aliquam in tortor in arcu iaculis malesuada, nam et diam vel justo feugiat venenatis.</p>
            </section>
          </li>

          <li class="clearfix">
            <div class="image"><img src="/exercises/images/img_100x100.png" alt="HEALTH CARE"></div>
            <section class="detail">
              <h3>HEALTH CARE</h3>
              <p>onec feugiat ipsum ac risus auctor dignissim. Phasellus ante dolor, molestie vitae malesuada id, posuere non est.</p>
            </section>
          </li>
        </ul>
      </div>
    </div>
  </section>
</body>
</html>
```
## Bài tập 4: Thực hiện code HTML theo nội dung design dưới đây:
![alt](../images/img_exercise_d.png)
### Hướng dẫn

Đây là một danh sách, danh sách này gồm các phần như sau:
* Một image bên trái.
* Một nhóm nội dung bên phải gồm:
  * `<hx>`.
  * Đoạn văn.
Ta nhìn thấy design là một danh sách gồm các mục giống nhau, do đó ta chỉ cần quan tâm đến chỉnh sửa 1 mục `li`, chỉnh cho các thành phần bên trong `li `đúng vị trí, sau đó chỉnh cho tổng thể là được, border sẽ gán cho `li`, và nhớ phục hồi lại cho li cuối.

### Giải (chưa bao gồm css)
```{html}
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học web chuẩn</title>
</head>
<body>
  <ul class="info-list">
    <li>
      <div class="image"><img src="/exercises/images/img_100x100.png" alt="CLIMATE CHANGE"></div>
      <section class="detail">
        <h3>CLIMATE CHANGE</h3>
        <p>Etiam cras ac sapien ipsum. Morbi scelerisque efficitur nibh a fringilla. Nam et diam vel justo praesent rhoncus volutpat turpis vitae hendrerit.</p>
      </section>
    </li>

    <li>
      <div class="image"><img src="/exercises/images/img_100x100.png" alt="COMPREHENSIVE IMMIGRATION REFORM"></div>
      <section class="detail">
        <h3>COMPREHENSIVE IMMIGRATION REFORM</h3>
        <p>Morbi scelerisque efficitur nibh a fringilla. Nam et diam vel justo feugiat venenatis. Praesent rhoncus volutpat turpis vitae hendrerit.</p>
      </section>
    </li>

    <li>
      <div class="image"><img src="/exercises/images/img_100x100.png" alt="ECONOMIC OPPORTUNITY"></div>
      <section class="detail">
        <h3>ECONOMIC OPPORTUNITY</h3>
        <p>Phasellus vulputate pharetra tempor. Aliquam in tortor in arcu iaculis malesuada, nam et diam vel justo feugiat venenatis.</p>
      </section>
    </li>

    <li>
      <div class="image"><img src="/exercises/images/img_100x100.png" alt="HEALTH CARE"></div>
      <section class="detail">
        <h3>HEALTH CARE</h3>
        <p>onec feugiat ipsum ac risus auctor dignissim. Phasellus ante dolor, molestie vitae malesuada id, posuere non est.</p>
      </section>
    </li>
  </ul>
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
    color: #9b9b9b;
    font-family: Helvetica,sans-serif;
    font-size: 16px;
    line-height: 1.8;
  }
  .clearfix {
    zoom: 1;
  }
  .clearfix:after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
  }

  /* Layout */
  .info-list {
    background-color: #f2f3f5;
    margin: 30px auto;
    padding: 25px;
    width: 650px;
  }
  .info-list li {
    border-bottom: 1px dashed #f44336;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
  .info-list li:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .info-list li .image {
    float: left;
    width: 100px;
  }
  .info-list li .image img {
    border-radius: 6px;
  }
  .info-list li .detail {
    float: right;
    padding-top: 3px;
    width: 520px;
  }
  .info-list li .detail h3 {
    color: #1f1f1f;
    margin-bottom: 6px;
    font-size: 18px;
  }
</style>
</head>
<body>
  <ul class="info-list">
    <li class="clearfix">
      <div class="image"><img src="/exercises/images/img_100x100.png" alt="CLIMATE CHANGE"></div>
      <section class="detail">
        <h3>CLIMATE CHANGE</h3>
        <p>Etiam cras ac sapien ipsum. Morbi scelerisque efficitur nibh a fringilla. Nam et diam vel justo praesent rhoncus volutpat turpis vitae hendrerit.</p>
      </section>
    </li>

    <li class="clearfix">
      <div class="image"><img src="/exercises/images/img_100x100.png" alt="COMPREHENSIVE IMMIGRATION REFORM"></div>
      <section class="detail">
        <h3>COMPREHENSIVE IMMIGRATION REFORM</h3>
        <p>Morbi scelerisque efficitur nibh a fringilla. Nam et diam vel justo feugiat venenatis. Praesent rhoncus volutpat turpis vitae hendrerit.</p>
      </section>
    </li>

    <li class="clearfix">
      <div class="image"><img src="/exercises/images/img_100x100.png" alt="ECONOMIC OPPORTUNITY"></div>
      <section class="detail">
        <h3>ECONOMIC OPPORTUNITY</h3>
        <p>Phasellus vulputate pharetra tempor. Aliquam in tortor in arcu iaculis malesuada, nam et diam vel justo feugiat venenatis.</p>
      </section>
    </li>

    <li class="clearfix">
      <div class="image"><img src="/exercises/images/img_100x100.png" alt="HEALTH CARE"></div>
      <section class="detail">
        <h3>HEALTH CARE</h3>
        <p>onec feugiat ipsum ac risus auctor dignissim. Phasellus ante dolor, molestie vitae malesuada id, posuere non est.</p>
      </section>
    </li>
  </ul>
</body>
</html>
```

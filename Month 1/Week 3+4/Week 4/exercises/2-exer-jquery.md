# Bài tập Jquery

# Công thức chung

* Bài giải này dựa trên bài học [jQuery](https://hocwebchuan.com/tutorial/jquery/), các bạn cần học qua về jQuery để hiểu về bài tập này.
* Trong bài tập, TEPa.edu sẽ lồng ghép một số cách viết câu điều kiện, vòng lặp và function Javascript, ... mục đích giúp cho các bạn làm quen dần cách sử dụng những vấn đề này.
* Trong bài giải các bạn cố gắng tập cho quen cách đặt biến, viết function, thay vì xử lý trực tiếp, sẽ giúp source code của mình tối ưu hơn.
* Các bước xử lý:
  * Yêu cầu sao thì viết y như vậy, có nghĩa là bạn cần cấu trúc nó ra giấy cho dễ hình dung, VD đề bài kêu so sánh 2 số a và b, và xuất ra số lớn hơn. Thì việc trước mắt là cần có số a và b, xong cần phải so sánh nếu a lớn hơn thì sao? nếu a nhỏ hơn thì sao? kết quả sẽ xuất hiện ở đâu? bạn thể hiện ra giấy vấn đề này, sau khi thấy ổn thì tiến hành viết code.
  * Nếu ứng dụng phức tạp, thì cần chia nhỏ ứng dụng ra, bằng cách sử dụng function.

## Bài tập. So sánh 2 số, xuất ra số lớn hơn

### Hướng dẫn

Bài tập này đơn giản, giúp bạn biết cách đặt biến và truyền biến. \
Cần sử dụng câu lệnh if để so sánh.

### Bài giải

```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học tepa.edu</title>
<script src="https://code.jquery.com/jquery-latest.js"></script>
<script>
$(function(){
  var a = 5;
  var b = 6;
  var result = $('#result');
  if(a > b) {
    result.text(a);
  } else result.text(b);
});
</script>
</head>

<body>
<div id="result"></div>
</body>
</html>
```

## Bài tập. Cho một cấu trúc HTML như bên dưới, khi click button sẽ thay đổi nội dung html bên trong div

```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học tepa.edu</title>
<script src="https://code.jquery.com/jquery-latest.js"></script>
<script>
  $(function(){
    /* Code viết ở đây ↓ */

  });
</script>
</head>

<body>
<div id="box">
  <h3>Title</h3>
  <div>In suscipit nec velit sit amet convallis. Integer</div>
</div>
<button type="button">Click</button>
</body>
</html>
```

### Hướng dẫn

Sử dụng .html().

### Lời giải

```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học tepa.edu</title>
<script src="https://code.jquery.com/jquery-latest.js"></script>
<script>
$(function(){
  $('button').click(function() {
    $('#box').html(
      '<ul>'
      + '<li>Canh chua cá kho.</li>'
      + '<li>Bí xào bò.</li>'
      + '<li>Bí đỏ hầm đuôi heo.</li>'
      + '<li>Sườn non kho ớt.</li>'
      + '</ul>'
      );
  });
});
</script>
</head>

<body>
<div id="box">
  <h3>Title</h3>
  <div>In suscipit nec velit sit amet convallis. Integer</div>
</div>
<button type="button">Click</button>
</body>
</html>
```

## Bài tập. Cho nội dung HTML và CSS như bên dưới, viết chương trình sao cho khi click vào li thì sẽ mở div class="box" tương ứng

```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học tepa.edu</title>
<script src="https://code.jquery.com/jquery-latest.js"></script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  .tab-list li {
    display: inline-block;
    cursor: pointer;
    border: 1px solid #ccc;
    margin-right: 5px;
    padding: 5px 10px;
  }
  .tab-content {
    border: 3px solid #eee;
    height: 200px;
    margin-top: 5px;
    padding: 10px;
    width: 600px;
  }
  .box {
    display: none;
  }
</style>
<script>
$(function(){
  /* Viết code ở đây ↓ */

});
</script>
</head>

<body>
  <ul class="tab-list">
    <li>Tab 01</li>
    <li>Tab 02</li>
    <li>Tab 03</li>
  </ul>
  <div class="tab-content">
    <div class="box">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <div class="box">Sed porttitor turpis risus, vitae sodales neque vulputate ut.</div>
    <div class="box">In suscipit nec velit sit amet convallis. Integer.</div>
  </div>
</body>
</html>
```

### Hướng dẫn

* Trước tiên cho hiển thị phần tử box đầu tiên.
* Khi click:
  * Xác định phần tử n được click.
  * Cho ẩn tất cả box
  * Cho hiển thị box theo phần tử thứ n, VD li thứ nhất được click, thì sẽ hiển thị box thứ nhất.

### Lời giải
```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học tepa.edu</title>
<script src="https://code.jquery.com/jquery-latest.js"></script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  .tab-list li {
    display: inline-block;
    cursor: pointer;
    border: 1px solid #ccc;
    margin-right: 5px;
    padding: 5px 10px;
  }
  .tab-content {
    border: 3px solid #eee;
    height: 200px;
    margin-top: 5px;
    padding: 10px;
    width: 600px;
  }
  .box {
    display: none;
  }
</style>
<script>
$(function(){
  /* cho box đầu tiên hiển thị */
  $('.box:eq(0)').show();
  $('.tab-list li').click(function() {
    /* Xác định phần tử thứ n được click */
    var n = $('.tab-list li').index(this);
    /* Ẩn tất cả .box */
    $('.box').hide();
    /* Hiển thị .box theo phần tử thứ n */
    $('.box:eq('+ n +')').fadeIn(300);
  });
});
</script>
</head>

<body>
  <ul class="tab-list">
    <li>Tab 01</li>
    <li>Tab 02</li>
    <li>Tab 03</li>
  </ul>
  <div class="tab-content">
    <div class="box">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <div class="box">Sed porttitor turpis risus, vitae sodales neque vulputate ut.</div>
    <div class="box">In suscipit nec velit sit amet convallis. Integer.</div>
  </div>
</body>
</html>
```
## Bài tập. Cho một cấu trúc HTML như bên dưới, khi click button sẽ thêm một item bên trong danh sách đã cho

```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học tepa.edu</title>
<script src="https://code.jquery.com/jquery-latest.js"></script>
<script>
  $(function(){
    /* Code viết ở đây ↓ */

  });
</script>
</head>

<body>
<ul id="list">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
</ul>
<button type="button">Add</button>
</body>
</html>
```

### Hướng dẫn

Sử dụng .append().

### Lời giải

```
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Học tepa.edu</title>
<script src="https://code.jquery.com/jquery-latest.js"></script>
<script>
$(function(){
  $('button').click(function() {
    $('#list').append('<li>New item</li>');
  });
});
</script>
</head>

<body>
<ul id="list">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
</ul>
<button type="button">Add</button>
</body>
</html>
```

# Bài tập về DOM JS

## Cách ẩn hoặc hiện thẻ div trong JavaScript

### Ẩn hoặc hiện thẻ div với thuộc tính style.display

Để ẩn hoặc hiện thẻ div bằng JavaScript, bạn có thể thao tác thuộc tính style.display để thay đổi thuộc tính CSS display.

Mình đặt postion cho nó thành 'block', 'inline'hoặc 'inline-block' để hiển thị chúng.

'block'làm cho thành một khối, 'inline'làm cho cùng hàng. 'inline-block'giống như khối ngoại trừ việc nó không thêm dấu ngắt dòng sau phần tử.

Ngược lại, tớ ẩn nó nếu tớ đặt nó thành 'none'.

Ví dụ, bạn có thể viết HTML sau:

```
<button id='show'>
  show
</button>
<button id='hide'>
  hide
</button>
<div>
  hello
</div>
```

Sau đó, viết mã JavaScript sau để chuyển đổi thuộc tính display của div:

```
const showBtn = document.querySelector('#show')
const hideBtn = document.querySelector('#hide')
const div = document.querySelector('div')
showBtn.addEventListener('click', () => {
  div.style.display = 'block'
})
hideBtn.addEventListener('click', () => {
  div.style.display = 'none'
})
```

Mình nhận được các nút hiển thị và ẩn thẻ div với document.querySelector.

Sau đó, tớ gọi addEventListener với 'click'đối số để thêm trình lắng nghe sự kiện của button.

Khi tớ nhấp vào showBtn, tớ đặt `div.style.display` thành **'block'**.

Và khi tớ nhấp vào hideBtn, tớ đặt `div.style.display` thành **'none'**.

Thao tác với thuộc tính `style.visibility` để ẩn hoặc hiện thẻ div.

Tớ cũng có thể thay đổi giá trị của thuộc tính style.visibility để ẩn hoặc hiện thẻ div.

Sự khác biệt giữa `display` và `visibility` là display thêm hoặc xóa thẻ div khỏi màn hình khi tớ thay đổi giá trị của nó.

`visibility` giữ không gian của phần tử bất kể nó được hiển thị hay bị ẩn.

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

### Tham khảo
* [hocwebchuan.com](https://hocwebchuan.com/exercises/html-html5/#basic)

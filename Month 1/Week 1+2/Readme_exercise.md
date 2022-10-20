### Bài tập 1: Thực hiện code HTML theo nội dung design dưới đây:
![alt](img_exercise_basic01.png)
#### Hướng dẫn: Cấu trúc design không phức tạp:

* Xem công thức chung bên dưới.
*  Riêng bên trong <hx> có một đoạn nhấn mạnh "Shared Hosting", nên ta cần sử dụng thẻ <strong>
*  2 liên kết button có dạng danh sách, nên ta sử dụng thẻ `<ul> <li>`, nếu không quan trọng SEO chỗ này, thì có thể không cần cũng được.

### Công thức chung
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

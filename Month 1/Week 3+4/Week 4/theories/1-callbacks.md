# Giới thiệu về CallBacks trong javascript

Hẳn tất cả trong các Lập Trình Viên thì "Callback" không còn xa lạ gì với họ trong tất cả các ngôn ngữ chứ không riêng gì về javascript.
Ở đây tôi chỉ đề cập tới Javascript một ngôn ngữ mà ai cũng từng đặt chân tới.

Trong javascript thì chắc chắn các action tất nhiên là không đồng bộ (asynchronous). Điều đó ai cũng thấu và hiểu. Để mình cho một ví dụ cho các bạn hiểu rõ hơn vì sao tôi nói là không đồng bộ.

Giờ đi vào một ví dụ xuyên suốt luôn:

Tập trung nhìn kỹ ví dụ nhé.

```
function addLinkScript(src) {
         let script = document.createElement('script');
         script.src = src;
         document.head.append(script);
}
```

```
Đây là một action dùng để add một file javascript vào page khi page thực thi. Và khi được add xong file script này thì chúng ta hay user mới có thể sử dụng được các chức năng của file đó.
Khi page load xong thì file sẽ được add có dạng : <script src="file javascript được add...">

Cách gọi nó thật đơn giản, chỉ cần gọi;


addLinkScript('https://anonystick.com/myjs/fileScript.js'); // cú pháp
```

---

* dòng code 1: `addLinkScript('https://anonystick.com/myjs/fileScript.js');`
* dòng code 2: // code tiếp
* dòng code 3: // code tiếp

Vậy đặt câu hỏi Đoạn mã trên có chạy đồng bộ không, xin thưa là không?
---

Trong khi function addLinkScript được thực thi, nhưng trong quá trình thực thi hay add bọ vấn đề chậm hay bị gì đó thì các dòng code 2 và 3 vãn tiếp tục chạy cho dù code 1 vẫn chưa xong. Cho nên có thể không thể sử dụng những funcion bên trong file sj đó.

bây giờ các bạn cũng đã hiểu hơn một chút rồi phải không? Để tôi giải thích kỹ hơn một chút(cho các bạn mới bắt đầu học js). Còn các bạn chuyên sâu thì bỏ qua dòng này nhé. ^^
Ví dụ bên trong file <https://anonystick.com/myjs/fileScript.js> có "someFunction()".



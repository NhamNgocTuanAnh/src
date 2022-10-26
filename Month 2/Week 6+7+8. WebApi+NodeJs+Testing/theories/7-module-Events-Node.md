# Đào sâu một chút về module Events trong Node.js
## 1. Tổng quan module Events trong Node.js

_“**Module events** với lớp đối tượng **EventEmitter** bên trong nó chính là cốt lõi của kiến trúc hướng sự kiện không đồng bộ trong Node.js, hầu hết các_ [_core module built-in trong Node.js_](https://trungquandev.com/module-trong-nodejs-khai-niem-va-thuc-tien/) _đều kế thừa từ module events này.”_

*   Vậy chính xác thì module này dùng để làm gì?

Câu trả lời đơn giản là: _**“Nó cho phép bạn lắng nghe các sự kiện và gán các hành động để chạy khi những sự kiện đó xảy ra.”**_

Nếu bạn đã từng làm việc với Javascript phía trình duyệt, bạn chắc sẽ từng biết về các sự kiện chuột hay bàn phím khi người dùng phía client tương tác với ứng dụng như **onclick**, **onkeyup**…vv, dựa vào những sự kiện đó mà chúng ta sẽ viết code xử lý hành động tiếp theo.

**Events** cũng giống như vậy, ngoại trừ việc đó là chúng ta có thể tự định nghĩa sự kiện, phát ra sự kiện khi chúng ta muốn, không cần thiết phải dựa trên tương tác của người dùng.

_**“Module Events trong Node.js hỗ trợ cho chúng ta lập trình, viết code theo kiến trúc Event-Driven.”**_

*   Hỏi thêm câu nữa, vậy tại sao Node.js lại sử dụng mô hình kiến trúc Event-Driven này?

Trả lời: Các bạn xem qua một số điểm mạnh của nó nhé:

**– “Events là một trong những lý do làm cho Node.js được nói là có tốc độ cao:** Vì hầu hết **code core** của **Node.js** đều dựa trên mô hình **Event-Driven** này nên thay vì đọc tất cả những file cần thiết với mọi request (ví dụ như PHP). Thì thằng Node này lại chỉ khởi động server, khởi tạo hết các biến, khai báo các function mà mình viết rồi cứ thế ngồi đợi một sự kiện nào đó xảy ra và thực thi chức năng.

**– “Khi sử dụng Events thì việc ghép nối các đoạn code của chúng ta lại sẽ khá** _**lỏng lẻo”:**_ Nghĩa là khi một sự kiện được phát ra, nhưng nếu không có đoạn code nào lắng nghe sự kiện đó, thì cũng không sao hết, nó sẽ chẳng làm gì luôn. Như vậy khi cần _xóa code_, cụ thể là xóa một “_bên lắng nghe”_ hoặc một “_sự kiện không cần dùng đến nữa”_ thì cũng không bao giờ bị thông báo lỗi code Javascript gì cả.

– **“**_**Sử dụng Events để thay thế cho Callbacks trong những trường hợp cụ thể”** (không phải thay thế hoàn toàn)**:**_ Node.js có rất nhiều phương thức chạy không đồng bộ (**asynchronous**), đồng nghĩa với việc có rất nhiều tác vụ liên quan đến nhau, tác vụ sau cần dữ liệu của tác vụ trước để chạy, nếu dùng **callback** thì code của bạn sẽ ngày càng trông giống một cái phễu lớn, người ta gọi đó là [Callback Hell](http://callbackhell.com/).
<p align="center">
    <img alt="Ảnh content" src="./images/tim-hieu-events-trong-nodejs-trungquandev-02.jpeg" />
</p>

Để ngăn chặn Callback Hell, nhiều class trong node.js đã sử dụng events để phát ra sự kiện, lắng nghe sự kiện và thực hiện các hành động ứng với các sự kiện. Như vậy sẽ tổ chức code theo một cấu trúc khác gọn gàng hơn, không gặp phải “callback heo” nữa.

---
## 2. Sử dụng module Events.
Sau khi đã phân tích khá nhiều lý thuyết ở trên, bây giờ chúng ta sẽ đi vào cách sử dụng module.

Mình sẽ viết ví dụ đơn giản đầu tiên, Viết code để xử lý bài toán: **Khi con mèo chạy, cái chuông trên cổ con mèo sẽ kêu ring ring.**
```
const events = require("events");
let EventEmitter = new events.EventEmitter();
let ringBell = () => {
    console.log("ring ring ring...");
}
// Lắng nghe sự kiện khi mèo chạy thì gọi tới function ringBell
EventEmitter.on("catRun", ringBell);
// Phát sự kiện con mèo chạy.
EventEmitter.emit("catRun");
```

*   Đầu tiên là **nạp module** **events**, đối tượng **events** này có một thuộc tính duy nhất đó là lớp **EventEmitter**.
*   Bên trong **EventEmitter** có 2 phương thức chính là **emit** và **on** tương ứng với **phát** và **lắng nghe** sự kiện.
*   Khi chạy **EventEmitter.emit** sẽ **emit (phát ra)** một sự kiện tên là _**“catRun”**_ do chúng ta đặt, và rồi **EventEmitter.on** sẽ lắng nghe sự kiện _**“catRun”**_ sau đó chạy function **ringBell**. Nếu bỏ đi một trong 2 method **.emit** hay **.on** ở trên thì chương trình cũng không bị lỗi gì cả.

Ngoài ra chúng ta còn có thể **include thêm dữ liệu** **khi emit sự kiện** như thế này:
```
EventEmitter.emit("catRun", data);
```
Thì ở bên lắng nghe:
```
EventEmitter.on("catRun", (data) => {
   // Làm gì đó với data nhận được ở đây...
});
```
Chúng ta có thể lắng nghe nhiều lần trên cùng một sự kiện như thế này:
```
EventEmitter.on("catRun", (data) => {
  // Sử dụng data cho công việc 1.
});
```
```
EventEmitter.on("catRun", (data) => {
  // Sử dụng data cho công việc 2.
});
```
```
EventEmitter.on("catRun", (data) => {
  // Sử dụng data cho công việc 3.
});
```
Mặc định Node.js cho phép 10 listeners trên cùng một sự kiện, có nghĩa là trong sự kiện “catRun” ở trên, Tới công việc thứ 11 Node.js sẽ thông báo lỗi. Nhưng không sao cả, chúng ta có thể sử dụng hàm setMaxListeners để tăng giới hạn đó.
```
EventEmitter.setMaxListeners(17); // ví dụ mình nâng lên 17 listeners.
```
Còn rất nhiều phương thức hay nữa như **.once();** **.removeListener();** **.removeAllListener();** **.listener();** …vv.
## 3. Viết một module khác kế thừa module Events
Trong thực tế khi viết code, sẽ còn hay hơn nữa khi mà chúng ta **có thể viết một Class khác** mà **kế thừa** các phương thức cũng như thuộc tính của **lớp EventEmitter** trong module **events**. Vì **EventEmitter** cũng là Javascript thông thường và có thể sử dụng trong các module khác.

Nếu từng sử dụng **module http của node.js,** bạn có thể thấy nó cũng có một phương thức là **.on();**
```
var http = require("http");
var server = http.createServer();
server.on("request", function (req, res) {
  res.end("This is the response.");
});
server.listen(8017);
```
Ví dụ ở trên cho thấy phương thức **.on();** của lớp **EventEmitter** đã trở thành một phần của lớp **http.createServer();**

Khi server nhận được một request từ trình duyệt, nó sẽ **emit** một sự kiện có tên là _**“request”**_, sau đó một **listener** chính là **server.on();** lắng nghe và hành động. Cụ thể hành động ở đây là trả về một chuỗi text: _**“This is the response.”**_

**– Bây giờ, bắt đầu ví dụ chính của chúng ta:**

“Mình sẽ viết một module **UserModel.js** **kế thừa module events**, sau đó viết một file **index.js** sử dụng chính module **UserModel** này mỗi khi lưu một **user** mới vào **database** thì sẽ **emit** một sự kiện thông báo là đã lưu trữ user thành công.”

*   **UserModel.js**
```
const EventEmitter = require("events").EventEmitter;
// Fake database.
let database = {
    users: [
        {id: 1, name: "Trungquandev01",  occupation: "developer"},
        {id: 2, name: "Trungquandev02",   occupation: "writer"},
        {id: 3, name: "Trungquandev03", occupation: "designer"}
    ]
};
class UserModel extends EventEmitter {
    constructor() {
        super(); // Từ khóa super được sử dụng để gọi các hàm trên đối tượng cha, ở đây đối tượng cha là EventEmitter
    }
    // Lưu user vào "database fake" ở trên.
    saveUser(user) {
        database.users.push(user);
        this.emit("saved", user); // sử dụng hàm .emit của thằng EventEmitter
    }
    // Liệt kê toàn bộ user hiện tại.
    allUser() {
        return database.users;
    }
}
module.exports = UserModel;
```
*   **index.js**
```
const UserModel = require("./UserModel");
let User = new UserModel();
// Vì đã kế thừa events nên class User có thể sử dụng method .on()
User.on("saved", (user) => {
    console.log(`New user saved: ${user.name} - ${user.occupation}`);
});
// Lưu thêm 2 thằng user mới.
let trungquandev04 = {id: 4, name: "Trungquandev04",  occupation: "Code xịn (─‿‿─)"};
let trungquandev05 = {id: 5, name: "Trungquandev05",  occupation: "Code lởm (-.-)"};
User.saveUser(trungquandev04);
User.saveUser(trungquandev05);
// Lấy ra toàn bộ users
let allUser = User.allUser();
console.log(allUser);
```
*   **Kết quả sau khi chạy:**
<p align="center">
    <img alt="Ảnh content" src="./images/tim-hieu-module-events-trong-nodejs-trungquandev-01.png" />
</p>

Module **UserModel** của chúng ta sau khi kế thừa **EventEmitter**, đã có thể tự phát và tự lắng nghe các sự kiện.
## 4. Đừng nhầm lẫn events với socket.io
Chắc có khá nhiều bạn khi mới làm quen với **node.js** thì cũng từng nghe qua cái tên khá phổ biến đó là **socket.io** để làm các ứng dụng **real-time**. Khi mới tìm hiểu Node.js mình từng cảm thấy chút mâu thuẫn giữa 2 thằng **events và socket.io** này, chắc không ai bị _“dốt”_ thế này giống mình đâu !😀

Cả 2 module trên đều có chung một điểm là **emit** phát sự kiện rồi **on** để lắng nghe sự kiện và **gửi – nhận** các tham số dữ liệu từ chúng.

Điểm khác quan trọng giữa 2 thằng này đó là:

*   **Socket.io** chỉ cho phép phát và lắng nghe sự kiện **qua lại** **giữa client và server.**
*   **Events** chỉ cho phép phát và lắng nghe sự kiện **trong nội bộ server.**

Còn nếu muốn sử dụng **socket.io** **phát và nhận sự kiện ngay trên server luôn** thì có một gói module khác là **socket.io-client.**

*   _“Ơ thế hỏi ngu tiếp: trên server có **events** rồi thì ai lại đi tải thêm **socket.io-client** nữa về dùng cho rối code ra mà sao người ta tải về lắm thế? (hơn 1,4 triệu lượt dowload trong cái tuần mà mình xem).”_

– Câu trả lời nằm trong trường hợp **2 server nodejs cần giao tiếp với nhau**, sẽ không thể sử dụng **events** được nữa, vì nó chỉ sử dụng nội bộ trong 1 sever thôi. Và lúc đó **socket.io-client** đã xuất hiện để giải quyết vấn đề này.

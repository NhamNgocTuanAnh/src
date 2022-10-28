# Async/Await

JavaScript đã đưa ra một giải pháp mới được cộng đồng lập trình rất ủng hộ để giải quyết cái bài toàn bất đồng bộ chính là Async/Await.

## Async/Await là gì?

Trước đây, để làm việc với code bất đồng bộ, chúng ta sử dụng callback và promise, Async/Await là một cách mới để viết code bất đồng bộ, được Javascript giới thiệu từ bản cập nhật ES7. Nó được xây dựng trên Promise và tương thích với tất cả Promise dựa trên API. Trong đó:

Async được dùng để khai báo một hàm bất đồng bộ. Các hàm bất đồng bộ sẽ luôn trả về một giá trị. Việc sử dụng async chỉ đơn giản là ngụ ý rằng một lời hứa sẽ được trả lại và nếu một lời hứa không được trả lại, JavaScript sẽ tự động kết thúc nó.

Await được sử dụng để chờ một Promise. Nó chỉ có thể được sử dụng bên trong một khối Async. Từ khóa Await làm cho JavaScript đợi cho đến khi promise trả về kết quả. Cần lưu ý rằng nó chỉ làm cho khối chức năng không đồng bộ chờ đợi chứ không phải toàn bộ chương trình thực thi.

## Cú pháp Async/Await

### 1. Async

Từ khóa Async được đặt trước 1 hàm làm cho hàm trả về **promise**.

Ví dụ:

```
async function myFunction() {
  return "Hello";
}
```

Tương tự như trên:

```
async function myFunction() {
  return Promise.resolve("Hello");
}
```

Dưới đây là cách sử dụng Promise:

```
myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

### 2. Await

Từ khóa **Await** được đặt trước 1 hàm làm cho hàm chờ một promise.

```
let value = await promise;
```

Từ khóa **await** chỉ có thể được sử dụng bên trong một hàm không đồng bộ.

Ví dụ:

```
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript async / await</h2>

<h1 id="demo"></h1>

<script>
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    myResolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
</script>

</body>
</html>
```

Output:
<p align="center">
    <img alt="Ảnh content" src="./images/async-await-avt.png" />
</p>

## Những điều cần lưu ý khi sử dụng Async/Await

### 1. Chúng ta không thể sử dụng Await bên trong các hàm thông thường

Ví dụ:

```
function firstAsync() {
  let promise = Promise.resolve(10);
  let result = await promise; // Syntax error
}
```

Để hàm trên hoạt động bình thường, chúng ta cần thêm từ khóa `async` trước function firstAsync();

### 2. Async/Await thực hiện tuần tự

Đây không hẳn là điều xấu, nhưng thực hiện song song sẽ nhanh hơn nhiều.

Ví dụ:

```
async function sequence() {
  await promise1(50); // Wait 50ms…
  await promise2(50); // …then wait another 50ms.
  return "done!";
}
```

Đoạn code trên mất 100ms để hoàn thành, không phải một lượng thời gian lớn nhưng vẫn chậm. Điều này xảy ra là do nó đang diễn ra theo trình tự. Hai hàm được trả lại, cả hai đều mất 50ms để hoàn thành. Hàm thứ hai chỉ thực hiện sau khi hàm đầu tiên được giải quyết. Đây không phải là một thực tiễn tốt, vì các yêu cầu lớn có thể rất tốn thời gian. Chúng ta phải thực hiện song song.

Chúng ta có thể làm được điều đó bằng cách sử dụng `Promise.all()`

Theo MDN: "Phương thức `Promise.all(iterable)` trả ra một Promise mới và promise mới này chỉ được kết thúc khi tất cả các promise trong `iterable` kết thúc hoặc có một promise nào đó xử lý thất bại. Kết quả của promise mới này là một mảng chứa kết quả của tất cả các promise theo đúng thứ tự hoặc kết quả lỗi của promise gây lỗi."

Ví dụ:

```
async function sequence() {
    await Promise.all([promise1(), promise2()]);
    return "done!";
}
```

Hàm `Promise.all()` giải quyết khi tất cả các lời hứa bên trong có thể lặp được giải quyết và sau đó trả về kết quả.

## Xử lí lỗi với Async/Await

Kết quả bình thường khi bạn sử dụng async/await là một kết quả đã được resolve. Nhưng khi promise bị reject và exception xảy ra thì phải làm gì? Chúng ta có thể dùng try…catch để giải quyết các lỗi này như các hàm bình thường khác.

Ví dụ:

Nếu một promise giải quyết bình thường, sau đó `await promise` trả về kết quả. Nhưng trong trường hợp từ chối, nó sẽ ném lỗi, giống như có một câu lệnh `throw` tại dòng đó.

```
async function f() {
  await Promise.reject(new Error("Whoops!"));
}
```

Trong tình huống thực tế, lời hứa có thể mất một thời gian trước khi nó từ chối. Trong trường hợp đó sẽ có độ trễ trước khi `await` đưa ra lỗi.

Chúng ta có thể bắt lỗi đó bằng cách sử dụng `try..catch`, giống như cách thông thường `throw`:

```
async function f() {

  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();
```

## Tại sao nên dùng Async/Await?

### 1. Ngắn gọn và sạch sẽ

Ưu điểm đơn giản nhất chính là số lượng code ta cần viết đã giảm đi đáng kể. Không cần phải then rồi catch gì cả, chỉ viết như code chạy tuần tự, sau đó dùng **try/catch** thông thường để bắt lỗi.

### 2. Xử lí lỗi

Async/await giúp ta xử lý cả error đồng bộ lẫn error bất đồng bộ theo cùng 1 cấu trúc. Tạm biệt ***try/catch***. Với đoạn code dưới dùng promise, ***try/catch*** sẽ không bắt được lỗi nếu **JSON.parse** lỗi do nó xảy ra bên trong promise. Ta cần gọi **.catch** bên trong promise và lặp lại code xử lý error, điều mà chắc chắn sẽ trở nên rắc rối hơn cả **console.log** trong đoạn code production.

```
const makeRequest = () => {
  try {
    getJSON()
      .then(result => {
        // this parse may fail
        const data = JSON.parse(result)
        console.log(data)
      })
      // uncomment this block to handle asynchronous errors
      // .catch((err) => {
      //   console.log(err)
      // })
  } catch (err) {
    console.log(err)
  }
```

Bây giờ hãy nhìn vào đoạn code sử dụng `async/await`. Khối `catch` giờ sẽ xử lý các lỗi parsing.

```
const makeRequest = async () => {
  try {
    // this parse may fail
    const data = JSON.parse(await getJSON())
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
```

### 3. Câu lệnh điều kiện

Hãy tưởng tượng một cái gì đó giống như đoạn mã bên dưới tìm nạp một số dữ liệu và quyết định xem nó có nên trả lại dữ liệu đó hay không hoặc lấy thêm chi tiết dựa trên một số giá trị trong dữ liệu.

```
const makeRequest = () => {
  return getJSON()
    .then(data => {
      if (data.needsAnotherRequest) {
        return makeAnotherRequest(data)
          .then(moreData => {
            console.log(moreData)
            return moreData
          })
      } else {
        console.log(data)
        return data
      }
    })
}
```

Chỉ nhìn vào đoạn code trên thôi cũng đã khiến bạn đau đầu. Thật dễ dàng bị lạc trong tất cả các câu lệnh lồng nhau (6 cấp độ), dấu ngoặc nhọn và trả về chỉ cần thiết để truyền tải kết quả cuối cùng cho đến hàm chính.

Khi sử dụng async/await, ta sẽ có đoạn code mới dễ đọc hơn.

```
const makeRequest = async () => {
  const data = await getJSON()
  if (data.needsAnotherRequest) {
    const moreData = await makeAnotherRequest(data);
    console.log(moreData)
    return moreData
  } else {
    console.log(data)
    return data
  }
}
```

Với promise hoặc callback, việc kết hợp if/else hoặc retry với code asynchnous là một cực hình vì ta phải viết code lòng vòng, rắc rối. Với async/await, việc này vô cùng dễ dàng.

### 4. Debug

Cuối cùng khi bạn làm việc với async/await, việc debug trở nên rất đơn giản. Với async / await, bạn không cần nhiều các arrow function và bạn có thể thực hiện các cuộc gọi chờ chính xác như thể chúng là các cuộc gọi đồng bộ thông thường.

Mỗi lần dùng await được tính là một dòng code, do đó ta có thể đặt debugger để debug từng dòng như thường.

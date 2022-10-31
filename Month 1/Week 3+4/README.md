# Week 3

## Tìm hiểu về các kiểu dữ liệu

* null
* undefined
* boolean
* number
* string
* object
* symbol -- thêm vào trong ES6!

**Chú ý**: Tất cả các kiểu dữ liệu trên ngoài object được gọi là nguyên thủy

Toán tử `typeof` là để kiểm tra kiểu dữ liệu trong javascript và luôn luôn trả về một trong bảy giá trị string

```
typeof undefined     === "undefined"; // true
typeof true          === "boolean";   // true
typeof 42            === "number";    // true
typeof "42"          === "string";    // true
typeof { life: 42 }  === "object";    // true

// thêm vào trong ES6!
typeof Symbol()      === "symbol";    // true

```

## Các câu lệnh, cấu trúc lệnh của javaScript

## Toán tử JavaScript

## Math, number Obj

## JS DOM

# Week 4

## Xử lý lỗi, “try..catch” trong Javascript

Try - Catch - Finally

* try {...}: Bao quanh vùng code khả nghi, có khả năng sinh ra lỗi.
* catch { ... }: Xử lý thông tin nếu có lỗi. Kiểu như là log file hay là log database hoặc xuất ra màn hình để người lập trình dễ kiểm soát. Hay đơn giản là điều hướng, thông báo lỗi một cách thân thiện hơn cho người dùng.
* finally { ... }: Đoạn code này luôn luôn được gọi để xử lý các tác vụ còn lại, ví dụ như reset biến hay các tác vụ khác.
* ex: Là biến đại diện cho lỗi (bạn có thể đặt thế nào tùy thích). Nó sẽ nhận sáu giá trị khác nhau có thể được trả về nếu chương trình bị lỗi. (Chúng ta sẽ tìm hiểu ở phần dưới)

```
document.write("<h2>Lập trình JavaScript căn bản</h2>");
try {
    document.write("<p>Câu lệnh try-catch trong JavaScript</p>");
    alertrt("<p>Câu lệnh này có lỗi nè</p>"); //Cố tình để câu lệnh này có lỗi nè
    document.write("<p>Câu lệnh này đúng nè</p>");
} catch (ex) {
    document.write("<p>Nếu trong try có lỗi thì dòng này sẽ chạy nè</p>");
    document.write(
        "<p>Dòng này thông báo lỗi nè: " + ex.toString() + "</p>"
    );
} finally {
    document.write("<p>Cái này nó luôn chạy nè</p>");
}
```

## Promise trong Javascript

## Async/await trong Javascript

# Cú pháp SQL cơ bản
- [Cú pháp SQL cơ bản](#cú-pháp-sql-cơ-bản)
  - [Các lệnh trong SQL](#các-lệnh-trong-sql)
  - [1. SQL SELECT](#1-sql-select)
  - [2. SQL WHERE](#2-sql-where)
    - [2.1 Điều kiện kép: AND & OR](#21-điều-kiện-kép-and--or)
    - [2.2 IN & BETWEEN](#22-in--between)
      - [Toán tử IN](#toán-tử-in)
      - [Toán tử BETWEEN](#toán-tử-between)
      - [Toán tử LIKE](#toán-tử-like)
## Các lệnh trong SQL
Các lệnh trong SQL được bắt đầu với bất cứ từ khóa nào trong SQL như SELECT, INSERT, UPDATE, DELETE, ALTER, DROR, … và lệnh kết thúc với một dấu chấm phảy `(;)`. Ví dụ về một lệnh SQL:
```
SELECT "ten_cot" FROM "ten_bang";
```
Tại sao dấu chấm phảy được sử dụng sau các lệnh trong SQL. Đó là bởi vì dấu chấm phảy được sử dụng để phân biệt riêng rẽ giữa các lệnh trong SQL. Nó là một cách chuẩn để phân biệt riêng rẽ các lệnh SQL khi mà có nhiều hơn một lệnh cùng được sử dụng trong một lời gọi.

## 1. SQL SELECT
Trong một CSDL quan hệ, dữ liệu được lưu trữ ở dạng bảng (table). SELECT là câu lệnh cơ bản nhất trong SQL và tester sử dụng thường xuyên nhất để truy vấn dữ liệu trong các bảng (Table) của CSDL.

Cú pháp:
```
SELECT ColumnName1, ColumnName2 … FROM TableName;
```
Ngữ cảnh: Toàn bộ thông tin khách hàng được lưu trong 1 bảng CSDL tên Customers và bạn muốn truy vấn tên và địa chỉ của từng khách hàng.

Câu lệnh SELECT và kết quả trả về sẽ như sau:
<p align="center">
    <img alt="Ảnh content" src="./images/e61d479a-3819-466c-81e7-96c242221b6e.webp
" />
</p>

Lưu ý:

a) Tên bảng và tên cột không được có khoảng cách và được nhập như một từ; và câu lệnh phải kết thúc bằng chấm phẩy 😉.

b) Phải có dấu phẩy `(,)` giữa các tên cột.

c) Để lấy tất cả các cột của một bảng mà không cần nhập tất cả tên cột, dùng câu lệnh:
```
SELECT * FROM TableName;
```
## 2. SQL WHERE
WHERE là câu lệnh nhằm giới hạn phạm vi truy vấn dựa trên các tiêu chí được mô tả ở mệnh đề WHERE.

Cú pháp:
```
SELECT ColumnName(s) FROM TableName WHERE ColumnName operator ‘Value';
```
Đây là danh sách các toán tử hay dùng với WHERE và ý nghĩa của chúng:
* "=" - Bằng với
* "<>" hoặc "!=" - Khác với
* "<" - Nhỏ hơn
* ">" - Lớn hơn
* "<=" - Nhỏ hơn hoặc bằng
* ">=" - Lớn hơn hoặc bằng
* "LIKE" - Giống với
* "BETWEEN" - Nằm giữa
* "IN" - Trong phạm vi

Ngữ cảnh: Truy vấn tên và địa chỉ khách hàng có quốc gia là Germany. Câu lệnh truy vấn và kết quả trả về như sau:
<p align="center">
    <img alt="Ảnh content" src="./images/2a0e6d4a-84d3-4458-a23b-c5e48a536ae1.webp
" />
</p>

Thông thường, với các cột text, sẽ dùng toán tử bằng hoặc không bằng, và text cần tìm phải được bao bởi nháy đơn `(‘)`.

### 2.1 Điều kiện kép: AND & OR
Toán tử AND

AND kết nối hai hoặc nhiều điều kiện, và hiển thị những hàng (row) nào có dữ liệu thỏa mãn TOÀN BỘ điều kiện được mô tả.

Cú pháp:
```
SELECT ColumnNames WHERE ColumnName operator Value AND ColumnName operator Value;
```
Ngữ cảnh: Truy vấn Tên khách hàng, Thành phố, và Quốc gia trong đó **City = ‘London'** và **Country=’UK'**.

Câu lệnh truy vấn và kết quả trả về như sau:
<p align="center">
    <img alt="Ảnh content" src="./images/ef8073c2-da0f-40dd-a50c-ffb39bf0f948.webp
" />
</p>

Toán tử OR

OR kết nối hai hay nhiều điều kiện, và trả về các hàng thỏa mãn một trong số các điều kiện yêu cầu.

Cú pháp:
```
SELECT ColumnName(s) WHERE ColumnName operator Value OR ColumnName operator Value;
```
Ngữ cảnh: Truy vấn Tên khách hàng đến từ `City = ‘London'` hoặc `Country=’UK'`.

Câu lệnh truy vấn và kết quả trả về như sau:
<p align="center">
    <img alt="Ảnh content" src="./images/164bfc92-0d8d-4c9b-b0c5-79f3c8a5479c.webp
" />
</p>

Kết hợp AND & OR

AND & OR có thể kết hợp với nhau và thường dùng ngoặc đơn () để gộp những biểu thức có điều kiện phức tạp.

Ngữ cảnh: Truy vấn khách hàng đến từ `Country = 'Spain'` và `City = 'Madrid'` hoặc `City = 'Barcelona'`.

Câu lệnh truy vấn và kết quả trả về như sau:
<p align="center">
    <img alt="Ảnh content" src="./images/55ca8898-6203-4e48-9d87-30417311c2ea.webp
" />
</p>

### 2.2 IN & BETWEEN
Một cách dễ hơn trong việc dùng các điều kiện kép là dùng IN hoặc BETWEEN.

#### Toán tử IN

IN cho phép chỉ định nhiều giá trị cho các cột trong mệnh đề WHERE.

Cú pháp:
```
SELECT ColumnName(s) FROM TableName WHERE ColumnName IN (value1,value2,...);
```
Ngữ cảnh: Truy vấn khách hàng đến từ UK và Mexico.

Câu lệnh truy vấn và kết quả trả về như sau:
<p align="center">
    <img alt="Ảnh content" src="./images/00d789c0-497c-471d-8db3-66eee68f4277.webp
" />
</p>

#### Toán tử BETWEEN

BETWEEN được dùng để chọn các giá trị nằm trong một phạm vi giới hạn. Giá trị có thể là số, chữ hoặc ngày tháng.

Cú pháp:
```
SELECT ColumnName(s) FROM TableName WHERE ColumnName BETWEEN value1 AND value2;
```
Ngữ cảnh: Chọn các sản phẩm có giá từ **$18** đến **$40**.

Câu lệnh truy vấn và kết quả trả về như sau:
<p align="center">
    <img alt="Ảnh content" src="./images/f8a85a5d-b66d-41a5-911b-d0a612566b71.webp
" />
</p>

Nếu giá trị là chữ, phải đặt trong dấu nháy đơn, nếu là ngày tháng phải đặt trong dấu #.

Ngược lại, để liệt kê tất cả các dòng có giá trị không thuộc phạm vi giới hạn, dùng NOT BETWEEN. Tương tự, NOT IN sẽ liệt kê ra tất cả các dòng không nằm trong danh sách IN.

#### Toán tử LIKE

LIKE thường được dùng để so sánh một giá trị với các giá trị tương tự bằng toán tử wildcard. Có một số toán tử wildcard được sử dụng kết hợp với LIKE nhưng ở phần I này chỉ đề cập đến ký hiệu % mà tester hay dùng. Những toán tử wildcard khác sẽ được đề cập ở phần II tiếp theo của chủ đề này.

Cú pháp:
```
SELECT ColumnName(s) FROM TableName WHERE ColumnName LIKE pattern;
```
Xem ví dụ cụ thể sau:

* WHERE ColumnName LIKE 'L%' - Tìm kiếm bất kỳ giá trị nào bắt đầu với L.
* WHERE ColumnName LIKE '%L%' - Tìm kiếm bất kỳ giá trị nào có L ở bất kỳ vị trí nào.
* WHERE ColumnName LIKE '%L' - Tìm kiếm bất kỳ giá trị nào mà kết thúc với L.

Tương tự, NOT LIKE sẽ trả về các dòng không khớp với mô tả.



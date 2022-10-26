# MySQL
## Giới thiệu về MySQL
MySQL là một SQL Database mã nguồn mở, được phát triển bởi Swedish. MySQL hỗ trợ nhiều nền tảng khác nhau, gồm Microsoft Windows, Linux, UNIX và Mac OS X.

MySQL có các phiên bản miễn phí hay phải trả tiền, phụ thuộc vào sự sử dụng của nó (mang tính thương mại hay không thương mại) và các đặc điểm. MySQL đi cùng với một SQL Database Server rất nhanh, đa luồng, đa người dùng và đầy sức mạnh.

Dưới đây là một số đặc điểm của MySQL:
* Hiệu suất cao
* Tính khả dụng cao
* Khả năng mở rộng và linh hoạt
* Hỗ trợ mạnh mẽ cho transaction
* Kho lưu web và dữ liệu mạnh
* Bảo vệ dữ liệu cao
* Phát triển ứng dụng toàn diện
* Quản lý dễ dàng
* Hỗ trợ 24/7 và mã nguồn mở
* Tổng chi phí sở hữu thấp nhất
## 5 quy tắc dành cho SQL
### 1. Giữ tên cột và bảng đơn giản
*   Sử dụng một từ cho tên bảng thay vì hai. Nếu bạn cần sử dụng nhiều từ, hãy sử dụng dấu gạch dưới thay vì dấu cách hoặc dấu chấm.
*   Có dấu chấm “.” trong tên của các object sẽ gây nhầm lẫn giữa tên lược đồ và cơ sở dữ liệu. Mặt khác, sử dụng spaces có nghĩa là bạn cần phải thêm dấu ngoặc kép trong truy vấn của mình để cho nó có thể chạy.
*   Giữ tên cột và bảng được nhất quán bằng chữ thường để người dùng không phải nhầm lẫn nếu bạn chuyển sang cơ sở dữ liệu phân biệt chữ hoa chữ thường.
### 2. Xử lý vấn đề ngày, tháng, năm trong SQL
* Chuyển đổi date thành datetime biểu để cải thiện hiệu suất.
* Sẽ khó hơn khi làm việc với các ngày được lưu trữ dưới dạng chuỗi vì thế hãy đảm bảo những chúng không bao giờ được dùng để biểu thị ngày tháng.
* Không chia nhỏ năm, tháng và ngày thành các cột riêng biệt. Điều này khiến cho các truy vấn khó viết và lọc hơn nhiều.
* Luôn sử dụng UTC cho múi giờ của bạn. Nếu bạn có sự kết hợp giữa UTC và non-UTC, điều đó sẽ khiến cho việc hiểu dữ liệu khó khăn hơn nhiều.
### 3. Hiểu rõ thứ tự execute và chạy Query
Việc hiểu thứ tự truy vấn có thể giúp bạn hiểu cách truy vấn hoạt động cũng như lí do vì sao truy vấn của bạn sẽ không chạy.
```
FROM – Includes JOINs so consider using a CTE or subquery to do filtering first.
WHERE - To limit the joined dataset.
GROUP BY – Collapses fields down with aggregate functions (COUNT, MAX, SUM, AVG)
HAVING - Performs the same function as the WHERE clause with aggregate values.
SELECT - Specifies values and aggregations remaining in the set after grouping.
ORDER BY – Returns the table sorted by a column or multiple columns.
LIMIT – Specifies how many rows to be returned to avoid returning too much data.
```
### 4. Các hạn chế của NULL
NULL có nghĩa là giá trị không xác định, không phải 0 và không phải bị bỏ trống. Điều này làm cho nó khó so sánh các giá trị nếu bạn muốn so sánh NULL với NULL. Tùy thuộc vào những gì bạn đang yêu cầu mã của mình để làm sẽ ảnh hưởng đến chiến lược bạn cần phải thực hiện.
### 5. Biết cách tạo bảng
* Khi tạo bảng từ một bảng, hãy sử dụng `SELECT TOP 0` để tạo cấu trúc của bảng trước khi chèn dữ liệu vào.
* Dù nó phải mất tới hai bước thay vì một nhưng bù lại sẽ giúp giảm thời gian xử lý.
    ```
    insert into <table name2>
    select [ID] ,
    [CreatedDate] ,
    [RegionName] ,
    [SalesPerson]
    from <table name1 >
    ```
* Nếu bạn muốn cập nhật một bảng với dữ liệu mới, hãy sử dụng lệnh `TRUNCATE`. Nó sẽ xóa tất cả các hàng khỏi bảng mà không xóa định dạng và tiêu đề
    ```
    truncate table <table name1> -- deletes the contents of the table


    insert into <table name1>
    select
    [ID] ,
    [CreatedDate] ,
    [RegionName] ,
    [SalesPerson]
    from ...
    ```

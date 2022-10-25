# RDBMS
## RDBMS là gì?
RDBMS là viết tắt của Relational Database Management System ((Hệ thống quản lý cơ sở dữ liệu quan hệ)). Tất cả các hệ thống quản lý cơ sở dữ liệu hiện đại như SQL, MS SQL Server, ORACLE, … là dựa trên RDBMS. Nó được gọi là RDBMS bởi vì nó dựa trên Relational Model (Mô hình quan hệ) đã được giới thiệu bởi E.F.Codd.

Trong RDBMS, dữ liệu được biểu diễn bởi các hàng. Relational Database là cơ sở dữ liệu được sử dụng phổ biến nhất. Nó chứa các bảng và mỗi bảng có Primary Key riêng. Bởi vì các bảng này được tổ chức chặt chẽ nên việc truy cập dữ liệu trở nên dễ dàng hơn trong RDBMS.
## Bảng (Table) là gì?
RDBMS Database sử dụng các bảng để lưu trữ dữ liệu. Một bảng là một tập hợp các dữ liệu có liên quan và chứa các hàng và các cột để lưu dữ liệu. Một bảng là một kho lưu trữ (Storage) dữ liệu đơn giản nhất trong RDBMS. Bạn theo dõi ví dụ về bảng một nhóm sinh viên trong bảng SINHVIEN sau:
```
+----+---------+-----+-----------+--------+
| ID |  TEN    | TUOI|  KHOAHOC  | HOCPHI |
+----+---------+-----+-----------+---------+
|  1 | Hoang   |  21 | CNTT      | 4       |
|  2 | Viet    |  19 | DTVT      | 3.0     |
|  3 | Thanh   |  18 | KTDN      |  4      |
|  4 | Nhan    |  19 | CK        |   4.5   |
|  5 | Huong   |  20 | TCNH      |   5     |
+----+---------+-----+-----------+---------+
5 rows in set (0.00 sec)
```
## Field (Trường) là gì?
Trường, là một thực thể nhỏ nhất của bảng, chứa thông tin cụ thể về mỗi bản ghi trong bảng. Trong ví dụ trên, trường trong bảng sinh viên là id, ten, tuoi, khoahoc, hocphi.

## Hàng hoặc bản ghi là gì?
Một hàng của một bảng cũng được gọi là bản ghi. Nó chứa thông tin cụ thể về một entry riêng rẽ trong bảng. Hàng là một thực thể nằm ngang trong bảng. Bảng trên gồm 5 hàng. Bạn theo dõi ví dụ một hàng trong bảng này:
```
+----+----------+-----+-----------+----+
|  1 | Hoang    |  21 | CNTT    |  4   |
+----+----------+-----+-----------+----+
```
## Column (cột) là gì?
Một cột, là một thực thể dọc trong bảng, chứa tất cả thông tin được liên kết với một trường cụ thể trong một bảng. Trong bảng trên, cột "ten" bao gồm thông tin về tên của sinh viên.
```
+-----------+
| TEN    |
+-----------+
| Hoang    |
| Viet   |
| Thanh|
| Nhan    |
| Huong |
+-----------+
```
## Giá trị NULL là gì?
Giá trị NULL của một bảng xác định rằng trường đã bị để trống trong khi tạo bản ghi. Nó là khác hoàn toàn với giá trị 0 hoặc một trường mà chứa khoảng trống (space).
## Ràng buộc (Constraint) trong SQL
Ràng buộc (Constraint) là các qui tắc cho các cột dữ liệu trong bảng. Chúng được sử dụng để giới hạn kiểu dữ liệu mà có thể nhập vào một bảng. Điều này đảm bảo tính chính xác và tính đáng tin cậy cho dữ liệu trong Database.

Ràng buộc (Constraint) có thể là ở cấp độ cột (column level) hoặc cấp độ bảng (table level). Ràng buộc cấp độ cột chỉ được áp dụng cho một cột, trong khi ràng buộc cấp độ bảng được áp dụng cho cả bảng.

Dưới đây là các Ràng buộc (Constraint) được sử dụng phổ biến có sẵn trong SQL:
* Ràng buộc NOT NULL trong SQL: Bảo đảm một cột không thể có giá trị NULL.
* Ràng buộc DEFAULT trong SQL: Cung cấp một giá trị mặc định cho cột khi không được xác định.
* Ràng buộc UNIQUE trong SQL: Bảo đảm tất cả giá trị trong một cột là khác nhau.
* Ràng buộc PRIMARY Key trong SQL: Mỗi hàng/bản ghi được nhận diện một cách duy nhất trong một bảng.
* Ràng buộc FOREIGN Key trong SQL: Mỗi hàng/bản ghi được nhận diện một cách duy nhất trong bất kỳ bảng nào.
* Ràng buộc CHECK trong SQL: Bảo đảm tất cả giá trị trong một cột thỏa mãn các điều kiện nào đó.
* Ràng buộc INDEX trong SQL: Sử dụng để tạo và lấy dữ liệu từ Database một cách nhanh chóng.
## Toàn vẹn dữ liệu trong SQL
Toàn vẹn dữ liệu (Data Integrity) là việc đặt ra các quy tắc trong một cơ sở dữ liệu nhằm kiểm tra các giá trị của dữ liệu trước khi được lưu trữ phải đảm bảo tính chính xác và hợp lý bên trong một cơ sở dữ liệu. Nếu các giá trị dữ liệu nào vi phạm các quy tắc đặt ra thì các dữ liệu đó sẽ không được lưu vào table. Dưới đây là một số loại về tính toàn vẹn dữ liệu tồn tại với mỗi RDBMS:
* Entity Integrity: Xác định rằng trong một bảng không nên có bản sao các hàng.
* Domain Integrity: Bắt buộc các entry hợp lệ cho một cột đã cho bằng cách giới hạn kiểu, định dạng hoặc dãy giá trị.
* Referential integrity: Xác định rằng, các hàng/bản ghi không thể bị xóa, mà được sử dụng bởi các hàng/bản ghi khác.
* User-Defined Integrity: Áp dụng một số qui tắc được định nghĩa bởi người dùng. Các qui tắc này là khác với các loại toàn vẹn dữ liệu trên.

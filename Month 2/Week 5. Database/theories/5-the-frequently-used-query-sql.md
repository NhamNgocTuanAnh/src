# Các câu query hay sử dụng
## 1. Tìm Salary cao thứ 2 trong bảng Employee.
Đây là bài toán phổ biến, mình thấy nó có khá nhiều chỗ khắc tới nó theo tìm hiểu trên mạng. Đối với yêu cầu này, ta có thể wủ dụng Subquery với mệnh đề "IN" để giải quyết vấn đề:
```
select MAX(salary) from employees WHERE salary NOT IN (select MAX(salary) from employees );
```
hoặc có thể sử dụng toán tử `"<"` để thay thế cho `"IN"`:
```
SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);
```
hoặc sử dụng từ khóa `LIMIT` trong Mysql:
```
SELECT salary  FROM (SELECT salary FROM Employee ORDER BY salary DESC LIMIT 2) AS emp ORDER BY salary LIMIT 1;
```
## 2. Tìm MAX Salary từ mỗi Department.
Ở đây, ta có thể sử dụng "GROUP BY" theo Department(DeptID) kết hợp với hàm MAX() để tìm ra Salary lớn nhất trong mỗi group được nhóm ra đối với mỗi department.
```
SELECT DeptID, MAX(Salary) FROM Employee  GROUP BY DeptID;
```
## 3. Hiển thị current date
SQL cung cấp function GetDate() trả về thời gian hiện tại, ta có thể sử dụng function này như sau:
```
SELECT GETDATE() AS CurrentDateTime;
```
## 4.Check định dạng date có phải là định đạng date cho trước hay không.
SQL cung cấp function IsDate() để check định dạng của date cho trước, nó sẽ trả về giá trị 1`(true)` hoặc 0`(false)`, ta có thể sử dụng như sau:
```
SELECT ISDATE('26/05/92') AS "MM/DD/YY";
```
## 5. In ra tên của các employee khác nhau có ngày sinh(DOB) nằm trong khoảng thời gian nhất định nào đó.

Để giải quyết yêu cầu trên, ta có thể sử dụng mệnh đề `BETWEEN` để lấy tất cả các records có DOB thỏa mãn khoảng thời gian cố định, chảng hạn như:
```
SELECT DISTINCT EmpName FROM Employees WHERE DOB  BETWEEN ‘01/01/1960’ AND ‘31/12/1975’;
```
## 6. Tìm số lượng employees theo giới tính mà có ngày sinh (DOB) nằm trong khoảng thời gian cố định cho trước.

Ta có thể sử dụng BETWEEN như trên để lấy số employees theo khoảng thời gian và GROUP BY để nhóm employees theo giới tính, câu lệnh như sau:
```
SELECT COUNT(*), sex from Employees WHERE DOB BETWEEN '01/01/1960' AND '31/12/1975' GROUP BY sex;
```
## 7. Tìm số employees có Salary lớn hơn hoặc bằng 10000.
Các toán tử điều kiện cũng là một phần hay được sử dụng trong SQL, đối với yêu cầu trên ta có câu lệnh sau:
```
SELECT EmpName FROM  Employees WHERE  Salary>=10000;
```
## 8. Tìm tên của employee bắt đầu bằng ký tự "M".
Ta có thể sử dụng toán tử "LIKE" để giải quyết yêu cầu này:
```
SELECT * FROM Employees WHERE EmpName like 'M%';
```
## 9. Tìm tên của employee có chưa từ "Joe", chấp nhận cả những trường hợp như "JOE", "Joe" và "joe".
Ngoài việc sử dụng toán tử "LIKE" như trên, sử dụng kết hợp với hàm UPPER() là một cách hiệu quả cho yêu cầu trên:
```
SELECT * from Employees WHERE UPPER(EmpName) like '%JOE%';
```
## 10. Lâý năm từ ngày tháng bằng SQL query.
Sử dụng function GetDate() để lấy về ngày tháng hiện tại, cụ thể như sau:
```
SELECT YEAR(GETDATE()) as "Year";
```
## 11.Tìm những row bị trùng lặp và xóa chúng.
Ta có thể dùng câu query sau để tìm ra các bản ghi khác nhau:
```
SELECT * FROM emp a WHERE rowid = (SELECT MAX(rowid) FROM EMP b WHERE a.empno=b.empno)
```
Và câu query sau để xóa các bản ghi trùng lặp:
```
DELETE FROM emp a WHERE rowid != (SELECT MAX(rowid) FROM emp b WHERE a.empno=b.empno);
```
## 12. Một table có 2 trường là Student và Marks(điểm), hãy tìm tất cả các Student có điểm lớn hơn điểm trung bình.
Ta có thể sử dụng Subquery để xử lý yêu cầu tren, cụ thể như sau:
```
SELECT student, marks from table where marks > SELECT AVG(marks) from table);
```
## 13. Tìm tất cả các employees đồng thời là manager.
giả sử ta có bảng employee với một trường là mgr_id, là id của Manager của emplyee tương ứng, ở đây chúng ta sẽ dùng self-join.Trong self-join, ta có thể join 2 trường của cùng một bảng để lấy ra thông tin như sau:
```
SELECT e.name, m.name FROM Employee e, Employee m WHERE e.mgr_id = m.emp_id;
```
kết quả của câu query trên là tên của employee và tên của manager như sau:

| name | manager\_name |
| --- | --- |
| John | David |

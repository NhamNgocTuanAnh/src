# Bài tập SQL cơ bản:
## Bài 1: Cho bảng “World” có các trường và một vài giá trị như bảng dưới đây:

| name | continent | area | population | gdp |
| --- | --- | --- | --- | --- |
| Afghanistan | Asia | 652230 | 25500100 | 20343000000 |
| Albania | Europe | 28748 | 2831741 | 12960000000 |
| Algeria | Africa | 2381741 | 37100000 | 188681000000 |
| Andorra | Europe | 468 | 78115 | 3712000000 |
| Angola | Africa | 1246700 | 20609294 | 100990000000 |
| …. |

**Hãy lần lượt giải các yêu cầu sau:**

**1. Hiển thị thuộc tính population của quốc gia có trường name là “Germany”**

Lời giải:
```
SELECT population FROM world
    WHERE name = 'Germany'
```
**2. Hiển thị thông tin các trường name, population của các quốc gia có name là một trong các nước sau: `‘Sweden’`, `‘Norway’` và `‘Denmark’`.**

Lời giải:
```
SELECT name, population FROM world
    WHERE name IN ( 'Sweden', 'Norway', 'Denmark');
```
**3. Sử dụng từ khóa BETWEEN để hiển thị tên và diện tích của các quốc gia có diện tích nằm trong phạm vi từ `200,000` đến `250,000`.**

Lời giải:
```
SELECT name, area FROM world
    WHERE area BETWEEN 200000 AND 250000
```
## Bài 1: Để quản lý Thực tập nghề nghiệp của sinh viên, người ta xây dựng một cơ sở dữ liệu có tên là ThucTap gồm các sơ đồ quan hệ sau:

```
Khoa(makhoa char(10), tenkhoa char(30), dienthoai char(10))
GiangVien(magv int, hotengv char(30), luong decimal(5,2), makhoa char(10))
SinhVien(masv int, hotensv char(30), makhoa char(10), namsinh int, quequan char(30))
DeTai(madt char(10), tendt char(30), kinhphi int, NoiThucTap char(30))
HuongDan(masv int, madt char(10), magv int, ketqua decimal(5,2))
```
### A. Sử dụng SSMS để tạo lập và nhập dữ liệu cho CSDL
```
CREATE DATABASE ThucTap;
USE ThucTap;
CREATE TABLE TBLKhoa
(Makhoa char(10)primary key,
 Tenkhoa char(30),
 Dienthoai char(10));
CREATE TABLE TBLGiangVien(
Magv int primary key,
Hotengv char(30),
Luong decimal(5,2),
Makhoa char(10) references TBLKhoa);
CREATE TABLE TBLSinhVien(
Masv int primary key,
Hotensv char(40),
Makhoa char(10)foreign key references TBLKhoa,
Namsinh int,
Quequan char(30));
CREATE TABLE TBLDeTai(
Madt char(10)primary key,
Tendt char(30),
Kinhphi int,
Noithuctap char(30));
CREATE TABLE TBLHuongDan(
Masv int primary key,
Madt char(10)foreign key references TBLDeTai,
Magv int foreign key references TBLGiangVien,
KetQua decimal(5,2));
INSERT INTO TBLKhoa VALUES
('Geo','Dia ly va QLTN',3855413),
('Math','Toan',3855411),
('Bio','Cong nghe Sinh hoc',3855412);
INSERT INTO TBLGiangVien VALUES
(11,'Thanh Binh',700,'Geo'),
(12,'Thu Huong',500,'Math'),
(13,'Chu Vinh',650,'Geo'),
(14,'Le Thi Ly',500,'Bio'),
(15,'Tran Son',900,'Math');
INSERT INTO TBLSinhVien VALUES
(1,'Le Van Son','Bio',1990,'Nghe An'),
(2,'Nguyen Thi Mai','Geo',1990,'Thanh Hoa'),
(3,'Bui Xuan Duc','Math',1992,'Ha Noi'),
(4,'Nguyen Van Tung','Bio',null,'Ha Tinh'),
(5,'Le Khanh Linh','Bio',1989,'Ha Nam'),
(6,'Tran Khac Trong','Geo',1991,'Thanh Hoa'),
(7,'Le Thi Van','Math',null,'null'),
(8,'Hoang Van Duc','Bio',1992,'Nghe An');
INSERT INTO TBLDeTai VALUES
('Dt01','GIS',100,'Nghe An'),
('Dt02','ARC GIS',500,'Nam Dinh'),
('Dt03','Spatial DB',100, 'Ha Tinh'),
('Dt04','MAP',300,'Quang Binh' );
INSERT INTO TBLHuongDan VALUES
(1,'Dt01',13,8),
(2,'Dt03',14,0),
(3,'Dt03',12,10),
(5,'Dt04',14,7),
(6,'Dt01',13,Null),
(7,'Dt04',11,10),
(8,'Dt03',15,6);
```
### B. Chỉ sử dụng 01 lệnh SQL trả lời các yêu cầu sau:
#### Phan I
1. Đưa ra thông tin gồm mã số, họ tênvà tên khoa của tất cả các giảng viên
2. Đưa ra thông tin gồm mã số, họ tênvà tên khoa của các giảng viên của khoa ‘DIA LY va QLTN’
3. Cho biết số sinh viên của khoa ‘CONG NGHE SINH HOC’
4. Đưa ra danh sách gồm mã số, họ tênvà tuổi của các sinh viên khoa ‘TOAN’
5. Cho biết số giảng viên của khoa ‘CONG NGHE SINH HOC’
6. Cho biết thông tin về sinh viên không tham gia thực tập
7. Đưa ra mã khoa, tên khoa và số giảng viên của mỗi khoa
8. Cho biết số điện thoại của khoa mà sinh viên có tên ‘Le van son’ đang theo học
#### Phan II
1. Cho biết mã số và tên của các đề tài do giảng viên ‘Tran son’ hướng dẫn
2. Cho biết tên đề tài không có sinh viên nào thực tập
3. Cho biết mã số, họ tên, tên khoa của các giảng viên hướng dẫn từ 3 sinh viên trở lên.
4. Cho biết mã số, tên đề tài của đề tài có kinh phí cao nhất
5. Cho biết mã số và tên các đề tài có nhiều hơn 2 sinh viên tham gia thực tập
6. Đưa ra mã số, họ tên và điểm của các sinh viên khoa ‘DIALY và QLTN’
7. Đưa ra tên khoa, số lượng sinh viên của mỗi khoa
8. Cho biết thông tin về các sinh viên thực tập tại quê nhà
9. Hãy cho biết thông tin về những sinh viên chưa có điểm thực tập
10. Đưa ra danh sách gồm mã số, họ tên các sinh viên có điểm thực tập bằng 0
### ĐÁP ÁN
```
--Câu 1:
SELECT GV.Magv, GV.Hotengv, K.Tenkhoa
FROM TBLGiangVien GV join TBLKhoa K
ON GV.Makhoa = K.Makhoa
--Câu 2:
SELECT GV.Magv, GV.Hotengv, K.Tenkhoa
FROM TBLGiangVien GV JOIN TBLKhoa K
ON GV.Makhoa = K.Makhoa
WHERE K.Tenkhoa = 'Dia ly va QLTN'
--Câu 3:
SELECT COUNT(SV.MASV) AS SỐ_SV
FROM TBLSinhVien SV
WHERE Makhoa=’Bio’
--Câu 4:
SELECT SV.Masv, SV.Hotensv
FROM TBLSinhVien SV JOIN TBLKhoa K
ON SV.Makhoa = K.Makhoa
WHERE K.Tenkhoa='TOAN'
--Câu 5:
SELECT COUNT(GV.Magv) AS SỐ_GV
FROM TBLGiangVien GV join TBLKhoa K
ON GV.Makhoa = K.Makhoa
WHERE K.Tenkhoa='CONG NGHE SINH HOC'
--Câu 6:
SELECT SV.Masv,SV.Hotensv
FROM TBLSinhVien SV
WHERE NOT EXISTS(
SELECT HD.Masv
FROM TBLHuongDan HD
WHERE SV.Masv = HD.Masv)
--Câu 7:
SELECT K.Makhoa,K.Tenkhoa, COUNT(K.Makhoa) AS SO_GV
FROM TBLGiangVien GV JOIN TBLKhoa K
ON GV.Makhoa = K.Makhoa
GROUP BY K.Makhoa,K.Tenkhoa
--CÂU 8:
SELECT k.Dienthoai
FROM TBLKhoa K join TBLSinhVien SV
ON K.Makhoa = SV.Makhoa
WHERE SV.Hotensv = 'Le Van Son'
--CÂU 9:
SELECT DT.Madt,DT.Tendt
FROM TBLGiangVien GV join TBLHuongDan HD
ON GV.Magv = HD.Magv
join TBLDeTai DT
ON DT.Madt = HD.Madt
WHERE GV.Hotengv = 'Tran Son'
--Câu 10:
SELECT DT.Madt,DT.Tendt
FROM TBLDeTai DT
WHERE NOT EXISTS(
SELECT HD.Madt
FROM TBLHuongDan HD
WHERE HD.Madt = DT.Madt)
--Câu 11:
SELECT GV.Magv,GV.Hotengv,K.Tenkhoa
FROM TBLGiangVien GV JOIN TBLKhoa K
ON GV.Makhoa = K.Makhoa
WHERE GV.Magv IN (
SELECT HD.Magv
FROM TBLHuongDan HD
GROUP BY HD.Magv
HAVING COUNT(HD.MaSV)>3)
--Câu 12:
SELECT DT.Madt,DT.Tendt
FROM TBLDeTai DT
WHERE DT.Kinhphi = (
SELECT MAX(DT.Kinhphi)
FROM TBLDeTai DT)
--Câu 13:
SELECT DT.Madt,DT.Tendt
FROM TBLDeTai DT
WHERE DT.Madt in (
SELECT HD.Madt
FROM TBLHuongDan HD
GROUP BY HD.Madt
HAVING COUNT(HD.Madt) > 2)
--Câu 14:
SELECT SV.Masv,SV.Hotensv,HD.KetQua
FROM TBLSinhVien SV JOIN TBLHuongDan HD
ON SV.Masv = HD.Masv
JOIN TBLKhoa K
ON K.Makhoa = SV.Makhoa
WHERE K.Tenkhoa = 'Dia ly va QLTN'
--Câu 15:
SELECT K.Tenkhoa, COUNT(SV.Masv) AS Số_SV
FROM TBLSinhVien SV JOIN TBLKhoa K
ON SV.Makhoa = K.Makhoa
GROUP BY K.Tenkhoa
--Câu 16:
SELECT *
FROM TBLSinhVien SV JOIN TBLHuongDan HD
ON HD.Masv = SV.Masv
JOIN TBLDeTai DT
ON DT.Madt = HD.Madt
WHERE SV.Quequan = DT.Noithuctap
--Câu 17:
SELECT *
FROM TBLSinhVien SV JOIN TBLHuongDan HD
ON HD.Masv = SV.Masv
WHERE HD.KetQua is Null
--Câu 18:
SELECT SV.Masv,SV.Hotensv
FROM TBLSinhVien SV JOIN TBLHuongDan HD
ON HD.Masv = SV.Masv
WHERE HD.KetQua = 0
```

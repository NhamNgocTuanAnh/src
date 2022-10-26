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
## Bài 2. Cho bảng “World” có các trường và một vài giá trị như bảng dưới đây:

| name | continent | area | population | gdp | capital |
| --- | --- | --- | --- | --- | --- |
| Algeria | Africa | 2381741 | 38700000 | 207021000000 | Algiers |
| Andorra | Europe | 468 | 76098 | 3222000000 | Andorra la Vella |
| Barbados | Caribbean | 430 | 285000 | 4533000000 | Bridgetown |
| Belize | North America | 22966 | 349728 | 1554000000 | Belmopan |
| Brazil | South America | 8515767 | 202794000 | 2254109000000 | Brasília |

**Hãy lần lượt giải các yêu cầu sau:**<br>
Câu hỏi về SQL cơ bản:
**1. Hiển thị các thông tin name, continent và population của tất cả các quốc gia.**
```
SELECT name, continent, population FROM world
```
**2. Hiển thị tên của tất cả các quốc gia có dân số nhiều hơn 200 triệu người.**
```
SELECT name FROM world
WHERE population>200000000
```
**3. Hiển thị tên quốc gia, GDB bình quân đầu người của các quốc gia có dân số nhiều hơn 200 triệu người.**

Chú ý: GDP bình quân đầu người = Tổng GDP / Tổng số dân
```
SELECT name, gdp/population FROM world
  WHERE population > 200000000
```
**4. Hiển thị tên quốc gia, số dân dưới đơn vị (triệu người) của các quốc gia thuộc lục địa(continent)  Nam Mỹ(South America).**
```
SELECT name, population/1000000 FROM world
  WHERE continent = 'South America'
```
**5. Hiển thị tên quốc gia, dân số của các nước ‘France’, ‘Germany’ và ‘Italy’**
```
SELECT name,population FROM world
  WHERE name IN ('France','Germany','Italy')
```
**6. Hiển thị thông tin các nước có tên quốc gia chứa cụm từ ‘United’**
```
SELECT name FROM world
  WHERE name LIKE '%United%'
```
**7. Hiển các trường thị tên, dân số và diện tích của các quốc gia có dân số đông(nhiều hơn 250 Triệu dân) hoặc có diện tích lớn(> 3M km2)**
```
select name, population, area from world
  where population > 250000000 or area > 3000000
```
**8. Hiển thị các trường tên, dân số và diện tích của các quốc gia thỏa mãn chỉ 1 trong 2 điều kiện sau: dân số đông(nhiều hơn 250 Triệu dân) hoặc có diện tích lớn(> 3M km2). Tức là không hiển thị các quốc gia thỏa mãn cả 2 điều kiện trên.**

Gợi ý: Dùng toán tử XOR

```
select name, population, area from world
  where population > 250000000 xor area > 3000000
```
**9. Hiển thị các trường tên, dân số ở đơn vị triệu người, gdp ở đơn vị tỉ USD của các quốc gia ở lục địa South America. Yêu cầu các trường số(dân số, gdp) làm tròn tới chữ số thập phân thứ 2.**

Gợi ý: Sử dụng hàm ROUND
```
select name, ROUND(population/1000000,2), ROUND(gdp/1000000000,2) from world
  where continent = 'South America'
```
**10. Hiển thị tên và GDP bình quân đầu người(làm tròn tới bội của 1000) ở đơn vị nghìn $, của các quốc gia có tổng GDP lớn hơn 1000 tỉ USD.**
```
select name, ROUND(gdp/population,-3) from world
  where gdp > 1000000000000
```
**11. Hiển thị tên quốc gia, tên thủ đô của các nước có tên quốc gia và tên thủ đô có độ dài bằng nhau(có số lượng ký tự bằng nhau).**

Gợi ý: Dùng hàm `LENGTH`
```
SELECT name, capital
  FROM world
 WHERE LENGTH(name) = LENGTH(capital)
```
**12. Hiển thị tên quốc gia, tên thủ đô của các nước mà nước đó có tên thủ đô khác tên quốc gia nhưng chúng có ký tự đầu tiên giống nhau.**

Gợi ý: Sử dụng hàm `LEFT` và toán tử khác `<>`
```
SELECT name, capital
FROM world
WHERE name <> capital and LEFT(name,1) = LEFT(capital,1)
```
**13. Hiển thị tên các quốc gia không có chứa dấu cách và phải có sự xuất hiện của đầy đủ các nguyên âm (u, e, o, a, i) trong tên quốc gia.**

```
SELECT name
FROM world
WHERE name LIKE '%u%'
AND name LIKE '%e%'
AND name LIKE '%o%'
AND name LIKE '%a%'
AND name LIKE '%i%'
AND name NOT LIKE '% %'
```

## Bài 3. Cho bảng “nobel” có các trường và một vài giá trị như bảng dưới đây:
```
| yr | subject | winner |
| --- | --- | --- |
| 1960 | Chemistry | Willard F. Libby |
| 1960 | Literature | Saint-John Perse |
| 1960 | Medicine | Sir Frank Macfarlane Burnet |
| 1960 | Medicine | Peter Madawar |
| … |
```

### Câu hỏi cơ bản:
1. Hiển thị thông tin(tất cả các trường) của giải Nobel năm 1950

2. Hiển thị tên người nhận giải(winner) Nobel năm 1962 ở lĩnh vực Văn học

3. Hiển thị năm và chủ đề mà nhà bác học Albert Einstein nhận giải Nobel

4. Hiển thị tên người nhận giải Nobel kể từ năm 2000(bao gồm cả năm 2000) thuộc chủ đề Hòa bình(Peace)

5. Hiển thị đầy đủ các thông tin của những người dành giải Nobel trong những năm 80(1980 đến 1989)

6. Hiển thị thông tin nhận giải Nobel của các vị lãnh đạo có tên sau:
    * Theodore Roosevelt
    * Woodrow Wilson
    * Jimmy Carter
    * Barack Obama
7. Hiển thị các tên người nhận giải có Firstname là John

8. Hiển thị year, subject, và name của người nhận giải Nobel vật lý năm 1980 và người nhận giải Nobel hóa học năm 1984

9. Hiển thị year, subject, và name của những người nhận giải năm 1980, ngoại trừ chủ đề Hóa học và Dược phẩm(Chemistry and Medicine)

10. Hiển thị year, subject, và name của những người nhận giải Nobel Dược phẩm(Medicine) trước 1910(ko bao gồm 1910) và những người nhận giải Nobel văn học(Literature) sau năm 2004(bao gồm 2004)*

### Lời giải cơ bản:
```
#1
SELECT yr, subject, winner
  FROM nobel
 WHERE yr = 1950

#2
SELECT winner
  FROM nobel
 WHERE yr = 1962
   AND subject = 'Literature'

#3
SELECT yr, subject
  FROM nobel
WHERE winner = 'Albert Einstein'

#4
SELECT winner
FROM nobel
WHERE subject = 'Peace' AND yr >= 2000

#5
SELECT yr, subject, winner
  FROM nobel
WHERE subject = 'Literature' AND yr BETWEEN 1980 AND 1989

#6
SELECT * FROM nobel
 WHERE winner IN ('Theodore Roosevelt',
                  'Woodrow Wilson',
                  'Jimmy Carter',
                  'Barack Obama')

#7
SELECT winner FROM nobel
  WHERE winner LIKE 'JOHN %'

#8
SELECT * FROM nobel
  WHERE yr = 1980 AND subject = 'Physics'
     OR yr = 1984 AND subject = 'Chemistry'

#9
SELECT * FROM nobel
  WHERE yr = 1980
    AND subject NOT IN ('Chemistry','Medicine')

#10
SELECT * FROM nobel
  WHERE yr < 1910 AND subject = 'Medicine'
     OR yr >= 2004 AND subject = 'Literature'
```

### Câu hỏi nâng cao
11. Tìm thông tin tất cả các giải Nobel của PETER GRÜNBERG

12. Tìm thông tin tất cả các giải Nobel của EUGENE O’NEILL

13. Hiển thị thông tin winners, year và subject của những người có tên bắt đầu bằng Sir. Hiển thị gần đây nhất đầu tiên, sau đó theo thứ tự tên

14. Hiển thị thông tin người giành giải năm 1984 và chủ đề, sắp xếp theo tên chủ đề và sau đó là tên người giành giải, nhưng chủ đề Chemistry và Physics xếp cuối
### Lời giải câu hỏi nâng cao
```
#11
SELECT * FROM nobel
  WHERE winner = 'Peter Grünberg'

#12
SELECT * FROM nobel
  WHERE winner = 'Eugene O''Neill'

#13
SELECT winner, yr, subject FROM nobel
  WHERE winner LIKE 'Sir %'
  ORDER BY yr DESC, winner

#14
SELECT winner, subject
  FROM nobel
 WHERE yr=1984
 ORDER BY subject in ('Chemistry','Physics'), subject, winner
```

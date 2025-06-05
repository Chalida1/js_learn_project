//การใช้งานตัวแปรแบบ let และ const
let fname = 'John';
let age = 30; 
let salaly = 30000;

console.log(fname); // John
console.log(age); // 30
console.log(salaly); // 30000

//ให้อยู่ในรูปแบบของ template string เรียงกัน
console.log(`สวัสดี: ${fname}, อายุ: ${age}, เงินเดือน: ${salaly}`); // ชื่อ: John, อายุ: 30, เงินเดือน: 30000

//${expression} คือนิพจน์ที่ใช้ในการแสดงผลค่าตัวแปรใน template string
//สามารถใช้ได้กับทุกชนิดข้อมูล

console.log(`10+20 = ${10 + 20}`); 
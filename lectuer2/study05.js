//การแปลงชนิดข้อมูลใน JavaScript

//แปลงstring เป็นNumber
let aa = '100';
let bb = '50';

console.log(Number(aa) +Number(bb)); 
console.log("-----------------------------------");
console.log(`${aa} + ${bb} = ${Number(aa) + Number(bb)}`); //แสดงผลแบบ template string
console.log("-----------------------------------");
console.log(parseInt(aa) + parseFloat(bb)); //แปลงเป็นจำนวนเต็มและจำนวนทศนิยม
console.log("-----------------------------------");
console.log(`${aa} + ${bb} = ${parseInt(aa) + parseFloat(bb)}`); //แสดงผลแบบ template string
console.log("-----------------------------------");

console.log('********************************************************************************')

//แปลงnumber เป็นstring
let cc = 100;
let dd = 50;
console.log(String(cc) + String(dd)); //แปลงเป็นstring
console.log("-----------------------------------");
console.log(`${cc} + ${dd} = ${String(cc) + String(dd)}`); //แสดงผลแบบ template string
console.log("-----------------------------------");
console.log(cc.toString());
console.log(dd.toString()); //แปลงเป็นstring
console.log("-----------------------------------");
console.log(cc.toFixed(2)); //แปลงเป็นstringและกำหนดทศนิยม 2 ตำแหน่ง
console.log(dd.toFixed(4)); //แปลงเป็นstringและกำหนดทศนิยม 4 ตำแหน่ง
console.log("-----------------------------------");



//แปลงboolean เป็นstring
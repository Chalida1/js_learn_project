//function มี 4 ประเภท
// functin คือการทำงานหนึ่งๆ **จะไม่ทำงานถ้าไม่ถูกเรียกใช้ (call function)**
//1. no parameter, no return  **no parameterคือไม่มีอะไรในวงเล็บ** **no returnคือคำสั่งที่ไม่มีการรีเทิร์นค่าออกมา** คำสั่งอยู่ภายใต้ปีกกา
function sauFunc1(){
    console.log("Wow!!!....");
}

//2.have parameter, no return **have parameterมีparamiter ได้มากกว่า1**
function sauFunc2(aa, bb){
    console.log(aa);
    console.log(bb);
    //return aa + bb; //ถ้าไม่ต้องการให้รีเทิร์นค่าออกมา ก็ไม่ต้องใส่ return
}

//3.no parameter, has return  รีเทิร์นค่าได้ตัวเดียว
function sauFunc3(){
    console.log("Hello World");
    return "wooo!!!....";
}

//4.have parameter, has return  รีเทิร์นค่าได้ตัวเดียว
function sauFunc4(aa, bb, cc, dd){  
    return aa + bb + cc + dd; //รีเทิร์นค่าออกมาได้
}

//--------------------------------------------------------------
//--------------------------------------------------------------

//ไม่มี return
sauFunc1(); //เรียกใช้ฟังก์ชัน sauFunc1
sauFunc2(10,20) //ข้อมูลที่ส่งใช้เป็น Argument จะถูกส่งไปยัง Parameter ของฟังก์ชัน sauFunc2
//--------------------------------------------------------------

//มี return
let result3 = sauFunc3(); //เรียกใช้ฟังก์ชัน sauFunc3 และเก็บค่าที่รีเทิร์นไว้ในตัวแปร result3
console.log(result3); //แสดงผลค่าที่รีเทิร์นจาก sauFunc3

//มี return และมี parameter
let result4 = sauFunc4(1, 5, 3, 4); //เรียกใช้ฟังก์ชัน sauFunc4 พร้อมส่งค่า aa, bb, cc, dd และเก็บค่าที่รีเทิร์นไว้ในตัวแปร result4
console.log(result4); //แสดงผลค่าที่รีเทิร์นจาก sauFunc4

//แสดงผลค่าของ result3 และ result4
console.log(`result3 : ${result3}`); //แสดงผลค่าของ result3
console.log(`result4 : ${result4}`); //แสดงผลค่าของ result4
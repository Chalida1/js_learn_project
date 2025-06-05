//เจาะลึกArrow function expression 
let aa = () => {
    console.log("Hello from Arrow function expression");
}

//หากคำสั่งในปีกกามี1คำสั่งไม่จำเป็นต้องใช้ปีกกา
let bb = () => console.log('Hello....')


let cc =() => {
    return 'wow wow wow';
}

//หากคำสั่งใน {} มีเพียง 1 คำสั่ง และเป็นคำสั่งรีเทิร์นค่าออกมา ก็ห้ามใช้คำว่า return
let dd = () => 'wow wow wow'; //รีเทิร์นค่าออกมาได้

aa(); 
bb(); //เรียกใช้ฟังก์ชัน bb
console.log(cc()); //เรียกใช้ฟังก์ชัน cc และแสดงผลค่าที่รีเทิร์นออกมา  
console.log(dd()); //เรียกใช้ฟังก์ชัน dd และแสดงผลค่าที่รีเทิร์นออกมา
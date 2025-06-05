//function expression คือการเขียนฟังชั่นให้อยู่ในรูปของนิพจน์ อะไรที่อยู่ในวงเล็บ () จะถูกเรียกว่า นิพจน์
//มีอยู่  ประเภท
//1.Anonymous function expression (ไม่มีชื่อ)
let aa = function() {
    console.log("Hello from Anonymous function expression");
}

let bb = function(oo, vv) {
    return oo + vv; //รีเทิร์นค่าออกมาได้
}

//เรียกใช้ฟังก์ชัน
aa(); //เรียกใช้ฟังก์ชัน aa
console.log(bb(10, 20)); //เรียกใช้ฟังก์ชัน bb และแสดงผลค่าที่รีเทิร์นออกมา


console.log("--------------------------------------------------");


//2.Arrow function expression (ใช้เครื่องหมาย => แทน functionเขียนไว้หลังวงเล็บ)***
let cc = () => {
    console.log("Hello from Arrow function expression");
}

let gg = (oo, vv) =>{
    return oo + vv; //รีเทิร์นค่าออกมาได้
}


cc(); //เรียกใช้ฟังก์ชัน cc
console.log(gg(10, 20)); //เรียกใช้ฟังก์ชัน gg และแสดงผลค่าที่รีเทิร์นออกมา




//loop สำหรับ array และ object
const arr = [10, 20, 30, 40];
arr.forEach((xx) => {    //คูณ100 ทุกตัวในอาเรย์
    console.log(xx * 100);
});


const obj = {
    name: 'John',
    age: 30,
    city: 'Bangkok'
}


for(let yy in obj) { //วนลูปแสดงผล yy และ value ของออบเจ็กต์
    console.log(obj[yy]); //obj[yy] คือการเข้าถึงค่าในออบเจ็กต์ obj โดยใช้ key ที่ได้จากการวนลูป
}

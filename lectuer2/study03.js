//ชนิดข้อมูล(data type) ต่างๆในjavascript
//string ข้อความ 
let aa = 'Hello'; //single quote
let bb = "Hello"; //double quote
let cc = `Hello`; //backtick 

//number ตัวเลข
let dd = 1234; //integer
let ee = 12.34; //float


//boolean ค่าจริงหรือเท็จ   
let ff = true; //true
let gg = false; //false


//null ค่าว่างคือมันมีค่าแต่ไม่รู้ว่าคือค่าอะไร
let hh = null; //null


//undefined ค่าที่ไม่ได้กำหนด 
let ii; //undefined


//**object*** ออบเจ็กต์จะเป็นการเก็บข้อมูลเป็นคู่ key:value ภายใต้ {}  เป็นข้อมูลแบบไหนก็ได้  **ใช้บ่อย**
let jj = { 
    stuname: 'John', 
    stuage: 30 ,
    stuAddress:{
        noHome: '123/4',
        city: 'Bangkok',
        country: 'Thailand'
    },
    stuSubjects: ['Math', 'Science', 'English'],
}; //object


//**array** อาเรย์เก็บข้อมูลแตกต่างกันได้
let kk = [1, 2, 3, 4, 5]; //array
let oo = [1, d,'dog', cat, null]; //array
let pp =[
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 40 }
]



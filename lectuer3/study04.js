//******callback function *****************

let aa =() => console.log("weeeeeeeeeee");

let bb = (x, y) => x*y;

function test01 (v1, v2){
    v1(); //Callback function เรียกใช้ฟังก์ชัน v1 ซึ่งเป็น aa
    console.log("Hi!!...");
    console.log(v2(10, 20)); //Callback function
    
}

test01(aa, bb); //Callback function  ส่งArgument aa และ bb ส่งไปให้ v1 และ v2

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
test01(bb, (m,n)=>{
    console.log('111')
    console.log('222')
    console.log('333')
    return m+n;
})


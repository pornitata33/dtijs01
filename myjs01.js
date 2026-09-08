// คำสั่งแสดงผลที่หน้าต่าง console *** ใช้เพื่อการ debug ค่าต่างๆ ในการ Dev. ด้วย JS
// ` เรียก back tick (กด Alt+9+6)
// string
console.log("ABCDE")
console.log('ABCDE')
console.log(`ABCDE`)
console.log("DTI -> 'SAU'")
console.log('DTI -> "SAU"')
console.log(`DTI -> 'SAU'`)
console.log(`DTI -> "SAU"`)
 
// number
console.log(555)
console.log(123.456789)
 
// boolean (true/false)
console.log(true)
console.log(false)
 
// array จะเขียนอยู่ใน [ value, value, value, ... ]
console.log([11,22,33,44,55])
console.log(['AA', 'BB', 'CC'])
 
// object จะเขียนอยู่ใน { key: value, key: value, ... }
console.log({
    // key: value
    name: 'John',
    age: 25,
    gender: "Male",
    salary: 15000.75,
    isStudent: true,
    food: ["KFC", "Mcdonalds", "Pizza"],
    address: {
        street: '123/456',
        city: 'Bangkok',
        country: 'Thailand',
    }
})
 
console.log(undefined)   // คือ ไม่ได้กำหนดหรือสร้างขึ้นมา
console.log(null)   //คือ ไม่รู้ว่ามันคือค่าอะไร
console.log(NaN)    //คือ Not a number ไม่ใช่ตัวเลข
 
// function
console.log(function(){
    console.log('Wow wow wow')
})
 
console.log(()=>{
    console.log(`Woo woo woo`)
})
 
//----------------------------------------
// Comment ใน JS
// 1. Single line comment (คอมเมนต์บรรทัดเดียว) คือ ข้อความที่อยู่หลัง //
// 2. Multi line comment (คอมเมนต์หลายบรรทัด) คือ ข้อความที่อยู่ระหว่าง /* และ */
// คีย์ลัดใน VS Code ---> Ctrl + / (แต่จะเป็นแบบ Single line comment )
 
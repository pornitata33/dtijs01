// แบบที่ 2 : Arrow function

// ตัวอย่างการใช้งานแบบกำหนดค่าให้กับตัวแปร

let myData1 = ( ) => {

    console.log("Hello.")

}

 

let myData2 = (a, b ) => {

    console.log(a + b)

}

 

let myData3 = () => {

    return "Wow wow wow"

}

 

let myData4 = (x, y, z) => {

    console.log(x, y, z)

    return x * y * z

}

 

//ตัวแปรที่เก็บฟังก์ชัน เวลาใช้งานตัวแปร ใช้เหมือนกับการเรียกใช้ฟังก์ชัน

myData1() //เรียกใช้ฟังก์ชัน

myData2(10, 20)

console.log( myData3() )

console.log( myData4(10, 20, 30) )

 

// หากมีพารามิเตอร์ตัวเดียวไม่ต้องมี ( ) ก็ได้

// let myData5 = ( xx ) => { หรือ

let myData5 = xx => {

    console.log(xx)

}

 

myData5(100) //เรียกใช้ฟังก์ชัน

 

// กรณีที่คำสั่งใน { } มีคำสั่งเดียว ไม่ต้องมี { } ก็ได้

// และหากคำสั่งเดียวนั้นเป็น return ก็ไม่ต้องใส่ return

let myData6 = () => "Wow wow wow"

/* แบบเดิม

let myData6 = () => {

    return "Wow wow wow"

}

*/

 

let myData7 = (x, y, z) => console.log("Hi...")

/* แบบเดิม

let myData7 = (x, y, z) => {

    console.log("Hi...")

}

*/

 

console.log( myData6() )

myData7(11, 22, 33)



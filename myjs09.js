// Expression function คือ การเอาฟังก์ชันไปเขียนในอยู่ในรูปของนิพจน์ เช่น เอาฟังก์ชันไปเป็นค่ากำหนดให้กับตัวแปร, เอาฟังก์ชันไปเป็นค่าอาร์กิวเมนต์เพื่อส่งให้พารามิเตอร์ เป็นต้น

 

// แบบที่ 1 : Anonymous function

// ตัวอย่างการใช้งานแบบกำหนดค่าให้กับตัวแปร

let myData1 = function( ){

    console.log("Hello.")

}

 

let myData2 = function(a, b ){

    console.log(a + b)

}

 

let myData3 = function(){

    return "Wow wow wow"

}

 

let myData4 = function(x, y, z){

    console.log(x, y, z)

    return x * y * z

}

 

//ตัวแปรที่เก็บฟังก์ชัน เวลาใช้งานตัวแปร ใช้เหมือนกับการเรียกใช้ฟังก์ชัน

myData1() //เรียกใช้ฟังก์ชัน

myData2(10, 20)

console.log( myData3() )

console.log( myData4(10, 20, 30) )


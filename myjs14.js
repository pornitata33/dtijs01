// array ใช้กับตัวแปรทำให้ตัวแปร 1 ตัวเก็บได้มากก่า 1 ข้อมูล

let myArray01 = [10, 20, 30, 40]

//การเข้าถึงทุกข้อมูลของ Array เพื่อเอาข้อมูลเหล่านั้นไปใช้งาน
//วิธีที่ 1 
for(let i = 0; i < myArray01.length; i++){
    console.log(myArray01 [i] * 10 )
}

//วิธีที่2 ใช้ forEach
myArray01.forEach(function(value, index){
    console.log(value * 10,`index: ${index}`)
})

//วืธีที่3 ใช้ for-of
for(let value of myArray01){
    console.log(value * 10)
}

//วิธีที่4 ใช้map(Senior)
(myArray01.map(function(value,index){
    console.log(value * 10, `index: ${index}`)
}))
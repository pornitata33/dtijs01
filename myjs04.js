myjs04.js
 
// Operators
// Arithmetic operators (+, -, *, /, %, ** ยกกำลัง, ++, --)
console.log(10**3) //คือ 10 ยกกำลัง 3 คือ 10 คูณกัน 3 ครั้ง
 
// Comparison operators (==, ===, !=, !==, >, <, >=, <=)
// == เปรียบเทียบเฉพาะตัวข้อมูลเท่านั้น, === เปรียบเทียบตัวข้อมูลและชนิดข้อมูล
// != เปรียบเทียบเฉพาะตัวข้อมูลเท่านั้น, !== เปรียบเทียบตัวข้อมูลและชนิดข้อมูล
console.log("55" == 55)    //ได้ true
console.log("55" === 55)   //ได้ false
 
// Logical operators (&&, ||, !)
 
// Assignment operators (=, +=, -=, *=, /=, %=, **=)
let a = 10
let b = 100
a = a + 50 * b //สามารถเขียนได้เป็น a += 50 * b
 
// Ternary operators (condition ? expr1(do true) : expr2(do false))
let data1 = 100
let data2 = data1 <= 50 * 2 ? "Hello..." : "Hey..."
console.log(data2)
 
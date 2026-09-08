// Fucnction คือ การทำงานหนึ่งๆ จะไม่ทำงานหากไม่เรียกใช้ (call function)

// Function มี 4 ประเภท

// *** parameter คือ ตัวแปรในวงเล็บหลังชื่อฟังก์ชัน ถือเป็นตัวแปรแบบ let

// *** return คือ คำสั่ง + กับค่าที่ส่งกลับไปยังจุดเรียกใช้ฟังก์ชัน

// *** arguments คือ ค่าที่ส่งให้ parameter

 

//1. no parameter no return

function funcA(){

    console.log("Hello World");

    console.log('---------------------------')

}

 

funcA() // call function

 

//2. have parameters no return

function funcB(param1, param2){

    console.log(param1);

    console.log(param2);

    console.log(`${param1} + ${param2} = ${param1 + param2}`)

    console.log('---------------------------')

}

 

funcB( 100, 300 )  //call function

 

//3. no parameters has return

function funcC(){

    console.log('Wow wow wow')

    return "Hey..."

}

 

// เวลา call function ที่มี return อย่าเขียนโดดๆ

// funcC() ทำได้แต่เขาไม่ทำกัน เพราะมี return

console.log(`${funcC()} Sombat ^_^`) // call function

let data = funcC() //call function

console.log(`${data} Somjai`)

console.log('---------------------------')

 

//4. have parameters has return

function funcD(p1, p2, p3, p4){

    return p1 + p2 + p3 + p4    

}

 

// เวลา call function ที่มี return อย่าเขียนโดดๆ

// funcD(10, 20, 30, 40) ทำได้แต่เขาไม่ทำกัน เพราะมี return

 

let result = funcD(10, 20, 30, 40) // call function

console.log(`10 + 20 + 30 + 40 = ${result}`)


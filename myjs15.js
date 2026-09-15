//object ใช้กับตัวแปรทำให้ตัวแปร 1 ตัวเก็บได้มากก่า 1 ข้อมูล
//เพียงแต่ว่า แต่ละข้อมูลจะมีkey กำกับ และมองเห็น
let person = {
    name: "Kanokwan" , age: 20, gender: "male",
}

//object /Array
let student =[
    { id: 1111, name: "Sombat", gpa:3.5},
    { id: 2222, name: "Nattaoong", gpa:3.6},
    { id: 3333, name: "Kanokwan", gpa:3.7},
    { id: 4444, name: "Nattapong", gpa:3.8}
]


    student.map((Item,index) =>{
        console.log(`ID: ${Item.id}`);
        console.log(`NAME: ${Item.name}`);
        console.log(`GPA: ${Item.age}`);
        console.log("--------------------------");

    })



    student.map(function(Item,index){
        console.log(`ID: ${Item.id}`);
        console.log(`NAME: ${Item.name}`);
        console.log(`GPA: ${Item.age}`);
        console.log("--------------------------");


    })

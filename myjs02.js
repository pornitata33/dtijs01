// Identifier เป็นชื่อใดๆ ที่ Dev. ตั้งเอง ต้องเป็นไปตามกฏการตั้งชื่อ
 
// Data Type ชนิดข้อมูล (string, number, boolean, array, object, undifined, null, NaN, function)
 
// Varible ตัวแปร คือ ชื่อที่ Dev. ตั้งเองเอาไว้เก็บข้อมูลไว้ใน memory ของคอมพิวเตอร์
// ประกาศหรือสร้างตัวแปรได้ 3 วิธีด้วย var, let, const
var data1 = 10      // เป็น Global และสามารถเปลี่ยนค่าได้ (เป็นทางเลือกสุดท้ายที่จะใช้)
let data2 = 20      // เป็น Local และสามารถเปลี่ยนค่าได้
const data3 = 30    // เป็น Local และไม่สามารถเปลี่ยนค่าได้
 
{
    var info1 = 'AA'
    let info2 = 'BB'
    const info3 = 'CC'
    {
        var value1 = true
        let value2 = false
        const value3 = true
        console.log(data3)
        console.log(info2)
    }
    console.log(data1)
    // console.log(value2) Error
    info2 = 'Wow wow wow'
    // info3 = 'Woo woo woo' Error
}
 
console.log(info1)
// console.log(info2) Error
 
//--------------------------------------------
let dti_data = 500  // 500 คือ Number
console.log(dti_data)
dti_data = "Wow wow wow"
console.log(dti_data)
dti_data = true
console.log(dti_data)
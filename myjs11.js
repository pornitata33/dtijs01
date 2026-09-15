//แบบที่3 Anonymus function กับ พารามิเตอร์  + callblack function
//ตัวอย่างการใช้งานเอาฟังค์ชันไปเป็นค่าอาร์กิวเมนต์เพื่อไปส่งให้พารามิเตอร์

function test01(x, y) {
    console.log(x);
    y();
}

function test02(a, b, c) {
    let data = a + c(20);
    console.log(data);
    b(11, 22, 33);
}

// Calls
test01(555, function () {
    console.log("Wow Wow Wow");
});

test02(
    100,
    function (x, y, z) {
        console.log(x + y + z);
    },
    function (m) {
        return m * 5;
    },
);
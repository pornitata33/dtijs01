// แบบที่ 5 : ผสม + Callback function ***
// ตัวอย่างการใช้งานเอาฟังก์ชันไปเป็นค่าอาร์กิวเมนต์เพื่อส่งให้พารามิเตอร์

function test01(x, y) {
    console.log(x);
    y();
}

function test02(a, b, c) {
    let data = a + c(20);
    console.log(data);
    b(11, 22, 33);
}


test01(555, function () {
    console.log("Wow Wow Wow");
});

test02(
    100,
    (x, y, z) => {
        console.log(x + y + z);
    },
     (m) => {
        return m * 5;
    },
);
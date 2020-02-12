//หาแก้ให้ไม่เหมือนลอกด้วยนะ
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//ข้อที่ 1
app.get("/static", function (req, res) {
    res.send("Hello World");
});

//ข้อที่ 2
app.get("/staticJSON", function (req, res) {
    res.json({ text: "Hello World" });
});

//ข้อที่ 3
app.get("/echo", function (req, res) {
    res.send(req.query.text);
});

//ข้อที่ 4
app.get("/plus", function (req, res) {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let sum = a + b;
    res.send(sum.toString());
});

//ข้อที่ 5  
/*
app.get("/plusByJSON", function(req,res) {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let sum = a + b;
    res.json(sum.toString());
})
*/

//5 ติด error
app.get("/plusByJSON", function (req, res) {
    let jsonStr = req.query.jsonText;
    let json = JSON.parse(jsonStr);
    const sum = json.a + json.b
    res.send(String(sum));
});

//6 ข้อนี้ได้อยุ่

app.get("/plus/:num1/:num2", function (req, res) {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let sum = num1 + num2
    res.send(String(sum))
});

//ข้อ 7 8 9

app.get("/checkEvenNumber/:num", function (req, res) {
    let num = Number(req.params.num)
    //แสดงเลข 1 ใน postman ทั้ง odd even ไม่รู้ใช้ได้ป่าว แต่ res ออกไปน่าจะถูกนะ เป็นแบบใหม่ด้วย
    if (num % 2 === 0) {
        //console.log("Even")

        res.status(200).end()
    } else {
        res.status(400).end()
    }
});
//10 - 13 อันนี้ใช้ได้
let array = []
app.post("/number/:num", function (req, res) {
    let num = req.params.num

    array.push(num)
    res.send(array)


});

//14 - 16 ลบไม่ได้
app.delete("number/:num", function (req, res) {
    let num = req.params.num
    /*
    array.pop(num)
    res.send(array)
    */
    array.splice(array.indexOf(num), 1)
    res.send(array)
})

//17-18 17 ได้อยู่
app.put("/number/:numBefore/:numAfter", function (req, res) {
    let numBefore = req.params.numBefore
    let numAfter = req.params.numAfter
    array[array.indexOf(numBefore)] = numAfter
    res.send(array)
});

//19-20-21 ใส่ค่า body ไม่เป็น
app.post("/countFields", function (req, res) {
    let obj = JSON.parse(req.body.obj)
    let count = 0
    for (let i in Object.keys(obj)) {
        count++
    }
    res.send(String(count))
});

app.listen(3000, function () {
    console.log("Server running at port 3000.");
});


//  4/11
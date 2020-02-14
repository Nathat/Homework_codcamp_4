//ข้อที่ 1 ว่าจะข้ามไปก่อน 100220 1238 ใส่ if ไว้ให้เป็น จ น เต็มบวก แต่มันก็เข้าไปใน if
//แก้ได้ละ 12 2 20 1220 พร้อมส่ง
function grader(a, b, c) {
    let n;
    //console.log(n)
    //if ((0 <= a <= 30) && (0 <= b <= 30) && (0 <= c <= 40)) {
    if ((a >= 0) && (a <= 30) && (b >= 0) && (b <= 30) && (c >= 0) && (c <= 40)) {
        n = a + b + c; //
        if (n >= 80) {
            console.log('A')//console.log?
        } else if (n >= 75) {
            console.log('B+')
        } else if (n >= 70) {
            console.log('B')
        } else if (n >= 65) {
            console.log('C+')
        } else if (n >= 60) {
            console.log('C')
        } else if (n >= 55) {
            console.log('D+')
        } else if (n >= 50) {
            console.log('D')
        } else { console.log('F') }
    }

}
//console.log(n)
grader(-25, 25, 30)

//ข้อที่ 2 ยังไม่ได้ใส่ค่าเกินแต่ไม่ออก

function max(n, arr) {
    for (let i = 0; i < arr.length; i++)
        if ((n < 1) || (n > 1000)) {
            return console.log("Error")
        } else if ((arr[i] < -2000000000) || (arr[i] > 2000000000)) {
            return console.log("Error")
        } else {
            return console.log(Math.max(...arr));
        }

}

function min(n, arr) {
    for (let i = 0; i < arr.length; i++)
        if ((n < 1) || (n > 1000)) {
            return console.log("Error")
        } else if ((arr[i] < -2000000000) || (arr[i] > 2000000000)) {
            return console.log("Error") //มันไม่ขึ้น error  อะ
        } else {
            return console.log(Math.min(...arr));
        }

}

min(5, [1, 2, 3, 5200000000, 5200000000])//มันไม่ขึ้น error  อะ
max(5, [1, 2, 3, 4, 5])

//ข้อ 3 ใช้ได้แล้ว พร้อมส่ง

function addMatrix(m, n, matrix1, matrix2) {
    let resultMatrix = [];
    let temp;//ทำไมไม่กำหนดค่า
    let row1 = [];
    let row2 = [];
    let row3 = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            temp = matrix1[i][j] + matrix2[i][j];
            if (i === 0) {//ไม่เข้าใจตรงนี้ ทำทำไม แต่ละแถวป่าว
                row1.push(temp);
            } else if (i === 1) {
                row2.push(temp);
            } else if (i === 2) {
                row3.push(temp);
            }
        }
    }

    resultMatrix.push(row1)
    resultMatrix.push(row2)
    resultMatrix.push(row3)
    console.log(resultMatrix)
}

addMatrix(3, 3, [[1, 2, 3], [3, 2, 1], [1, 3, 2]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]]);

//ข้อที่ 4 ใช้ได้แล้ว พร้อมส่ง

function characterChecker(string) {
    if (string === string.toUpperCase()) {
        console.log("All Capital Letter");
    } else if (string === string.toLowerCase()) {
        console.log("All Small Letter");
    } else { console.log('Mix') }
}

characterChecker('asdasddfsDf')

//ข้อที่ 5

function hypotenuse(a, b) {
    //c2=a2+b2
    c = a ** 2 + b ** 2
    console.log(Math.sqrt(c))
}
hypotenuse(3, 4)

//ข้อที่ 6 ได้ละ ทำเองด้วย 

function sum(a, b) {
    //if(( 0 <= a <= 109)&&(0 <= b <= 109)){
    if ((a >= 0) && (a <= Math.pow(10, 9)) && (b >= 0) && (b <= Math.pow(10, 9))) {
        result = a + b
        console.log(result)
    }
}

sum(-4, 5)

//ข้อที่ 7

function calGeometry(r) {
    euclideanGeometry = Math.PI * (r ** 2)
    taxicabGeometry = 2 * r * r
    console.log(euclideanGeometry)
    console.log(taxicabGeometry)
}
calGeometry(1)
calGeometry(21)
calGeometry(42)

//ข้อที่ 8

//

function findX2(x1,s) {
    if((x1>=-1000)&&(x1<=1000)&&(s>=-1000)&&(s<=1000))
    console.log(2*s-x1)//แก้สมการในกระดาษ ทำด้านนอก
}

findX2(11,15)
findX2(4,3)


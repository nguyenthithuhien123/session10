//Bài 1: Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó

function bai1() {
    var numberarray = [];
    for (var i = 1; i <= 3; i++) {
        var so = prompt("Nhập số thứ " + i + " :");
        numberarray.push(so)
    }
    var min = numberarray[0];
    for (j = 0; j <= 3; j++) {
        if (min >= numberarray[j]) {
            min = numberarray[j]
        }
    } document.getElementById("ketqua1").innerHTML = min

}


$(document).ready(function () {
    var response = [
        {
            "STT": "1",
            "Number": "19020201",
            "Name": "Nguyễn Hữu An",
            "Dob": "15/02/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Hà Nội"
        },
        {
            "STT": "2",
            "Number": "19020211",
            "Name": "Cao Đức Anh",
            "Dob": "19/04/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Phú Thọ"
        },
        {
            "STT": "3",
            "Number": "19020075",
            "Name": "Nguyễn Đình Tuấn Anh",
            "Dob": "26/02/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Hà Tĩnh"
        },
        {
            "STT": "4",
            "Number": "19020206",
            "Name": "Nguyễn Văn Anh",
            "Dob": "26/06/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Hà Nội"
        },
        {
            "STT": "5",
            "Number": "19020216",
            "Name": "Đỗ Thị Hồng Ánh",
            "Dob": "07/01/2001",
            "Gender": "Nữ",
            "PlaceOfBirth": "Bắc Giang"
        },
        {
            "STT": "6",
            "Number": "19020221",
            "Name": "Nguyễn Lương Bằng",
            "Dob": "16/08/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Lào Cai"
        },
        {
            "STT": "7",
            "Number": "19020226",
            "Name": "Lê Trần Lâm Bình",
            "Dob": "27/01/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Lâm Đồng"
        },
        {
            "STT": "8",
            "Number": "19020231",
            "Name": "Vương Văn Chính",
            "Dob": "14/02/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Bắc Giang"
        },
        {
            "STT": "9",
            "Number": "19020261",
            "Name": "Nguyễn Thị Dung",
            "Dob": "22/02/2001",
            "Gender": "Nữ",
            "PlaceOfBirth": "Bắc Ninh"
        },
        {
            "STT": "10",
            "Number": "19020153",
            "Name": "Nông Lương Đức",
            "Dob": "05/01/2000",
            "Gender": "Nam",
            "PlaceOfBirth": "Cao Bằng"
        },
        {
            "STT": "11",
            "Number": "19020276",
            "Name": "Khuất Văn Hải",
            "Dob": "30/08/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Lâm Đồng"
        },
        {
            "STT": "12",
            "Number": "19020281",
            "Name": "Trần Thị Hiền",
            "Dob": "05/01/2001",
            "Gender": "Nữ",
            "PlaceOfBirth": "Ninh Bình"
        },
        {
            "STT": "13",
            "Number": "19020291",
            "Name": "Bùi Xuân Hiếu",
            "Dob": "03/03/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Thái Bình"
        },
        {
            "STT": "14",
            "Number": "19020286",
            "Name": "Đặng Trần Hiếu",
            "Dob": "13/07/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Hà Nội"
        },
        {
            "STT": "15",
            "Number": "19020296",
            "Name": "Nguyễn Việt Hòa",
            "Dob": "02/01/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Nam Định"
        },
        {
            "STT": "16",
            "Number": "19020301",
            "Name": "Trịnh Hoàng",
            "Dob": "08/04/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Bắc Ninh"
        },
        {
            "STT": "17",
            "Number": "19020311",
            "Name": "Trần Phi Hùng",
            "Dob": "02/11/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Hà Nội"
        },
        {
            "STT": "18",
            "Number": "19020326",
            "Name": "Dương Thái Huy",
            "Dob": "13/08/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Lai Châu"
        },
        {
            "STT": "19",
            "Number": "19020321",
            "Name": "Trần Quang Huy",
            "Dob": "06/02/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Tuyên Quang"
        },
        {
            "STT": "20",
            "Number": "19020331",
            "Name": "Nguyễn Thế Khải",
            "Dob": "31/10/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Quảng Bình"
        },
        {
            "STT": "21",
            "Number": "19020341",
            "Name": "Lê Văn Kiên",
            "Dob": "13/10/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Thanh Hóa"
        },
        {
            "STT": "22",
            "Number": "19020346",
            "Name": "Lê Mạnh Linh",
            "Dob": "08/08/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Hà Nội"
        },
        {
            "STT": "23",
            "Number": "19020080",
            "Name": "Trần Đình Long",
            "Dob": "13/12/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Nghệ An"
        },
        {
            "STT": "24",
            "Number": "19020356",
            "Name": "Phạm Thị Lụa",
            "Dob": "21/09/2001",
            "Gender": "Nữ",
            "PlaceOfBirth": "Hà Nam"
        },
        {
            "STT": "25",
            "Number": "19020166",
            "Name": "Hoàng Văn Lương",
            "Dob": "31/03/2000",
            "Gender": "Nam",
            "PlaceOfBirth": "Lạng Sơn"
        },
        {
            "STT": "26",
            "Number": "19020361",
            "Name": "Nguyễn Hữu Mạnh",
            "Dob": "10/03/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Bắc Ninh"
        },
        {
            "STT": "27",
            "Number": "19020371",
            "Name": "Nguyễn Đăng Minh",
            "Dob": "05/11/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Hưng Yên"
        },
        {
            "STT": "28",
            "Number": "19020376",
            "Name": "Lê Công Nam",
            "Dob": "01/02/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Bắc Ninh"
        },
        {
            "STT": "29",
            "Number": "19020380",
            "Name": "Nguyễn Ngọc Nam",
            "Dob": "20/10/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Thanh Hóa"
        },
        {
            "STT": "30",
            "Number": "19020381",
            "Name": "Lương Thị Ngân",
            "Dob": "09/05/2001",
            "Gender": "Nữ",
            "PlaceOfBirth": "Nam Định"
        },
        {
            "STT": "31",
            "Number": "19020386",
            "Name": "Nguyễn Minh Ngọc",
            "Dob": "07/05/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Thái Bình"
        },
        {
            "STT": "32",
            "Number": "19020017",
            "Name": "Trần Thế Phong",
            "Dob": "17/10/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Quảng Ngãi"
        },
        {
            "STT": "33",
            "Number": "19020391",
            "Name": "Vũ Quang Phong",
            "Dob": "30/01/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Bắc Ninh"
        },
        {
            "STT": "34",
            "Number": "19020396",
            "Name": "Nguyễn Văn Phương",
            "Dob": "26/03/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Bắc Giang"
        },
        {
            "STT": "35",
            "Number": "19020406",
            "Name": "Nguyễn Ngọc Quang",
            "Dob": "06/04/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Hà Nam"
        },
        {
            "STT": "36",
            "Number": "19020401",
            "Name": "Nguyễn Hữu Hồng Quân",
            "Dob": "28/01/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Đắk Lắk"
        },
        {
            "STT": "37",
            "Number": "19020411",
            "Name": "Nguyễn Minh Quyết",
            "Dob": "19/03/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Thái Bình"
        },
        {
            "STT": "38",
            "Number": "19020416",
            "Name": "Phạm Văn Sang",
            "Dob": "02/04/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Thái Bình"
        },
        {
            "STT": "39",
            "Number": "19020421",
            "Name": "Nguyễn Xuân Sơn",
            "Dob": "10/04/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Hà Nội"
        },
        {
            "STT": "40",
            "Number": "19020022",
            "Name": "Cao Phan Thái",
            "Dob": "09/10/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Bắc Ninh"
        },
        {
            "STT": "41",
            "Number": "19020085",
            "Name": "Vũ Đức Thành",
            "Dob": "11/02/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Quảng Ninh"
        },
        {
            "STT": "42",
            "Number": "19020441",
            "Name": "Nguyễn Quyết Thắng",
            "Dob": "13/10/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Hòa Bình"
        },
        {
            "STT": "43",
            "Number": "19020171",
            "Name": "Vi Quốc Thiện",
            "Dob": "10/09/2000",
            "Gender": "Nam",
            "PlaceOfBirth": "Yên Bái"
        },
        {
            "STT": "44",
            "Number": "19020451",
            "Name": "Bùi Anh Thư",
            "Dob": "07/07/2001",
            "Gender": "Nữ",
            "PlaceOfBirth": "Hà Tĩnh"
        },
        {
            "STT": "45",
            "Number": "19020456",
            "Name": "Nguyễn Bá Tiên",
            "Dob": "25/03/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Bắc Ninh"
        },
        {
            "STT": "46",
            "Number": "19020471",
            "Name": "Phan Đức Trung",
            "Dob": "18/07/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Nghệ An"
        },
        {
            "STT": "47",
            "Number": "19020466",
            "Name": "Vũ Đức Trung",
            "Dob": "24/01/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Hà Nội"
        },
        {
            "STT": "48",
            "Number": "19020476",
            "Name": "Nguyễn Đào Quang Tuấn",
            "Dob": "27/10/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Bắc Ninh"
        },
        {
            "STT": "49",
            "Number": "19020481",
            "Name": "Nguyễn Hoàng Tùng",
            "Dob": "05/09/2001",
            "Gender": "Nam",
            "PlaceOfBirth": "Bắc Ninh"
        }
    ];

    $.each(response, function (i, item) {
        $('<tr class="row">').html("<td>" + response[i].STT + "</td><td>" + response[i].Number + "</td><td>" + response[i].Name + "</td><td>" + response[i].Dob + "</td><td>" + response[i].Gender + "</td><td>" + response[i].PlaceOfBirth + "</td><td>" + response[i].STT + "</td>").appendTo('#tbody');
    });
});

var col = 0;
var dir = "";
var table = document.getElementById("myTable");

$("#reset").click(function () {
    for (var i = 1; i < 6; i++) {
        if (col == i) {
            table.rows[0].cells[i].classList.remove(dir);
        }
    }
    reset();
})

table.rows[0].cells[1].onclick = function () {
    for (var i = 1; i < 6; i++) {
        if (col == i) {
            table.rows[0].cells[i].classList.remove(dir);
        }
    }

    if (col == 1) {
        dir = (dir == "asc" ? "desc" : "asc");
    } else {
        col = 1;
        dir = "asc";
    }
    this.classList.add(dir);
    sortTable(1);
};

table.rows[0].cells[2].onclick = function () {
    for (var i = 1; i < 6; i++) {
        if (col == i) {
            table.rows[0].cells[i].classList.remove(dir);
        }
    }

    if (col == 2) {
        dir = (dir == "asc" ? "desc" : "asc");
    } else {
        col = 2;
        dir = "asc";
    }
    this.classList.add(dir);
    sortTable(2);
};

table.rows[0].cells[3].onclick = function () {
    for (var i = 1; i < 6; i++) {
        if (col == i) {
            table.rows[0].cells[i].classList.remove(dir);
        }
    }

    if (col == 3) {
        dir = (dir == "asc" ? "desc" : "asc");
    } else {
        col = 3;
        dir = "asc";
    }
    this.classList.add(dir);
    sortDob(3);
};

table.rows[0].cells[4].onclick = function () {
    for (var i = 1; i < 6; i++) {
        if (col == i) {
            table.rows[0].cells[i].classList.remove(dir);
        }
    }

    if (col == 4) {
        dir = (dir == "asc" ? "desc" : "asc");
    } else {
        col = 4;
        dir = "asc";
    }
    this.classList.add(dir);
    sortTable(4);
};

table.rows[0].cells[5].onclick = function () {
    for (var i = 1; i < 6; i++) {
        if (col == i) {
            table.rows[0].cells[i].classList.remove(dir);
        }
    }

    if (col == 5) {
        dir = (dir == "asc" ? "desc" : "asc");
    } else {
        col = 5;
        dir = "asc";
    }
    this.classList.add(dir);
    sortTable(5);
};

function sortTable(n) {
    var rows, switching, i, x, y, shouldSwitch, switchcount = 0;
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].cells[n];
            y = rows[i + 1].cells[n];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            for (var j = 1; j < 7; j++) {
                tmp = rows[i].cells[j].innerHTML;
                rows[i].cells[j].innerHTML = rows[i + 1].cells[j].innerHTML;
                rows[i + 1].cells[j].innerHTML = tmp;
            }
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function sortDob(n) {
    var rows, switching, i, x, y, shouldSwitch, switchcount = 0;
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].cells[n];
            y = rows[i + 1].cells[n];
            var datex = x.innerHTML.split("/");
            var datey = y.innerHTML.split("/");
            if (dir == "asc") {
                if (datex[2] > datey[2]) {
                    shouldSwitch = true;
                    break;
                } else if (datex[2] == datey[2]) {
                    if (datex[1] > datey[1]) {
                        shouldSwitch = true;
                        break;
                    } else if (datex[1] == datey[1]) {
                        if (datex[0] > datey[0]) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                }
            } else if (dir == "desc") {
                if (datex[2] < datey[2]) {
                    shouldSwitch = true;
                    break;
                } else if (datex[2] == datey[2]) {
                    if (datex[1] < datey[1]) {
                        shouldSwitch = true;
                        break;
                    } else if (datex[1] == datey[1]) {
                        if (datex[0] < datey[0]) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                }
            }
        }
        if (shouldSwitch) {
            for (var j = 1; j < 7; j++) {
                tmp = rows[i].cells[j].innerHTML;
                rows[i].cells[j].innerHTML = rows[i + 1].cells[j].innerHTML;
                rows[i + 1].cells[j].innerHTML = tmp;
            }
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function reset() {
    var rows, switching, i, x, y, shouldSwitch, switchcount = 0;
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].cells[6];
            y = rows[i + 1].cells[6];
            if (dir == "asc") {
                if (Number(x.innerHTML) > Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            for (var j = 1; j < 7; j++) {
                tmp = rows[i].cells[j].innerHTML;
                rows[i].cells[j].innerHTML = rows[i + 1].cells[j].innerHTML;
                rows[i + 1].cells[j].innerHTML = tmp;
            }
            switching = true;
            switchcount++;
        }
    }
}

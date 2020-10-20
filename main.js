number1 = 0;
number2 = 0;
action = "none";
result = 0;

function GetNumber() {
    number1 = document.getElementById("num-1").value;
    number2 = document.getElementById("num-2").value;
}

function CheckNumber() {
    let result = false;

    if (number1 == "" || number2 == "") {
        ShowNoti("Phải nhập đủ 2 số!!!");
    }
    else {
        number1 = Number(number1);
        number2 = Number(number2);

        if (isNaN(number1) || isNaN(number2)) {
            ShowNoti("Nhập số không hợp lệ!!!");
        } else {
            ShowNoti("Tadaaa!!!");
            result = true;
        }
    }



    return result;
}

function GetAction(){
    var query = document.querySelector('input[name="calc-selec"]:checked');
    if (query != null) {
        action = query.value;
    }
}

function CheckAction() {
    if (action == "none") {
        ShowNoti("Chưa chọn loại phép tính!!!");
        return false;
    }
    return true;
}

function ShowNoti(value) {
    var noti = document.getElementById("noti");
    noti.innerHTML = value;
}

function Calc() {
    GetNumber();
    GetAction();

    if (CheckNumber() == true) {
        if (CheckAction() == true) {
            var txtResult = document.getElementById("num-res");

            if (action == "sum") {
                result = number1 + number2;
            }
            if (action == "sub") {
                result = number1 - number2;
            }
            if (action == "mul") {
                result = number1 * number2;
            }
            if (action == "dv") {
                result = number1 / number2;
            }

            txtResult.value = result;

        }
    }

}
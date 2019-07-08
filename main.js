function text() {
    var getText = document.getElementById('a154');
    if (getText.style.fontWeight == "") {
        (getText.style.fontWeight = "bold")
    }
    else {
        getText.style.fontWeight = ""
    }
}
function text2() {
    var getText = document.getElementById('a154');
    if (getText.style.fontStyle == "") {
        getText.style.fontStyle = "italic"
    }
    else {
        getText.style.fontStyle = ""
    }
}
function text3() {
    var getText = document.getElementById('a154');
    if (getText.style.textDecoration == "") {
        getText.style.textDecoration = "underline"
    }
    else {
        getText.style.textDecoration = ""
    }
}
// function text5(){
//     var getText=document.getElementById('a154');
//     if  (getText.style.fontSize==""){
//         getText.style.fontSize=""
//     }
//     else{
//         getText.style.fontSize=""
//     }
//     }
function text5(abc) {
    var getText = document.getElementById('a154');
    if (abc=="aa") {
        getText.style.fontSize = "10px"

    }
    else if (abc=="bb") {
        getText.style.fontSize = "20px"

    }
    else if (abc=="cc") {
        getText.style.fontSize = "30px"

    }
    else if (abc=="dd") {
        getText.style.fontSize = "40px"

    }    else if (abc=="ee") {
        getText.style.fontSize = "50px"

    }
    else { getText.style.fontSize = "60px"}


}
function text6(abc) {
    var getText = document.getElementById('a154');
    if (abc=="G") {

        getText.style.fontFamily = 'Courier New, Courier, monospace';

    }
    else if (abc=="H") {
        getText.style.fontFamily = "Arial Narrow Bold";

    }
    else if (abc=="I") {
        getText.style.fontFamily = "Gill Sans MT";

    }
    else if (abc=="J") {
        getText.style.fontFamily = "Helvetica";

    }    else {
    getText.style.fontFamily="Lucida Sans Unicode" ;
    }
}

    newFunction_1();

        function newFunction_1() {
            $(document).ready(function () {
                $(".btn").click(function () {
                    $(".text").show();
                });
                newFunction();
                function newFunction() {
                    $(document).ready(function () {
                        $(".X").click(function () {
                            $(".text").hide();
                        });
                    });
                }
            });
        }


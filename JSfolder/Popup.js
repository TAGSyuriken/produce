var btn = document.getElementById('TB');
var QUESTION = ["2^2","2^3","2^4"];
var ANSER = [2**2,2**3,2**4];






$('#R18').on('click', function(){
    var result = window.confirm('あなたは18歳以上ですか？');
    if(result){
        const random_num = Math.floor(Math.random() * 3);
        const current_array_QUESTION = QUESTION[random_num];
        const current_array_ANSER = ANSER[random_num]
        var user = window.prompt(current_array_QUESTION + "の答えは?");

        if(user == current_array_ANSER){
            alert("正解!");
            location.href = "R18.html";
        } else if(user != "" && user != null){
            alert("不正解!");
            return false;
        } else {
            alert("キャンセルされました");
            return false;
        }
        // console.log(result);
    }
    else{
        alert("キャンセルされました");
        // console.log(result);
        return false;
    }
});
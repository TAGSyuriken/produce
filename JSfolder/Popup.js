$('#R18').on('click', function(){
    if(!confirm('18歳以上ですか？')){
        return false;
    } else {
        var QUESTION_SENTENCE = ["2^2", "4^2", "2^10"];
        var QUESTION_ANSWER = ["4", "16", "1024"];
        var num = Math.floor(Math.random() * QUESTION_SENTENCE.length);
        var User = window.prompt(`${QUESTION_SENTENCE[num]}の答えは？`);

        if(User == QUESTION_ANSWER[num]){
            alert('正解！');
            setTimeout(location.href = './HTMLfolder/R18.html', 5*15);
        } else {
            return false;
        }        

    }
});
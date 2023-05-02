$('#R18').on('click', function(){
    if(!confirm('18歳以上ですか？')){
        return false;
    } else {
        var QUESTION_SENTENCE = ["2^2", "4^2", "2^10"];
        var QUESTION_ANSWER = ["4", "16", "1024"];
        var num = Math.floor(Math.random() * QUESTION_SENTENCE.length);
        var User = window.prompt(`${QUESTION_SENTENCE[num]}の答えは？`);

        if(!User == QUESTION_ANSWER[num]){
            alert('不正解…');
            return false;
        } else {
            alert('正解！');
            setTimeout(function(){
                location.href = './HTMLfolder/R18.html'
            }, 10*15);
        }

    }
});
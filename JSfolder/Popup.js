$('#R18').on('click', function(){
    if(!confirm('18歳以上ですか？')){
        return false;
    } else {
        location.href = './HTMLfolder/R18.html'
    }
})
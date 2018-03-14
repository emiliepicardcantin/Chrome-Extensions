chrome.storage.sync.get(['text'],function(selection){
    if(selection.text){
        $('#texts-list').append('<h1>Communication : </h1><p>'+selection.text+'</p>');
    }
    else {
        $('#texts-list').text('No texts were added yet.');
    }
});
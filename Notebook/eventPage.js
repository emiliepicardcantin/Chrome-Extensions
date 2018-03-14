var menuItem = {
    "id": "textSelection",
    "title": "Select Text",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "textSelection" && clickData.selectionText){
        var newText = clickData.selectionText;
        chrome.storage.sync.set({'text': newText}, function(){               
            var notifOptions = {
                type: "basic",
                iconUrl: "icon48.png",
                title: "Text added as a communication",
                message: newText.slice(0,200)
            };
            chrome.notifications.create('limitNotif', notifOptions);
        });
    }
});


//document.addEventListener('DOMContentLoaded', function() {

window.onload = function(){

    var studentMailButton = document.getElementById('studentMail');
    var brightspaceButton = document.getElementById('brightspace');
    var owlExpressButton = document.getElementById('owlExpress');
    
    studentMailButton.addEventListener('click', function() {
        chrome.tabs.update({url: "http://ksumail.kennesaw.edu"})
    });


    brightspaceButton.addEventListener('click', function() {
        chrome.tabs.update({url: "http://kennesaw.view.usg.edu"})
    });

    owlExpressButton.addEventListener('click', function() {
        chrome.tabs.update({url: "http://www.kennesaw.edu/owlexpress"})
    });
};
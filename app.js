document.selectedView = '';
document.views = {};

window.onload = function() {
    fetchViews();
} 

function fetchViews() {
    fetch('views.html')
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(data, 'text/html');
        views = {
            'main': htmlDoc.getElementById('main').innerHTML,
            'portfolio': htmlDoc.getElementById('portfolio').innerHTML,
            'game': htmlDoc.getElementById('game').innerHTML,
        };
        // Load the main view by default
        changeView('main');
    });
}

function changeView(viewId) {
    console.log(document.selectedView);
    console.log(document.views);
    console.log(viewId);
    const contentDiv = document.getElementById('content');
    const target = document.getElementById(viewId);
    const current = document.getElementById(document.selectedView);

    if (document.selectedView !== '') {
        current.classList.remove('selected');
        current.classList.add('hidden');
    }
    document.selectedView = viewId;
    target.classList.remove('hidden');
    target.classList.add('selected');
    contentDiv.innerHTML = views[viewId];
}

function changeView(viewId) {
    if (document.selectedView === viewId) {
        return;
    }
    const target = document.getElementById(viewId);
    const menu = document.getElementById('menu');
    const current = document.getElementById(document.selectedView);
    // displayView(viewId);
    if (document.selectedView === '') {
        target.classList.add('selected');
        target.classList.remove('hidden');
        document.selectedView = viewId;
        return;
    }
    document.selectedView = viewId;
    current.classList.remove('selected');
    current.classList.add('hidden');
    
   
}
// function displayView(viewId){
//     const contentDiv = document.getElementById('content');
//     fetch(`views.html`)
//         .then(response => response.text())
//         .then(data => {
//             let parser = new DOMParser();
//             let htmlDoc = parser.parseFromString(data, 'text/html');
//             let view = htmlDoc.getElementById(viewId);
//             contentDiv.innerHTML = view.innerHTML;
//         });
// }

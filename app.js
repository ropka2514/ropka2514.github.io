document.selectedView = '';

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

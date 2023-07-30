function changeView(viewId) {
    const contentDiv = document.getElementById('content');
    fetch(`views.html`)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(data, 'text/html');
            let view = htmlDoc.getElementById(viewId);
            contentDiv.innerHTML = view.innerHTML;
        });
}

document.getElementById('openWindow').addEventListener('click'), function() {}

const newWindow = window.open('Cart.html');

newWindow.onload = function() {
    newWindow.document.body.innerHTML = '<div>newcontent</div>'
}
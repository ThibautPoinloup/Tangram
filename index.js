function toggleTheme(value) {
    const sheets = document.getElementsByTagName('link');
    sheets[0].href = value;
}

let toggle_btn = document.getElementById('darkMode');
let body = document.getElementsByTagName('body')[0];
let darkMode = 'dark';
let buttonWhite = document.getElementById('buttons')

toggle_btn.addEventListener('click', function() {

    if (body.classList.contains("dark")+buttonWhite.classList.contains("white")){

    body.classList.remove("dark")+buttonWhite.classList.remove("white");
    }

    else {

    body.classList.add("dark")+buttonWhite.classList.add("white");;
    }
})

// The current position of mouse
let x = 0;
let y = 0;
let swap = document.getElementById('dragMe');  
// Query the element
const ele = document.getElementById('dragMe');

// Handle the mousedown event
// that's triggered when user drags the element
const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;
    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    // Set the position of element
    ele.style.top = `${ele.offsetTop + dy}px`;
    ele.style.left = `${ele.offsetLeft + dx}px`;

    // Reassign the position of mouse
    x = e.clientX;
    y = e.clientY;
};

const mouseUpHandler = function () {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

ele.addEventListener('mousedown', mouseDownHandler);

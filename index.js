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


// -------------------------------------------------
// Wrap the module in a self-executing anonymous function
// to avoid leaking variables into global scope:
(function (document) {
    // Enable ECMAScript 5 strict mode within this function:
    'use strict';
    
    // Obtain a node list of all elements that have class="draggable":
    let drag = document.getElementsByClassName('draggable'),
        draggableCount = drag.length, // cache the length
        i; // iterator placeholder
    
    // This function initializes the drag of an element where an
    // event ("mousedown") has occurred:
    function startDrag(evt) {
        
        // The element's position is based on its top left corner,
        // but the mouse coordinates are inside of it, so we need
        // to calculate the positioning difference:
        const diffX = evt.clientX - this.offsetLeft,
            diffY = evt.clientY - this.offsetTop,
            that = this; // "this" refers to the current element,
                         // let's keep it in cache for later use.
        
        // moveAlong places the current element (referenced by "that")
        // according to the current cursor position:
        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }
        
        // stopDrag removes event listeners from the element,
        // thus stopping the drag:
        function stopDrag() {
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);
        }
        
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
       

    }
    
    // Now that all the variables and functions are created,
    // we can go on and make the elements draggable by assigning
    // a "startDrag" function to a "mousedown" event that occurs
    // on those elements:
    for (i = 0; i < draggableCount; i += 1) {
        drag[i].addEventListener('mousedown', startDrag);
        
    }
}
(document));



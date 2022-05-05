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


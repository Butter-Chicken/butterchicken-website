var checkbox = document.querySelector('input[name=mode]');
let darkmode = localStorage.getItem('darkMode');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        //trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('darkmode', 'enabled');
    } else {
        //trans()
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('darkmode', 'disabled');
    }
})


//let trans = () => {
//    document.documentElement.classList.add('transition');
//    window.setTimeout(() => {
//        document.documentElement.classList.remove('transition');
//    }, 1000)
//}

//function myFunction(x) {
//    if (x.matches ) { // If media query matches
//        checkbox.checked = true;
//        document.documentElement.setAttribute('data-theme', 'dark')
//    } else {
//        document.documentElement.setAttribute('data-theme', 'light')
//    }
//}
//  
var x = window.matchMedia("(prefers-color-scheme: dark)")
//myFunction(x) // Call listener function at run time
//x.addListener(myFunction) // Attach listener function on state changes

function checkDarkmode(x) {
    if(localStorage.getItem('darkmode') == 'enabled'){
        checkbox.checked = true;
        document.documentElement.setAttribute('data-theme', 'dark')
    }else if(localStorage.getItem('darkmode') == 'disabled'){
        checkbox.checked = false;
        document.documentElement.setAttribute('data-theme', 'light')
    }else{
        if (x.matches ) { // If media query matches
            checkbox.checked = true;
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('darkmode', 'enabled');
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
            localStorage.setItem('darkmode', 'disabled');
        }
    }
}

checkDarkmode(x);







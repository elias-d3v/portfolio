var darkMode = false;

function changeDarkMode() {
    if(darkMode){
        darkMode = false;
        document.documentElement.style.setProperty('--text-color','black')
        document.documentElement.style.setProperty('--background-color','#efe7e5')
        document.getElementById('dark-mode').textContent = 'Dark Mode'
    } else {
        darkMode = true;
        document.documentElement.style.setProperty('--text-color','#efe7e5')
        document.documentElement.style.setProperty('--background-color','black')
        document.getElementById('dark-mode').textContent = 'Light mode'
    } 
}



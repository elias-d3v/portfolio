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



const title = document.getElementById('autotext');
const text = "Développeur fullstack";

let index = 0

const randomSpeed = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min) 
}

const play = () => {
    title.innerHTML = text.slice(0, index)

    index++;

    if (index > text.length) {
        index=0;
    }
    clearInterval(timer)
    timer = setInterval(play, randomSpeed(50,300))
};

let timer = setInterval(play, 300)

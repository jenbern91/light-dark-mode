const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark or Light Images
function imageMode(color){
    image1.src=`img/undraw_proud_coder_${color}.svg`;
    image2.src=`img/undraw_feeling_proud_${color}.svg`;
    image3.src=`img/undraw_conceptual_idea_${color}.svg`;
}

//Function to DRY darkMode and Light Mode
function toggleDarkLightMode(isDark){
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ?'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode' ;
    isDark ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon'):
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun'); 
    isDark ? imageMode('dark'): imageMode('light');

}
//NOTE: darkMode() and lightMode() is not used anymore, was simplified using toggleDarkLightMode
//Dark Mode Styles
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    //console.log(toggleIcon.children);
    //comment: result of console.log is 0: span.toggle-text, 1 i.fas.fa-sun
    toggleIcon.children[0].textContent = 'Dark Mode';
    // toggleIcon.children[1].classList.remove('fa-sun');
    // toggleIcon.children[1].classList.add('fa-moon'); 
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon'); 
    // image1.src='img/undraw_proud_coder_dark.svg';
    // image2.src='img/undraw_feeling_proud_dark.svg';
    // image3.src='img/undraw_conceptual_idea_dark.svg';
    // comment: this part was simplified using the fucntion imageMode -- passing dark/light for ${color}
    imageMode('dark');

}

//Light Mode Styles
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    // toggleIcon.children[1].classList.remove('fa-moon');
    // toggleIcon.children[1].classList.add('fa-sun'); 
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun'); 
    // image1.src='img/undraw_proud_coder_light.svg';
    // image2.src='img/undraw_feeling_proud_light.svg';
    // image3.src='img/undraw_conceptual_idea_light.svg';
    imageMode('light');

}

// Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
     document.documentElement.setAttribute('data-theme', 'dark');
     localStorage.setItem('theme', 'dark');
     //darkMode();
     toggleDarkLightMode(true);

    } else{
        document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    //lightMode();
    toggleDarkLightMode(false);
    }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme)

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        //darkMode();
        toggleDarkLightMode(true);
    }
}


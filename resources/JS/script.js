const background = document.getElementById("body");
const mode = document.getElementById("mode");
const header = document.querySelector('header');
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const skills = document.getElementById("skills");
const readButton = document.getElementById('readMoreButton');

function showMore() {  
  const readMoreText = document.getElementById('readMoreText');
  const aboutBox = document.getElementById('aboutBox');
    
  if (readButton.innerHTML === "Read less") {
    readButton.innerHTML = "Read more";
    readMoreText.style.height= '0px';
    aboutBox.style.pointerEvents = 'auto';
  } else {
    readMoreText.style.height= 'auto';
    readButton.innerHTML = "Read less"; 
    aboutBox.style.pointerEvents = 'none';    
  }
}

/* MODES '#0E4C5E', #5D939E */
function dark() {
  background.backgroundImage= 'none';
  background.style.backgroundColor= '#0E4C5E';
  mode.style.backgroundColor= '#222';
  header.style.backgroundColor= '#042E3A';
  header.style.color= '#FFF';
  about.style.backgroundColor= '#042E3A';
  about.style.color= '#FFF';
  projects.style.backgroundColor= '#042E3A';
  projects.style.color= '#FFF';
  skills.style.backgroundColor= '#042E3A';
  skills.style.color= '#FFF';
  readButton.style.color= '#FFF';
  readButton.style.backgroundColor= '#0E4C5E';
  readButton.style.border= '1px solid #FFF';
}

function business() {
  background.backgroundImage= 'none';
  background.style.backgroundColor='#C6D7DA';
  mode.style.backgroundColor= '#C6D7DA';
  header.style.backgroundColor= '#0E4C5E';
  header.style.color= '#FFF';
  about.style.backgroundColor= '#FFF';
  about.style.color= '#0E4C5E';
  projects.style.backgroundColor= '#FFF';
  projects.style.color= '#0E4C5E';
  skills.style.backgroundColor= '#FFF';
  skills.style.color= '#0E4C5E';
  readButton.style.color= '#0E4C5E';
  readButton.style.backgroundColor= '#FFF';
  readButton.style.border= '1px solid #0E4C5E';
}

function colorful() {
  background.style.backgroundImage= 'linear-gradient( to right, #5D939E, yellow, #c25b07 )';
  mode.style.backgroundColor= '#DDD';
  header.style.backgroundColor= '#0E4C5E';
  header.style.color= '#FFF';
  about.style.backgroundColor= '#FFF';
  about.style.color= '#0E4C5E';
  projects.style.backgroundColor= '#FFF';
  projects.style.color= '#0E4C5E';
  skills.style.backgroundColor= '#FFF';
  skills.style.color= '#0E4C5E';
  readButton.style.color= '#0E4C5E';
  readButton.style.backgroundColor= '#FFF';
  readButton.style.border= '1px solid #0E4C5E';  
}
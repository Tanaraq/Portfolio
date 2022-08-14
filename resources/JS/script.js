/* READ MORE */
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

/* MODES */
const background = document.getElementById("body");
const header = document.querySelector('header');
const section = Array.from(document.getElementsByTagName('section'));
const links = Array.from(document.getElementsByClassName('link'));


/* My color-palette: 
    dark: #042E3A
    MAIN = #0E4C5E
    medium= #5D939E
    light= #C6D7DA
    orange= #C25B07
*/
function dark() {
  background.style.backgroundImage= 'none';
  background.style.backgroundColor= '#0E4C5E';
  header.style.backgroundColor= '#042E3A';
  header.style.color= '#FFF';
  readButton.style.color= '#FFF';
  readButton.style.backgroundColor= '#0E4C5E';
  readButton.style.border= '1px solid #FFF';
  section.forEach(element => {
    element.style.backgroundColor= '#042E3A';
    element.style.color= '#FFF';
  });
  links.forEach(link => {
    link.style.color= "#FFF";
  });  
}

function business() {
  background.style.backgroundImage= 'none';
  background.style.backgroundColor='#C6D7DA';
  header.style.backgroundColor= '#0E4C5E';
  header.style.color= '#FFF';
  section.forEach(element => {
    element.style.backgroundColor= '#FFF';
    element.style.color= '#0E4C5E';
  });
  readButton.style.color= '#0E4C5E';
  readButton.style.backgroundColor= '#FFF';
  readButton.style.border= '1px solid #0E4C5E';
  links.forEach(link => {
    link.style.color= "#0E4C5E";
  }); 
}

function colorful() {
  background.style.backgroundImage= 'linear-gradient( to right, #5D939E, yellow, #c25b07 )';
  header.style.backgroundColor= '#0E4C5E';
  header.style.color= '#FFF';
  section.forEach(element => {
    element.style.backgroundColor= '#FFF';
    element.style.color= '#0E4C5E';
  });
  readButton.style.color= '#0E4C5E';
  readButton.style.backgroundColor= '#FFF';
  readButton.style.border= '1px solid #0E4C5E';  
  links.forEach(link => {
    link.style.color= "#0E4C5E";
  }); 
}

/* CONTACT */
function getContact(){
  about.style.display='none';
  projects.style.display='none';
  skills.style.display='none';
}
function notContact(){
  about.style.display='flex';
  projects.style.display='block';
  skills.style.display='block';

}

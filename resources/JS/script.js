function showMore1() {
  const readButton1 = document.getElementById('readMoreButton1');
  const readMoreText = document.getElementById('readMoreText1');
  const aboutBox = document.getElementById('aboutBox');
    
  if (readButton1.innerHTML === "Read less") {
    readButton1.innerHTML = "Read more";
    readMoreText.style.height= '0px';
    aboutBox.style.pointerEvents = 'auto';
  } else {
    readMoreText.style.height= 'auto';
    readButton1.innerHTML = "Read less"; 
    aboutBox.style.pointerEvents = 'none';    
  }
}
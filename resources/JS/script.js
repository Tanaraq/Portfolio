function showMore() {
  const readButton = document.getElementById('readMoreButton');
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
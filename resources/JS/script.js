
function showMore() {
    const readButton = document.getElementById('readMoreButton');
    const readMoreText = document.getElementById('readMoreText');
    
    if (readButton.innerHTML === "Read less") {
      readButton.innerHTML = "Read more";
      readMoreText.style.height= '0px';
      
    } else {
      readMoreText.style.height= 'auto';
      readButton.innerHTML = "Read less";      
    }
}

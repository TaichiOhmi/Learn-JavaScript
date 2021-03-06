const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Looping through images */

for (i=1;i<=5;i++) {
    
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+i+'.jpg');
    newImage.onclick = function() {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
        // 下は上を2行で書いた。
        // const src = newImage.getAttribute('src');
        // displayedImage.setAttribute('src', src);
    }
    thumbBar.appendChild(newImage);
    
}


/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
    if (btn.getAttribute('class') == 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}
var result = document.querySelector('.result');
var img_result = document.querySelector('.img-result');
var img_w = document.querySelector('.image-width');
var options = document.querySelector('.options');
var Crop = document.querySelector('.Crop');
var cropped = document.querySelector('.cropped');
var dwn = document.querySelector('.download');
var upload = document.querySelector('#loader');
var cropper = '';
var grayscale=document.getElementById("grayscale");
   

upload.addEventListener('change', (e) => {
  if (e.target.files.length) {
    const reader = new FileReader();
    reader.onload = (e)=> {
      if(e.target.result){
        var img = document.createElement('img');
        img.id = 'image';
        img.src = e.target.result
        result.innerHTML = '';
                result.appendChild(img);
        cropper = new Cropper(img);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

Crop.addEventListener('click',(e)=>{
  e.preventDefault();
  var imgSrc = cropper.getCroppedCanvas({
    width: img_w.value 
    }).toDataURL();
 
    cropped.classList.remove('hide');
  img_result.classList.remove('hide');
  result.classList.add('hide');
    cropped.src = imgSrc;
});

// rotation function
var delta =90;
function rotateBy90Deg(ele){
        ele.style.webkitTransform="rotate("+delta+"deg)";
        delta+=90;
}

// gray scale function
function gray() {
    Image = document.getElementById("cropie");
    Filter = document.getElementById("grayscale").value;
    Image.style.WebkitFilter = "grayscale(" + Filter * 10 + "%)"
   }
   grayscale.onchange=gray;


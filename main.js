//Image Rotation Function
var delta =90;
function rotateBy10Deg(ele){
        ele.style.webkitTransform="rotate("+delta+"deg)";
        delta+=90;
}

document.addEventListener('DOMContentLoaded',function(){
	//Image Loader Function
	var loadImage=document.getElementById('load');
	function loadInputHandler(event){
		var imageFile=event.target.files[0];
		var imageElement= document.getElementById('image');
		imageElement.setAttribute('src',URL.createObjectURL(imageFile));
	};
    loadImage.onchange=loadInputHandler;


  // chnage Slider Handler
  function Slider(event){
 	Caman('#image',function renderCaman(){
 		this.revert(false);
 		this[event.target.name](event.target.value).render();
 	});
  };

    function gray() {
    Image = document.getElementById("image");
    Filter = document.getElementById("grayscale").value;
    Image.style.WebkitFilter = "grayscale(" + Filter * 10 + "%)"
   }
  var grayscale=document.getElementById("grayscale");
  grayscale.onchange=gray;


  function saveButtonHandler(event){
    caman('#image',function(){
      this.render(function(){
        this.save('image.jpg');
      });
    });
  };
  var saveButton=document.getElementById('save');
  saveButton.onclick=saveButtonHandler;
  
  


},false);




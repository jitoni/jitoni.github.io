var modal = document.getElementById("myModal");
var img = document.querySelectorAll("#myImg");
var modalImg = document.getElementById("img");
var caption = document.getElementById("caption");
var box = document.getElementById("box");
var vid = document.getElementById("myVid");
var modalVid = document.getElementById("vid");

for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        modal.style.display = "block";
        box.style.display = "flex";
        modalImg.src = this.src;
        caption.innerHTML = this.alt;
    }
}

// function playVid() {
//     modal.style.display = "block";
//     box.style.display = "flex";
//     caption.innerHTML = this.alt;
//     src = "./mopr.mp4";
//     modalVid.src = this.src;
//     // modalVid.play();
//     console.log("testing new function");
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == box) {
       modal.style.display = "none";    
     }
}

document.addEventListener('DOMContentLoaded', function() {
  // Select the button element
  var videos = document.querySelectorAll('.video-modal');

  // Loop through each video element and bind a click event listener to it
  videos.forEach(function(video) {
    video.addEventListener('click', function() {

      // Get the video URL from the data-video-id attribute
      var videoUrl = this.getAttribute('data-video-url');
      var videoCaption = this.getAttribute('video-caption');

      // Create the HTML for the modal, including the video URL
      var modalHtml = '<div class="card-box-video">' +
                      '<div class="modal-content" oncontextmenu="return false;" ondragstart="return false;">' +
                      '<video class="video-content" src="' + videoUrl + '" frameborder="0" allowfullscreen controls autoplay width="800" type="video/mp4" muted></video>' +
                      '<div id="caption" class="caption">' + videoCaption + '</div>' +
                      '</div>' +
                      '</div>';

      // Create a new element for the modal and add the HTML to it
      var modal = document.createElement("div");
      modal.innerHTML = modalHtml;

      var caption = document.getElementById("caption");
      caption.innerHTML = this.alt;
      
      // document.body.insertBefore(modal, box);

      // Append the modal to the body
      document.body.appendChild(modal);

      // Select the close button and bind a click event listener to it
      var closeButton = modal.querySelector('.modal-content');
      closeButton.addEventListener('click', function() {
        // Remove the modal from the DOM
        modal.remove();
      });
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Select the button element
  var videos = document.querySelectorAll('.video-modal-big');

  // Loop through each video element and bind a click event listener to it
  videos.forEach(function(video) {
    video.addEventListener('click', function() {

      // Get the video URL from the data-video-id attribute
      var ytUrl = this.getAttribute('ytSrc');
      var ytCaption = this.getAttribute('yt-caption');

      // Create the HTML for the modal, including the video URL
      var modalHtml = '<div class="card-box-video">' +
                      '<div class="modal-content" oncontextmenu="return false;" ondragstart="return false;">' +
                      '<iframe width="760" height="515" src="' + ytUrl + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' +
                      '<div id="caption" class="caption">' + ytCaption + '</div>' +
                      '</div>' +
                      '</div>';

      // Create a new element for the modal and add the HTML to it
      var modal = document.createElement("div");
      modal.innerHTML = modalHtml;

      var caption = document.getElementById("caption");
      caption.innerHTML = this.alt;
      
      // document.body.insertBefore(modal, box);

      // Append the modal to the body
      document.body.appendChild(modal);

      // Select the close button and bind a click event listener to it
      var closeButton = modal.querySelector('.modal-content');
      closeButton.addEventListener('click', function() {
        // Remove the modal from the DOM
        modal.remove();
      });
    });
  });
});
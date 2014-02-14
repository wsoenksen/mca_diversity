
		window.addEventListener("DOMContentLoaded", function() {
			var canvas = document.getElementById("canvas"),
				context = canvas.getContext("2d"),
				video = document.getElementById("video"),
				videoObj = { "video": true },
				errBack = function(error) {
					console.log("Video capture error: ", error.code); 
				};

			if(navigator.getUserMedia) { 
				navigator.getUserMedia(videoObj, function(stream) {
					video.src = stream;
					video.play();
				}, errBack);
			} else if(navigator.webkitGetUserMedia) { 
				navigator.webkitGetUserMedia(videoObj, function(stream){
					video.src = window.webkitURL.createObjectURL(stream);
					video.play();
				}, errBack);
			} else if(navigator.mozGetUserMedia) { 
				navigator.mozGetUserMedia(videoObj, function(stream){
					video.src = window.URL.createObjectURL(stream);
					video.play();
				}, errBack);
			}

			document.getElementById("snap").addEventListener("click", function() {
				context.drawImage(video, 0, 0, 720, 540);
			});
			
			document.getElementById("save").addEventListener("click", function() {
				var data = canvas.toDataURL("image/png");
				
        		data = data.replace("image/png","image/octet-stream");
				
        		document.location.href = data;
				
				setTimeout("location.href = '/mca_diversity/thanks';",1500);
			
			});
			
		}, false);
		
		
	

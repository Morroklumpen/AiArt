
    // Get all the images in the gallery
    let images = document.querySelectorAll(".gallery img");

    // Loop through each image and add a click event listener
    for (let image of images) {
        image.addEventListener("click", function() {
            // Create a new image element with the same source as the clicked image
            let fullImage = document.createElement("img");
            fullImage.src = this.src;

            // Create a new div element to act as a modal
            let modal = document.createElement("div");
            modal.className = "modal";

            // Append the image and the modal to the body
            document.body.appendChild(fullImage);
            document.body.appendChild(modal);

            // Add some styles to the image and the modal
            fullImage.style.position = "fixed";
            fullImage.style.top = "50%";
            fullImage.style.left = "50%";
            fullImage.style.transform = "translate(-50%, -50%)";
            fullImage.style.maxWidth = "90%";
            fullImage.style.maxHeight = "90%";
            fullImage.style.zIndex = "1000";

            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            modal.style.zIndex = "999";

            // Add a click event listener to the modal to close the fullscreen image
            modal.addEventListener("click", function() {
                // Remove the image and the modal from the body
                document.body.removeChild(fullImage);
                document.body.removeChild(modal);
            });
        });
    }

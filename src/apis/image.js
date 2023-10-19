




fetch(imageUrl)
  .then((response) => response.blob())
  .then((blob) => {
    // Now 'blob' contains the image data, and you can use it as needed
    // For example, you can create a Blob object for the image
    const imageBlob = new Blob([blob], { type: "image/jpeg" });

    // You can also create a File object (for simulating a file input) with additional information
    const imageFile = new File([blob], "image.jpg", { type: "image/jpeg" });

    // You can now use 'imageBlob' or 'imageFile' as needed
  })
  .catch((error) => {
    console.error("Error fetching the image:", error);
  });




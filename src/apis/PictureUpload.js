
import axios from "axios";

const sendImageToUserAPI = async (imageData, authToken) => {
  try {
    const apiUrl = "http://192.168.31.29:1337/api/users"; // Replace with your user's Strapi API endpoint
    const container = "picture_uploads";

    // Extract the filename from the image URI
    const filename = imageData.substring(imageData.lastIndexOf("/") + 1);

    const formData = new FormData();
    formData.append("files", {
      uri: imageData,
      name: filename,
      type: "image/jpeg", // Adjust the content type if needed
    });

    const response = await Axios.post(apiUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${authToken}`, // Include the user's authentication token
      },
      params: {
        container, // Specify the container as "picture_uploads"
      },
    });

    if (response.status !== 200) {
      console.error("Error sending image to user Strapi:", response.statusText);
    } else {
      console.log("Image sent successfully to user Strapi.");
    }
  } catch (error) {
    console.error("Error sending image to user Strapi:", error);
  }
};

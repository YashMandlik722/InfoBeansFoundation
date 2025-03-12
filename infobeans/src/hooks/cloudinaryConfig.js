

export const UploadToCloudinary = async (file) => {
    if (!file) return null; // If no file, return null
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "info_preset");
    data.append("cloud_name", "dbusnoegx");

    if (file.type.startsWith("image/")) {
      try {
        const res = await fetch("https://api.cloudinary.com/v1_1/dbusnoegx/image/upload", {
          method: "POST",
          body: data,
        });
        const img = await res.json();
        return img.secure_url; // Return the image URL
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        return null;
      }
    }
    //  else if (file.type.startsWith("video/")) {
    //   try {
    //     const res = await fetch("https://api.cloudinary.com/v1_1/dcuh43ucc/video/upload", {
    //       method: "POST",
    //       body: data,
    //     });
    //     const img = await res.json();
    //     console.log("Cloudinary upload response:", img);
    //     return img.secure_url; // Return the image URL
    //   } catch (error) {
    //     console.error("Error uploading image to Cloudinary:", error);
    //     return null;
    //   }
    // }
    else{
    //   toast.error("couldn't upload file.");
    console.log("couldn't upload file.");
    
    }
    
  };
// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
// import './Galleryimages.css';

// const Galleryimage = () => {
//   // Sample dynamic data for images and videos
//   const [media] = useState([
//     { id: 1, type: 'image', url: '../Images/photo1.jpg', caption: 'Web Development Course', alt: 'Image 1' },
//     { id: 2, type: 'video', url: 'https://www.youtube.com/watch?v=XmT4oAAFvIs', caption: 'Sales and Marketing', alt: 'Video 1' },
//     { id: 3, type: 'image', url: '../Images/photo2.jpg', caption: 'Fundraising Event', alt: 'Image 2' },
//     { id: 4, type: 'image', url: '../Images/photo3.jpg', caption: 'Community Service', alt: 'Image 4' },
//     { id: 5, type: 'image', url: '../Images/photo13.jpg', caption: 'Community Service', alt: 'Image 5' },
//     { id: 6, type: 'image', url: '../Images/photo5.jpg', caption: 'Community Service', alt: 'Image 6' },
//     { id: 7, type: 'image', url: '../Images/photo6.jpg', caption: 'Community Service', alt: 'Image 7' },
//     { id: 8, type: 'image', url: '../Images/photo7.jpg', caption: 'Community Service', alt: 'Image 8' },
//     { id: 9, type: 'image', url: '../Images/photo8.jpg', caption: 'Community Service', alt: 'Image 9' },
//     { id: 10, type: 'image', url: '../Images/diwali3.jpg', caption: 'Community Service', alt: 'Image 10' },
//     { id: 11, type: 'image', url: '../Images/photo9.jpg', caption: 'Community Service', alt: 'Image 11' },
//     { id: 12, type: 'image', url: '../Images/photo11.jpg', caption: 'Community Service', alt: 'Image 12' },
//     { id: 13, type: 'image', url: '../Images/photo10.jpg', caption: 'Community Service', alt: 'Image 12' },
//     { id: 3, type: 'image', url: '../Images/photo2.jpg', caption: 'Fundraising Event', alt: 'Image 2' },
//     { id: 4, type: 'image', url: '../Images/photo3.jpg', caption: 'Community Service', alt: 'Image 4' },
//     { id: 5, type: 'image', url: '../Images/photo13.jpg', caption: 'Community Service', alt: 'Image 5' },
//     { id: 6, type: 'image', url: '../Images/photo5.jpg', caption: 'Community Service', alt: 'Image 6' },
//     { id: 7, type: 'image', url: '../Images/photo6.jpg', caption: 'Community Service', alt: 'Image 7' },
//     { id: 8, type: 'image', url: '../Images/photo7.jpg', caption: 'Community Service', alt: 'Image 8' },
//     { id: 9, type: 'image', url: '../Images/photo8.jpg', caption: 'Community Service', alt: 'Image 9' },
//     { id: 10, type: 'image', url: '../Images/diwali3.jpg', caption: 'Community Service', alt: 'Image 10' },
//     { id: 3, type: 'image', url: '../Images/photo2.jpg', caption: 'Fundraising Event', alt: 'Image 2' },
//     { id: 4, type: 'image', url: '../Images/photo3.jpg', caption: 'Community Service', alt: 'Image 4' },
//     { id: 5, type: 'image', url: '../Images/photo13.jpg', caption: 'Community Service', alt: 'Image 5' },
//     { id: 6, type: 'image', url: '../Images/photo5.jpg', caption: 'Community Service', alt: 'Image 6' },
//     { id: 7, type: 'image', url: '../Images/photo6.jpg', caption: 'Community Service', alt: 'Image 7' },
//     { id: 8, type: 'image', url: '../Images/photo7.jpg', caption: 'Community Service', alt: 'Image 8' },
//     { id: 9, type: 'image', url: '../Images/photo8.jpg', caption: 'Community Service', alt: 'Image 9' },
//     { id: 10, type: 'image', url: '../Images/diwali3.jpg', caption: 'Community Service', alt: 'Image 10' },
    
//     // Add more media items here
//   ]);

//   // Animation for gallery items
//   const fadeIn = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     config: { tension: 200, friction: 20 },
//   });

//   return (
//     <div className="gallery-container py-5">
//       <h2 className="text-center mb-4">Our Gallery</h2>
      
//       <div className="gallery-grid">
//         {media.map((item) => (
//           <animated.div key={item.id} style={fadeIn} className="gallery-item">
//             {item.type === 'image' ? (
//               <div className="image-container">
//                 <img src={item.url} alt={item.alt} className="gallery-image" />
//               </div>
//             ) : (
//               <div className="video-container">
//                 <iframe
//                   src={item.url}
//                   title={item.caption}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="gallery-video"
//                 ></iframe>
//               </div>
//             )}
//             <p className="caption">{item.caption}</p>
//           </animated.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Galleryimage;


import react, { useEffect, useState } from "react";
import axios from "axios";
import "../Gallerycomponent/Galleryimages.css"


const Galleryimages= ()=>{
  const [file , setfile]=useState(null);
  const [image , setimage] =useState([]);

  const handler=(e)=>{
    setfile(e.target.file[0]);
  }

  const handleUpload=async ()=>{
    const formdata= new Formdata();
    formdata.append("image",file)

    try{
      const result= await axios.post("http://localhost:3001/gallery/imagepost" , formdata ,{
        headers:{"contact type ":"multipart/form-data"},
      })
      
      fatchimage()
    }
    catch(err){
      console.log(err)
    }
  }

  const fatchimage= async ()=>{
    try{
      const res = await axios .get("http://localhost:3001/gallery/getimage")
      setimage(res.data.images)
    }
    catch(err){
      console.log("Internal Error .....")
    }
  }

  useEffect(()=>{
    fatchimage();
  },[]);

  return <>
   <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={handler} />
      <button onClick={handleUpload}>Upload</button>

      <h2>Uploaded Images</h2>
      <div>
        {image.map((img, index) => (
          <img key={index} src={img.imageUrl} alt="Uploaded" width="200px" />
        ))}
      </div>
    </div>
  </>
}

export default Galleryimages ;
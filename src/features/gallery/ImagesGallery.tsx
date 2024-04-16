// import React, { useEffect } from "react";
// import styles from "./ImagesGallery.module.scss";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../../app/store";
// import { fetchImages } from "./imagesGallerySlice";

// function ImagesGallery() {
//   const images = useSelector((state: RootState) => state.images.images);
//   const isLoading = useSelector((state: RootState) => state.images.isLoading);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchImages("flowers"));
//   }, [dispatch]);

//   return (
//     <div className={styles.ImagesGallery}>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         images.map((image, index) => (
//           <div key={index} className={styles.imageWrapper}>
//             <img src={image.webformatURL} alt={`Image item ${index}`} />
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default ImagesGallery;

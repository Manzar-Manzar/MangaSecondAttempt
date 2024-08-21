// import React, { useState, useEffect } from 'react';

// const Chapter = ({ chapters = [], currentChapterIndex = 0 }) => {
//   const [currentChapter, setCurrentChapter] = useState(currentChapterIndex);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     if (chapters.length > 0) {
//       // Fetch the images for the current chapter
//       const fetchImages = async () => {
//         try {
//           const imagesData = await getImagesForChapter(chapters[currentChapter].id);
//           setImages(imagesData);
//         } catch (error) {
//           console.error('Failed to fetch images:', error);
//         }
//       };
//       fetchImages();
//     }
//   }, [currentChapter, chapters]);

//   const handleNext = () => {
//     if (currentChapter < chapters.length - 1) {
//       setCurrentChapter(currentChapter + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentChapter > 0) {
//       setCurrentChapter(currentChapter - 1);
//     }
//   };

//   if (chapters.length === 0) {
//     return <div>No chapters available.</div>;
//   }

//   return (
//     <div className="chapter-container">
//       <div className="navigation-buttons">
//         <button onClick={handlePrevious} disabled={currentChapter === 0}>
//           Previous
//         </button>
//         <button onClick={handleNext} disabled={currentChapter >= chapters.length - 1}>
//           Next
//         </button>
//       </div>

//       <div className="images-container">
//         {images.map((image, index) => (
//           <img key={index} src={image.url} alt={`Page ${index + 1}`} className="chapter-image" />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chapter;

// // Mock function for fetching images (replace with your actual API call)
// const getImagesForChapter = async (chapterId) => {
//   // Example data, replace with real data fetching logic
//   return [
//     { url: 'https://www.google.com/imgres?q=demon%20slayer&imgurl=https%3A%2F%2Fcdn.oneesports.gg%2Fcdn-data%2F2023%2F01%2FAnime_DemonSlayer_AllHashira_2.jpg&imgrefurl=https%3A%2F%2Fwww.oneesports.gg%2Fanime%2Fdemon-slayer-hashira-ranking-strongest%2F&docid=oI9niGWdZ5fEDM&tbnid=YxBc3OLWCO7U9M&vet=12ahUKEwjv0b_Xq4GIAxXPd2wGHbJpPKsQM3oECHIQAA..i&w=1600&h=900&hcb=2&itg=1&ved=2ahUKEwjv0b_Xq4GIAxXPd2wGHbJpPKsQM3oECHIQAA' },
//     { url: 'https://example.com/image2.jpg' },
//     { url: 'https://example.com/image3.jpg' },
//   ];
// };


import React, { useState } from 'react'

function Chapter() {
  const [chapter, setChapter] = useState(1)

  if (chapter < 1) {
    return ;
  }
  const prevChapter = () => {
    setChapter(chapter - 1)
  }

  const nextChapter = () => {
    setChapter(chapter + 1)
  }
  return (
    <div>
      <button onClick={prevChapter}>Previous: {chapter}</button>
      Chapter
      <button onClick={nextChapter}>Next: {chapter}</button>
    </div>
  )
}

export default Chapter
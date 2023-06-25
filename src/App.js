import React, { useState } from "react";
import "./assets/styles/main.scss";
import Loader from "./components/loader/Loader";
import Main from "./Main";
import "./assets/styles/ls.css";
import img from "./assets/images/dejj.jpg";
import gnd from "./assets/images/gnd.jpg";
import musica from "./assets/images/musica.jpg";
import mallet from "./assets/images/malletNFT.jpg";
import evaluate from "./assets/images/02.jpg";
import adejare from "./assets/images/06.jpg";
import PageAnimation from "./assets/PageAnimation";
import iconOne from "./assets/images/iconOne.svg";
import iconTwo from "./assets/images/iconTwo.svg";
import iconThree from "./assets/images/iconThree.svg";
import iconFour from "./assets/images/iconFour.svg";

const App = () => {
  const [Loading, setLoading] = useState(true);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 5000);

  // First, create an array to hold all the image sources you want to preload
  const images = [
    gnd,
    musica,
    mallet,
    evaluate,
    adejare,
    iconFour,
    iconOne,
    iconThree,
    iconTwo,
    img,
    // add more images as needed
  ];

  // Next, create a function to preload the images
  function preloadImages(images) {
    // Create a Promise that resolves when all images are loaded
    return Promise.all(
      images.map((imageSrc) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = imageSrc;
        });
      })
    );
  }
  const startTime = new Date().getTime();
  let counter = 0;
  // Call the preloadImages function when your loader screen is shown
  preloadImages(images).then((loadedImages) => {
    const interval = setInterval(() => {
      if (counter <= 100) {
        console.log(counter);
        counter++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    // Increment the countdown value every time an image is loaded
    loadedImages.forEach(() => {
      counter++;
    });
    // All images have been preloaded
    if ((counter = 100)) {
      setLoading(false);
    }
  });

  return (
    <div>
      {Loading ? (
        <Loader LoadingValue={counter} />
      ) : (
        <>
          <Main />
        </>
      )}
    </div>
  );
};

export default App;

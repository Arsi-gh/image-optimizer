let imgWidth = 0
let imgHeight = 0

export const getImageSize = async (url) => {
  if (url) {
    await generateImage(url);
    return imgWidth

  }
};

const generateImage = (url) => {
  new Promise((resolve, reject) => {
    const newImg = new Image();

    const objectURL = URL.createObjectURL(url);

    newImg.src = objectURL;

    newImg.onload = () => {
      resolve({
        width: newImg.naturalWidth,
        height: newImg.naturalHeight,
      });

      URL.revokeObjectURL(objectURL);
      imgWidth = newImg.naturalWidth
      imgHeight = newImg.naturalHeight
      console.log(imgHeight)
    };

    newImg.onerror = () => {
      reject(new Error("Could not load image to get its size."));
      URL.revokeObjectURL(objectURL);
    };
    
  });
};

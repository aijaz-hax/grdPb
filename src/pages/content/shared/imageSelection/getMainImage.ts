// * This code is coming from garde-robe dev *
export const getMainImage = (imageIndex = 0) => {
  const allLinksImg = document.querySelectorAll(
    "img:not(header img):not(nav img)"
  ) as NodeListOf<HTMLImageElement>;

  const tempLink = [];
  const mainImageAlt = "Image 1";
  let specificSiteSrc;

  allLinksImg.forEach((link) => {
    if (link.id === "landingImage") {
      specificSiteSrc = link.src;
    }
    if (link.getAttribute("itemprop") === "image") {
      tempLink.push(link.src);
    } else if (link.alt.includes(mainImageAlt)) {
      tempLink[0] = link.src;
    }
  });

  if (tempLink.length === 0) {
    const ogImage = document.querySelector(
      'meta[property="og:image"], meta[name="og:image"]'
    );
    if (ogImage) {
      tempLink[0] = ogImage.getAttribute("content");
    }
    if (tempLink[0]) {
      // Check if tempLink[0] is not undefined or empty
      if (tempLink[0].indexOf("//") === -1) {
        tempLink[0] = "//" + tempLink[0];
      }
    } else {
      tempLink[0] = specificSiteSrc;
    }
  }

  chrome.runtime.sendMessage({
    type: "sendMainImageSelection",
    source: tempLink[0],
    imageIndex: imageIndex,
  });
};

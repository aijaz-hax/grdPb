export const createOverLay = (imageIndex) => {
  const canvas = document.createElement("canvas");
  canvas.id = "wardRobeCanvas";
  document.body.appendChild(canvas);

  let images = getAllImages();

  canvas.className = "canvasStyle";
  canvas.width = document.documentElement.scrollWidth;
  canvas.height = document.documentElement.scrollHeight;

  const ctx = canvas.getContext("2d");
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  window.addEventListener("scroll", function () {
    images = getAllImages();

    canvas.width = document.documentElement.scrollWidth;
    canvas.height = document.documentElement.scrollHeight;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  });

  let lastHoveredImage = null;
  let hoverTimer = null;
  const hoverDelay = 5;

  canvas.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX + window.scrollX;
    const mouseY = e.clientY + window.scrollY;

    images.forEach((image) => {
      if (validImage(image)) {
        const { rect, adjustedLeft, adjustedTop } = calculateBoundClient(image);
        if (
          isOverImage(
            mouseX,
            mouseY,
            adjustedLeft,
            adjustedTop,
            rect.width,
            rect.height
          )
        ) {
          if (hoverTimer) {
            clearTimeout(hoverTimer);
          }
          hoverTimer = setTimeout(() => {
            lastHoveredImage = image;
            imageMouseOverListener({ target: image });
          }, hoverDelay);
        } else if (image === lastHoveredImage) {
          if (hoverTimer) {
            clearTimeout(hoverTimer);
          }
          lastHoveredImage = null;
          imageMouseOutListener({ target: image });
        }
      }
    });
  });

  canvas.addEventListener("click", function (e) {
    const mouseX = e.clientX + window.scrollX;
    const mouseY = e.clientY + window.scrollY;

    images.forEach((image) => {
      if (validImage(image)) {
        const { rect, adjustedLeft, adjustedTop } = calculateBoundClient(image);

        if (
          isOverImage(
            mouseX,
            mouseY,
            adjustedLeft,
            adjustedTop,
            rect.width,
            rect.height
          )
        ) {
          handleSelectedImage(image, imageIndex);
        } else {
          const canvas = document.getElementById("wardRobeCanvas");
          if (canvas) {
            canvas.remove();
            document.body.style.overflow = "visible";

            chrome.runtime.sendMessage({
              type: "sendImageSelection",
              source: null,
            });
          }
        }
      }
    });
  });
};

const imageMouseOutListener = (imageInfo) => {
  const canvas = document.getElementById("wardRobeCanvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  const image = imageInfo.target;
  const { rect, adjustedLeft, adjustedTop } = calculateBoundClient(image);

  ctx.clearRect(adjustedLeft, adjustedTop, rect.width, rect.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const imageMouseOverListener = (imageInfo) => {
  const canvas = document.getElementById("wardRobeCanvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  const image = imageInfo.target;
  const { rect, adjustedLeft, adjustedTop } = calculateBoundClient(image);

  ctx.globalCompositeOperation = "destination-out";
  ctx.fillRect(adjustedLeft, adjustedTop, rect.width, rect.height);
  ctx.globalCompositeOperation = "source-over";
};

const isOverImage = (x, y, imgX, imgY, imgWidth, imgHeight) => {
  return x > imgX && x < imgX + imgWidth && y > imgY && y < imgY + imgHeight;
};

const calculateBoundClient = (el) => {
  const rect = el.getBoundingClientRect();
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;
  const adjustedLeft = rect.left + scrollX;
  const adjustedTop = rect.top + scrollY;

  return {
    rect,
    adjustedLeft,
    adjustedTop,
  };
};

const handleSelectedImage = (image, imageIndex) => {
  let src;

  src = sourceIfPictureElement(image);

  if (!src) {
    src = sourceIfImgElement(image);
  }

  const canvas = document.getElementById("wardRobeCanvas");
  if (canvas) {
    canvas.remove();
  }

  chrome.runtime.sendMessage({
    type: "sendImageSelection",
    source: src,
    imageIndex: imageIndex,
  });
};

const validImage = (image) => {
  if (
    !validSrcFormat(image) ||
    image.style.display == "none" ||
    image.style.visibility == "hidden" ||
    image.style.opacity == "0"
  ) {
    return false;
  }

  let parentElement = image.parentElement;

  while (parentElement && parentElement !== document.body) {
    if (isHidden(parentElement) || parentElement.classList.contains("modal")) {
      return false;
    }
    parentElement = parentElement.parentElement;
  }

  return true;
};

const validSrcFormat = (image) => {
  if (image.src.startsWith("data:image") && !image.srcset) {
    return false;
  }

  if (image.src.startsWith("data:image") && image.srcset.includes("https://")) {
    return true;
  }

  if (image.src.includes("https://") || image.src.includes("//:")) {
    return true;
  }

  if (image.srcset.includes("https://") || image.src.includes("//:")) {
    return true;
  }

  return true;
};

const isHidden = (element: HTMLElement): boolean => {
  const style = window.getComputedStyle(element);
  return style.display === "none" || style.visibility === "hidden";
};

const sourceIfPictureElement = (image) => {
  if (window.location.href.includes("www.cos.com")) return null;

  if (
    image.parentElement &&
    image.parentElement.tagName.toLowerCase() === "picture"
  ) {
    const pictureElement = image.parentElement;

    const firstSourceElement = pictureElement.querySelector("source");

    if (firstSourceElement) {
      return firstSourceElement.getAttribute("srcset");
    }
  }

  return null;
};

const sourceIfImgElement = (image) => {
  if (image.src) {
    if (image.src.startsWith("data:image")) return image.srcset;
    return image.src;
  } else if (image.srcset) {
    return image.srcset;
  }

  return null;
};

const isInViewport = (element, tolerance = 500) => {
  const rect = element.getBoundingClientRect();
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top >= -tolerance &&
    rect.left >= -tolerance &&
    rect.bottom <= viewportHeight + tolerance &&
    rect.right <= viewportWidth + tolerance
  );
};

const getAllImages = (): NodeListOf<HTMLImageElement> | string[] => {
  const images = [];

  const allImages = document.querySelectorAll(
    "img:not(header img):not(nav img)"
  ) as NodeListOf<HTMLImageElement>;

  const shadowImages = querySelectorAllShadows("img");

  shadowImages.forEach((image) => {
    if (isInViewport(image)) {
      images.push(image);
    }
  });

  allImages.forEach((image) => {
    if (isInViewport(image)) {
      images.push(image);
    }
  });

  return images;
};

const querySelectorAllShadows = (selector, el = document.body) => {
  const childShadows = Array.from(el.querySelectorAll("*"))
    .map((el) => el.shadowRoot)
    .filter(Boolean);

  const childResults = childShadows.map((child) =>
    querySelectorAllShadows(selector, child as any)
  );

  const result = Array.from(el.querySelectorAll(selector));
  return result.concat(childResults).flat();
};

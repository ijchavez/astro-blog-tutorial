const fourZeroFoursImgs = [
    { src: "../images/404s/404.jpeg", alt: "404" },
    { src: "../images/404s/404-1.jpg", alt: "404-1" },
    { src: "../images/404s/404-2.jpg", alt: "404-2" },
    { src: "../images/404s/404-3.jpg", alt: "404-3" },
  ];
function randomFourZeroFoursImgs() {
    const randomIndex = Math.floor(Math.random() * fourZeroFoursImgs.length);
    return fourZeroFoursImgs[randomIndex];
  }
export default randomFourZeroFoursImgs;
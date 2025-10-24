// Image component displays a single image in the gallery
function Image({ src, alt, onClick }) {
  return <img src={src} alt={alt} onClick={onClick} />;
}

export default Image;
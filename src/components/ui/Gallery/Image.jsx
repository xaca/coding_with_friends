// Image component displays a single image in the gallery
import soundPlayer from '../../../utils/soundPlayer';

function Image({ src, alt, onClick }) {
  return <img src={src} alt={alt} onClick={(e)=>{ soundPlayer.playClick(); if(onClick) onClick(e); }} onMouseEnter={()=>soundPlayer.playHover()} />;
}

export default Image;
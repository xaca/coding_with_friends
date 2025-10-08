import logo from "../../../assets/img/logo.png";
import { useSoundConfig } from '../../../context/SoundContext';
import soundPlayer from '../../../utils/soundPlayer';

// Header component displays the top logo and branding
function Header({logoPersonalizado}) {
  let imagen = logoPersonalizado || logo;
  const { enabled, toggle } = useSoundConfig();
  return (
    <div className="header" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <img src={imagen} className="logo_principal" alt="Coding with Friends :)" onMouseEnter={()=>soundPlayer.playHover()} onClick={()=>soundPlayer.playClick()} />
        <div style={{marginRight:12}}>
          <button aria-pressed={!enabled} onClick={() => { soundPlayer.playClick(); toggle(); }} title={enabled? 'Desactivar sonidos':'Activar sonidos'} style={{padding:'6px 8px',fontSize:12,borderRadius:6}}>
            {enabled ? '🔊 Sonidos' : '🔈 Silencio'}
          </button>
        </div>
    </div>
  );
}
export default Header;
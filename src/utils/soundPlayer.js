// Lightweight WebAudio-based sound player with mute control
// No external assets required — generates subtle tones on the fly
const KEY = 'cwf_sounds_enabled';

class SoundPlayer {
  constructor() {
    this.muted = this._readMuted();
    this.ctx = null;
  }

  _readMuted() {
    try {
      const v = localStorage.getItem(KEY);
      if (v === null) return false; // default: sounds enabled
      return v === '0' || v === 'false' || v === 'off' || v === 'null';
    } catch (e) {
      return false;
    }
  }

  setMuted(muted) {
    this.muted = !!muted;
    try {
      localStorage.setItem(KEY, this.muted ? '0' : '1');
    } catch (e) {}
    // Suspend/resume context for power
    if (this.ctx) {
      if (this.muted) this.ctx.suspend().catch(()=>{});
      else this.ctx.resume().catch(()=>{});
    }
  }

  _ensureCtx() {
    if (!this.ctx) {
      const C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      this.ctx = new C();
      // avoid autoplay policies blocking by resuming on first user gesture
      if (this.ctx.state === 'suspended') {
        const resume = () => { this.ctx.resume().catch(()=>{}); window.removeEventListener('pointerdown', resume); };
        window.addEventListener('pointerdown', resume);
      }
    }
    return this.ctx;
  }

  playHover() {
    if (this.muted) return;
    const ctx = this._ensureCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(800, now);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.04, now + 0.001);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    o.connect(g);
    g.connect(ctx.destination);
    o.start(now);
    o.stop(now + 0.14);
  }

  playClick() {
    if (this.muted) return;
    const ctx = this._ensureCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    // A quick click: short noise + tiny click with oscillator
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'square';
    o.frequency.setValueAtTime(300, now);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.05, now + 0.001);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
    o.connect(g);
    g.connect(ctx.destination);
    o.start(now);
    o.stop(now + 0.11);
  }
}

const player = new SoundPlayer();
export default player;

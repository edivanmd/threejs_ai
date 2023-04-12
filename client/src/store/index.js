import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#5CD29C',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logo_site.png',
  fullDecal: './logo_site.png',
});

export default state;
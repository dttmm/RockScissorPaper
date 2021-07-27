import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const HAND_IMAGE = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg
}

function HandIcon({ value = "rock" }) {
  const src = HAND_IMAGE[value];
  return <img src={src} alt={value} />;
}

export default HandIcon;

import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const HAND_IMAGE = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

// className prop을 추가하고, img 태그에 적용해주세요
function HandIcon({ value, className = "" }) {
  const src = HAND_IMAGE[value];
  return <img className={className} src={src} alt={value} />;
}

export default HandIcon;

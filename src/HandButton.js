import HandIcon from "./HandIcon";
import backgroundImg from "./assets/purple.svg";

// CSS 파일로 스타일을 적용해주세요
function HandButton({ value, onClick, className = "" }) {
  const handleClick = () => onClick(value);
  return (
    <button className={className} onClick={handleClick}>
      <HandIcon className="HandButton-icon" value={value} />
    </button>
  );
}

export default HandButton;

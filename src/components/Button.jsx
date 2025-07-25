//className prop안에 css 모듈 넣어서 사용하시면 됩니다!
const Button = ({ className, disabled, onClick, children }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

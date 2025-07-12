import { Children } from "react";

//className prop안에 css 모듈 넣어서 사용하시면 됩니다!
const Button = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export default Button;

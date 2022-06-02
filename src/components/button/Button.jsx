import { SButton } from "./Styles";

const Button = ({ children, ...props }) => {
  return (
    <SButton {...props} disabled={props.load}>
      {props.load ? (
        <SLoader>
          <svg height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="8"
              cy="8"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          Loading...
        </SLoader>
      ) : (
        children
      )}
    </SButton>
  );
};

export default Button;

Button.defaultProps = {
  type: "button",
};

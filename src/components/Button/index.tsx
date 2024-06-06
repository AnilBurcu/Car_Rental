import { ButtonProps } from "../../types";

const Button = ({ title, designs, type, icon, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${designs} custom-btn bg-primary-blue rounded-full hover:bg-blue-800 text-white`}
    >
      {title}
    </button>
  );
};

export default Button;

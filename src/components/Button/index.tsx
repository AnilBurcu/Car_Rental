import { ButtonProps } from "../../types";

const Button = ({ title, designs, type, icon, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${designs} custom-btn bg-primary-blue rounded-full hover:bg-blue-800 text-white`}
    >
      <span className="flex-1">{title}</span>
      <img className="relative w-6 h-6" src={icon} />
    </button>
  );
};

export default Button;

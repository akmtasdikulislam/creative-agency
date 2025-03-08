import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  shape = "rounded",
  fullWidth = false,
  disabled = false,
  isLoading = false,
  leftIcon = null,
  rightIcon = null,
  onClick,
  className = "",
  ...props
}) => {
  // DaisyUI base classes
  const baseClasses = "btn";

  // DaisyUI variant classes
  const variantClasses = {
    primary:
      "btn bg-zinc-950 hover:bg-zinc-800 active:bg-opacity-100 text-white border-none px-10 transition-all duration-300 ease-in-out hover:shadow-lg",
    secondary: "btn-secondary",
    outline: "btn-outline",
    danger: "btn-error",
    success: "btn-success",
    ghost: "btn-ghost",
    link: "btn-link",
  };

  // DaisyUI size classes
  const sizeClasses = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  // Shape classes (DaisyUI compatible)
  const shapeClasses = {
    square: "btn-square",
    circle: "btn-circle",
    rounded: "btn-rounded",
  };

  // Combine all classes with tailwind-merge
  const buttonClasses = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    shapeClasses[shape],
    fullWidth && "w-full",
    isLoading && "btn-disabled loading",
    className,
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {/* Left Icon */}
      {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}

      {/* Button Content */}
      {!isLoading ? (
        <>
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "danger",
    "success",
    "ghost",
    "link",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  shape: PropTypes.oneOf(["square", "circle", "rounded"]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;

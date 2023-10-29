const Button = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className="h-9 px-4 border-[1px] rounded-[10px] border-gray-300 text-gray-800 disabled:cursor-not-allowed transition-transform enabled:active:scale-95"
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

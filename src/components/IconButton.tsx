const IconButton = ({
  onClick,
  children,
  theme = "light",
}: {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  theme?: "light" | "dark";
}) => {
  return (
    <button
      className={`h-[44px] w-[44px] ${
        theme === "light" ? "bg-gray-200" : "bg-gray-900"
      } rounded-full flex justify-center items-center transition-transform active:scale-[.98] hover:scale-105 will-change-transform`}
      onClick={onClick || undefined}>
      {children}
    </button>
  );
};

export default IconButton;

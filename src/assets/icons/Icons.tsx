const homeIcon = (filled: boolean, fillColor: string = "black") => {
  return (
    <svg
      width="30"
      height="28"
      viewBox="0 -1 23 25"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.68793 6.8215L9.62556 1.90735C11.035 0.908962 12.9262 0.928074 14.3152 1.95474L20.8776 6.80519C21.898 7.5594 22.5 8.75301 22.5 10.0219V18.5C22.5 19.6046 21.6046 20.5 20.5 20.5H17C16.4477 20.5 16 20.0523 16 19.5V15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15V19.5C8 20.0523 7.55229 20.5 7 20.5H3C1.89543 20.5 1 19.6046 1 18.5V10.0856C1 8.78822 1.62923 7.57141 2.68793 6.8215Z"
        fill={filled ? fillColor : "none"}
        stroke={filled ? fillColor : "var(--clr-gray)"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const searchIcon = (filled: boolean, fillColor: string = "black") => {
  return (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.4332 18.1672C19.0977 16.4946 20.1265 14.1887 20.1265 11.6425C20.1265 6.53385 15.9851 2.39249 10.8765 2.39249C5.76786 2.39249 1.6265 6.53385 1.6265 11.6425C1.6265 16.7511 5.76786 20.8925 10.8765 20.8925C13.4389 20.8925 15.758 19.8505 17.4332 18.1672ZM17.4332 18.1672L22.8735 23.6075"
        stroke={filled ? fillColor : "var(--clr-gray)"}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

const writeIcon = (filled: boolean, fillColor: string = "black") => {
  return (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5 2.25H7.75C4.43629 2.25 1.75 4.93629 1.75 8.25V15.75C1.75 19.0637 4.43629 21.75 7.75 21.75H15.25C18.5637 21.75 21.25 19.0637 21.25 15.75V12M11.981 11.4534L20.396 3.03838"
        stroke={filled ? fillColor : "var(--clr-gray)"}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

const heartIcon = (filled: boolean, fillColor: string = "black") => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.6483 3.38499C17.344 0.720243 13.9651 3.38499 12.75 4.60988C11.5348 3.38499 8.15603 0.720243 4.85169 3.38499C1.54734 6.04975 0.82919 11.5791 5.45925 16.2464C10.0893 20.9137 12.75 21.7585 12.75 21.7585C12.75 21.7585 15.4107 20.9137 20.0407 16.2464C24.6708 11.5791 23.9526 6.04975 20.6483 3.38499Z"
        strokeWidth="3"
        fill={filled ? fillColor : "none"}
        stroke={filled ? fillColor : "var(--clr-gray)"}
        className={`group-active/nav-item:fill-${fillColor} group-active/nav-item:stroke-${fillColor}`}
      />
    </svg>
  );
};

const userIcon = (filled: boolean, fillColor: string = "black") => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.46644 26.4102H23.4972C24.9332 26.4102 25.9244 24.9722 25.4133 23.6301C24.2021 20.4494 21.1522 18.3473 17.7487 18.3473H14.1657C10.7482 18.3473 7.7025 20.5033 6.5667 23.7265C6.10496 25.0369 7.07714 26.4102 8.46644 26.4102Z"
        strokeWidth="3"
        fill={filled ? fillColor : "none"}
        stroke={filled ? fillColor : "var(--clr-gray)"}
        className={`group-active/nav-item:fill-${fillColor} group-active/nav-item:stroke-${fillColor}`}
      />
      <path
        d="M16.0465 13.7291C18.2941 13.7291 20.1162 11.9071 20.1162 9.65945C20.1162 7.41184 18.2941 5.58978 16.0465 5.58978C13.7989 5.58978 11.9768 7.41184 11.9768 9.65945C11.9768 11.9071 13.7989 13.7291 16.0465 13.7291Z"
        strokeWidth="3"
        fill={filled ? fillColor : "none"}
        stroke={filled ? fillColor : "var(--clr-gray)"}
        className={`group-active/nav-item:fill-${fillColor} group-active/nav-item:stroke-${fillColor}`}
      />
    </svg>
  );
};

const threadIcon = () => {
  return (
    <svg
      width="31"
      height="16"
      viewBox="0 0 31 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.9551 15C15.9551 1 29.9551 1 29.9551 8.12777C29.9551 15.2555 15.9551 15.9513 15.9551 1"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M15.9551 15C15.9551 1 1.95508 1 1.95508 8.12777C1.95508 15.2555 15.9551 15.9513 15.9551 1"
        stroke="#D9D9D9"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

interface ITickIconProps {
  color?: string;
  strokeWidth?: number;
  strokeColor?: string;
  width?: number;
  height?: number;
  className?: string;
}

const TickIcon = ({
  color = "#4192EF",
  strokeWidth = 0,
  strokeColor = "white",
  width = 17,
  height = 17,
  className,
}: ITickIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M6.75899 16.1174C6.41326 16.2649 6.01178 16.1337 5.81989 15.8105L4.89566 14.2539C4.79 14.0759 4.6155 13.9495 4.41347 13.9046L2.6764 13.5186C2.30716 13.4366 2.05681 13.0924 2.09243 12.7159L2.26217 10.9215C2.28158 10.7163 2.21567 10.5121 2.07993 10.357L0.887222 8.99388C0.639799 8.71111 0.639798 8.28889 0.887222 8.00612L2.07993 6.64302C2.21567 6.48789 2.28158 6.28373 2.26217 6.07851L2.09243 4.28415C2.05681 3.90758 2.30716 3.56343 2.6764 3.48137L4.41347 3.09536C4.6155 3.05046 4.79 2.92408 4.89566 2.74612L5.81989 1.18953C6.01178 0.866345 6.41326 0.735107 6.75899 0.882552L8.41086 1.58703C8.59882 1.66718 8.81134 1.66718 8.99929 1.58703L10.6512 0.882553C10.9969 0.735108 11.3984 0.866345 11.5903 1.18953L12.5145 2.74612C12.6202 2.92408 12.7947 3.05046 12.9967 3.09536L14.7338 3.48137C15.103 3.56343 15.3533 3.90758 15.3177 4.28414L15.148 6.07851C15.1286 6.28373 15.1945 6.48789 15.3302 6.64302L16.5229 8.00612C16.7704 8.28889 16.7704 8.71111 16.5229 8.99388L15.3302 10.357C15.1945 10.5121 15.1286 10.7163 15.148 10.9215L15.3177 12.7159C15.3533 13.0924 15.103 13.4366 14.7338 13.5186L12.9967 13.9046C12.7947 13.9495 12.6202 14.0759 12.5145 14.2539L11.5903 15.8105C11.3984 16.1337 10.9969 16.2649 10.6512 16.1174L8.99929 15.413C8.81134 15.3328 8.59882 15.3328 8.41086 15.413L6.75899 16.1174ZM7.91758 11.1625L12.1551 6.925L11.1051 5.8375L7.91758 9.025L6.30508 7.45L5.25508 8.5L7.91758 11.1625Z"
        fill={color}
        strokeWidth={strokeWidth}
        stroke={strokeColor}
      />
    </svg>
  );
};

export {
  homeIcon,
  searchIcon,
  writeIcon,
  heartIcon,
  userIcon,
  threadIcon,
  TickIcon,
};

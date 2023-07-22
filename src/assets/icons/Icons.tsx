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

export { homeIcon, searchIcon, writeIcon, heartIcon, userIcon, threadIcon };

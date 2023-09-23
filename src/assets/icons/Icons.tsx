const HomeIcon = ({
  filled,
  fillColor = "black",
}: {
  filled: boolean;
  fillColor?: string;
}) => {
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

const SearchIcon = ({
  filled,
  fillColor = "black",
}: {
  filled: boolean;
  fillColor?: string;
}) => {
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

const WriteIcon = ({
  filled,
  fillColor = "black",
}: {
  filled: boolean;
  fillColor?: string;
}) => {
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

const HeartIcon = ({
  filled,
  fillColor = "black",
  strokeWidth = 1.875,
  strokeColor = "black",
  width = "25",
  height = "25",
}: {
  filled: boolean;
  fillColor?: string;
  strokeWidth?: number;
  strokeColor?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.6483 3.38499C17.344 0.720243 13.9651 3.38499 12.75 4.60988C11.5348 3.38499 8.15603 0.720243 4.85169 3.38499C1.54734 6.04975 0.82919 11.5791 5.45925 16.2464C10.0893 20.9137 12.75 21.7585 12.75 21.7585C12.75 21.7585 15.4107 20.9137 20.0407 16.2464C24.6708 11.5791 23.9526 6.04975 20.6483 3.38499Z"
        strokeWidth={strokeWidth}
        fill={filled ? fillColor : "none"}
        stroke={filled ? fillColor : strokeColor}
        className={`group-active/nav-item:fill-${fillColor} group-active/nav-item:stroke-${fillColor}`}
      />
    </svg>
  );
};

const UserIcon = ({
  filled,
  fillColor = "black",
}: {
  filled: boolean;
  fillColor?: string;
}) => {
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

const ThreadIcon = () => {
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

const DotsIcon = () => {
  return (
    <svg
      width="17"
      height="5"
      viewBox="0 0 17 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.05859 2.49561V2.51318C4.05859 2.84717 3.97949 3.14893 3.82129 3.41846C3.66309 3.68799 3.44629 3.90186 3.1709 4.06006C2.90137 4.21826 2.59961 4.29736 2.26562 4.29736H2.24805C1.91406 4.29736 1.6123 4.21826 1.34277 4.06006C1.07324 3.90186 0.856445 3.68799 0.692383 3.41846C0.53418 3.14893 0.455078 2.84717 0.455078 2.51318V2.49561C0.455078 2.16162 0.53418 1.85986 0.692383 1.59033C0.856445 1.31494 1.07324 1.09814 1.34277 0.939941C1.6123 0.781738 1.91406 0.702637 2.24805 0.702637H2.26562C2.59961 0.702637 2.90137 0.781738 3.1709 0.939941C3.44629 1.09814 3.66309 1.31494 3.82129 1.59033C3.97949 1.85986 4.05859 2.16162 4.05859 2.49561Z"
        fill="black"
      />
      <path
        d="M10.2568 2.49561V2.51318C10.2568 2.84717 10.1777 3.14893 10.0195 3.41846C9.86133 3.68799 9.64453 3.90186 9.36914 4.06006C9.09961 4.21826 8.79785 4.29736 8.46387 4.29736H8.44629C8.1123 4.29736 7.81055 4.21826 7.54102 4.06006C7.27148 3.90186 7.05469 3.68799 6.89062 3.41846C6.73242 3.14893 6.65332 2.84717 6.65332 2.51318V2.49561C6.65332 2.16162 6.73242 1.85986 6.89062 1.59033C7.05469 1.31494 7.27148 1.09814 7.54102 0.939941C7.81055 0.781738 8.1123 0.702637 8.44629 0.702637H8.46387C8.79785 0.702637 9.09961 0.781738 9.36914 0.939941C9.64453 1.09814 9.86133 1.31494 10.0195 1.59033C10.1777 1.85986 10.2568 2.16162 10.2568 2.49561Z"
        fill="black"
      />
      <path
        d="M16.4551 2.49561V2.51318C16.4551 2.84717 16.376 3.14893 16.2178 3.41846C16.0596 3.68799 15.8428 3.90186 15.5674 4.06006C15.2979 4.21826 14.9961 4.29736 14.6621 4.29736H14.6445C14.3105 4.29736 14.0088 4.21826 13.7393 4.06006C13.4697 3.90186 13.2529 3.68799 13.0889 3.41846C12.9307 3.14893 12.8516 2.84717 12.8516 2.51318V2.49561C12.8516 2.16162 12.9307 1.85986 13.0889 1.59033C13.2529 1.31494 13.4697 1.09814 13.7393 0.939941C14.0088 0.781738 14.3105 0.702637 14.6445 0.702637H14.6621C14.9961 0.702637 15.2979 0.781738 15.5674 0.939941C15.8428 1.09814 16.0596 1.31494 16.2178 1.59033C16.376 1.85986 16.4551 2.16162 16.4551 2.49561Z"
        fill="black"
      />
    </svg>
  );
};

const CommentIcon = ({
  fillColor = "black",
  strokeWidth = 1.875,
}: {
  fillColor?: string;
  strokeWidth?: number;
}) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.865 15.445C20.0042 13.4745 20.387 11.1566 19.942 8.92441C19.497 6.69222 18.2545 4.69839 16.4467 3.3154C14.639 1.93241 12.3895 1.25485 10.1187 1.4093C7.84778 1.56375 5.71081 2.53965 4.10694 4.15468C2.50308 5.76972 1.54203 7.91341 1.40334 10.1853C1.26465 12.4572 1.95781 14.7019 3.35331 16.5C4.74882 18.2981 6.75122 19.5267 8.98644 19.9563C11.2217 20.3858 13.5368 19.9869 15.4994 18.834L20.125 20.125L18.865 15.445Z"
        stroke={fillColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

const RepostIcon = ({ fillColor = "black" }: { fillColor?: string }) => {
  return (
    <svg
      width="18"
      height="23"
      viewBox="0 0 18 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.7481 9.40364C16.4995 9.40364 16.261 9.50241 16.0852 9.67822C15.9094 9.85404 15.8106 10.0925 15.8106 10.3411V14.3049C15.8096 15.1176 15.4863 15.8968 14.9116 16.4715C14.3369 17.0462 13.5577 17.3695 12.745 17.3705H7.76406L9.44312 15.6952C9.61416 15.5186 9.70901 15.2819 9.70723 15.0361C9.70545 14.7903 9.60718 14.555 9.4336 14.3809C9.26002 14.2069 9.02501 14.1079 8.7792 14.1055C8.53338 14.103 8.29643 14.1972 8.11937 14.3677L4.83437 17.6443C4.65855 17.8201 4.55946 18.0584 4.55875 18.3071V18.308C4.55875 18.3296 4.57 18.3474 4.57094 18.3689C4.57596 18.5967 4.67063 18.8133 4.83437 18.9718L8.1175 22.2568C8.29431 22.4275 8.53113 22.522 8.77694 22.5199C9.02275 22.5178 9.25788 22.4192 9.4317 22.2453C9.60553 22.0715 9.70412 21.8364 9.70626 21.5906C9.70839 21.3448 9.6139 21.1079 9.44312 20.9311L7.75844 19.2455H12.7441C14.0539 19.244 15.3097 18.723 16.236 17.7968C17.1622 16.8706 17.6832 15.6148 17.6847 14.3049V10.3411C17.6847 10.0925 17.5859 9.85404 17.4101 9.67822C17.2343 9.50241 16.9968 9.40364 16.7481 9.40364ZM10.7387 6.12614L9.05594 7.80895C8.9664 7.89543 8.89497 7.99888 8.84584 8.11326C8.79671 8.22764 8.77085 8.35065 8.76976 8.47513C8.76868 8.59962 8.7924 8.72307 8.83954 8.83828C8.88668 8.9535 8.95629 9.05817 9.04432 9.14619C9.13234 9.23422 9.23701 9.30383 9.35223 9.35097C9.46745 9.39811 9.59089 9.42183 9.71537 9.42075C9.83986 9.41966 9.96287 9.3938 10.0773 9.34467C10.1916 9.29554 10.2951 9.22411 10.3816 9.13457L13.6628 5.85332C13.8387 5.67704 13.9375 5.43816 13.9375 5.18911C13.9375 4.94005 13.8387 4.70117 13.6628 4.52489L10.3816 1.24364C10.2047 1.07286 9.96793 0.978368 9.72212 0.980504C9.47631 0.98264 9.24118 1.08124 9.06736 1.25506C8.89354 1.42888 8.79494 1.66401 8.79281 1.90982C8.79067 2.15563 8.88516 2.39245 9.05594 2.56926L10.7378 4.25114H5.75313C4.44332 4.25287 3.18766 4.77396 2.26149 5.70013C1.33532 6.6263 0.814236 7.88196 0.8125 9.19176V13.1564C0.8125 13.4051 0.911272 13.6435 1.08709 13.8194C1.2629 13.9952 1.50136 14.0939 1.75 14.0939C1.99864 14.0939 2.2371 13.9952 2.41291 13.8194C2.58873 13.6435 2.6875 13.4051 2.6875 13.1564V9.19176C2.68874 8.37893 3.01225 7.59975 3.5871 7.02508C4.16195 6.4504 4.94123 6.12713 5.75406 6.12614H10.7387Z"
        fill={fillColor}
      />
    </svg>
  );
};

const ShareIcon = () => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_106_1443)">
        <path
          d="M21.125 3.3125L9.14188 9.95281"
          stroke="black"
          strokeWidth="1.875"
          strokeLinejoin="round"
        />
        <path
          d="M11.4669 19.5629L21.125 3.31323H2.37501L9.14188 9.95354L11.4669 19.5629Z"
          stroke="black"
          strokeWidth="1.875"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_106_1443">
          <rect
            width="22.5"
            height="22.5"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const RightArrowIcon = () => {
  return (
    <svg
      aria-label="Continue"
      color="rgb(153, 153, 153)"
      fill="rgb(153, 153, 153)"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
      className="rotate-180">
      <title>Continue</title>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="2.909"
        x2="22.001"
        y1="12.004"
        y2="12.004"></line>
      <polyline
        fill="none"
        points="9.276 4.726 2.001 12.004 9.276 19.274"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"></polyline>
    </svg>
  );
};

const LeftArrowIcon = () => {
  return (
    <svg
      aria-label="Back"
      color="rgb(153, 153, 153)"
      fill="rgb(153, 153, 153)"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16">
      <title>Back</title>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="2.909"
        x2="22.001"
        y1="12.004"
        y2="12.004"></line>
      <polyline
        fill="none"
        points="9.276 4.726 2.001 12.004 9.276 19.274"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"></polyline>
    </svg>
  );
};

const MoreIcon = () => {
  return (
    <svg
      aria-label="More"
      color="rgb(243, 245, 247)"
      fill="rgb(243, 245, 247)"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24">
      <title>More</title>
      <rect
        fill="currentColor"
        height="2.5"
        rx="1.25"
        width="21"
        x="3"
        y="7"></rect>
      <rect
        fill="currentColor"
        height="2.5"
        rx="1.25"
        width="14"
        x="10"
        y="15"></rect>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      aria-label="Close"
      color="rgb(119, 119, 119)"
      fill="rgb(119, 119, 119)"
      height="18"
      role="img"
      viewBox="0 0 24 24"
      width="18">
      <title>Close</title>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="3"
        y2="21"></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="21"
        y2="3"></line>
    </svg>
  );
};

export {
  HomeIcon,
  SearchIcon,
  WriteIcon,
  HeartIcon,
  UserIcon,
  ThreadIcon,
  TickIcon,
  DotsIcon,
  CommentIcon,
  RepostIcon,
  ShareIcon,
  RightArrowIcon,
  LeftArrowIcon,
  MoreIcon,
  CloseIcon,
};

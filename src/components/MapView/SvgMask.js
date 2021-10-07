import React from "react";

const SvgMask = ({ backgroundColor }) => {
  return (
    <svg
      width="1480"
      height="740"
      viewBox="0 0 1480 740"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      //   class="PillMask__Arch-sc-17qtq0h-1 bSeCbe"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1480 0H0V740H0.0664062C5.41797 335.918 334.648 10 740 10C1145.35 10 1474.58 335.918 1479.93 740H1480V0Z"
        fill={backgroundColor}
      ></path>
    </svg>
  );
};

export default SvgMask;

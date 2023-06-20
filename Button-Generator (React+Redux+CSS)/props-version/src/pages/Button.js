import styles from "./Button.module.css";
import React, { useState, useEffect, useRef } from "react";

const Button = ({
  bgColor,
  textColor,
  borderColor,
  fontSize,
  fontWeight,
  fontFamily,
  fontStyle,
  paddingintV,
  paddingintH,
  borderRadius,
  borderSize,
  boxShadowPositionH,
  boxShadowPositionV,
  boxShadowBlurRadius,
  boxShadowSpreadRadius,
  boxShadowColor,
  textShadowPositionH,
  textShadowPositionV,
  textShadowBlurRadius,
  textShadowColor,
  bgColorHover,
  textColorHover,
  borderColorHover,
  gifLink,
  children,
}) => {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    ref.current.addEventListener("mouseenter", handleMouseEnter);
    ref.current.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      ref.current.removeEventListener("mouseenter", handleMouseEnter);
      ref.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={ref}
      style={{
        backgroundImage: `url("${gifLink}")`,
        backgroundColor: hover ? bgColorHover : bgColor,
        color: hover ? textColorHover : textColor,
        border: hover
          ? `${borderSize}px solid ${borderColorHover}`
          : `${borderSize}px solid ${borderColor}`,

        fontSize: `${fontSize}px`,
        fontWeight: fontWeight,
        fontFamily: fontFamily,
        fontStyle: fontStyle,

        padding: `${paddingintV}px ${paddingintH}px`,

        borderRadius: `${borderRadius}px`,
        boxShadow: `${boxShadowPositionH}px ${boxShadowPositionV}px ${boxShadowBlurRadius}px ${boxShadowSpreadRadius}px ${boxShadowColor}`,
        textShadow: `${textShadowPositionH}px ${textShadowPositionV}px ${textShadowBlurRadius}px ${textShadowColor}`,
      }}
      className={styles.previewButton}
    >
      {children}
    </button>
  );
};

export default Button;

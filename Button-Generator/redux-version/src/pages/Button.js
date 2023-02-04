import styles from "./Button.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Button = ({ children }) => {
  const bgColor = useSelector((state) => state.btncss.bgColor);
  const textColor = useSelector((state) => state.btncss.textColor);
  const borderColor = useSelector((state) => state.btncss.borderColor);
  const fontSize = useSelector((state) => state.btncss.fontSize);
  const fontWeight = useSelector((state) => state.btncss.fontWeight);
  const fontFamily = useSelector((state) => state.btncss.fontFamily);
  const fontStyle = useSelector((state) => state.btncss.fontStyle);
  const paddingintV = useSelector((state) => state.btncss.paddingintV);
  const paddingintH = useSelector((state) => state.btncss.paddingintH);
  const borderRadius = useSelector((state) => state.btncss.borderRadius);
  const borderSize = useSelector((state) => state.btncss.borderSize);
  const boxShadowPositionH = useSelector(
    (state) => state.btncss.boxShadowPositionH
  );
  const boxShadowPositionV = useSelector(
    (state) => state.btncss.boxShadowPositionV
  );
  const boxShadowBlurRadius = useSelector(
    (state) => state.btncss.boxShadowBlurRadius
  );
  const boxShadowSpreadRadius = useSelector(
    (state) => state.btncss.boxShadowSpreadRadius
  );
  const boxShadowColor = useSelector((state) => state.btncss.boxShadowColor);
  const textShadowPositionH = useSelector(
    (state) => state.btncss.textShadowPositionH
  );
  const textShadowPositionV = useSelector(
    (state) => state.btncss.textShadowPositionV
  );
  const textShadowBlurRadius = useSelector(
    (state) => state.btncss.textShadowBlurRadius
  );
  const textShadowColor = useSelector((state) => state.btncss.textShadowColor);
  const bgColorHover = useSelector((state) => state.btncss.bgColorHover);
  const textColorHover = useSelector((state) => state.btncss.textColorHover);
  const borderColorHover = useSelector(
    (state) => state.btncss.borderColorHover
  );
  const gifLink = useSelector((state) => state.btncss.gifLink);

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

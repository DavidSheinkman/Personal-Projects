import React, { useState, useEffect } from "react";

import "./custom.css";

/**
 * @author
 * @function Drog
 **/

export const Drog_Custom = (props) => {
  const [text, setText] = useState(props.product.text);
  const [text2, setText2] = useState(props.product.text2);
  const [color, setColor] = useState(props.product.color);
  const [fontSize, setFontSize] = useState(props.product.fontSize);
  const [leftRight, setLeftRight] = useState(props.product.leftRight);
  const [textColor, setTextColor] = useState(props.product.textColor);
  const [mColor, setMColor] = useState(props.product.mColor);
  const [updDown, setUpDown] = useState(props.product.updDown);
  const [europe, setEurope] = useState(props.product.europe);
  const [font, setFont] = useState(props.product.font);

  const mystyle = {
    fontSize: fontSize,
    color: textColor,
    fontFamily: font,
  };

  const textdiv = {
    marginTop: updDown,
    marginLeft: leftRight,

    color: textColor,
  };

  const f_collor = {
    background: color,
  };

  const m_collor = {
    background: mColor,
  };

  useEffect(() => {
    console.log("order", props);
    // setText(props.product);
  }, []);

  return (
    <>
      <div className="place">
        <div className="page">
          {europe ? (
            <div className="box">
              <div className="boox">
                <div className="box1">
                  <div className="box2" style={f_collor}>
                    <div className="box3" style={m_collor}>
                      <div className="box4" style={f_collor}>
                        <div style={textdiv}>
                          <div className="text" style={mystyle}>
                            {text}
                          </div>
                          <div className="text" style={mystyle}>
                            {text2}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="boxx">
              <div className="booxx">
                <div className="boxx1">
                  <div className="boxx2" style={f_collor}>
                    <div className="boxx3" style={m_collor}>
                      <div className="boxx4" style={f_collor}>
                        <div style={textdiv}>
                          <div className="text" style={mystyle}>
                            {text}
                          </div>
                          <div className="text" style={mystyle}>
                            {text2}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

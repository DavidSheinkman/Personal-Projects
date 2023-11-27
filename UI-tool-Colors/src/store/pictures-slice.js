import { createSlice } from "@reduxjs/toolkit";



function getIntermediateColor(color1, color2) {
  const { r: r1, g: g1, b: b1 } = color1;
  const { r: r2, g: g2, b: b2 } = color2;

  // Calculate the intermediate color components
  const intermediateR = Math.round((r1 + r2) / 2);
  const intermediateG = Math.round((g1 + g2) / 2);
  const intermediateB = Math.round((b1 + b2) / 2);

  return { r: intermediateR, g: intermediateG, b: intermediateB };
}



function getComplementaryColor(color) {
  const { r, g, b } = color;

  // Calculate the complement of each RGB component
  const complementR = 255 - r;
  const complementG = 255 - g;
  const complementB = 255 - b;

  

   return { r: complementR, g: complementG, b: complementB };
  // return  getIntermediateColor(color, { r: complementR, g: complementG, b: complementB }) ;
}






// Helper function to lighten a color
function lightenColor(color) {
  const { r, g, b } = color;
  const lighterR = Math.round(Math.min(r + 20, 255));
  const lighterG = Math.round(Math.min(g + 20, 255));
  const lighterB = Math.round(Math.min(b + 20, 255));
  return { r: lighterR, g: lighterG, b: lighterB };
}

// Helper function to darken a color
function darkenColor(color) {
  const { r, g, b } = color;
  const darkerR = Math.round(Math.max(r - 20, 0));
  const darkerG = Math.round(Math.max(g - 20, 0));
  const darkerB = Math.round(Math.max(b - 20, 0));
  return { r: darkerR, g: darkerG, b: darkerB };
}



function hexToRGB(hex) {
  // console.log("hex:")
  // console.log(hex)
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  // console.log("r, g, b:")
  // console.log("("+r+","+g+","+b+")")
  return { r, g, b };
}

// Helper function to convert RGB to hex color
function rgbToHex(rgb) {
  const { r, g, b } = rgb;
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");
  return `#${hexR}${hexG}${hexB}`;
}

// Helper function to calculate contrast between two colors
function getContrast(color1, color2) {
  const luminance1 = getLuminance(color1);
  const luminance2 = getLuminance(color2);
  const contrast =
    (Math.max(luminance1, luminance2) + 0.05) /
    (Math.min(luminance1, luminance2) + 0.05);
  return contrast;
}

// Helper function to calculate the relative luminance of a color
function getLuminance(color) {
  const { r, g, b } = color;
  const [normalizedR, normalizedG, normalizedB] = [r, g, b].map(
    (value) => {
      const sRGBValue = value / 255;
      return sRGBValue <= 0.03928
        ? sRGBValue / 12.92
        : Math.pow((sRGBValue + 0.055) / 1.055, 2.4);
    }
  );
  const luminance =
    0.2126 * normalizedR + 0.7152 * normalizedG + 0.0722 * normalizedB;
  return luminance;
}

// Helper function to get lighter and darker versions of a color
function getLighterDarker(color1, color2) {
  const luminance1 = getLuminance(color1);
  const luminance2 = getLuminance(color2);
  if (luminance1 > luminance2) {
    return [color1, darkenColor(color2)];
  } else {
    return [lightenColor(color1), color2];
  }
}

const pictureSettings = createSlice({
  name: "picturesettings",
  initialState: {
    mainTextColor: "#dedede",
    backgroundColor: "#1b1b1b",
    buttonColor: "#2a8a1d",
    buttonTextColor: "#ffffff",
  },
  reducers: {
    changeMainTextColor(state, action) {
      state.mainTextColor = action.payload;
    },
    changeBackgroundColor(state, action) {
      state.backgroundColor = action.payload;
    },
    changeButtonColor(state, action) {
      state.buttonColor = action.payload;
    },
    changeButtonTextColor(state, action) {
      state.buttonTextColor = action.payload;
    },
    ColorsOP(state, action) {
      
      console.log("XXXXXXXXXXXXXXXXX")

      let mainTextRGB = hexToRGB(state.mainTextColor);
      console.log(state.mainTextColor);
      let backgroundRGB = hexToRGB(state.backgroundColor);
      console.log(state.backgroundColor);
      let buttonRGB = hexToRGB(state.buttonColor);
      let buttonTextRGB = hexToRGB(state.buttonTextColor);

      // Optimization 1: Contrast between main text and background
      const contrast1 = getContrast(mainTextRGB, backgroundRGB);
      if (contrast1 < 4.5) {
        // Increase the contrast by lightening/darkening one of the colors
        const [lighter, darker] = getLighterDarker(mainTextRGB, backgroundRGB);
        mainTextRGB = lighter;
        backgroundRGB = darker;
      }

      // Optimization 2: Contrast between button color and button text color
      const contrast2 = getContrast( buttonTextRGB, buttonRGB);
      if (contrast2 < 4.5) {
        // Increase the contrast by lightening/darkening one of the colors
        const [lighter, darker] = getLighterDarker( buttonTextRGB, buttonRGB);
        
        buttonTextRGB = lighter;
        buttonRGB = darker;
      }

      // Convert RGB values back to hex color strings
      state.mainTextColor = rgbToHex(mainTextRGB);
      console.log(state.mainTextColor);
      state.backgroundColor = rgbToHex(backgroundRGB);
      console.log(state.backgroundColor);
      state.buttonColor = rgbToHex(buttonRGB);
      
      state.buttonTextColor = rgbToHex(buttonTextRGB);
      
    },
    ColorsOP2(state, action) {
      let mainTextRGB = hexToRGB(state.mainTextColor);
      
      let buttonTextRGB = hexToRGB(state.buttonTextColor);

      // Optimization based on complementary colors theory
      const complementaryColor = getComplementaryColor(mainTextRGB);
      state.backgroundColor = rgbToHex(complementaryColor);

      const complementaryColor2 = getComplementaryColor(buttonTextRGB);
      state.buttonColor = rgbToHex(complementaryColor2);

  
    },
    ColorsOP3(state, action) {
      
      let backgroundRGB = hexToRGB(state.backgroundColor);
      let buttonRGB = hexToRGB(state.buttonColor);
      

      // Optimization based on complementary colors theory
      const complementaryColor = getComplementaryColor(backgroundRGB);
      state.mainTextColor = rgbToHex(complementaryColor);

      const complementaryColor2 = getComplementaryColor(buttonRGB);
      state.buttonTextColor = rgbToHex(complementaryColor2);

      
    },
  },
});

export const pictureSettingsActions = pictureSettings.actions;

export default pictureSettings;

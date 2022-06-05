// ----------------------------------------------------------
// GLOBAL VARIABLES

var rugSizeX; // feet
var rugSizeY; // feet
var rugArea;
var DPI = 300;
var imageDPI = DPI / 12; // one inch on screen = one foot on rug

var locX, locY; // location of next rectangle
var rugX, rugY; // make smaller rectangles to color the background of the rug

// Field variables
var edge;
var medallionX, medallionY;
var medallionSizeX, medallionSizeY;
var pendantX, pendantY;
var pendantSizeX, pendantSizeY;
var cornerX, cornerY;
var cornerSizeX, cornerSizeY;

var fringeY = imageDPI * (Math.floor(Math.random() * 7) + 3);
var fringeY2 = fringeY * 2;

// Borders
var guardWidth = imageDPI * ((Math.floor(Math.random() * 3) + 1) / 4);
var guardWidth2 = guardWidth * 2;
var outerWidth = imageDPI * ((Math.floor(Math.random() * 5) + 2) / 2);
var outerWidth2 = outerWidth * 2;
var mainWidth = imageDPI * (Math.floor(Math.random() * 9) + 5);
var mainWidth2 = mainWidth * 2;
var innerWidth = outerWidth;
var innerWidth2 = innerWidth * 2;

// Field
var edge = imageDPI * 5;
var edge2 = edge * 2;

//
//
//
// ----------------------------------------------------------
// SETUP FUNCTION

function setup() {
  rugSizeX = int(random(7, 11));
  rugSizeY = int(random(10, 13));
  createCanvas(rugSizeX * DPI, rugSizeY * DPI);
  noLoop();
}

//
//
//
// ----------------------------------------------------------
// DRAW FUNCTION

function draw() {
  noStroke();
  
  background(random(colorsRugWhite));
  
  let outerColor, mainColor, innerColor, fieldColor, medallionColor, pendantColor, cornerColor;
  
  paletteChoice = Math.floor(Math.random() * 17); 
  console.log("paletteChoice = ", paletteChoice);
  switch (paletteChoice) {
    case 0: //  
        outerColor = random(colorsRugNeutral);
        mainColor = random(colorsRugPrimaryMedium);
        innerColor = outerColor;

        fieldColor = random(colorsRugPrimaryMedium);

        medallionColor = outerColor;
        pendantColor = colorsRugPrimaryDark;
        cornerColor = outerColor;
        break;


    case 1: // 
        outerColor = random(colorsRugPrimaryMedium);
        mainColor = random(colorsRugNeutral);
        innerColor = outerColor;

        fieldColor = random(colorsRugPrimary);

        medallionColor = random(colorsRugNeutral);
        pendantColor = random(colorsRugNeutral);
        cornerColor = random(colorsRugNeutral);       
        break;

    case 2: // 
        outerColor = random(colorsRugNeutral);
        mainColor = random(colorsRugPrimary);
        innerColor = outerColor;

        fieldColor = random(colorsRugNeutral);

        medallionColor = mainColor;
        pendantColor = random(colorsRugPrimary);
        cornerColor = mainColor;       
        break;

    case 3: // 
        outerColor = random(colorsRugNeutral);
        mainColor = random(colorsRugPrimary);
        innerColor = outerColor;

        fieldColor = random(colorsRugPrimary);

        medallionColor = outerColor;
        pendantColor = outerColor;
        cornerColor = fieldColor;      
        break;

    case 4: // 
        outerColor = random(colorsRugNeutral);
        mainColor = random(colorsRugPrimaryDark);
        innerColor = outerColor;

        fieldColor = mainColor;

        medallionColor = random(colorsRugPrimaryLight);
        pendantColor = medallionColor;
        cornerColor = medallionColor;
        break;

    case 5: // 
        outerColor = random(colorsRugNeutral);
        mainColor = random(colorsRugPrimaryDark);
        innerColor = outerColor;

        fieldColor = random(colorsRugPrimaryDark);

        medallionColor = mainColor;
        pendantColor = mainColor;
        cornerColor = mainColor;       
    break;

    case 6: // 
        outerColor = random(colorsRugPrimary);
        mainColor = random(colorsRugNeutral);
        innerColor = outerColor;

        fieldColor = random(colorsRugPrimaryDark);

        medallionColor = random(colorRugPrimaryLightSilver);
        pendantColor = medallionColor;
        cornerColor = medallionColor;       
    break;

    case 7: // 
        outerColor = random(colorsRugPrimary);
        mainColor = outerColor;
        innerColor = random(colorsRugNeutral);

        fieldColor = random(colorsRugPrimary);

        medallionColor = random(colorsRugPrimary);
        pendantColor = innerColor;
        cornerColor = medallionColor;      
    break;

    case 8: // 
        outerColor = random(colorsRugPrimaryDark);
        mainColor = outerColor;
        innerColor = random(colorsRugPrimaryLight);

        fieldColor = random(colorsRugPrimaryMedium);

        medallionColor = outerColor;
        pendantColor = innerColor;
        cornerColor = fieldColor;       
    break;

    case 9: // 
        outerColor = random(colorsRugPrimaryMedium);
        mainColor = random(colorsRugNeutral);
        innerColor = outerColor;

        fieldColor = random(colorsRugPrimaryDark);

        medallionColor = mainColor;
        pendantColor = mainColor;
        cornerColor = mainColor;
    break;

    case 10: // Madder
        outerColor = random(colorsRugNeutralPeach);
        mainColor = random(colorRugPrimaryDarkMadder);
        innerColor = outerColor;

        fieldColor = random(colorRugPrimaryDarkMadder);

        medallionColor = random(colorRugPrimaryMediumMadder);
        pendantColor = random(colorRugPrimaryMediumStoneRose);
        cornerColor = medallionColor;       
    break;

    case 11: // Navy
        outerColor = random(colorsRugNeutralPeach);
        mainColor = random(colorRugPrimaryMediumNavy);
        innerColor = outerColor;

        fieldColor = random(colorRugPrimaryDarkNavy);

        medallionColor = mainColor
        pendantColor = random(colorRugPrimaryMediumIndigo);
        cornerColor = random(colorRugPrimaryMediumIndigo);       
    break;

    case 12: // Indigo
        outerColor = random(colorsRugNeutralTan);
        mainColor = random(colorRugPrimaryMediumIndigo);
        innerColor = mainColor;

        fieldColor = random(colorRugPrimaryDarkIndigo);

        medallionColor = random(colorRugPrimaryDarkMadder);
        pendantColor = random(colorRugPrimaryMediumMadder);
        cornerColor = mainColor;        
    break;

    case 13: // Goldenrod
        outerColor = random(colorsRugNeutralTan);
        mainColor = random(colorRugPrimaryDarkGoldenrod);
        innerColor = outerColor;

        fieldColor = random(colorRugPrimaryDarkGoldenrod);

        medallionColor = random(colorRugPrimaryMediumYarrow);
        pendantColor = random(colorRugPrimaryMediumIndigo);
        cornerColor = random(colorRugPrimaryMediumYarrow);      
    break;

    case 14: // Spinach
        outerColor = random(colorsRugNeutralTan);
        mainColor = random(colorRugPrimaryDarkSpinach);
        innerColor = outerColor;

        fieldColor = random(colorRugPrimaryDarkSpinach);

        medallionColor = random(colorRugPrimaryMediumSpinach);
        pendantColor = random(colorRugPrimaryMediumSpinach);
        cornerColor = random(colorRugPrimaryMediumSpinach);    
    break;

    case 15: // Turquoise
        outerColor = random(colorRugPrimaryDarkNavy);
        mainColor = random(colorRugPrimaryMediumTurquoise);
        innerColor = random(colorsRugNeutralTan);

        fieldColor = random(colorRugPrimaryMediumTurquoise);

        medallionColor = random(colorRugPrimaryMediumIndigo);
        pendantColor = random(colorRugPrimaryMediumNavy);
        cornerColor = random(colorRugPrimaryLightSilver);       
    break;

    case 16: // Rose
        outerColor = random(colorsRugNeutralPeach);
        mainColor = random(colorRugPrimaryMediumStoneRose);
        innerColor = outerColor;

        fieldColor = random(colorRugPrimaryMediumStoneRose);

        medallionColor = random(colorRugPrimaryMediumMadder);
        pendantColor = random(colorRugPrimaryLightStoneRose);
        cornerColor = random(colorRugPrimaryLightStoneRose);       
  }
  
  locX = 0;
  locY = 0;
  rugX = width;
  rugY = height;
  
  // EXTERNAL, fringe and guard
  // Fringe
  stroke(random(colorsTan_1));
  strokeWeight(1);
  fringe();
  
  // Guard
  fill(random(colorsTan_2));
  locX = locX;
  locY = locY + fringeY;
  rugX = rugX;
  rugY = rugY - fringeY2;
  guard(locX, locY, rugX, rugY);

  // BORDER
  // Border, outer guardian
  fill(outerColor);
  locX = locX + guardWidth;
  locY = locY + guardWidth;
  rugX = rugX - guardWidth2;
  rugY = rugY - guardWidth2;
  borderOuter(locX, locY, rugX, rugY);

  // Border, main
  fill(mainColor);
  locX = locX + outerWidth;
  locY = locY + outerWidth;
  rugX = rugX - outerWidth2;
  rugY = rugY - outerWidth2;
  borderMain(locX, locY, rugX, rugY);

  // Border, inner guardian
  fill(innerColor);
  locX = locX + mainWidth;
  locY = locY + mainWidth;
  rugX = rugX - mainWidth2;
  rugY = rugY - mainWidth2;
  borderInner(locX, locY, rugX, rugY);

  // FIELD
  // Field, background
  fill(fieldColor);
  locX = locX + innerWidth;
  locY = locY + innerWidth;
  rugX = rugX - innerWidth2;
  rugY = rugY - innerWidth2;
  field(locX, locY, rugX, rugY);

  // Field, medallion
  fill(medallionColor);
  medallionX = width / 2;
  medallionY = height / 2;
  medallionSizeX = (rugX - edge2) / 2;
  medallionSizeY = (rugY - edge2) / 2;
  medallion(medallionX, medallionY, medallionSizeX, medallionSizeY);

  // Field, pendants
  fill(pendantColor);
  pendantSizeX = medallionSizeX / 8;
  pendantSizeY = medallionSizeY / 2;
  pendantX = medallionX;
  pendantY = medallionY - (medallionSizeY / 2) - (pendantSizeY / 2);
  pendant(
    medallionX,
    medallionY,
    pendantX,
    pendantY,
    pendantSizeX,
    pendantSizeY
  );

  // Field, corners
  fill(cornerColor);
  cornerX = locX;
  cornerY = locY;
  cornerSizeX = rugX / 4;
  let cornerPresent = int(random(0, 10));
  if (cornerPresent < 7) {
    cornerSizeY = rugY / 4;
  } else {
    if (cornerPresent < 9) {
      cornerSizeY = cornerSizeX;
    }      
  }
  corner(rugX, rugY, cornerX, cornerY, cornerSizeX, cornerSizeY);
} // End of draw

//
//
//
// ----------------------------------------------------------
// FUNCTIONS

// Fringe
function fringe() {
  let topY = fringeY;
  let bottomY = height - fringeY;
  for (var x = 1; x < width; x+=4) {
    stroke("tan");
    strokeWeight(2);
    line(x, topY, x, 0);
    line(x, bottomY, x, height);
    stroke("brown");
    strokeWeight(1);
    line(x, topY, x, 0);
    line(x, bottomY, x, height);
    stroke("tan");
    strokeWeight(4);
    line(x, topY, x, topY - 5);
    line(x, bottomY, x, bottomY + 5);
    stroke("brown");
    strokeWeight(1);
    line(x, topY, x, topY - 5);
    line(x, bottomY, x, bottomY + 5);
  }
}

// BORDERS
// Guard
function guard(x, y, w, h) {
  rect(x, y, w, h);
  fill("cornsilk");
  stroke("tan");
  strokeWeight(1);
  squareSize = guardWidth / 2;
  let y2 = h + fringeY;
  for (let i = x; i < w; i+=squareSize) {
    rect(i, y, squareSize, squareSize);
    rect(i, y + squareSize, squareSize, squareSize);
    rect(i, y2, -squareSize, -squareSize);
    rect(i, y2 - squareSize, -squareSize, -squareSize);
  }
  for (let i = (y + guardWidth); i < (y2 - guardWidth); i+=squareSize) {
    rect(x, i, squareSize, squareSize);
    rect(x + squareSize, i, squareSize, squareSize);
    rect(w, i, -squareSize, -squareSize);
    rect(w - squareSize, i, -squareSize, -squareSize);
  }
}

// Border, outer guardian
function borderOuter(x, y, w, h) {
  rect(x, y, w, h);
}

// Border, main
function borderMain(x, y, w, h) {
  rect(x, y, w, h);
}

// Border, inner guardian
function borderInner(x, y, w, h) {
  rect(x, y, w, h);
}

// FIELD
// Field
function field(x, y, w, h) {
  rect(x, y, w, h);
}

// Medallion
function medallion(x, y, w, h) {
  ellipse(x, y, w, h);
}

// Pendants
function pendant(r1, r2, x, y, w, h) {
  ellipse(x, y, w, h);
  let d = dist(x, y, r1, r2);
  ellipse(x, y + d * 2, w, h);
}

// Corners
function corner(rW, rH, x, y, w, h) {
  triangle(x, y, x + w, y, x, y + h);
  triangle(x + rW, y, x + rW - w, y, x + rW, y + h);
  triangle(x + rW, y + rH, x + rW - w, y + rH, x + rW, y + rH - h);
  triangle(x, y + rH, x + w, y + rH, x, y + rH - h);
}

//
//
//
// ----------------------------------------------------------
// COLORS
// Color arrays

// White
var colorsRugWhite = ["#c2b89b", "#c5bba1", "#c9bfa6", "#ccc3ab", "#cfc6b0", "#d2cab5", "#d5ceba", "#d8d1bf", "#dbd5c4", "#ded8c9", "#e1dcce", "#e2dfd2", "#e4e0d3", "#e5e4e2", "#e7e3d8", "#e9dcc9", "#eae7dd", "#eedc82", "#eeebe3", "#f0ead6", "#f0fff0", "#f0ffff", "#f1e1cc", "#f1eee8", "#f2ebdd", "#f3e5ab", "#f4f2ed", "#f5f5dc", "#f5f5f5", "#f7f5f2", "#f8f8ff", "#f9f6ee", "#faebd7", "#faf0e6", "#faf9f6", "#faf9f7", "#fcf5e5", "#fdf5e6", "#ffdead", "#ffe5b4", "#fff0f5", "#fff5ee", "#fff8dc", "#fffacd", "#fffaf0", "#fffafa", "#fffdd0", "#fffff0", "#ffffff"]

// Ivory
var colorsRugIvory = ["#eeeccb", "#f1efd1", "#f3f2d7", "#f6f6de", "#f9f9e4", "#fcfcea", "#fffff0", "#faf0e6"];
// Brown
var colorsRugBrown = ["#d58335", "#c8641c", "#bd5e1 b", "#b35919", "#a95418", "#9f4f16", "#954a15", "#8b4513"];

// Tan
var colorsTan_1 = ["#f2f4df", "#eef0da", "#ebecd5", "#e8e8d0", "#e5e4cc", "#e2e0c7", "#dfdcc2", "#dcd8be", "#d9d5b9", "#d6d1b4", "#d3cdb0", "#d0c9ab", "#cdc5a6", "#cac1a1", "#c7bd9d", "#c4b998", "#c1b693", "#beb28f", "#bbae8a", "#b8aa85", "#b5a681", "#b2a27c", "#af9e77", "#ac9b73"]
        
var colorsTan_2 = ["#f8f5ad", "#f7f2a9", "#f6efa5", "#f5eca2", "#f4e99e", "#f3e79a", "#f2e497", "#f1e193", "#f0de8f", "#efdb8c", "#eed988", "#edd684", "#ecd381", "#ebd07d", "#eace79", "#e9cb76", "#e8c872", "#e7c56e", "#e6c26b", "#e5c067", "#e4bd63", "#e3ba60", "#e2b75c", "#e1b559"]
  
// Brown

var colorsBrown_light = ["#451300", "#3D251B", "#7C2400", "#190C03", "#513621", "#5F442F", "#854622", "#9E3F07", "#7B593D", "#A15A26", "#8F6A3E", "#887958", "#AD8251", "#CC8A52", "#A99886", "#C69A67", "#B6A794", "#E29B4C", "#EAAD61", "#D3BAA4", "#F4C390", "#DCD1C3", "#F5E4B8", "#FFF1DB"]
  
var colorsBrown_medium = ["#1C0000", "#351309", "#400000", "#581000", "#631C00", "#4D3025", "#6B321E", "#753B2F", "#9B5134", "#906157", "#9D6D63", "#1E0C00", "#412615", "#722908", "#563E32", "#61473A", "#793E06", "#854428", "#6E5036", "#795D48", "#8B5B39", "#9F642A", "#9C7D6B", "#B1763E"]
  
var colorsBrown_dark = ["#040404", "#1B0D0D", "#300D0C", "#24181A", "#341914", "#461D1A", "#4A2625", "#5B2A24", "#5E3132", "#55382D", "#713434", "#5D4035", "#6A493B", "#78432F", "#241204", "#31251A", "#3D2A19", "#4B301B", "#584737", "#5F4E3E", "#724F3F", "#705D4C", "#796854", "#A38560"]

var colorsRugNeutral = ["#d2b48c", "#d1ae80", "#d0a775", "#d0a16a", "#cf9a5f", "#ce9354", "#ce8c49", "#cd853f", "#ffdab6", "#ffdab6", "#ffdab6", "#ffdab6", "#ffdab6", "#ffdab6", "#ffdab6", "#ffdab6"];
var colorsRugNeutralTan = ["#d2b48c", "#d1ae80", "#d0a775", "#d0a16a", "#cf9a5f", "#ce9354", "#ce8c49", "#cd853f"];
var colorsRugNeutralPeach = ["#ffdab6", "#ffdab6", "#ffdab6", "#ffdab6", "#ffdab6", "#ffdab6", "#ffdab6", "#ffdab6"];

var colorsRugPrimary = ["#9c2227", "#a12328", "#9c2227", "#a12328", "#000755", "#000860", "#400a87", "#390e8a", "#c28f12", "#c79315", "#18640d", "#19690d", "#e34549", "#000086", "#1931a6", "#f9d177", "#76a86d", "#1f5a6a", "#e66e6b"];

var colorsRugPrimaryDark = ["#932025", "#982126", "#000240", "#00054a","#4b0082", "#460585", "#b8860b", "#bd8a0e", "#16590c", "#175e0c"];
var colorRugPrimaryDarkMadder = ["#932025", "#982126", "#9c2227", "#a12328", "#a6242a", "#aa252b", "#af262c", "#b4272d"];
var colorRugPrimaryDarkNavy = ["#000240", "#00054a", "#000755", "#000860", "#00076a", "#000675", "#000380", "#00008b"];
var colorRugPrimaryDarkIndigo = ["#4b0082", "#460585", "#400a87", "#390e8a", "#31128d", "#28158f", "#1a1892", "#001b94"];
var colorRugPrimaryDarkGoldenrod = ["#b8860b", "#bd8a0e", "#c28f12", "#c79315", "#cb9818", "#d09c1b", "#d5a01d", "#daa520"];
var colorRugPrimaryDarkSpinach = ["#16590c", "#175e0c", "#18640d", "#19690d", "#1a6f0d", "#1b750e", "#1c7a0e", "#1d800e"];

var colorsRugPrimaryMedium = ["#d83c3f", "#de4044", "#000083", "#000085", "#0e269d", "#142ca2", "#f4ce77", "#f6d077", "#6ca562", "#71a668", "#195261", "#1c5665", "#d56866", "#de6b69",];
var colorRugPrimaryMediumMadder = ["#cc3336", "#d2383b", "#d83c3f", "#de4044", "#e34549", "#e9494e", "#ef4e53", "#f55258"];
var colorRugPrimaryMediumNavy = ["#000080", "#000082", "#000083", "#000085", "#000086", "#000088", "#000089", "#00008b"];
var colorRugPrimaryMediumIndigo = ["#001b94", "#072199", "#0e269d", "#142ca2", "#1931a6", "#1e36ab", "#233cb0", "#2741b4"];
var colorRugPrimaryMediumYarrow = ["#f0cb76", "#f2cd76", "#f4ce77", "#f6d077", "#f9d177", "#fbd377", "#fdd478", "#ffd678"];
var colorRugPrimaryMediumSpinach = ["#61a157", "#66a35d", "#6ca562", "#71a668", "#76a86d", "#7baa73", "#80ab78", "#85ad7e"];
var colorRugPrimaryMediumTurquoise = ["#5ea4a6", "#59a7ab", "#53aaaf", "#4dadb4", "#45b0b9", "#3cb2bf", "#31b5c4", "#21b8ca"];
var colorRugPrimaryMediumStoneRose = ["#c56361", "#cd6664", "#d56866", "#de6b69", "#e66e6b", "#ee716e", "#f77370", "#ff7673"];

var colorsRugPrimaryLight = ["#f8c7c6", "#f7cac9", "#d3d7d7", "#d7dada"];
var colorRugPrimaryLightStoneRose = ["#ffb6b4", "#feb9b7", "#fdbcba", "#fcbfbd", "#fbc1c0", "#fac4c3", "#f8c7c6", "#f7cac9"];
var colorRugPrimaryLightSilver = ["#bec7c7", "#c2caca", "#c5cccc", "#c9cfcf", "#ccd2d2", "#d0d5d5", "#d3d7d7", "#d7dada"];
  


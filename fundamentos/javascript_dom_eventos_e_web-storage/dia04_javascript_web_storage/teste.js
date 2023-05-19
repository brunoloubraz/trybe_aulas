// const colorArray = ['black', '', '', ''];

// for (let index = 1; index < colorArray.length; index++) {
//   let rgbNumber = parseInt(Math.random()*255);
//   colorArray[index] += `rgb = (${rgbNumber},${rgbNumber},${rgbNumber})`
// }

// console.log(colorArray);

const colorArray = ['black', '', '', ''];
console.log(colorArray);

const randomColor = (colors) => {

    for (let index = 1; index < colorArray.length; index += 1) {
      let r = parseInt(Math.random() * 255);
      let g = parseInt(Math.random() * 255);
      let b = parseInt(Math.random() * 255);
      colors[index] += `rgb = (${r},${g},${b})`;
    }
    return colors;
  };


randomColor(colorArray);
console.log(colorArray);
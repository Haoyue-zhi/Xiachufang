<template>
  <canvas class="canvas" ref="canvas" width="80" height="80"></canvas>
</template>

<script setup>
import { onMounted, ref } from "vue";

onMounted(() => {
  getMainColor()
})

const canvas = ref(null)

function getMainColor () {
  const promise = new Promise(function (resolve, reject) {
    try {
      const can = canvas.value;
      const img = new Image()
      img.src = "https://s1.ax1x.com/2022/03/26/qUuYjI.png"
      // img.crossOrigin = "anonymous"
      img.onload = () => {
        let color = getImageColor(can, img)
        resolve(color)
      }
    } catch (err) {
      reject(err)
    }
  })
  return promise
}

function getImageColor (can, img) {
  const ctx = can.getContext('2d');
  ctx.drawImage(img, 0, 0, 80, 80);
  let pixelData = (ctx.getImageData(0, 0, img.width, img.height)).data
  return getCountsArr(pixelData)
}

function getCountsArr (pixelData) {
  let colorList = [];
  let rgba = [];
  let rgbaStr = "";
  // 分组循环
  for (let i = 0; i < pixelData.length; i += 4) {
    rgba[0] = pixelData[i];
    rgba[1] = pixelData[i + 1];
    rgba[2] = pixelData[i + 2];
    rgba[3] = pixelData[i + 3];

    if (rgba.indexOf(undefined) !== -1 || pixelData[i + 3] === 0) {
      continue;
    }

    rgbaStr = rgba.join(",");
    if (rgbaStr in colorList) {
      ++colorList[rgbaStr];
    } else {
      colorList[rgbaStr] = 1;
    }
  }
  console.log("colorList", colorList);
  let arr = []
  for (let prop in colorList) {
    arr.push({
      // 如果只获取rgb,则为`rgb(${prop})`
      color: `rgba(${prop})`,
      count: colorList[prop],
    });
  }
  // 数组排序
  arr.sort((a, b) => {
    return b.count - a.count;
  });

  console.log("arr", arr);


  return colorList;
}

</script>

<style lang="scss" scoped>
.canvas {
  background-color: greenyellow;
  width: 80px;
  height: 80px;
  border-radius: 10px;
}
</style>
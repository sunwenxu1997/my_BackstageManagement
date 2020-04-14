<template>
  <div class="noFound">
    <div>
      <div class="text">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <h3>页面未找到</h3>
      <p>no found</p>
    </div>
    <svg height="0" width="0">
      <defs>
        <clipPath id="svgTextPath">
          <!-- textLength 文字的长度 此处对应容器的宽度  x y 为横纵坐标位置 -->
          <text x="0" y="170" textLength="400px">404</text>
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.noFound {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  h3 {
    font-weight: 200;
    text-align: center;
    letter-spacing: 0.5rem;
    color: #5a5a5a;
  }
  p {
    margin-top: 5px;
    font-size: 13px;
    text-align: center;
    letter-spacing: 0.5rem;
    color: #f1f1f1;
    text-shadow: 0 0 2px red;
    text-transform: uppercase;
  }
  .text {
    overflow: hidden;
    position: relative;
    background: white;
    width: 400px;
    height: 200px;
    //引入剪切路径
    clip-path: url(#svgTextPath);
    .dot {
      position: absolute;
      display: inline-block;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background: var(--base);
      opacity: 0.6;
      z-index: 3;
    }
    .dot:nth-child(1) {
      transform-origin: 300px 0;
      animation: dotMove 15s linear infinite alternate;
    }
    .dot:nth-child(2) {
      transform-origin: 450px 0;
      z-index: 2;
      width: 70px;
      height: 70px;
      background: #7cfae9;
      animation: dotMove 8s linear infinite alternate-reverse;
    }
    .dot:nth-child(3) {
      transform-origin: 450px 100px;
      z-index: 1;
      width: 110px;
      height: 120px;
      background: #9efa87;
      animation: dotMove 9s linear infinite alternate;
    }
    .dot:nth-child(4) {
      transform-origin: 200px 100px;
      z-index: 1;
      width: 110px;
      height: 120px;
      background: #8ab5f7;
      animation: dotMove 10s linear -5s infinite alternate-reverse;
    }
    .dot:nth-child(5) {
      right: 0;
      z-index: 1;
      width: 80px;
      height: 80px;
      background: #e48cfa;
      animation: dotMove_1 15s linear -5s infinite alternate-reverse;
    }
  }
}
@keyframes dotMove {
  100% {
    transform: rotate(30deg) translateX(400px) translateY(150px);
  }
}
@keyframes dotMove_1 {
  100% {
    transform: translateX(-400px) translateY(150px);
  }
}
//剪切文字的文字样式 此处的文字颜色取背景色
text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 12rem;
  text-transform: uppercase;
}
</style>
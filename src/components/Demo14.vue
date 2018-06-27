<template>
  <div class="demo14">
    <div class="books">
      <div class="book html">
        <span>HTML</span>
      </div>
      <div class="book css">
        <span>CSS</span>
      </div>
      <div class="book js">
        <span>JavaScript</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo14",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo14 {
  width: 800px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top left, white, dimgray);

  .books {
    display: flex;
    width: calc(12rem * 3 + 3rem * 2);
    justify-content: space-between;
    margin-top: 6rem;

    .book {
      width: 12rem;
      height: 18rem;
      background: linear-gradient(navy, deeppink, tomato);
      transform: skewY(-10deg);

      position: relative;
      box-shadow: -10px 5px 30px rgba(0, 0, 0, 0.5);
      transition: 0.3s;

      &:hover{
        margin-top: -1.5rem;
      }

      &:nth-child(2) {
        top: -3rem;
      }
      &:nth-child(3) {
        top: -6rem;
      }

      &::before {
        content: "";
        position: absolute;
        width: 1.5rem;
        height: 100%;
        background: linear-gradient(navy, deeppink, tomato);
        top: 0;
        left: -1.5rem;
        transform: skewY(45deg);
        transform-origin: right;
        filter: brightness(0.6);
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1.5rem;
        background: white;
        top: -1.5rem;
        transform-origin: bottom;
        transform: skewX(45deg);
        filter: brightness(0.9);
      }

      span {
        color: whitesmoke;
        font-size: 2.2rem;
        font-family: sans-serif;
        display: block;
        background: silver;
        text-align: center;
        height: 8rem;
        margin-top: 5rem;
        padding-top: 2rem;
        box-sizing: border-box;
        text-shadow: -2px 2px 10px rgba(0, 0, 0, 0.3);
        position: absolute;
        width: 100%;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          width: 1.5rem;
          height: 100%;
          background: silver;
          top: 0;
          left: -1.5rem;
          transform-origin: right;
          transform: skewY(45deg);
          filter: brightness(0.6);
        }
        &::after {
          content: "development";
          display: block;
          font-size: 1rem;
        }
      }
    }
    .html {
    span,
    span::before {
      background: orange;
    }
    span::after{
      content: '<development />'
    }
  }
  .css {
    span,
    span::before {
      background: yellowgreen;
    }
    span::after{
      content: '.development ::'
    }
  }
  .js {
    span,
    span::before {
      background: rosybrown;
    }
    span::after{
      content: '{development }'
    }
  }
  }
  
}
</style>

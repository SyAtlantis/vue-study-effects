<template>
  <div class="demo18">
    <section class="four-zero-four">
      <p class="four">
        <span></span>
        <span></span>
        <span></span>
      </p>
      <p class="zero">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </p>
      <p class="four">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Demo18",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo18 {
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(gray, silver);

  .four-zero-four {
    p {
      width: 10em;
      height: 10em;
      // border: 1px dashed white;
      display: inline-block;
      margin: 1em;
      position: relative;

      span {
        position: absolute;
        box-sizing: border-box;
        filter: opacity(0.8);
        transition: 0.3s;
      }
    }

    &:hover {
      p {
        span {
          border: 1px solid black;
          background-color: whitesmoke;
          filter: opacity(1);
          transition: 0.3s;
        }
      }

      .four {
        span {
          &:nth-child(1) {
            left: 0;
            top: 20%;
          }
          &:nth-child(2) {
            top: 0;
          }
          &:nth-child(3) {
            right: 0;
          }
        }
      }
      .zero {
        span {
          &:nth-child(1) {
            left: 0;
          }
          &:nth-child(2) {
            top: 0;
          }
          &:nth-child(3) {
            right: 0;
          }
          &:nth-child(4) {
            bottom: 0;
          }
        }
      }
    }
  }

  .four {
    span {
      &:nth-child(1) {
        width: 20%;
        height: 80%;
        left: 10%;
        background-color: yellowgreen;
      }
      &:nth-child(2) {
        width: 100%;
        height: 20%;
        top: 50%;
        background-color: turquoise;
      }
      &:nth-child(3) {
        width: 20%;
        height: 100%;
        right: 10%;
        background-color: pink;
      }
    }
  }
  .zero {
    span {
      &:nth-child(1) {
        width: 20%;
        height: 100%;
        left: 10%;
        background-color: skyblue;
      }
      &:nth-child(2) {
        width: 100%;
        height: 20%;
        top: 10%;
        background-color: plum;
      }
      &:nth-child(3) {
        width: 20%;
        height: 100%;
        right: 10%;
        background-color: lightcoral;
      }
      &:nth-child(4) {
        width: 100%;
        height: 20%;
        bottom: 10%;
        background-color: peachpuff;
      }
    }
  }
}
</style>

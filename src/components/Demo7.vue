<template>
  <div class="demo7">
    <div class="box">
      <div class="inner">
        <span>Hello World</span>
      </div>
      <div class="inner">
        <span>Hello World</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo7',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.demo7{
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  .box{
    display: flex;

    .inner{
      width: 200px;
      height: 100px;
      line-height: 100px;
      font-size: 32px;
      font-family: sans-serif;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;

      span{
        position: absolute;
        animation: marquee 5s linear infinite;
      }

      &:first-child{
        background-color: indianred;
        color: darkred;
        transform-origin: left;
        transform: perspective(300px) rotateY(-67.3deg);
      
        span{
          animation-delay: 2.5s;
          left: -100%;
        }
      }

      &:last-child{
        background-color: lightcoral;
        color: antiquewhite;
        transform-origin: right;
        transform: perspective(300px) rotateY(67.3deg);
      }
    }
  }
}

@keyframes marquee {
  from{
    left: 100%;
  }
  to{
    left: -100%;
  }
}
</style>

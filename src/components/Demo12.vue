<template>
  <div class="demo12">
    <div class="text" data-text="BREAK">BREAK</div>
  </div>
</template>

<script>
export default {
  name: 'Demo12',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.demo12{
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(brown,sandybrown);

  .text{
    font-size: 5em;
    font-family: "arial black";
    position: relative;
    color: transparent;

    &::before,&::after{
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      color: lightyellow;

      transition: 0.2s;
    }
    &::before{
      // background-color: darkgreen;
      clip-path: polygon(0 0,60% 0,30% 100%,0 100%);
    }
    &::after{
      // background-color: darkblue;
      clip-path: polygon(60% 0,100% 0,100% 100% ,30% 100%);
    }

    &:hover{
      &::before{
        left: -0.15em;
        top: -0.05em;
        transform: rotate(-5deg);
      }
      &::after{
        left: 0.15em;
        top: 0.05em;
        transform: rotate(5deg);
      }
    }
  }
}
</style>

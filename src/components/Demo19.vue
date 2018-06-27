<template>
  <div class="demo19">
    <div class="menu">
      <li data-text="New Game">New Game</li>
      <li data-text="Load Game">Load Game</li>
      <li data-text="Options">Options</li>
      <li data-text="Exit">Exit</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo19",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo19 {
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  .menu {
    padding: 0;

    li {
      list-style-type: none;
      color: white;
      font-size: 3em;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      line-height: 1em;
      width: 7em;
      border-top: 1px solid yellow;
      color: transparent;
      position: relative;
      margin: 0.5em;
      border-top: 1px solid transparent;
      transition: 0.3s;

      &:hover {
        border-top: 1px solid yellow;

        &::before,
        &::after {
          color: yellow;
          transition: left 0.3s ease-out;
          transition: 0.2s;
        }
      }

      &::before,
      &::after {
        content: attr(data-text);
        position: absolute;
        top: -0.5em;
        left: 0;
        width: 100%;
        color: silver;
        transition: 0.3s ease-out;
      }
      &::before {
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
      }
      &::after {
        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
      }

      &:nth-child(even):hover::before,
      &:nth-child(odd):hover::after {
        left: 0.15em;
      }
       &:nth-child(odd):hover::before,
      &:nth-child(even):hover::after {
        left: -0.15em;
      }
    }
  }
}
</style>

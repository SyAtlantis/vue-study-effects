<template>
  <div class="demo23">
    <nav>
      <ul>
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>Products</span>
        </li>
        <li>
          <span>Services</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Demo23",
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.demo23 {
  width: 600px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right bottom, gold, chocolate);

  --x: 5em;
  --y: 1.5em;

  nav {
    ul {
      padding: 0;
      list-style-type: none;

      li {
        font-size: 40px;
        font-family: sans-serif;
        
        background-color: white;
        border: 4px solid black;
        letter-spacing: 0.1em;

        width: var(--x);
        height: var(--y);
        line-height: var(--y);

        position: relative;
        overflow: hidden;
        margin: 0.5em;

        &::before {
          content: "";
          position: absolute;
          height: var(--y);
          width: var(--y);
          background-color: black;
          border-radius: 50%;
          top: 0;
          left: calc(-1 * var(--y) / 2);
          transition: 0.5s ease-out;
        }

        &:hover::before {
          --r: calc(var(--x) * 1.2);
          height: var(--r);
          width: var(--r);
          top: calc(-1 * var(--r) / 2 + var(--y) / 2);
          left: calc(-1 * var(--r) / 2 + var(--x) / 2);
        }

        span {
          color: white;
          mix-blend-mode: difference;
        }
      }
    }
  }
}
</style>

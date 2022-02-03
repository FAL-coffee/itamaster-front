<template>
  <div class="contain">
    <p class="btn">
      <a id="js-text">{{ text }}</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: "penetrateAnimationCard",
    components: {},
    props: {
      text: {
        type: String,
        require: true,
        default: "default",
      },
    },
  };
</script>
<style lang="scss" scoped>
  $font-family-qs: "Quattrocento Sans", sans-serif;
  .contain {
    position: relative;
    width: 100%;
    height: 100%;
    // background: #111;
    overflow: hidden;
    .btn {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 70%;
      height: 60px;
      line-height: 60px;
      margin-left: 30px;
      text-align: center;
      a {
        position: relative;
        display: block;
        font-size: 42px;
        color: rgb(0, 156, 196);
        font-family: $font-family-qs;
        // text-transform: uppercase;
        text-decoration: none;
        transition: all 0.5s ease;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          margin-top: 50px;
          background: #fff;
        }
        &:hover::after {
          width: 100%;
          background: rgb(243, 0, 0);
          transition: all 1.2s linear;
        }
      }
    }
  }
</style>

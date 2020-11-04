<template>
  <div class="top-indicator" :style="style">
    <div class="indicator-val">{{ widthRatio.toFixed(2) }}%</div>
  </div>
</template>

<script>
  export default {
    name: "TopIndicator",
    props: {
      bgc: {
        default: 'blue',
        type: String
      },
      widthRatio: {
        default: 0.0
      }
    },
    computed: {
      style() {
        return {
          backgroundColor: this.bgc,
          width: this.widthRatio + '%'
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .top-indicator {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    height: 0.026rem;

    .indicator-val {
      position: absolute;
      z-index: 9;
      right: 0;
      top: 0.026rem + 0.03125rem;
      font-size: 0.0875rem;
      font-weight: 700;
      color: darkred;
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .indicator-val::before {
    position: absolute;
    top: -0.075rem;
    right: 0;
    content: '';
    width: 0;
    height: 0;
    border-width: 0.04375rem;
    border-color: transparent transparent blue transparent;
    border-style: solid;
  }
</style>

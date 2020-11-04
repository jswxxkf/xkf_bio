<template>
  <div class="top-indicator" :style="style">
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
    top: 0;
    left: 0;
    height: 0.026rem;
  }
</style>

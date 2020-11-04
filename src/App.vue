<template>
  <div id="app">
    <top-indicator bgc="blue" :width-ratio="topIndRatio"/>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import TopIndicator from "./views/TopIndicator";

  export default {
    name: 'app',
    components: {
      TopIndicator
    },
    data() {
      return {
        topIndRatio: 0.0
      }
    },
    mounted() {
      this.bind();
    },
    methods: {
      bind() {
        window.onscroll = () => {
          this.topIndRatio = (window.scrollY || window.pageYOffset) / document.body.scrollHeight * 100;
          console.log(this.topIndRatio)
        };
      }
    }
  }
</script>

<style scoped lang="less">
  @import "assets/css/reset.css";

  ul {
    margin-top: 0.026rem;
  }

  ul li {
    height: 0.2604rem;
    background-color: #cccccc;
    border-bottom: 0.0104rem solid #000000;
  }
</style>

<template>
  <div id="app">
    <top-indicator bgc="blue" :width-ratio="topIndRatio"/>
    <aside-nav />
    <articles />
    <my-footer />
  </div>
</template>

<script>
  import TopIndicator from "./views/TopIndicator";
  import AsideNav from "./views/AsideNav";
  import Articles from "./views/Articles";
  import MyFooter from "./views/MyFooter";

  export default {
    name: 'app',
    components: {
      TopIndicator,
      AsideNav,
      Articles,
      MyFooter
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
          this.topIndRatio = (window.scrollY || window.pageYOffset) / (document.body.scrollHeight - window.innerHeight) * 100;
          if (this.topIndRatio > 100.0) {
            this.topIndRatio = 100.0
          }
        };
      }
    }
  }
</script>

<style scoped lang="less">
  @import "assets/css/reset.css";
</style>

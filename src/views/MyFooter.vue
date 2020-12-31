<template>
  <div class="my-footer">
    <div class="icp">
      <img src="../../public/img/备案图标.png" alt="" class="icp-logo">
      <a href="https://beian.miit.gov.cn/">苏ICP备2020068558号-1</a><br>
      注：此网站为个人网站， 网站内容用于展示个人介绍、自己学习前端技术的过程以及相关前端技术的知识。<br>
      Powered by <a href="https://lnmp.org/">LNMP</a>&nbsp;
      (<a href="https://www.linux.org/">Linux</a>·<a href="https://www.nginx.com/">Nginx</a>·<a
            href="https://www.mysql.com/">MySQL</a>·<a href="https://www.php.net/">PHP</a>)<br>
      Deployed on <a href="https://cloud.tencent.com/">TencentCloud</a><br>
      Developed by <a href="https://github.com/vuejs/vue">Vue.js</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyFooter"
  }
</script>

<style scoped>
  .my-footer {
    width: 9.0625rem;
    margin: 0 auto;
  }

  .icp {
    text-align: center;
    font-size: 0.1875rem;
    padding: 0.1875rem 0 0.1875rem 0;
  }

  .icp a:hover {
    color: orange;
  }

  .icp-logo {
    width: 0.14375rem;
    height: 0.14375rem;
    margin-right: 0.0625rem;
  }
</style>
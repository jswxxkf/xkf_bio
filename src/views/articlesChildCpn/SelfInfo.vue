<template>
  <div class="self-info clear-fix">
    <div class="text">
      <div class="name">
        <slot name="realName"></slot>
      </div>
      <div class="intro">
        <slot name="intro"></slot>
      </div>
    </div>
    <div class="photo">
      <img src="../../../public/img/个人生活照原始图像.jpg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "SelfInfo",
  }
</script>

<style scoped>
  .text {
    float: left;
  }

  .text .name {
    font-size: 0.28125rem;
  }

  .text .intro {
    font-size: 0.125rem;
  }

  .intro a {
    font-weight: 700;
  }

  .photo {
    float: right;
    width: 1.875rem;
    height: 2.5rem;
    background-color: pink;
  }

  .photo img {
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="university">
    <div class="name">
      <slot name="schName"></slot>
    </div>
    <div class="alias">
      <slot name="alias"></slot>
    </div>
    <div class="url">
      <slot name="url"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "university"
  }
</script>

<style scoped>
  .university {
    margin-top: 0.1875rem;
    margin-bottom: 0.1875rem;
  }

  .name {
    font-size: 0.28125rem;
  }

  .alias {
    font-size: 0.125rem;
  }

  .url {
    font-size: 0.125rem;
    color: #000000;
  }
</style>
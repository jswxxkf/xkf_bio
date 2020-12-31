<template>
  <div class="aside-nav">
    <ul>
      <li
              v-for="ind in titleL1.length"
              @click="liClicked(ind)"
              :class="{'active': ind === activeLiIndex}"
      >{{ titleL1[ind - 1] }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "AsideNav",
    methods: {
      liClicked(index) {
        console.log(this.offsetTopsL1[index]);
        window.scrollTo({
          top: this.offsetTopsL1[index],
          behavior: 'smooth'
        });
      }
    },
    data() {
      return {
        titleL1: ['自我介绍', 'NJITT', 'CSLG', 'UJS', '前端学习路线', '研究内容'],
        offsetTopsL1: [0, 0, 0, 0, 0, 0, 0],
        activeLiIndex: 0
      }
    },
    created() {
      this.$bus.$on('offsetTopFetched', offsetTopsL1 => {
        this.offsetTopsL1 = offsetTopsL1;
      });
    },
    mounted() {
      setTimeout(() => {
        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY || window.pageYOffset
          const ind = this.offsetTopsL1.findIndex((value, index) => {
            return value - 50 >= scrollY
          })
          this.activeLiIndex = ind - 1;
        });
      }, 300);
    }
  }
</script>

<style scoped>
  .aside-nav {
    position: fixed;
    top: 0.125rem;
    left: 0;
    width: 1.25rem;
  }

  .aside-nav ul li {
    position: relative;
    left: 0;
    height: 0.3rem;
    background-image: linear-gradient(to right, lightpink, #ff5c7c);
    border-bottom: 0.0104rem solid deeppink;
    font-size: 0.125rem;
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    line-height: 0.2604rem;
    cursor: pointer;
    transition: all .5s;
  }

  .aside-nav ul li:hover {
    left: 0.125rem;
    box-shadow: 0.03125rem 0.03125rem 0.03125rem rgba(0, 0, 0, .2);
  }

  .active {
    left: 0.125rem!important;
    box-shadow: 0.03125rem 0.03125rem 0.03125rem rgba(0, 0, 0, .2);
  }
</style>
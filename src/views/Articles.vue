<template>
  <div class="articles" ref="articles">
    <self-info ref="selfInfo">
      <div slot="realName">Kaifeng Xue の 个人博客</div>
      <div slot="intro">
        当打开这个页面时，你们某些人肯定没有想到我的求学之路是如此坎坷，不信？那就往下看吧！<br>
        <a href="javascript:;" class="love">此处超链接留给未来的那个她</a><br>
        <a href="https://github.com/jswxxkf">我的Github</a><br>
        <a href="https://cs.ujs.edu.cn/">联系我</a>
      </div>
    </self-info>
    <hr>
    <university ref="njitt">
      <div slot="schName">南京交通职业技术学院 2013-2016</div>
      <div slot="alias">
        NJITT -> Nanjing Vocational Institute of Transport Technology <br>
        NJCI -> Nanjing Communications Institute of Technology <br>
        Between China Pharmaceutical University (CPU) <br>
        and Nanjing Medical University · Jiangsu Institute of Economic & Trade Technology (NMU·JIETT)
      </div>
      <div slot="url">
        <a href="https://www.njitt.edu.cn">https://www.njitt.edu.cn</a>
      </div>
    </university>
    <hr>
    <university ref="cslg">
      <div slot="schName">常熟理工学院 2016-2018</div>
      <div slot="alias">
        Undergraduate <br>
        CSLG, CIT -> Changshu Institute of Technology <br>
        Donghu Campus & Dongnan Campus √
      </div>
      <div slot="url">
        <a href="https://www.cslg.edu.cn">https://www.cslg.edu.cn</a>
      </div>
    </university>
    <hr>
    <university ref="ujs">
      <div slot="schName">江苏大学 2018-2021</div>
      <div slot="alias">
        Postgraduate <br>
        UJS -> University of Jiangsu <br>
        JSU -> Jiangsu University
      </div>
      <div slot="url">
        <a href="https://www.ujs.edu.cn">https://www.ujs.edu.cn</a>
      </div>
    </university>
    <hr>
    <university ref="fg_learn">
      <div slot="schName">前端学习路线</div>
      <div slot="alias">以后再补充。。。</div>
    </university>
    <hr>
    <university ref="academy">
      <div slot="schName">研究内容</div>
      <div slot="alias">目标检测 Object Detection</div>
    </university>
  </div>
</template>

<script>
  import SelfInfo from "./articlesChildCpn/SelfInfo";
  import University from "./articlesChildCpn/University";

  export default {
    name: "Articles",
    components: {
      SelfInfo,
      University
    },
    data() {
      return {}
    },
    mounted() {
      this.calcOffsetTops()
      window.addEventListener('resize', () => {
        this.calcOffsetTops()
      });
    },
    methods: {
      calcOffsetTops() {
        const base = this.$refs.articles.offsetTop
        let offsetTopsL1 = [this.$refs.selfInfo.$el.offsetTop, this.$refs.njitt.$el.offsetTop,
          this.$refs.cslg.$el.offsetTop, this.$refs.ujs.$el.offsetTop,
          this.$refs.fg_learn.$el.offsetTop, this.$refs.academy.$el.offsetTop];
        let offsetTopsL1_ = offsetTopsL1.map(val => {
          return val + base;
        });
        offsetTopsL1_.unshift(0);
        offsetTopsL1_.push(Infinity);
        this.$bus.$emit('offsetTopFetched', offsetTopsL1_);
      }
    }
  }
</script>

<style scoped>
  .articles {
    margin: 0.125rem auto 0 1.875rem;
    width: 7.5rem;
    height: 12.5rem;
  }

  .love {
    color: #ff5c7c;;
  }
</style>
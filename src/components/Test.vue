<template>
  <div class="test animated fadeIn">
    <Hero
      class="hero-image-menu"
      heroHeadingEn="Test Page"
      heroHeadingKo="한국어 단어"
      heroContent="Some content about this page">
    </Hero>

    <div class="spacing-md-bottom spacing-md-top">
      <!-- <NewNav></NewNav> -->
    </div>

  </div>
</template>

<script>
import Hero from '../components/partials/Hero.vue'
import SocialContainer from '../components/partials/SocialContainer.vue'
// import NewNav from '../components/partials/NewNav.vue'

export default {
  name: 'test',
  components: {
    Hero,
    SocialContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../styles/styles.scss';
  .hero-image-menu {
    background-image: url(../../static/hero-bg.png);
  }
</style>

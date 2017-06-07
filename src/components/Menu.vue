<template>
  <div class="menu animated fadeIn">
    <Hero
      class="hero-image-menu"
      heroHeadingEn="Menu">
    </Hero>

    <div class="container spacing-md-bottom spacing-sm-top">
      <MenuList></MenuList>
    </div>
    <div class="spacing-md-bottom spacing-sm-top">
      <Delivery></Delivery>
    </div>
    <div class="spacing-zero-bottom spacing-md-top">
      <SocialContainer></SocialContainer>
    </div>

  </div>
</template>

<script>
import Hero from '../components/partials/Hero.vue'
import MenuList from '../components/partials/MenuList.vue'
import SocialContainer from '../components/partials/SocialContainer.vue'
import Delivery from '../components/partials/Delivery.vue'
export default {
  name: 'menu',
  components: {
    Hero,
    SocialContainer,
    MenuList,
    Delivery
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../styles/styles.scss';
  .hero-image-menu {
    background-image: url(../../static/menu-hero.jpg);
  }
</style>

<template>
  <div class="menu animated fadeIn">
    <Hero
      class="hero-image-menu"
      heroHeadingEn="Menu">
    </Hero>
    <div class="spacing-sm-bottom">
      <CateringOrder></CateringOrder>
    </div>
    <div class="container spacing-md-bottom spacing-md-top">
      <MenuList></MenuList>
    </div>
    <div class="">
      <CateringOrder></CateringOrder>
    </div>
    <div class="">
      <SocialContainer></SocialContainer>
    </div>
    <div class="">
      <WorkWithUs></WorkWithUs>
    </div>

  </div>
</template>

<script>
import Hero from '../components/partials/Hero.vue'
import MenuList from '../components/partials/MenuList.vue'
import SocialContainer from '../components/partials/SocialContainer.vue'
import CateringOrder from '../components/partials/CateringOrder.vue'
import Delivery from '../components/partials/Delivery.vue'
import WorkWithUs from '../components/partials/WorkWithUs.vue'

export default {
  name: 'menu',
  components: {
    Hero,
    SocialContainer,
    MenuList,
    CateringOrder,
    Delivery,
    WorkWithUs
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

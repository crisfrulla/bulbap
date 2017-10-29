<template>
  <div class="locations animated fadeIn">
    <Hero
      class="hero-image-contact"
      heroHeadingEn="Locations">
    </Hero>
    <div class="spacing-sm-bottom">
      <CateringOrder></CateringOrder>
    </div>
    <div class="container spacing-md-bottom spacing-md-top">
      <LocationShop></LocationShop>
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
import LocationShop from '../components/partials/LocationShop.vue'
import SocialContainer from '../components/partials/SocialContainer.vue'
import WorkWithUs from '../components/partials/WorkWithUs.vue'
import CateringOrder from '../components/partials/CateringOrder.vue'

export default {
  name: 'locations',
  components: {
    Hero,
    LocationShop,
    SocialContainer,
    WorkWithUs,
    CateringOrder
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../styles/styles.scss';
  .hero-image-contact {
    background-image: url(../../static/contact-hero.jpg);
  }
</style>

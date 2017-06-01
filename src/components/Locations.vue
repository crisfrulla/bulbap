<template>
  <div class="locations animated fadeIn">
    <Hero
      class="hero-image-contact"
      heroHeadingEn="Locations Heading"
      heroHeadingKo="한국어 단어"
      heroContent="Some content about this page">
    </Hero>
    <div class="container spacing-md-bottom spacing-md-top">
      <LocationShop></LocationShop>
    </div>
    <div class="spacing-zero-bottom spacing-md-top">
      <SocialContainer></SocialContainer>
    </div>
  </div>
</template>

<script>
import Hero from '../components/partials/Hero.vue'
import LocationShop from '../components/partials/LocationShop.vue'
import SocialContainer from '../components/partials/SocialContainer.vue'

export default {
  name: 'locations',
  components: {
    Hero,
    LocationShop,
    SocialContainer
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

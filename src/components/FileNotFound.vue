<template>
  <div class="contact animated fadeIn">
    <Hero
      class="hero-image-contact"
      heroHeadingEn="Oops!"
      heroHeadingKo="한국어 단어"
      heroContent="We can't seem to find the page you are looking for.">
    </Hero>
    <div class="container feature-block-md">
      <p>Error code: 404</p>
      <p>Here are some helpful links instead:</p>
      <ul class="list-unstyled">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/menu" exact>Menu</router-link></li>
        <li><router-link to="/locations" exact>Locations</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Hero from '../components/partials/Hero.vue'

export default {
  name: 'contact',
  components: {
    Hero
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../styles/styles.scss';
  .hero-image-contact {
    background-image: url(../../static/fileNotFound.jpg);
  }
</style>

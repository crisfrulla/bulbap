<template>
  <div class="mainFooter">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <p class="text-uppercase">work at bulbap</p>
        </div>
        <div class="col-md-3 text-right">
          <p class="text-uppercase">own a bulbap</p>
        </div>
        <div class="col-md-6 text-right">
          <SocialIcons class="social-media-icon-white-o"></SocialIcons>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcons from '../partials/SocialIcons.vue'
export default {
  name: 'mainFooter',
  components: {
    SocialIcons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
  .mainFooter {
    background: #303030;
    color: #fff;
    padding: 60px;
  }
</style>

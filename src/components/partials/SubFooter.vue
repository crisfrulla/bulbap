<template>
  <div class="subFooter">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-lg-8">
          <p><small>©2017 BULBAP GRILL. All Rights Reserved.</small></p>
        </div>
        <div class="col-lg-4 text-lg-right">
          <SocialIcons class="social-media-icon-white-o"></SocialIcons>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcons from '../partials/SocialIcons.vue'
export default {
  name: 'subFooter',
  components: {
    SocialIcons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
  .subFooter {
    background: #202020;
    color: #fff;
    padding: 30px;
    ul, p {
      margin-bottom: 0;
    }
    @media (max-width: 992px) {
      text-align: center;
      .social-media-icon-white-o {
        margin-top: 16px;
      }
    }
  }
</style>

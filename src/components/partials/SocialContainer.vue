<template>
  <div class="social-section">
    <div class="layer">
      <div class="container">
        <div class="row">
          <div class="col-md-10  offset-md-1 text-center">
            <div class="social-content">
              <h2 class="display-1 text-uppercase">connect with us</h2>
              <p class="lead">Eat, love, share. #bulbapgrill</p>
              <SocialIcons class="social-media-icon-white-o-lg feature-block-sm"></SocialIcons>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcons from '../partials/SocialIcons.vue'
export default {
  name: 'socialContainer',
  components: {
    SocialIcons
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
$bulbap-green: #5E9426;

.social-section {
    height: 600px;
    background: url(../../../static/socialmedia-hero.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  .layer {
    background: rgba($bulbap-green, .7);
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .social-content {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    .display-1 {
      color: #fff;
      font-size: 6rem;
    }
  }
}

.angle {
  clip-path: polygon(0 0, 100%  0, 100% 80%, 0 100%);
}

</style>

<template>
  <div class="hero">
    <div class="hero-layer">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-sm-12 col-md-8 col-lg-6">
            <div class="hero-content">
              <h1>{{ heroHeadingEn }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero',
  props: ['heroHeadingEn', 'heroHeadingKo', 'heroContent']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
.hero {
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  .hero-content {
    margin-top: 75px;
    h1 {
      text-transform: uppercase;
      font-weight: 300;
      color: #fff;
    }

  }
  @media (max-width: 992px) {
    height: 300px;
    background-attachment: local;
  }
}
.hero-layer {
  background: rgba($bulbap-green, .7);
  //background-image: url(../../../static/home-hero-layer.svg);
  // background-attachment: fixed;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row; /* works with row or column */
  flex-direction: row;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  @media (max-width: 992px) {
    height: 300px;
  }
}
</style>

<template>
  <div class="hero">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="hero-content">
            <h1><small>{{ heroHeadingKo }}</small>{{ heroHeadingEn }}</h1>
            <p class="lead">{{ heroContent }}</p>
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
$bulbap-green: #5E9426;
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
  //filter:hue-rotate(-90deg);
  // animation-name: imgScale;
  // animation-timing-function: linear;
  // animation-fill-mode: forwards;
  // animation-duration: 20s;
  .hero-content {
    padding: 30px;
    margin-top: 90px;
    background: rgba(255,255,255,.8);
    min-height: 200px;
    // small {
    //   display: block;
    //   font-weight: 300;
    // }
    h1 {
      text-transform: uppercase;
      font-weight: 300;
    }
    p {
      margin-bottom: 0;
    }
    .hero-divider {
      height: 2px;
      width: 40%;
      margin: 15px 0;
      background: $bulbap-green;
    }
  }
}
</style>

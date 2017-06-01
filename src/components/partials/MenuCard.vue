<template>
  <!-- <router-link :to="{ path: menuCardUrl }" class="menu-card-item" exact>
      <div class="menu-card-image menu-card-image-1">
        <div class="menu-card-content">
          <p>{{ menuCardContent }}</p>
        </div>
      </div>
  </router-link> -->

  <router-link :to="{ path: menuCardUrl }" class="menuCard">
    <div class="menuCardContent">
      <div class="menuCardContentLabel">
        <span>{{ menuCardContent }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'menuCard',
  props: ['menuCardContent', 'menuCardUrl']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
.menuCard {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 380px;
  //width: 100%;
  position: relative;
  margin: 40px 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all .1s linear;
  &:hover {
    //box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  @media (max-width: 992px) {
    margin: 20px 10px;
    height: 300px;
  }
}
.menuCardContentLabel {
  transition: all .1s linear;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.menuCardContent {
 position: absolute;
 width: 100%;
 height: 100%;
 top: 0;
 transition: all .1s linear;
 text-transform: uppercase;
 color: #fff;
 font-size: 1.4rem;
}
.menuCard:hover .menuCardContentLabel {
  opacity: 1;
}
.menuCard:hover .menuCardContent {
  opacity: 1;
  background: rgba($bulbap-green, .7);
}

</style>

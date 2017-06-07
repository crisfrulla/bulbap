<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div id="myNav" class="overlay">
          <div class="overlay-content">
            <router-link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              class="mobile-nav"
              to="/">
              Home
            </router-link>
            <router-link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              class="mobile-nav"
              to="/menu">
              Menu
            </router-link>
            <router-link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              class="mobile-nav"
              to="/locations">
              Locations
            </router-link>
            <SocialIcons class="social-media-icon-white-o"></SocialIcons>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcons from '../partials/SocialIcons.vue'
export default {
  name: 'overlayNav',
  components: {
    SocialIcons
  }
}
</script>

<style lang="scss">
//overlay
.openNav {
  height: 100%;
}
nav {
  z-index: 100 ;
}
.overlay {
    height: 0%;
    width: 100%;
    position: fixed;
    z-index: 1;
    //top: 0;
    left: 0;
    background-color: $bulbap-green;
    background-color: rgba($bulbap-green, 0.7);
    overflow-y: hidden;
    transition: 0.4s;
}

.overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.overlay a {
    padding: 30px;
    text-decoration: none;
    font-size: 60px;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: block;
    transition: 0.3s;
    font-family: Dense-Regular;
    font-weight: normal;
    font-style: normal;
}

.overlay a:hover, .overlay a:focus {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #f1f1f1;
}

.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay {overflow-y: auto;}
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>

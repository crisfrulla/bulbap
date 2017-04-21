<template>
  <div class="hero homeHero">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="intro">
            <!-- <h1>Welcome</h1> -->
            <img class="home-hero-logo img-fluid" src="../../../static/home-logo.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="sk-double-bounce">
      <div class="sk-child sk-double-bounce1"></div>
      <div class="sk-child sk-double-bounce2"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'homeHero'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
$bulbap-green: #5E9426;
.homeHero {
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .intro {
    margin-left: auto;
    margin-right: auto;
  }
  .home-hero-logo {
    width: 540px;
    height: auto;
    opacity: 0.9;
  }
  h1 {
    text-transform: uppercase;
    font-weight: 300;
    color: #fff;
  }
}
.sk-double-bounce {
  width: 40px;
  height: 40px;
  position: absolute;
  margin: 0;
  bottom: 0;
  margin: 40px auto;
}
.sk-double-bounce .sk-child {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ccc;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-doubleBounce 2s infinite ease-in-out;
}
.sk-double-bounce .sk-double-bounce2 {
  animation-delay: -1.0s;
}
@-webkit-keyframes sk-doubleBounce {
  0%, 100% {
            transform: scale(0);
  }
  50% {
            transform: scale(1);
  }
}
@keyframes sk-doubleBounce {
  0%, 100% {
            transform: scale(0);
  }
  50% {
            transform: scale(1);
  }
}
</style>

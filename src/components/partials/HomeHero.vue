<template>
  <div class="hero homeHero">
    <div class="hero-layer">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="intro">
              <!-- <h1>A Taste of Korea</h1> -->
              <!-- <img class="home-hero-logo img-fluid" src="../../../static/home-logo.svg" alt=""> -->
            </div>
            <!-- <div class="scroll text-center">
              <i class="fa fa-angle-down arrow fa-2x" aria-hidden="true"></i>
            </div> -->
          </div>
        </div>
      </div>
      <!-- <div class="sk-double-bounce">
        <div class="sk-child sk-double-bounce1"></div>
        <div class="sk-child sk-double-bounce2"></div>
      </div> -->
    </div>
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
//$bulbap-green: #5E9426;
.homeHero {
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  .hero-layer {
    //background: rgba($bulbap-green, .7);
    background-image: url(../../../static/home-hero-layer.svg);
    // background-attachment: fixed;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    @media (max-width: 992px) {
      display: none
    }
  }
  .intro {
    margin-left: auto;
    margin-right: auto;
  }
  .home-hero-logo {
    width: 540px;
    height: auto;
    //opacity: 0.9;
  }
  h1 {
    text-transform: uppercase;
    font-weight: 300;
    color: #fff;
  }
  @media (max-width: 992px) {
    height: 400px;
  }
}
.scroll {
  color: #fff;
}
.arrow {
  animation: bounce 4s infinite;
  position: relative;
  display: block;
//  margin: 10px auto;
}
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-10px);}
    60% {transform: translateY(-5px);}
}

</style>

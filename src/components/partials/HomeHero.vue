<template>
  <div class="hero homeHero">
    <div class="hero-layer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 col-xl-4 text-right">
            <div class="intro">
              <div class="introContent">
                <h1>bulbap grill</h1>
                <div class="hero-divider">
                  <img class="sticks" src="../../../static/sticks.svg" alt="sticks">
                </div>
                <p class="subHeading">korean food</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll hidden-md-down">
      <span></span>
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
.introContent {
  margin-top: 30px;
  @media (max-width: 1200px) {
    margin-top: 100px;
    text-align: center;
  }
}
.homeHero {
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 1200px) {
    height: 400px;
    background-attachment: local;
  }
  .hero-layer {
    background: rgba(#000, .3);
    //background-image: url(../../../static/home-hero-layer.svg);
    // background-attachment: fixed;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 100%;
    height: 100vh;
    padding-top: 100px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row; /* works with row or column */
    flex-direction: row;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    @media (max-width: 1200px) {
      padding-top: 0;
      height: 400px;
      background-attachment: local;
    }
  }

  h1 {
    text-transform: uppercase;
    font-size: 10em;
    font-weight: 300;
    color: #fff;
    line-height: .8em;
    margin-bottom: 0;
    @media (max-width: 1200px) {
      font-size: 5em;
    }
  }
  .subHeading {
    font-family: Dense-Thin;
    text-transform: uppercase;
    font-size: 5.6em;
    line-height: 1.2em;
    color: #fff;
    @media (max-width: 992px) {
      font-size: 5em;
    }
  }
  @media (max-width: 1200px) {
    height: 400px;
  }
}
.hero-divider {
  // height: 2px;
  // //width: 40%;
  margin: 20px 0;
  // background: #fff;
  .sticks {
    width: 100%;
  }

}
.scroll {
  position: absolute;
  top: 94%;
  width: 100px;
  margin: 0 auto;
  left: 50%;
}
.scroll  span {
	position: absolute;
	top: 75%;
	left: 50%;
	width: 24px;
	height: 24px;
  //margin-top: 50px;
	margin-left: -12px;
	border-left: 1px solid #fff;
	border-bottom: 1px solid #fff;
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
	-webkit-animation: scroll 2s infinite;
	animation: scroll 4s infinite;
	opacity: 0;
	box-sizing: border-box;
}
.scroll  span:nth-of-type(1) {
	-webkit-animation-delay: 0s;
	animation-delay: 0s;
}
.scroll  span:nth-of-type(2) {
	top: 16px;
	-webkit-animation-delay: .15s;
	animation-delay: .15s;
}
.scroll  span:nth-of-type(3) {
	top: 32px;
	-webkit-animation-delay: .3s;
	animation-delay: .3s;
}
@-webkit-keyframes scroll {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
@keyframes sdb07 {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}


</style>

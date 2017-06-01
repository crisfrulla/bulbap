<template>
  <nav id="topNav" class="navbar-light fixed-top nav-down">
    <div class="container">
      <nav class="navbar navbar-toggleable-md">
        <!-- <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div @click="overlayNav" id="mainNavBtn" class="hamburger hamburger--spin navbar-toggler-right hidden-lg-up">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
      <!-- <button @click="overlayNav" id="mainNavBtn" class="navbar-toggler-right hidden-lg-up">
        &#9776;
      </button> -->
      <router-link  class="navbar-brand" to="/"><img class="logo" src="./../../assets/Inline-Logo.svg" alt="logo"></router-link>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link  data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link  data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-link" to="/menu" exact>Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link  data-toggle="collapse" data-target=".navbar-collapse.show" class="nav-link" to="/locations" exact>Locations</router-link>
          </li>
        </ul>
      </div>
     </nav>
    </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>




<script>
export default {
  name: 'topNav',
  methods: {
    overlayNav () {
      console.log('clicked')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
  #mainNavBtn {
    top: 14px;
  }
  .navbar-light {
    //margin-top: 20px;
    background: rgba(255,255,255,.9);
    border-color: transparent;
    transition: top 0.2s ease-in-out;
    box-shadow: 0 0 8px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.24);
  //  padding: 20px;
  }
  .navbar {
    padding: 1.5rem 0rem;
    position: relative;
    @media (min-width: $large) {
      padding: 1rem 0rem;
    }
  }
  .navbar-light .navbar-toggler {
    border-color: rgba(0,0,0,.1);
    position: absolute;
    top: 8px;
  }
  .logo {
    //width: auto;
    height: 80px;
    position: absolute;
    top: -12px;
    @media (min-width: $large) {
      height: 100px;
    }
  }
  .nav-item {
    margin-left: 24px;
  }
  .navbar-nav {
    padding-top: 40px;
    @media (min-width: $large) {
      padding-top: 0px;
    }
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 50px;
    ul {
      margin-bottom: 0;
      align-self: center;
      a {
        padding: 1em;
        color:#333;
      }
    }
  }

  .router-link-active {
    color: green !important;
    &.mobile-nav {
      color: #fff !important;
    }
    //font-weight: bolder !important;
  }
  .nav-up {
    top: -100px;
  }

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
      background-color: rgba($bulbap-green, 0.9);
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

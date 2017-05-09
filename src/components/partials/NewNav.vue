<template>
  <div id="newNav">

    <div class="newNav">
      <div class="container">
        <div class="row">
          <div class="col">
            <span id="mainNavBtn">&#9776;</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div id="myNav" class="overlay">
            <div class="overlay-content">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: 'newNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/styles.scss';
  #newNav {
     z-index: 100;
     color: #ff00ff;
  }

  //overlay
  .openNav {
    height: 100%;
  }
  nav {
    z-index: 100;
  }
  .overlay {
      height: 0%;
      width: 100%;
      position: fixed;
      z-index: 1;
      top: 0;
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
      padding: 8px;
      text-decoration: none;
      font-size: 36px;
      color: #fff;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: block;
      transition: 0.3s;
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

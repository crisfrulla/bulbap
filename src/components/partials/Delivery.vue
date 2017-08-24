<template>
  <div class="delivery">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-sm-4">
          <img src="../../../static/delivery.svg" alt="delivery">
        </div>
        <div class="col-sm-8">
          <h3 class="text-uppercase">Pick-Up and Delivery Available</h3>
          <router-link  data-toggle="collapse" to="/locations" exact><i class="fa fa-arrow-circle-right fa-fw" aria-hidden="true"></i>Check Locations</router-link>
          <!-- <p>Call us at <a href="tel:1-718-383-3663"> ( 718 ) 383-3663</a></p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Delivery'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
.delivery {
  @media (max-width: 576px) {
    text-align: center;
  }
  img {
    width: 100%;
    @media (max-width: 576px) {
      width: 50%;
    }
  }
}
</style>

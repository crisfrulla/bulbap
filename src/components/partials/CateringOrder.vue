<template>
  <div class="cateringOrder">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-sm-4">
          <img src="../../../static/delivery-white.svg" alt="delivery">
        </div>
        <div class="col-sm-8">
          <h2>Delivery & Catering</h2>
          <p class="lead">We have a great deal for you!</p>
          <p>When you call us directly for a group order or catering, we provide discount pricing.</p>
          <p>$50 Delivery = <strong>$5 Discount</strong></p>
          <p>$100 Delivery = <strong>$15 Discount</strong></p>
          <p><router-link  data-toggle="collapse" to="/locations" exact><i class="fa fa-arrow-circle-right fa-fw" aria-hidden="true"></i>Check Locations</router-link></p>
          <p><small>Catering options - We can also customize based on request of the customers.</small></p>
          <!-- <p>Call us at <a href="tel:1-718-383-3663"> ( 718 ) 383-3663</a></p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CateringOrder'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';

.cateringOrder {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  h2, h3 {
    color: #fff;
  }
  background: $bulbap-green;
  color: #fff;
  padding: 60px 0;
  @media (max-width: 992px) {
    padding: 30px 0;
  }
  a {
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
    @media (max-width: 576px) {
  }
  img {
    width: 80%;
    @media (max-width: 576px) {
      width: 50%;
    }
  }
}
</style>

<template>
  <div class="delivery">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-sm-4 hidden-sm-down">
          <img src="../../../static/delivery.svg" alt="delivery">
        </div>
        <div class="col-md-8">
          <h3 class="text-uppercase">Pick-Up and Delivery Available</h3>
          <p>Call us at <a href="tel:1-646-779-2781">(646) 779-2781</a></p>
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
  img {
    width: 100%;
  }
}
</style>

<template>
  <div class="workWithUs">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-md-8">
          <h3 class="text-uppercase">Work at bulbap</h3>
          <p>We're always on the lookout for exceptional talent to join our team here at BULBAP GRILL. Please complete an online application.</p>
        </div>
        <div class="col-md-4 text-lg-right">
          <button type="button" class="btn btn-outline-bulbap btn-lg">Apply Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workWithUs'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
  .workWithUs {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    h3 {
      color: #fff;
    }
    background: $bulbap-green;
    color: #fff;
    padding: 60px 0;
    @media (max-width: 992px) {
      padding: 30px 0;
    }
  }
</style>

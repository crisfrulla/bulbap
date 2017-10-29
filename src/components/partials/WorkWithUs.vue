<template>
  <div class="workWithUs">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-md-2">
          <img class="img-fluid" src="../../../static/now-hiring-green.svg" alt="now hiring">
        </div>
        <div class="col-md-8">
          <h3 class="text-uppercase">Work at bulbap</h3>
          <p>We're always on the lookout for exceptional talent to join our team here at BULBAP GRILL. Please complete an online application.</p>
        </div>
        <div class="col-md-2 text-lg-right">
          <router-link class="btn btn-outline-bulbap-green btn-lg" to="/work-at-bulbap" exact>Apply Now</router-link>
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
    padding: 60px 0;
    @media (max-width: 992px) {
      padding: 30px 0;
    }
  }
</style>

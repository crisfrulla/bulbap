<template>
  <div class="spacing-md-bottom spacing-md-top">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-lg-7">
          <h2>{{ headingContentEn }}</h2>
          <p class="lead">{{ content }}</p>
        </div>
        <div class="col-lg-5">
          <div class="content-image">
            <img class="img-fluid" :src="contentImageUrl" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contentLeft',
  props: ['headingContentEn', 'headingContentKo', 'content', 'contentImageUrl']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
// @import '../../styles/variables.scss';
@import '../../styles/styles.scss';
.content {
  padding: 150px 0 50px 0;
  h2 {
    text-transform: uppercase;
    font-weight: 300;
  }
}
</style>

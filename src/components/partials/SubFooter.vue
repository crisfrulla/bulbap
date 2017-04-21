<template>
  <div class="subFooter">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <ul class="list-inline">
            <li class="list-inline-item">Contact</li>
            <li class="list-inline-item">Legal Infotmation</li>
          </ul>
        </div>
        <div class="col-lg-4 text-right">
          <p>©2017 BULBAP GRILL. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
  .subFooter {
    background: #202020;
    color: #fff;
    padding: 30px;
    ul, p {
      margin-bottom: 0;
    }
  }
</style>

<template>
  <div class="socialIcons ">
    <a href="https://www.facebook.com/BulbapGrill/" target="_blank">
      <span class="fa fa-facebook"></span><span class="sr-only">facebook</span>
    </a>
    <a href="https://www.instagram.com/bulbapgrill/" target="_blank">
      <span class="fa fa-instagram"></span><span class="sr-only">instagram</span>
    </a>
    <a href="https://www.yelp.com/biz/bulbap-grill-brooklyn" target="_blank">
      <span class="fa fa-yelp"></span><span class="sr-only">twitter</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'socialIcons'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
$bulbap-green: #5E9426;
@mixin social-media-icons ($color, $font-size, $background-color, $border, $width, $height, $line-height, $border-radius  ) {
  display: inline-block;
  margin: 0 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all .15s linear;
  color: $color;
  font-size: $font-size;
  background-color: $background-color;
  border: $border;
  width: $width;
  height: $width;
  line-height: $line-height;
  border-radius: $border-radius;
  text-align: center;
}
.social-media-icon-white-o-lg{
  a{

    margin: 0 20px !important;
    // @mixin social-media-item ($color, $font-size, $background-color, $border, $width, $height, $line-height, $border-radius)
    @include social-media-icons (#fff, 40px, transparent, 2px solid #fff, 60px, 60px, 60px, 100%);
    &:hover, &:focus, &:active{
      text-decoration: none;
      // @include social-media-icons (#98c3de, 22px, transparent, 2px solid #98c3de, 40px, 40px, 36px, 50%);
      @include social-media-icons (#f2f2f2, 40px, transparent, 2px solid #f2f2f2, 60px, 60px, 60px, 100%);
    }
  }
}
.social-media-icon-white-o{
  a{
    // @mixin social-media-item ($color, $font-size, $background-color, $border, $width, $height, $line-height, $border-radius)
    @include social-media-icons (#fff, 22px, transparent, 2px solid #fff, 40px, 40px, 36px, 50%);
    &:hover, &:focus, &:active{
      text-decoration: none;
      // @include social-media-icons (#98c3de, 22px, transparent, 2px solid #98c3de, 40px, 40px, 36px, 50%);
      @include social-media-icons (#f2f2f2, 22px, transparent, 2px solid #f2f2f2, 40px, 40px, 36px, 50%);
    }
  }
}

.social-media-icon-bulbap-green{
  a{
    // @mixin social-media-item ($color, $font-size, $background-color, $border, $width, $height, $line-height, $border-radius)
    @include social-media-icons (#fff !important, 22px, $bulbap-green, 2px solid #07639d, 40px, 40px, 36px, 50%);
    &:hover, &:focus, &:active{
      text-decoration: none;
      @include social-media-icons (#fff, 22px, #05446c, 2px solid #043e62, 40px, 40px, 36px, 50%);

    }
  }
}
</style>

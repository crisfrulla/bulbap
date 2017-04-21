<template>
  <div class="home animated fadeIn">
    <HomeHero class="hero-image-home">
    </HomeHero>
    <div class="spacing-md-bottom spacing-md-top">
      <ContentLeft6
        headingContentEn="Home Heading"
        headingContentKo="한국어 단어"
        content="Have you ever wanted to experience Korean food or have in the past and wished there was something more local? Well, it's finally happening! We're calling it Bulbap Grill. Bul in Korean language means fire. When used in describing food, Bul means grilled or spicy. It's a casual Korean fusion restaurant, and will be the next it place for people to experience the taste of traditional Korean food with some innovative twists!"
        contentImageUrl="../../static/square-bg.png">
      </ContentLeft6>
    </div>



    <div class="container spacing-md-bottom spacing-md-top">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="display-3">
            <small>음식 메뉴</small>
            FOOD MENU
          </h2>
          <br />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-7">
          <MenuCard
            class="menu-card-image-1"
            menuCardUrl="/menu"
            menuCardContent="Dish 1">
          </MenuCard>
        </div>
        <div class="col-md-6 col-lg-5">
          <MenuCard
            class="menu-card-image-2"
            menuCardUrl="/menu"
            menuCardContent="Dish 2">
          </MenuCard>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-5">
          <MenuCard
            class="menu-card-image-3"
            menuCardUrl="/menu"
            menuCardContent="Dish 3">
          </MenuCard>
        </div>
        <div class="col-md-6 col-lg-7">
          <MenuCard
            class="menu-card-image-4"
            menuCardUrl="/menu"
            menuCardContent="Dish 4">
          </MenuCard>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-7">
          <MenuCard
            class="menu-card-image-1"
            menuCardUrl="/menu"
            menuCardContent="Dish 5">
          </MenuCard>
        </div>
        <div class="col-md-6 col-lg-5">
          <MenuCard
            class="menu-card-image-2"
            menuCardUrl="/menu"
            menuCardContent="Dish 6">
          </MenuCard>
        </div>
      </div>
    </div>

    <div class="spacing-md-bottom spacing-md-top">
      <SocialContainer></SocialContainer>
    </div>

    <div class="container spacing-md-bottom spacing-md-top">
      <LocationShop></LocationShop>
    </div>


  </div>
</template>

<script>
import HomeHero from '../components/partials/HomeHero.vue'
import ContentLeft6 from '../components/partials/ContentLeft6.vue'
import MenuCard from '../components/partials/MenuCard.vue'
import LocationShop from '../components/partials/LocationShop.vue'
import SocialContainer from '../components/partials/SocialContainer.vue'

export default {
  name: 'home',
  components: {
    HomeHero,
    ContentLeft6,
    MenuCard,
    LocationShop,
    SocialContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../styles/styles.scss';
  .hero-image-home {
    background-image: url(../../static/home-hero.jpg);
    -webkit-filter: contrast(150%); /* Safari */
    filter: contrast(150%);
  }

  .menu-card-image-1 {
    background-image: url(../../static/square-bg.png);
  }
  .menu-card-image-2 {
    background-image: url(../../static/square-bg.png);
  }
  .menu-card-image-3 {
    background-image: url(../../static/square-bg.png);
  }
  .menu-card-image-4 {
    background-image: url(../../static/square-bg.png);
  }
</style>

<template>
  <div class="home animated fadeIn">
    <HomeHero class="hero-image-home">
    </HomeHero>
    <div class="spacing-md-bottom">
      <ContentLeft6
        content="Home Heading Content- Have you ever wanted to experience Korean food or have in the past and wished there was something more local? Well, it's finally happening! We're calling it Bulbap Grill. Bul in Korean language means fire. When used in describing food, Bul means grilled or spicy. It's a casual Korean fusion restaurant, and will be the next it place for people to experience the taste of traditional Korean food with some innovative twists!"
        contentImageUrl="../../static/home-intro.jpg">
      </ContentLeft6>
    </div>



    <div class="container spacing-md-bottom spacing-md-top">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="display-3">
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
            menuCardContent="Rice Bowls">
          </MenuCard>
        </div>
        <div class="col-md-6 col-lg-5">
          <MenuCard
            class="menu-card-image-2"
            menuCardUrl="/menu"
            menuCardContent="Tacos 	&amp; Sliders">
          </MenuCard>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-5">
          <MenuCard
            class="menu-card-image-3"
            menuCardUrl="/menu"
            menuCardContent="Chicken Wings">
          </MenuCard>
        </div>
        <div class="col-md-6 col-lg-7">
          <MenuCard
            class="menu-card-image-4"
            menuCardUrl="/menu"
            menuCardContent="BBQ 	&amp; Soups">
          </MenuCard>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-7">
          <MenuCard
            class="menu-card-image-5"
            menuCardUrl="/menu"
            menuCardContent="Bulbap Apps">
          </MenuCard>
        </div>
        <div class="col-md-6 col-lg-5">
          <MenuCard
            class="menu-card-image-6"
            menuCardUrl="/menu"
            menuCardContent="Bing Soo">
          </MenuCard>
        </div>
      </div>
    </div>

    <div class="spacing-md-bottom spacing-md-top">
      <Delivery></Delivery>
    </div>

    <div class="spacing-sm-bottom spacing-md-top">
      <SocialContainer></SocialContainer>
    </div>

    <div class="container spacing-md-bottom spacing-sm-top">
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
import Delivery from '../components/partials/Delivery.vue'

export default {
  name: 'home',
  components: {
    HomeHero,
    ContentLeft6,
    MenuCard,
    LocationShop,
    SocialContainer,
    Delivery
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../styles/styles.scss';
  .hero-image-home {
    background-image: url(../../static/home-hero.jpg);
  }

  .menu-card-image-1 {
    background-image: url(../../static/rice-bowls-menu.jpg);
  }
  .menu-card-image-2 {
    background-image: url(../../static/tacos-sliders-menu.jpg);
  }
  .menu-card-image-3 {
    background-image: url(../../static/chicken-wings-menu.jpg);
  }
  .menu-card-image-4 {
    background-image: url(../../static/bbq-soups-menu.jpg);
  }
  .menu-card-image-5 {
    background-image: url(../../static/bulbap-apps-menu.jpg);
  }
  .menu-card-image-6 {
    background-image: url(../../static/bing-soo-menu.jpg);
  }
</style>

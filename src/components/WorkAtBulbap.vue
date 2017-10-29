<template>
    <div class="WorkAtBulbap animated fadeIn">
        <Hero
        class="hero-image-menu"
        heroHeadingEn="Work At Bulbap">
        </Hero>

        <div class="spacing-zero-bottom spacing-lg-top">
            <div class="container">
                <div class="row spacing-md-bottom ">
                    <div class="col-12">
                        <p class="lead">We're always on the lookout for exceptional talent to join our team here at Bulbap.</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Bulbap Values</h2>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row spacing-md-bottom spacing-sm-top">
                    <div class="col-md-6">
                        <h3>Passion</h3>
                        <ul>
                            <li>A positive energy & attitude every day</li>
                            <li>Personal drive & belief in each other will achieve greatness</li>
                            <li>We have an appetite for food quality & knowledge</li>
                            <li>We are empowered to deliver “wow moments” to create loyal, raving fans</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h3>Leadership</h3>
                        <ul>
                            <li>We “make life easier” for our peers & teams</li>
                            <li>Plan ahead & set clear expectations of performance</li>
                            <li>We give our people meaningful opportunities for professional & personal growth</li>
                            <li>We always listen, communicate and connect with each other</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h3>Ownership</h3>
                        <ul>
                            <li>We deliver the Bulbap experience every single time</li>
                            <li>Responsible and accountable for performance as individuals and teams</li>
                            <li>Resilience & Perserverance are part of success</li>
                            <li>We care for & respect company property as our own</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h3>Trust</h3>
                        <ul>
                            <li>We are honest and transparent with each other & keep our commitments</li>
                            <li>We feel safe to speak up respectfully & inform others if things are not right</li>
                            <li>We always treat others as we want to be treated ourselves</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row spacing-lg-top">
                    <div class="col-12">
                        <h2>Latest Vacancies</h2>
                        <hr>
                    </div>
                </div>
                <div class="row spacing-sm-bottom spacing-sm-top">
                    <div class="col-md-6">
                        <h3>Marlboro, NJ</h3>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Line Cook</li>
                            <li>Kitchen Preparation</li>
                            <li>Cashiers</li>
                        </ul>
                    </div>
                </div>

                <div class="row spacing-sm-bottom spacing-sm-top">
                    <div class="col-md-6">
                        <h3>Brooklyn, NY</h3>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Servers	</li>
                        </ul>
                    </div>
                </div>
                <div class="row spacing-md-bottom spacing-sm-top">
                    <div class="col-md-6">
                        <h3>Bronx, NY</h3>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Drivers/Bikers for Delivery</li>
                        </ul>
                    </div>
                </div>
                <div class="row spacing-md-bottom spacing-sm-top">
                    <div class="col-12">
                        <p>If you have any questions, just email us at <a href="mailto:admin@bulbapgrill.com?Subject=Work%20at%20Bulbap" target="_top">admin@bulbapgrill.com</a>  - we'd love to hear from you.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="spacing-zero-bottom spacing-md-top">
            <SocialContainer></SocialContainer>
        </div>
    </div>
</template>

<script>
import Hero from '../components/partials/Hero.vue'
import MenuList from '../components/partials/MenuList.vue'
import SocialContainer from '../components/partials/SocialContainer.vue'
import Delivery from '../components/partials/Delivery.vue'
export default {
  name: 'workAtBulbap',
  components: {
    Hero,
    SocialContainer,
    MenuList,
    Delivery
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../styles/styles.scss';
  .hero-image-menu {
    background-image: url(../../static/work-at-bulbap-hero.jpg);
  }
</style>

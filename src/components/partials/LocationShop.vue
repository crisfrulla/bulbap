<template>
  <div class="locations">
    <div class="row  spacing-md-bottom spacing-md-top d-flex align-items-center" v-for="shop in locations">
      <div class="col-lg-6 col-xl-7">
        <div class="row">
          <div class="col-12">
            <h2>{{ shop.locationName }} 
            <router-link to="/work-at-bulbap" exact>
              <img class="img-fluid now-hiring-icon" src="../../../static/now-hiring-heading.svg" alt="now hiring">
            </router-link>
            </h2>
          </div>
          <div class="col-md-6">
            <ul class="list-unstyled">
              <li>{{ shop.locationStreet}}</li>
              <li>{{ shop.locationZip}}</li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="list-unstyled">
              <li v-if="shop.locationWeekHours">{{ shop.locationWeekHours}}</li>
              <li v-if="shop.locationWeekEndHours">{{ shop.locationWeekEndHours}}</li>
            </ul>
          </div>
          <div class="col-12">
            <p v-if="shop.locationMap"><a :href="shop.locationMap" target="_blank"><i class="fa fa-map-marker fa-fw fa-lg" aria-hidden="true"></i>Get Direction</a></p>
            <p v-if="shop.phone">Pick-Up and Delivery Available: <a href="tel:1-718-383-3663"> {{ shop.phone }}</a></p>
            <p v-if="shop.locationNote" class=""><strong>Note:</strong> {{ shop.locationNote}}</p>
            <p v-if="shop.locationTransportation" class=""><strong>Transportation:</strong> {{ shop.locationTransportation}}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-5">
        <img class="img-fluid img-shadow" :src="shop.locationPhoto" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationShop',
  data () {
    return {
      locations: [
        {
          locationName: 'Brooklyn',
          locationStreet: '646 Manhattan Avenue',
          locationZip: 'Brooklyn NY 11222',
          locationWeekHours: 'Mon to Fri: 12:00 - 11:30',
          locationWeekEndHours: 'Sat to Sun: 12:00 - 11:30',
          locationNote: 'Across the street from McCarren Park (intersection between Bedford Ave and Manhattan Ave)',
          locationTransportation: 'From Manhattan - take E train to Court Square then transfer to G train.  3 stops to Nassau Ave. station',
          locationPhoto: '../../static/brooklyn-contact.jpg',
          locationMap: 'https://goo.gl/maps/uxnGiPRTcUM2',
          phone: '( 718 ) 383 3663'
        },
        {
          locationName: 'Bronx',
          locationStreet: '305 E. Fordham Rd',
          locationZip: 'Bronx NY 10458',
          locationWeekHours: 'Mon to Fri: 11:00 - 9:30',
          locationWeekEndHours: 'Sat to Sun: 11:00 - 9:30',
          locationNote: 'By Bryan Park (Next to Popular Community Bank) and 2 blocks from Fordham University',
          locationTransportation: '',
          locationPhoto: '../../static/bronx-contact.jpg',
          locationMap: 'https://goo.gl/maps/fPrVZdmSCa82',
          phone: '( 718 ) 933 3537'
        },
        {
          locationName: 'Marlboro, NJ',
          locationStreet: '280 Route 9 N',
          locationZip: 'Marlboro NJ 07746',
          locationWeekHours: 'Mon to Fri: 11:00 - 9:30',
          locationWeekEndHours: 'Sat to Sun: 11:00 - 9:30',
          locationNote: '',
          locationTransportation: '',
          locationPhoto: '../../static/marlboro-contact.jpg',
          locationMap: 'https://goo.gl/maps/ott2D1cdzpN2',
          phone: '( 732 ) 617 1000'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import '../../styles/styles.scss';
.now-hiring-icon {
  width: 70px;
  margin-left: 10px;
}
</style>

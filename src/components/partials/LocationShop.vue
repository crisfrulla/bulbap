<template>
  <div class="locations">
    <div class="row  spacing-md-bottom spacing-lg-top d-flex align-items-center" v-for="shop in locations">
      <div class="col-lg-6 col-xl-7">
        <div class="row">
          <div class="col-12">
            <h2>{{ shop.locationName }}</h2>
          </div>
          <div class="col-md-6">
            <ul class="list-unstyled">
              <li>{{ shop.locationStreet}}</li>
              <li>{{ shop.locationZip}}</li>
            </ul>
            <p><a :href="shop.locationMap" target="_blank" class="text-uppercase"><i class="fa fa-map-marker fa-fw fa-lg" aria-hidden="true"></i>get direction</a></p>
          </div>
          <div class="col-md-6">
            <ul class="list-unstyled">
              <li>{{ shop.locationWeekHours}}</li>
              <li>{{ shop.locationWeekEndHours}}</li>
            </ul>
          </div>
          <div class="col-12">
            <p class="small"><strong>Note:</strong> {{ shop.locationNote}}</p>
            <p class="small"><strong>Transportation:</strong> {{ shop.locationTransportation}}</p>
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
          locationWeekHours: 'Mon to Fri: 12:00 - 12:00',
          locationWeekEndHours: 'Sat to Sun: 12:00 - 12:00',
          locationNote: 'Across the street from McCarren Park (intersection between Bedford Ave and Manhattan Ave)',
          locationTransportation: 'From Manhattan - take E train to Court Square then transfer to G train.  3 stops to Nassau Ave. station',
          locationPhoto: '../../static/brooklyn-contact.jpg',
          locationMap: 'https://goo.gl/maps/uxnGiPRTcUM2'
        },
        {
          locationName: 'Bronx',
          locationStreet: '305 E. Fordham Rd',
          locationZip: 'Bronx NY 10458',
          locationWeekHours: '',
          locationWeekEndHours: '',
          locationNote: '2 blocks from Fordham University',
          locationTransportation: 'From Manhattan - take E train to Court Square then transfer to G train. 3 stops to Nassau Ave. station',
          locationPhoto: '../../static/comingSoon-contact.jpg',
          locationMap: 'https://goo.gl/maps/83xq4YS943C2'
        },
        {
          locationName: 'Marlboro, NJ',
          locationStreet: '280 Route 9 N',
          locationZip: 'Marlboro NJ 07751',
          locationWeekHours: '',
          locationWeekEndHours: '',
          locationNote: 'Cambridge Square Shopping Center (Next to ShopRite)',
          locationTransportation: '',
          locationPhoto: '../../static/comingSoon-contact.jpg',
          locationMap: 'https://goo.gl/maps/7Fsmy58vfxv'
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
</style>

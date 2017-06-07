<template>
  <div class="menuList">

    <div class="row spacing-lg-top">
      <div class="col-lg-12">
        <h2>Appetizers</h2>
        <hr>
      </div>
    </div>
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in bulbapApps">
      <div class="col-lg-6 col-xl-7">
        <h3>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
        <ul class="list-inline">
          <li v-if="dish.spicy" class="list-inline-item"><img class="foodIndicator" src="../../../static/spicy.svg" alt="Spicy food"> <small> Spicy</small></li>
          <li v-if="dish.vegetarian" class="list-inline-item"><img class="foodIndicator" src="../../../static/vegetarian.svg" alt="Vagetarian food"> <small> Vegetarian</small></li>
        </ul>
        <p>${{ dish.dishPrice }}</p>
      </div>
      <div class="col-lg-6 col-xl-5">
        <div class="content-image">
          <img class="img-fluid img-shadow" :src="dish.dishPhoto" :alt="dish.dishNameEn">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <h2>Bulbap Bowls</h2>
        <hr>
      </div>
    </div>
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in riceBowl">
      <div class="col-lg-6 col-xl-7">
        <h3>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
        <ul class="list-inline">
          <li v-if="dish.spicy" class="list-inline-item"><img class="foodIndicator" src="../../../static/spicy.svg" alt="Spicy food"> <small> Spicy</small></li>
          <li v-if="dish.vegetarian" class="list-inline-item"><img class="foodIndicator" src="../../../static/vegetarian.svg" alt="Vagetarian food"> <small> Vegetarian</small></li>
        </ul>
        <p>${{ dish.dishPrice }}</p>
      </div>
      <div class="col-lg-6 col-xl-5">
        <div class="content-image">
          <img class="img-fluid img-shadow" :src="dish.dishPhoto" :alt="dish.dishNameEn">
        </div>
      </div>
    </div>

    <div class="row spacing-md-top">
      <div class="col-lg-12">
        <h2>Chicken Wings</h2>
        <p class="lead">Korean styles fried chicken wings served with Korean radish and French Fries.</p>
        <hr>
      </div>
    </div>
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in chickenWings">
      <div class="col-lg-6 col-xl-7">
        <h3>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
        <ul class="list-inline">
          <li v-if="dish.spicy" class="list-inline-item"><img class="foodIndicator" src="../../../static/spicy.svg" alt="Spicy food"> <small> Spicy</small></li>
          <li v-if="dish.vegetarian" class="list-inline-item"><img class="foodIndicator" src="../../../static/vegetarian.svg" alt="Vagetarian food"> <small> Vegetarian</small></li>
        </ul>
        <ul class="list-inline">
          <li class="list-inline-item">6p: ${{ dish.smallDishPrice }}</li>
          <li class="list-inline-item">12p: ${{ dish.largeDishPrice }}</li>
        </ul>
      </div>
      <div class="col-lg-6 col-xl-5">
        <div class="content-image">
          <img class="img-fluid img-shadow" :src="dish.dishPhoto" :alt="dish.dishNameEn">
        </div>
      </div>
    </div>

    <div class="row spacing-md-top">
      <div class="col-lg-12">
        <h2>Tacos and Sliders</h2>
        <p class="lead">Single Serve for all taco menus. $14 for choice of 4 tacos. $25 for 5 sliders + French Fries.</p>
        <hr>
      </div>
    </div>
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in tacos">
      <div class="col-lg-6 col-xl-7">
        <h3>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
        <ul class="list-inline">
          <li v-if="dish.spicy" class="list-inline-item"><img class="foodIndicator" src="../../../static/spicy.svg" alt="Spicy food"> <small> Spicy</small></li>
          <li v-if="dish.vegetarian" class="list-inline-item"><img class="foodIndicator" src="../../../static/vegetarian.svg" alt="Vagetarian food"> <small> Vegetarian</small></li>
        </ul>
        <p>${{ dish.dishPrice }}</p>
      </div>
      <div class="col-lg-6 col-xl-5">
        <div class="content-image">
          <img class="img-fluid img-shadow" :src="dish.dishPhoto" :alt="dish.dishNameEn">
        </div>
      </div>
    </div>

    <div class="row spacing-md-top">
      <div class="col-lg-12">
        <h2>BBQ and Soups</h2>
        <hr>
      </div>
    </div>
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in bbqSoups">
      <div class="col-lg-6 col-xl-7">
        <h3>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
        <ul class="list-inline">
          <li v-if="dish.spicy" class="list-inline-item"><img class="foodIndicator" src="../../../static/spicy.svg" alt="Spicy food"> <small> Spicy</small></li>
          <li v-if="dish.vegetarian" class="list-inline-item"><img class="foodIndicator" src="../../../static/vegetarian.svg" alt="Vagetarian food"> <small> Vegetarian</small></li>
        </ul>
        <p>${{ dish.dishPrice }}</p>
      </div>
      <div class="col-lg-6 col-xl-5">
        <div class="content-image">
          <img class="img-fluid img-shadow" :src="dish.dishPhoto" :alt="dish.dishNameEn">
        </div>
      </div>
    </div>

    <div class="row spacing-md-top">
      <div class="col-lg-12">
        <h2>Bing Soo</h2>
        <p class="lead">Our features Snowflake Shaved Ice. We make this at the time of pick up.</p>
        <hr>
      </div>
    </div>
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in bingSoo">
      <div class="col-lg-6 col-xl-7">
        <h3>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
        <ul class="list-inline">
          <li v-if="dish.spicy" class="list-inline-item"><img class="foodIndicator" src="../../../static/spicy.svg" alt="Spicy food"> <small> Spicy</small></li>
          <li v-if="dish.vegetarian" class="list-inline-item"><img class="foodIndicator" src="../../../static/vegetarian.svg" alt="Vagetarian food"> <small> Vegetarian</small></li>
        </ul>
        <ul class="list-inline">
          <li class="list-inline-item">Small: $ {{ dish.smallDishPrice }}</li>
          <li class="list-inline-item">Large: $ {{ dish.largeDishPrice }}</li>
        </ul>
      </div>
      <div class="col-lg-6 col-xl-5">
        <div class="content-image">
          <img class="img-fluid img-shadow" :src="dish.dishPhoto" :alt="dish.dishNameEn">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MenuList',
  data () {
    return {
      riceBowl: [
        {
          dishNameEn: 'Bulgogi Bulbap',
          dishDescription: 'Bulgogi (beef) rice bowl topped with sauté spinach, shiitake mushroom, carrots, squash and onions.  Served with side of chu jang (Korean red chili paste).  Optional Fried Egg.',
          dishPhoto: '../../static/menu/rice-bowls/Bulgogi-Bulbap.jpg',
          spicy: false,
          vegetarian: false,
          dishPrice: '13'
        },
        {
          dishNameEn: 'Jae Yuk Bulbap',
          dishDescription: 'Jae Yuk (spicy pork) rice bowl topped with sauté onions, fresh mix green, jallepeno pepper and truffle mayo. Served with side of chu jang (Korean red chili paste) Optional Fried Egg.',
          dishPhoto: '../../static/menu/rice-bowls/Jae-Yuk-Bulbap.jpg',
          spicy: true,
          vegetarian: false,
          dishPrice: '13'
        },
        {
          dishNameEn: 'Bul Dak Bulbap',
          dishDescription: 'Bul Dak (spicy chicken) rice bowl topped with sauté onions, fresh mix green, fresh guacamole. Served with side of chu jang (Korean red chili paste) Optional Fried Egg.',
          dishPhoto: '../../static/menu/rice-bowls/Bul-Dak-Bulbap.jpg',
          spicy: true,
          vegetarian: false,
          dishPrice: '13'
        },
        {
          dishNameEn: 'Bi Bim Bap',
          dishDescription: 'Vegetarian rice bowl topped with a fried egg, fried tofu, sauté spinach, shiitake mushroom, carrots, squash and onions.  Served with side of chu jang (Korean red chili paste).',
          dishPhoto: '../../static/menu/rice-bowls/Bi-Bim-Bap.jpg',
          spicy: true,
          vegetarian: true,
          dishPrice: '13'
        },
        {
          dishNameEn: 'Sunny Avo',
          dishDescription: 'Vegetarian rice bowl topped with avocado, fried egg, fried tofu, shiitake mushroom, carrots and sprinkle of dried sea weed.  Served with side of wasabi soy sauce.',
          dishPhoto: '../../static/menu/rice-bowls/Sunny-Avo.jpg',
          spicy: false,
          vegetarian: true,
          dishPrice: '13'
        },
        {
          dishNameEn: 'Dol Sot Bi Bim Bap',
          dishDescription: 'Traditional Korean Bi Bim Bap dish served in hot stone bowl with mixed vegetables and a choice of protein. Protein Option – Beef, Pork, Chicken or Tofu',
          dishPhoto: '../../static/menu/rice-bowls/Dol-Sot-Bi-Bim-Bap.jpg',
          spicy: true,
          vegetarian: false,
          dishPrice: '??'
        }
      ],
      tacos: [
        {
          dishNameEn: 'Galbi Taco',
          dishDescription: 'Premium short rib beef marinated in traditional Galbi sauce with fresh ginger cabbage slow.',
          dishPhoto: '../../static/menu/tacos-sliders/Galbi-Taco.jpg',
          spicy: false,
          vegetarian: false,
          dishPrice: '4.5'
        },
        {
          dishNameEn: 'Jae Yuk Taco',
          dishDescription: 'Spicy pork, cheese and freshly chopped veggies.',
          dishPhoto: '../../static/menu/tacos-sliders/Pork-Taco.jpg',
          spicy: true,
          vegetarian: false,
          dishPrice: '4'
        },
        {
          dishNameEn: 'Bul Dak Taco',
          dishDescription: 'Spicy chicken, Guacamole and house made kiwi dressing.',
          dishPhoto: '../../static/menu/tacos-sliders/Bul-Dak-Taco.jpg',
          spicy: true,
          vegetarian: false,
          dishPrice: '4'
        },
        {
          dishNameEn: 'Galbi Sliders',
          dishDescription: 'Premium short rib beef marinated in traditional Galbi sauce with French Fries. 2 per serving.',
          dishPhoto: '../../static/menu/tacos-sliders/Galbi-Sliders.jpg',
          spicy: false,
          vegetarian: false,
          dishPrice: '12'
        },
        {
          dishNameEn: 'Jae Yuk Sliders',
          dishDescription: 'Spicy pork sliders with French Fries. 2 per serving',
          dishPhoto: '../../static/menu/tacos-sliders/Jae-Yuk-Sliders.jpg',
          spicy: true,
          vegetarian: false,
          dishPrice: '12'
        }
      ],
      chickenWings: [
        {
          dishNameEn: 'Soy Garlic Wings',
          dishDescription: 'Sweet soy garlic marinated wings.',
          dishPhoto: '../../static/menu/chicken-wings/Soy-Garlic-Wings.jpg',
          spicy: false,
          vegetarian: false,
          smallDishPrice: '9',
          largeDishPrice: '16'
        },
        {
          dishNameEn: 'Korean Hot Wings',
          dishDescription: 'Korean spicy marinated wings.',
          dishPhoto: '../../static/menu/chicken-wings/Korean-Hot-Wings.jpg',
          spicy: true,
          vegetarian: false,
          smallDishPrice: '9',
          largeDishPrice: '16'
        },
        {
          dishNameEn: 'Gyoja Wings',
          dishDescription: 'Stuffed sweet soy garlic marinated wings. Choice of Vegetable or Jalapeno',
          dishPhoto: '../../static/menu/chicken-wings/Kyoja-Wings.jpg',
          spicy: false,
          vegetarian: false,
          smallDishPrice: '12',
          largeDishPrice: '??'
        }
      ],
      bbqSoups: [
        {
          dishNameEn: 'Galbi Hwa Ro',
          dishDescription: 'Premium Short Rib bbq option served with side of Kimchi, soup and bowl of rice.',
          dishPhoto: '../../static/menu/bbq-soups/Galbi-Hwa-Ro.jpg',
          spicy: true,
          vegetarian: true,
          dishPrice: '??'
        },
        {
          dishNameEn: 'Deung Shim Hwa Ro',
          dishDescription: 'Premium Rib Eye bbq option served with side of Kimchi, soup and bowl of rice.',
          dishPhoto: '../../static/menu/bbq-soups/Deung-Shim-Hwa-Ro.jpg',
          spicy: true,
          vegetarian: true,
          dishPrice: '??'
        },
        {
          dishNameEn: 'Bot Ssam Hwa Ro',
          dishDescription: 'Pork belly bbq option served with side of Kimchi, soup and bowl of rice.',
          dishPhoto: '../../static/menu/bbq-soups/Sam-Gyup-Sal.jpg',
          spicy: true,
          vegetarian: true,
          dishPrice: '??'
        },
        {
          dishNameEn: 'Soon Doo Boo Chigae',
          dishDescription: 'Spicy soft tofu stew.  Flavor options of Kimchi, Beef and Sea Food served with side of Kimchi and bowl of rice.',
          dishPhoto: '../../static/menu/bbq-soups/Soon-Doo-Boo.jpg',
          spicy: true,
          vegetarian: true,
          dishPrice: '??'
        },
        {
          dishNameEn: 'Odeng Soup',
          dishDescription: 'Korean fish cake soup.  Served with side of Kimchi and bowl of rice.',
          dishPhoto: '../../static/menu/bbq-soups/Odeng-Soup.jpg',
          spicy: true,
          vegetarian: true,
          dishPrice: '??'
        }
      ],
      bulbapApps: [
        {
          dishNameEn: 'Bul Dak Fondu',
          dishDescription: 'Super spicy chicken served with melted cheddar, monterery and mozzarella cheese on hwo ro.',
          dishPhoto: '../../static/menu/bulbap-apps/Bul-Dak-Fondu.jpg',
          spicy: true,
          vegetarian: false,
          dishPrice: '9'
        },
        {
          dishNameEn: 'Vege Mandoo',
          dishDescription: 'House made tofu and vegetable dumpling, fried to crisp. 5 per serving.',
          dishPhoto: '../../static/menu/bulbap-apps/Vege-Mandoo.jpg',
          spicy: false,
          vegetarian: true,
          dishPrice: '7'
        },
        {
          dishNameEn: 'Beef Mandoo',
          dishDescription: 'House made beef dumpling, fried to crisp. 5 per serving.',
          dishPhoto: '../../static/menu/bulbap-apps/Beef-Mandoo.jpg',
          spicy: false,
          vegetarian: false,
          dishPrice: '7'
        },
        {
          dishNameEn: 'Tofu Salad',
          dishDescription: 'Silky tofu served with mixed green.  Topped with miso and sesame dressing.',
          dishPhoto: '../../static/menu/bulbap-apps/Tofu-Salad.jpg',
          spicy: false,
          vegetarian: true,
          dishPrice: '??'
        },
        {
          dishNameEn: 'Bulgogi Salad',
          dishDescription: 'Bulgogi, jalepeno, mixed salad topped with kiwi dressing',
          dishPhoto: '../../static/menu/bulbap-apps/Bulgogi-Salad.jpg',
          spicy: true,
          vegetarian: true,
          dishPrice: '9'
        }
      ],
      bingSoo: [
        {
          dishNameEn: 'Milk Bingsoo',
          dishDescription: '',
          dishPhoto: '../../static/menu/bing-soo/Milk-Bingsoo.jpg',
          spicy: false,
          vegetarian: false,
          smallDishPrice: '6',
          largeDishPrice: '11'
        },
        {
          dishNameEn: 'Strawberry Bingsoo',
          dishDescription: '',
          dishPhoto: '../../static/menu/bing-soo/Strawberry-Bingsoo.jpg',
          spicy: false,
          vegetarian: false,
          smallDishPrice: '7',
          largeDishPrice: '12'
        },
        {
          dishNameEn: 'Chocolate Bingsoo',
          dishDescription: '',
          dishPhoto: '../../static/menu/bing-soo/Chocolate-Bingsoo.jpg',
          spicy: false,
          vegetarian: false,
          smallDishPrice: '7',
          largeDishPrice: '12'
        },
        {
          dishNameEn: 'Matcha Bingsoo ',
          dishDescription: '',
          dishPhoto: '../../static/menu/bing-soo/Matcha-Bingsoo.jpg',
          spicy: false,
          vegetarian: false,
          smallDishPrice: '7',
          largeDishPrice: '12'
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
.foodIndicator {
  width: 40px;
  height: 40px;
}
</style>

<template>
  <div class="menuList">
    <div class="row">
      <div class="col-lg-12">
        <h2>Rice Bowls</h2>
        <hr>
      </div>
    </div>
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in riceBowl">
      <div class="col-lg-6 col-xl-7">
        <h3><small>{{ dish.dishNameKo }}</small>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
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
        <hr>
      </div>
    </div>
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in tacos">
      <div class="col-lg-6 col-xl-7">
        <h3><small>{{ dish.dishNameKo }}</small>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
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
        <hr>
      </div>
    </div>
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in chickenWings">
      <div class="col-lg-6 col-xl-7">
        <h3><small>{{ dish.dishNameKo }}</small>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
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
        <h3><small>{{ dish.dishNameKo }}</small>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
      </div>
      <div class="col-lg-6 col-xl-5">
        <div class="content-image">
          <img class="img-fluid img-shadow" :src="dish.dishPhoto" :alt="dish.dishNameEn">
        </div>
      </div>
    </div>

    <div class="row spacing-md-top">
      <div class="col-lg-12">
        <h2>Bulbap Appetizers</h2>
        <hr>
      </div>
    </div>
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in bulbapApps">
      <div class="col-lg-6 col-xl-7">
        <h3><small>{{ dish.dishNameKo }}</small>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
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
        <hr>
      </div>
    </div>
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in bingSoo">
      <div class="col-lg-6 col-xl-7">
        <h3><small>{{ dish.dishNameKo }}</small>{{ dish.dishNameEn }}</h3>
        <p class="lead">{{ dish.dishDescription }}</p>
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
          dishNameKo: '한국어 단어',
          dishDescription: 'Bulgogi (beef) rice bowl topped with sauté spinach, shiitake mushroom, carrots, squash and onions.  Served with side of chu jang (Korean red chili paste).  Optional Fried Egg.',
          dishPhoto: '../../static/menu/rice-bowls/Bulgogi-Bulbap.jpg'
        },
        {
          dishNameEn: 'Jae Yuk Bulbap',
          dishNameKo: '한국어 단어',
          dishDescription: 'Jae Yuk (spicy pork) rice bowl topped with sauté onions, fresh mix green, jallepeno pepper and truffle mayo. Served with side of chu jang (Korean red chili paste) Optional Fried Egg.',
          dishPhoto: '../../static/menu/rice-bowls/Jae-Yuk-Bulbap.jpg'
        },
        {
          dishNameEn: 'Bul Dak Bulbap',
          dishNameKo: '한국어 단어',
          dishDescription: 'Bul Dak (spicy chicken) rice bowl topped with sauté onions, fresh mix green, fresh guacamole. Served with side of chu jang (Korean red chili paste) Optional Fried Egg.',
          dishPhoto: '../../static/menu/rice-bowls/Bul-Dak-Bulbap.jpg'
        },
        {
          dishNameEn: 'Bi Bim Bap',
          dishNameKo: '한국어 단어',
          dishDescription: 'Vegetarian rice bowl topped with a fried egg, fried tofu, sauté spinach, shiitake mushroom, carrots, squash and onions.  Served with side of chu jang (Korean red chili paste).',
          dishPhoto: '../../static/menu/rice-bowls/Bi-Bim-Bap.jpg'
        },
        {
          dishNameEn: 'Sunny Avo',
          dishNameKo: '한국어 단어',
          dishDescription: 'Vegetarian rice bowl topped with avocado, fried egg, fried tofu, shiitake mushroom, carrots and sprinkle of dried sea weed.  Served with side of wasabi soy sauce.',
          dishPhoto: '../../static/menu/rice-bowls/Sunny-Avo.jpg'
        },
        {
          dishNameEn: 'Dol Sot Bi Bim Bap',
          dishNameKo: '한국어 단어',
          dishDescription: 'Traditional Korean Bi Bim Bap dish served in hot stone bowl with mixed vegetables and a choice of protein. Protein Option – Beef, Pork, Chicken or Tofu',
          dishPhoto: '../../static/menu/rice-bowls/Dol-Sot-Bi-Bim-Bap.jpg'
        }
      ],
      tacos: [
        {
          dishNameEn: 'Galbi Taco',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/tacos-sliders/Galbi-Taco.jpg'
        },
        {
          dishNameEn: 'Pork Taco',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/tacos-sliders/Pork-Taco.jpg'
        },
        {
          dishNameEn: 'Bul Dak Taco',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/tacos-sliders/Bul-Dak-Taco.jpg'
        },
        {
          dishNameEn: 'Galbi Sliders',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/tacos-sliders/Galbi-Sliders.jpg'
        },
        {
          dishNameEn: 'Jae Yuk Sliders',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/tacos-sliders/Jae-Yuk-Sliders.jpg'
        }
      ],
      chickenWings: [
        {
          dishNameEn: 'Korean Hot Wings',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/chicken-wings/Korean-Hot-Wings.jpg'
        },
        {
          dishNameEn: 'Soy Garlic Wings',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/chicken-wings/Soy-Garlic-Wings.jpg'
        },
        {
          dishNameEn: 'Kyoja Wings',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/chicken-wings/Kyoja-Wings.jpg'
        }
      ],
      bbqSoups: [
        {
          dishNameEn: 'Galbi Hwa Ro',
          dishNameKo: '한국어 단어',
          dishDescription: 'Premium Short Rib bbq option served with side of Kimchi, soup and bowl of rice.',
          dishPhoto: '../../static/menu/bbq-soups/Galbi-Hwa-Ro.jpg'
        },
        {
          dishNameEn: 'Deung Shim Hwa Ro',
          dishNameKo: '한국어 단어',
          dishDescription: 'Premium Rib Eye bbq option served with side of Kimchi, soup and bowl of rice.',
          dishPhoto: '../../static/menu/bbq-soups/Deung-Shim-Hwa-Ro.jpg'
        },
        {
          dishNameEn: 'Bot Ssam Hwa Ro',
          dishNameKo: '한국어 단어',
          dishDescription: 'Pork belly bbq option served with side of Kimchi, soup and bowl of rice.',
          dishPhoto: '../../static/menu/bbq-soups/Sam-Gyup-Sal.jpg'
        },
        {
          dishNameEn: 'Soon Doo Boo Chigae',
          dishNameKo: '한국어 단어',
          dishDescription: 'Spicy soft tofu stew.  Flavor options of Kimchi, Beef and Sea Food served with side of Kimchi and bowl of rice.',
          dishPhoto: '../../static/menu/bbq-soups/Soon-Doo-Boo.jpg'
        },
        {
          dishNameEn: 'Odeng Soup',
          dishNameKo: '한국어 단어',
          dishDescription: 'Korean fish cake soup.  Served with side of Kimchi and bowl of rice.',
          dishPhoto: '../../static/menu/bbq-soups/Odeng-Soup.jpg'
        }
      ],
      bulbapApps: [
        {
          dishNameEn: 'Bul Dak Fondu ',
          dishNameKo: '한국어 단어',
          dishDescription: 'Super spicy chicken served with melted cheddar, monterery and mozzarella cheese on hwo ro.',
          dishPhoto: '../../static/menu/bulbap-apps/Bul-Dak-Fondu.jpg'
        },
        {
          dishNameEn: 'Vege Mandoo',
          dishNameKo: '한국어 단어',
          dishDescription: 'House made tofu and vegetable dumpling, fried to crisp.',
          dishPhoto: '../../static/menu/bulbap-apps/Vege-Mandoo.jpg'
        },
        {
          dishNameEn: 'Beef Mandoo',
          dishNameKo: '한국어 단어',
          dishDescription: 'House made beef dumpling, fried to crisp.',
          dishPhoto: '../../static/menu/bulbap-apps/Beef-Mandoo.jpg'
        },
        {
          dishNameEn: 'Tofu Salad',
          dishNameKo: '한국어 단어',
          dishDescription: 'Silky tofu served with mixed green.  Topped with miso and sesame dressing.',
          dishPhoto: '../../static/menu/bulbap-apps/Tofu-Salad.jpg'
        },
        {
          dishNameEn: 'Bulgogi Salad',
          dishNameKo: '한국어 단어',
          dishDescription: 'Bulgogi, jalepeno, mixed salad topped with kiwi dressing',
          dishPhoto: '../../static/menu/bulbap-apps/Bulgogi-Salad.jpg'
        }
      ],
      bingSoo: [
        {
          dishNameEn: 'Strawberry Bingsoo',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/bing-soo/Strawberry-Bingsoo.jpg'
        },
        {
          dishNameEn: 'Chocolate Bingsoo',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/bing-soo/Chocolate-Bingsoo.jpg'
        },
        {
          dishNameEn: 'Matcha Bingsoo ',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/bing-soo/Matcha-Bingsoo.jpg'
        },
        {
          dishNameEn: 'Milk Bingsoo',
          dishNameKo: '한국어 단어',
          dishDescription: '',
          dishPhoto: '../../static/menu/bing-soo/Milk-Bingsoo.jpg'
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

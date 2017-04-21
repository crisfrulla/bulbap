<template>
  <div class="menuList">
    <div class="row d-flex align-items-center spacing-md-bottom spacing-md-top" v-for="dish in menus">
      <div class="col-lg-6 col-xl-7">
        <h2><small>{{ dish.dishNameKo }}</small>{{ dish.dishNameEn }}</h2>
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
      menus: [
        {
          dishNameEn: 'Dish Name 1',
          dishNameKo: '한국어 단어',
          dishDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          dishPhoto: '../../static/rectangle-bg.png'
        },
        {
          dishNameEn: 'Dish Name 2',
          dishNameKo: '한국어 단어',
          dishDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          dishPhoto: '../../static/rectangle-bg.png'
        },
        {
          dishNameEn: 'Dish Name 3',
          dishNameKo: '한국어 단어',
          dishDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          dishPhoto: '../../static/rectangle-bg.png'
        },
        {
          dishNameEn: 'Dish Name 4',
          dishNameKo: '한국어 단어',
          dishDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          dishPhoto: '../../static/rectangle-bg.png'
        },
        {
          dishNameEn: 'Dish Name 5',
          dishNameKo: '한국어 단어',
          dishDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          dishPhoto: '../../static/rectangle-bg.png'
        },
        {
          dishNameEn: 'Dish Name 6',
          dishNameKo: '한국어 단어',
          dishDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          dishPhoto: '../../static/rectangle-bg.png'
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

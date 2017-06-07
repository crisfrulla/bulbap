<template>
  <div id="app">
    <TopNav></TopNav>
    <router-view></router-view>
    <WorkWithUs></WorkWithUs>
    <SubFooter></SubFooter>
  </div>
</template>

<script>
import TopNav from './components/partials/TopNav.vue'
import SubFooter from './components/partials/SubFooter.vue'
export default {
  name: 'app',
  components: {
    TopNav,
    SubFooter
  }
}
</script>

<style  lang="scss">
@import 'styles/MyFontsWebfontsKit/MyFontsWebfontsKit.css';
@import 'styles/styles.scss';

</style>

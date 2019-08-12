<template>
  <b-navbar 
    sticky 
    class="py-1 align-items-start rcg__navbar--main"
    v-cloak
  >
    <b-navbar-brand href="/">
      <img 
        :src="brandLogo"
        style="height: 15vh"
      >
    </b-navbar-brand>

    <b-navbar-nav class="mr-3 mt-1 text-white" >
      <b-nav-item 
        :href="item.href" 
        class="nav__custom text-uppercase"
        v-for="(item, index) in nav" :key="index"
      >{{ item.text }}</b-nav-item>

      <b-nav-item 
        href="#" 
        class="nav__custom text-uppercase"
        v-b-modal.contact-us
      >Contact US</b-nav-item>
    </b-navbar-nav>

    
    <b-navbar-nav class="mr-1 mt-1 text-white ml-auto">

      <b-nav-text 
        class="text-white rcg__header--sec text-uppercase mr-2"
      >Find us on social media!</b-nav-text>

      <b-nav-item href="#" target="_blank">
        <i class="fab fa-facebook-square rcg__icon--social"></i>
      </b-nav-item>

      <b-nav-item href="#" target="_blank">
        <i class="fab fa-instagram rcg__icon--social"></i>
      </b-nav-item>

      <b-nav-item href="#" target="_blank">
        <i class="fab fa-youtube-square rcg__icon--social"></i>
      </b-nav-item>

    </b-navbar-nav>
    

    <!-- <b-navbar-nav class="mr-3 mt-1 text-white">
      <b-nav-item 
        href="#" 
        class="nav__custom white"
        v-b-modal.contact-us
      >Contact US</b-nav-item>
    </b-navbar-nav> -->
    
    <!-- <b-navbar-nav class="mr-1 mt-1 ml-auto">
      <b-nav-text class="text-white rcg__header--sec">Find us on social media!</b-nav-text>
    </b-navbar-nav>

    <b-navbar-nav class="mr-1 mt-1 text-white">
      <b-nav-item href="#" target="_blank">
        <i class="fab fa-facebook-square icon__custom"></i>
      </b-nav-item>
    </b-navbar-nav>
    
    <b-navbar-nav class="mr-1 mt-1 text-white">
      <b-nav-item href="#" target="_blank">
        <i class="fab fa-instagram icon__custom"></i>
      </b-nav-item>
    </b-navbar-nav> -->

  </b-navbar>
</template>

<script>
export default {
  props: ['brandLogo'],
  data() {
    return {
      nav: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Partners',
          href: '#'
        },
        {
          text: 'Testimonials',
          href: '/testimonials'
        },
        {
          text: 'Company',
          href: '/about'
        },
      ],
      scroll: 0,
      hasScrolled: false
    }
  },
  computed: {
    
  },
  methods: {
    scrolled() {
      // get current scroll position
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop

      // accounting for scroll momentum on mobile devices
      if (currentPosition < 0 ) {
        return
      }

      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentPosition - this.scroll) < 60) {
        return
      }

      this.hasScrolled = currentPosition < this.scroll

      this.scroll = currentPosition
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrolled)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrolled)
  }
}
</script>

<style lang="scss" scoped>

  .navbar-light .navbar-nav .nav-link {
    color: white;
  }
/*  .logo__main {
    background-color: var(--secondary) !important;
    transition: background-color .4s ease-in
  }
  .nav__custom {
    font-size: 1.25em;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }
  .logo__scrolling {
    background: linear-gradient(var(--secondary) 50%, transparent 50%) !important;
    transition: background-image .5s ease-in
  } */
</style>

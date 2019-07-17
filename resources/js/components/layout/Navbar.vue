<template>
  <b-navbar class="py-1 bg-secondary ">
    <b-navbar-brand href="/">
      <img :src="brandLogo" alt="Reliable Camping Gear Logo">
    </b-navbar-brand>

    <b-navbar-nav class="mr-3 text-white" v-for="(item, index) in nav" :key="index">
      <b-nav-item :href="item.href" class="nav__custom white">{{ item.text }}</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="mr-3 text-white">
      <b-nav-item href="#" class="nav__custom " @click="modalHandler">Contact</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="mr-1  ml-auto text-white">
      <b-nav-item href="#" target="_blank"><i class="fab fa-facebook-square icon__custom"></i></b-nav-item>
    </b-navbar-nav>
    
    <b-navbar-nav class="mr-1 text-white">
      <b-nav-item href="#" target="_blank"><i class="fab fa-instagram icon__custom"></i></b-nav-item>
    </b-navbar-nav>

    <b-nav-form>
      <b-form-input class="p-2 m-2" placeholder="Search Site" size="sm"></b-form-input>
      <b-button variant="outline-light" class="mx-2" type="submit" size="sm">Search</b-button>
    </b-nav-form>
    
  </b-navbar>
</template>

<script>
export default {
  props: ['brandLogo'],
  data() {
    return {
      modal: false,
      nav: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Products',
          href: '/products'
        },
        {
          text: 'About Us',
          href: '/about'
        },
        {
          text: 'Where To Buy',
          href: '/purchase'
        },
        
      ]
    }
  },
  methods: {
    modalHandler() {
      this.modal = !this.modal
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon__custom {
    font-size: 1.5em;
    color: white;
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
  }
</style>

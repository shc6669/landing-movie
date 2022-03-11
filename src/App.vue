<template>
  <div>
    <!--begin::Main-->
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
      <!--begin::Page-->
      <div class="page d-flex flex-row flex-column-fluid">
        <!--begin::Wrapper-->
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
          <Header />
          
          <router-view v-slot="{ Component }">
            <transition-page>
              <component :is="Component" />
            </transition-page>
          </router-view>
          
          <ScrollTop />
          
          <Footer />
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Page-->
    </div>
    <!--end::Root-->
    <!--end::Main-->
  </div>
</template>

<script>
import Header from './components/Layouts/Header'
import Footer from './components/Layouts/Footer'
import ScrollTop from './components/Layouts/ScrollTop'
import TransitionPage from './components/Plugins/TransitionPage'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ScrollTop,
    TransitionPage
  }
}
</script>
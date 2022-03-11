<template>
  <div>
    <!--begin::Toolbar-->
    <Toolbar />
    <!--end::Toolbar-->
    <!--begin::Container-->
    <MainContainer />
    <!--end::Container-->
  </div>
</template>

<script>
import MainContainer from '../Layouts/Landing/MainContainer'
import Toolbar from '../Layouts/Landing/Toolbar'

export default {
  name: 'Landing-Page',
  components: {
    MainContainer,
    Toolbar
  }
}
</script>
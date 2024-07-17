<template>
  <div class="my-container" id="app">
     
    <div class="main-container">
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>

export default {
  mounted() {
    console.log(process.env.VUE_APP_ROOT_API)
  }
}
</script>

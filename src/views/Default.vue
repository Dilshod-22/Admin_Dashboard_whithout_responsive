<template>
  <div class="h-full flex">
    <sidebar/>
    <div class="w-full h-full">
      <headerTop/>
      <info/>
      <div class="w-full h-[calc(100vh-50px)]">
        <gridPanel/>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from "../components/header.vue";1
import sidebar from "../components/sidebar.vue";
import gridPanel from "../components/gridPanel.vue";
import info from "../components/info.vue"

export default ({
  components: {
    headerTop,
    sidebar,
    gridPanel,
    info
  },
});
</script>

<style></style>

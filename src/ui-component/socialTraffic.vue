<template>
  <div class="tabItem px-5 w-full h-12">
    <h6>{{ social.name }}</h6>
    <h6>{{ social.visitors }}</h6>
    <h6 class="flex items-center">
      {{ social.degre }}
      <div class="w-32 bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700 mt-3 ml-2">
        <div
          class="bg-gray-600 h-1 rounded-full dark:bg-gray-300"
          :style="{ width: social.degre }"
        ></div>
      </div>
    </h6>
  </div>
</template>

<script>
export default {
  props: {
    social: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style >
.tab,.tabItem {
  display: grid;
  align-items: center;
  grid-template-columns: 30% 20% 50%;
  border: 1px solid rgb(211, 211, 211, 0.5);
  border-left: none;
  border-right: none;
  border-bottom: none;
}

.tabItem h6 {
  font-size: 11px;
}
</style>

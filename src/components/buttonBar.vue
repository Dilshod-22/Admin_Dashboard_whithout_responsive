<template>
  <div class="w-[450px] mx-auto flex justify-around mt-5">
    <button
      class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded h-8"
      @click="$emit('filterHandler', '')"
    >
      All
    </button>
    <button
      class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded h-8"
      @click="$emit('filterHandler', 'active')"
    >
      active
    </button>
    <button
      class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded h-8"
      @click="$emit('filterHandler', 'passiv')"
    >
      passiv
    </button>
    <button
      class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded h-8"
      @click="$emit('allClear')"
    >
      All clear
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

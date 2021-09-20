<template>
  <div class="w-full mt-5">
    <div class="container mx-auto px-3 md:px-0">
      <!-- Image show -->
      <div
        class="w-full rounded-xl shadow-lg overflow-hidden relative"
        style="aspect-ratio: 5 / 2;"
      >
        <div class="w-full h-full relative">
          <img
            :src="slides[index].image"
            class="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <!-- Prev and Next buttons -->
        <div class="w-full flex absolute inset-0 items-center justify-center">
          <div class="w-full flex items-center justify-between px-3 md:px-5">
            <div
              class="icon"
              @click="index >= slides.length - 1 ? (index = 0) : index++"
            >
              <fa :icon="['fas', 'angle-right']" />
            </div>
            <div
              class="icon"
              @click="index <= 0 ? (index = slides.length - 1) : index--"
            >
              <fa :icon="['fas', 'angle-left']" />
            </div>
          </div>
        </div>
      </div>
      <!-- Dots -->
      <div class="w-full flex items-center justify-center mt-3">
        <div
          class="w-[15px] h-[15px] rounded-full border-2 mx-1 cursor-pointer"
          :class="i === index ? 'active-dot' : 'deactive-dot'"
          v-for="(item, i) in slides"
          :key="i"
          @click="index = i"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: Array
  },
  data() {
    return {
      index: 0
    };
  }
};
</script>

<style scoped>
.icon {
  @apply w-[50px] h-[50px] select-none cursor-pointer rounded-full border-2 border-white border-opacity-50 flex items-center justify-center text-3xl text-white opacity-50 hover:opacity-100;
}
.active-dot {
  @apply bg-blue-th border-blue-th;
}
.deactive-dot {
  @apply border-gray-300 bg-white;
}
</style>

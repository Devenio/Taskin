<template>
  <div class="w-full mt-5 relative">
    <div
      class="container mx-auto md:px-0 md:rounded-xl shadow-xl py-8 flex flex-col md:flex-row-reverse bg-white relative z-10"
    >
      <!-- Image show -->
      <div class="w-full relative min-h-[200px] md:w-2/5">
        <div
          class="w-3/4 h-[180px] md:h-[250px] relative z-40 mx-auto rounded-xl"
        >
          <div
            class="border-4 border-green-th rounded-xl transform rotate-12 absolute inset-3 inset-x-4 z-0"
          ></div>
          <img
            :src="slides[index].image"
            class="object-cover w-full h-full relative z-10 rounded-xl"
          />
        </div>
        <!-- Prev and Next buttons -->
        <div
          class="w-full flex md:hidden absolute inset-0 items-center justify-center"
        >
          <div
            class="w-full flex items-center justify-between px-3 md:px-5 bg-green-th"
          >
            <fa
              :icon="['fas', 'angle-right']"
              @click="index >= slides.length - 1 ? (index = 0) : index++"
              class="icon"
            />
            <fa
              :icon="['fas', 'angle-left']"
              @click="index <= 0 ? (index = slides.length - 1) : index--"
              class="icon"
            />
          </div>
        </div>
      </div>
      <!-- Texts and body -->
      <div class="px-5 text-center md:text-right md:w-3/5">
        <p class="opacity-75 max-h-[200px] overflow-y-hidden">
          {{ slides[index].text }}
        </p>
        <div class="mt-5">
          <nuxt-link to="/" class="py-1 px-5 rounded-lg bg-green-th text-white">
            مطالعه بیشتر
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- Desktop buttons -->
    <div
      class="w-full hidden md:flex absolute inset-0 items-center justify-center z-0"
    >
      <div
        class="w-full flex items-center justify-between px-3 md:px-5 bg-green-th"
      >
        <fa
          :icon="['fas', 'angle-right']"
          @click="index >= slides.length - 1 ? (index = 0) : index++"
          size="2x"
          class="icon"
        />
        <fa
          :icon="['fas', 'angle-left']"
          @click="index <= 0 ? (index = slides.length - 1) : index--"
          class="icon"
        />
      </div>
    </div>
    <div class="w-full flex items-center justify-center opacity-75 mt-3" dir="ltr">({{ index + 1 }} / {{ slides.length }})</div>
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
  @apply select-none cursor-pointer text-3xl md:text-5xl text-white opacity-50 hover:opacity-100;
}
.active-dot {
  @apply bg-blue-th border-blue-th;
}
.deactive-dot {
  @apply border-gray-300 bg-white;
}
</style>

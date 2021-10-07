<template>
  <div class="text-white lg:w-3/4">
    <!-- Mobile section tabs -->
    <div
      v-for="(item, index) in sectionItems"
      :key="index"
      class="border-b-2 border-white lg:hidden"
    >
      <div
        class="p-3 flex items-center justify-between cursor-pointer rounded-xl"
        :class="show === index ? 'bg-purple-th' : 'bg-pink-th'"
        @click="show === index ? (show = null) : (show = index)"
      >
        <span>{{ item.title }}</span>
        <fa
          :icon="show === index ? ['fas', 'angle-up'] : ['fas', 'angle-down']"
        />
      </div>
      <div
        v-show="show === index"
        class="shadow-lg rounded-xl bg-white my-3 p-3"
      >
        <h1 class="text-lg font-bold mb-5 text-purple-th">
          {{ item.title }}
        </h1>
        <p
          class="text-black"
          v-if="item.key === 'INTRO' || item.key === 'SERVICES'"
        >
          {{ activeItem.key === "INTRO" ? sections.text : sections.service }}
        </p>
        <div v-if="item.key === 'LEADER'">
          <h1 class="text-base font-bold mb-5 text-purple-th">
            {{ owner.ownerName }}
          </h1>
          <img :src="owner.ownerImage" class="mb-5" />
          <p class="text-black">
            {{ owner.ownerTitle }}
          </p>
        </div>
        <div v-if="item.key === 'MEMBERS'">
          <div class="w-full flex items-center flex-wrap">
            <!-- Members cards -->
            <div
              class="flex flex-col items-center w-[160px] h-[190px] border-2 rounded-xl shadow-lg p-3 ml-2 mt-2 cursor-pointer transition-all duration-200 transform hover:scale-105"
              :class="
                activePersenel && activePersenel.id === persenel.id
                  ? ['border-purple-th', 'scale-105']
                  : ['border-transparent', 'scale-100']
              "
              v-for="(persenel, index) in sections.persenel"
              :key="index"
              :persenel="persenel"
              @click="(activePersenel = persenel), check()"
            >
              <div
                class="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-gray-400"
              >
                <img
                  src="/img/test-img3.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <h1 class="text-lg font-bold mt-3 text-purple-th">
                {{ persenel.name }}
              </h1>
            </div>
          </div>
          <div
            class="rounded-xl border-2 border-purple-th mt-5 p-5 flex items-start"
            v-if="!!activePersenel"
          >
            <div class="flex flex-col items-center">
              <div
                class="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-gray-400"
              >
                <img
                  :src="activePersenel.image"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="mr-8 text-black">
              <h1 class="text-base font-bold text-purple-th">
                {{ activePersenel.name }}
              </h1>
              <p class="font-bold mt-3">
                {{ activePersenel.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Desktop section tabs -->
    <div class="w-full hidden lg:inline-block">
      <div class="w-full flex items-center">
        <div
          class="flex-grow"
          :class="index === sectionItems.length - 1 ? '' : 'ml-2'"
          v-for="(item, index) in sectionItems"
          :key="index"
        >
          <div
            class="bg-pink-th px-3 py-2 rounded-t-xl cursor-pointer text-center transition-all duration-200 hover:bg-purple-th"
            :class="show === index ? 'bg-purple-th' : 'bg-pink-th'"
            @click="show = index"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <div
        class="w-full border-t-4 border-purple-th shadow-lg rounded-b-xl p-5"
        v-if="activeItem"
      >
        <h1 class="text-lg font-bold mb-5 text-purple-th">
          {{ activeItem.title }}
        </h1>
        <p
          class="text-black"
          v-if="activeItem.key === 'INTRO' || activeItem.key === 'SERVICES'"
        >
          {{ activeItem.key === "INTRO" ? sections.text : sections.service }}
        </p>
        <div v-if="activeItem.key === 'LEADER'" class="flex justify-between">
          <div>
            <h1 class="text-base font-bold mb-5 text-purple-th">
              {{ owner.ownerName }}
            </h1>
            <p class="text-black">
              {{ owner.ownerTitle }}
            </p>
          </div>
          <img :src="owner.ownerImage" class="max-w-[50%]" />
        </div>
        <div v-if="activeItem.key === 'MEMBERS'">
          <div class="w-full flex items-center flex-wrap">
            <!-- Members cards -->
            <div
              class="flex flex-col items-center w-[160px] h-[190px] border-2 rounded-xl shadow-lg p-3 ml-2 mt-2 cursor-pointer transition-all duration-200 transform hover:scale-105"
              :class="
                activePersenel && activePersenel.id === persenel.id
                  ? ['border-purple-th', 'scale-105']
                  : ['border-transparent', 'scale-100']
              "
              v-for="(persenel, index) in sections.persenel"
              :key="index"
              :persenel="persenel"
              @click="(activePersenel = persenel), check()"
            >
              <div
                class="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-gray-400"
              >
                <img
                  src="/img/test-img3.png"
                  class="w-full h-full object-cover"
                />
              </div>
              <h1 class="text-lg font-bold mt-3 text-purple-th">
                {{ persenel.name }}
              </h1>
            </div>
            <!-- Members cards -->
          </div>
          <div
            class="rounded-xl border-2 border-purple-th mt-5 p-5 flex items-start"
            v-if="!!activePersenel"
          >
            <div class="flex flex-col items-center">
              <div
                class="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-gray-400"
              >
                <img
                  :src="activePersenel.image"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="mr-8 text-black">
              <h1 class="text-base font-bold text-purple-th">
                {{ activePersenel.name }}
              </h1>
              <p class="font-bold mt-3">
                {{ activePersenel.text }}
              </p>
            </div>
          </div>
        </div>
        <div v-if="activeItem.key === 'ABILITY'">
          <p>
            {{ activeItem.ability }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionItems: Array,
    owner: Object,
    sections: Array | Object
  },
  data() {
    return {
      show: null,
      activeItem: {},
      activeCard: null,
      activePersenel: null
    };
  },
  watch: {
    show: {
      handler() {
        this.activeItem = this.sectionItems[this.show];
      }
    }
  },
  mounted() {
    this.show = 0;
  },
  methods: {
    check() {
      console.log("clicked");
    }
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="w-full mt-5 relative">
    <div class="container mx-auto px-3 md:px-0">
      <div
        class="rounded-xl py-3 px-5 mt-5 bg-gradient-to-r from-blue-th to-green-th text-white mx-3 md:mx-0"
      >
        <h1 class="md:text-xl">تسکین در کنار شما</h1>
      </div>
    </div>
    <div
      class="container mt-5 mx-auto md:px-0 md:rounded-xl shadow-xl flex flex-col py-5 md:py-10 items-center bg-white relative z-10 border-2 border-gray-100"
    >
      <div class="w-full flex items-center justify-center mb-3 md:justify-start px-3 md:px-10 pb-0">
        <img src="/img/heart.png" class="ml-3" />
        <h1 class="text-lg md:text-xl font-bold flex items-center text-right">
          همکاری با
        </h1>
      </div>
      <img src="/img/hospital.png" class="max-w-[110px]" />
      <h1 class="md:text-3xl text-lg font-bold my-5 md:my-7">
        بیمارستان نمازی شیراز
      </h1>
      <!-- Image show -->
      <div class="w-full relative">
        <div
          class="w-3/4 max-h-[400px] relative z-40 mx-auto rounded-xl overflow-hidden"
        >
          <img
            :src="slides[index].image"
            class="object-cover w-full max-h-[400px] relative z-10 rounded-xl"
          />
        </div>
        <!-- Prev and Next buttons -->
        <div class="w-full flex absolute inset-0 items-center justify-center">
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
      <div class="px-5 text-center max-w-[900px] mt-10">
        <p class="opacity-75 overflow-y-auto">
          {{ slides[index].text }}
        </p>
      </div>
    </div>
    <div class="w-full flex items-center justify-center mt-5">
      <div
        class="w-[15px] h-[15px] rounded-full border-2 mx-1 cursor-pointer"
        :class="i === index ? 'active-dot' : 'deactive-dot'"
        v-for="(item, i) in slides"
        :key="i"
        @click="index = i"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      slides: [
        {
          image: "/img/slider-img2.jfif",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        },
        {
          image: "/img/slider-img.png",
          text:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
        }
      ]
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
p::-webkit-scrollbar-thumb {
  @apply bg-purple-th rounded-xl cursor-pointer transition duration-200;
}
p::-webkit-scrollbar {
  width: 10px;
}
</style>

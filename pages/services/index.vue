<template>
  <div class="w-full">
    <div
      class="mt-5 md:mt-8 flex items-center lg:justify-center overflow-scroll tabs py-3"
    >
      <div
        class="flex flex-col items-center justify-center w-[100px] md:w-[160px] mx-2 transition duration-200 transform hover:scale-105 cursor-pointer"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="active_index = index"
      >
        <div
          class="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-opacity-50 flex items-center justify-center"
          :class="tab.color"
        >
          <div
            class="w-[85px] h-[85px] md:w-[130px] md:h-[130px] rounded-full flex items-center justify-center"
            :class="tab.color"
          >
            <img :src="tab.img" alt="" class="w-1/2" />
          </div>
        </div>
        <p
          class="text-purple-th mt-3 text-center text-xs md:text-base cursor-pointer bg-opacity-50 md:font-bold p-1 rounded-lg"
          :class="active_index === index ? 'bg-pink-th' : 'bg-white'"
        >
          {{ tab.title }}
        </p>
      </div>
    </div>
    <div class="container mx-auto mt-5 md:mt-10 px-3 md:px-0">
      <div
        class="rounded-xl shadow-xl bg-white p-5 md:p-16 border-2 border-gray-200"
      >
        <h1 class="text-purple-th border-r-4 border-purple-th px-5 font-bold">
          خدمات قابل ارائه به پزشکان
        </h1>
        <img src="/img/service-img.png" class="mx-auto px-5 mt-5 md:mt-0" />
        <p class="mt-8 opacity-75">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_index: null,
      tabs: [
        {
          color: "bg-blue-th",
          img: "/img/service.png",
          title: "خدمات قابل ارائه به پزشکان"
        },
        {
          color: "bg-pink-th",
          img: "/img/service2.png",
          title: "خدمات قابل ارائه به پزشکان"
        },
        {
          color: "bg-green-th",
          img: "/img/service3.png",
          title: "خدمات قابل ارائه به پزشکان"
        },
        {
          color: "bg-purple-th",
          img: "/img/service4.png",
          title: "خدمات قابل ارائه به پزشکان"
        },
        {
          color: "bg-yellow-th",
          img: "/img/service5.png",
          title: "خدمات قابل ارائه به پزشکان"
        }
      ]
    };
  }
};
</script>

<style scoped>
.tabs::-webkit-scrollbar {
  width: 15px;
  display: none;
}
</style>

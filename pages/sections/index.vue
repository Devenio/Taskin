<template>
  <div class="w-full">
    <div class="container mx-auto mt-5 px-3 md:px-0">
      <img src="/img/test-img2.png" class="w-full rounded-xl" />
      <div class="flex flex-col mt-8 lg:flex-row">
        <SectionTabs
          :sectionItems="sectionItems"
          :sections="sections"
          :owner="{
            ownerName: sections.ownerName,
            ownerTitle: sections.ownerTitle,
            ownerImage: sections.ownerImage
          }"
        />
        <div class="rounded-xl shadow-lg w-full lg:w-1/4 mt-5 lg:mt-0 lg:mr-3">
          <div
            class="w-full rounded-t-xl bg-purple-th text-white text-center py-2 border-b-4 border-purple-th"
          >
            افتخارات
          </div>
          <div class="divide-y-2 divide-gray-200">
            <div
              class="flex items-center p-3 cursor-pointer"
              v-for="(honor, index) in honors"
              :key="index"
            >
              <img
                :src="honor.image"
                class="rounded-xl w-[110px] h-[110px] object-cover"
              />
              <div class="flex flex-col justify-between pr-3 h-[100px]">
                <h1 class="text-sm font-bold">
                  {{ honor.title }}
                </h1>
                <p class="text-xs opacity-50">{{ honor.data }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Section } from "@/reqs/index";

export default {
  data() {
    return {
      show: null,
      activeItem: {},
      activeCard: null,
      sectionItems: [
        {
          id: 0,
          title: "معرفی واحد",
          key: "INTRO",
          data: {
            text:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          }
        },
        {
          id: 1,
          title: "خدمات واحد",
          key: "SERVICES",
          data: {
            text:
              "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          }
        },
        {
          title: "توانمندی ها",
          key: "ABILITY",
          data: {}
        },
        {
          id: 2,
          title: "مسئول واحد",
          key: "LEADER",
          data: {
            name: "علی توکلی",
            description:
              "لورم اپیوسم متن ساختگی در صنعت گرافیک و سایر فعالیت های دیجیتال"
          }
        },
        {
          id: 3,
          title: "اعضاء واحد",
          key: "MEMBERS",
          data: {}
        }
      ]
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
  async asyncData({ query }) {
    try {
      const res = await Section.sectionList();
      const sections = res.data.find(item => item.id == query.id)
      return {
        sections,
        honors: sections.honor
      };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped></style>

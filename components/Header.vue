<template>
  <div>
    <header
      class="bg-main min-h-[170px] max-h-[210px] flex items-center lg:shadow-lg"
    >
      <div
        class="container mx-auto flex flex-col md:flex-row py-3 md:py-0 flex-wrap justify-between items-center px-3"
      >
        <!-- Taskin logo and name -->
        <div class="flex flex-row items-center">
          <img
            src="/img/taskin-logo.png"
            alt="logo"
            class="w-[100px] md:w-auto"
          />
          <div>
            <img
              src="/img/taskin-name.png"
              alt="taskin"
              class="mr-3 w-[140px] md:w-auto"
            />
            <img
              src="/img/taskin-text.png"
              alt="taskin"
              class="mr-3 mt-3 md:hidden w-[170px] md:w-auto"
            />
          </div>
        </div>
        <!-- Time and Date -->
        <div class="flex flex-col items-end">
          <img
            src="/img/taskin-text.png"
            alt="taskin"
            class="hidden md:block"
          />
          <div class="flex flex-row items-center text-purple-th mt-3 h-[45px]">
            <div
              class="ml-2 p-2 h-full border-2 border-purple-th border-opacity-50 rounded-xl text-sm md:text-base cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div
              class="border-2 h-full border-purple-th p-2 border-opacity-50 rounded-xl inline-block text-sm md:text-base"
            >
              {{ new Date().toLocaleDateString("fa") }}
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Navbar -->
    <div
      class="w-full flex items-center lg:justify-center nav relative"
      @mouseleave="show = null"
    >
      <nav
        class="px-5 h-[80px] rounded-xl shadow-lg items-center text-purple-th font-semibold bg-white hidden lg:flex "
      >
        <div
          :to="item.path"
          class="link-hover mx-1"
          v-for="(item, index) in navItems"
          :key="index"
          @mouseenter="show = index"
        >
          {{ item.title }}
          <fa :icon="['fas', 'angle-down']" />
        </div>
        <!-- Nav items -->
        <div
          class="w-screen absolute top-full right-0 pt-3 z-50 flex items-center justify-center text-sm text-purple-th"
          v-if="!childClose"
        >
          <div
            class="bg-white shadow-lg rounded-xl min-w-[400px] max-w-[1200px] flex justify-betwen overflow-hidden"
          >
            <div class="p-5 ml-32 flex flex-col flex-wrap max-h-[216px] min-w-[50%] relative z-50">
              <div
                class="flex items-center my-2 mx-1"
                v-for="(item, index) in childItems"
                :key="index + 'm'"
              >
                <div class="w-2 h-2 bg-gray-400 rounded-full ml-2"></div>
                <nuxt-link :to="item.path">{{ item.title }}</nuxt-link>
              </div>
            </div>
            <div class="relative">
              <img src="/img/nav-img.png" alt="nav" class="h-full object-cover bg-white" />
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent to-white"
              ></div>
            </div>
          </div>
        </div>
      </nav>
      <fa
        :icon="['fas', 'bars']"
        class="text-purple-th m-3 cursor-pointer lg:hidden"
        size="lg"
        @click="close = false"
      />
    </div>
    <!-- Mobile menu -->
    <div
      class="fixed z-10 w-screen h-screen bg-black opacity-50 top-0 right-0"
      @click="close = true"
      v-if="!close"
    ></div>
    <div
      class="fixed top-0 -right-full transition-all duration-300 z-50 h-screen w-3/4 bg-main pt-5"
      ref="menu"
    >
      <div class="flex items-center w-full justify-center">
        <img src="/img/taskin-logo.png" alt="logo" class="w-[70px]" />
        <img src="/img/taskin-name.png" alt="logo" class="w-[100px] mr-3" />
        <fa
          :icon="['fas', 'times']"
          class="absolute top-4 left-4 text-purple-th text-xl cursor-pointer"
          @click="close = true"
        />
      </div>
      <!-- Mobile Nav Items -->
      <div class="mt-8 text-white">
        <div
          v-for="(item, index) in navItems"
          :key="index"
          class="border-b-2 border-white"
        >
          <div
            class="p-3 bg-blue-th flex items-center justify-between cursor-pointer"
            @click="show === index ? (show = null) : (show = index)"
          >
            <span>{{ item.title }}</span>
            <fa
              :icon="
                show === index ? ['fas', 'angle-up'] : ['fas', 'angle-down']
              "
            />
          </div>
          <transition name="home">
            <div v-show="show === index">
              <div
                class="w-full py-3 border-b-2 border-white text-purple-th"
                v-for="(child, index) in item.items"
                :key="index + 1"
              >
                <nuxt-link :to="child.path" class="w-full h-full px-3">
                  {{ child.title }}
                </nuxt-link>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: null,
      close: true,
      childClose: true,
      navItems: [
        {
          title: "تسکین",
          path: "/",
          items: [
            {
              title: "معرفی شرکت",
              path: "/"
            },
            {
              title: "رئیس هیئت مدیره",
              path: "/"
            },
            {
              title: "مدیر عامل",
              path: "/"
            },
            {
              title: "افتخارات و تقدیرنامه ها",
              path: "/"
            },
            {
              title: "تسکین با تسکین",
              path: "/"
            },
            {
              title: "آرشیو اخبار",
              path: "/"
            },
            {
              title: "تسکین در کنار شما",
              path: "/"
            }
          ]
        },
        {
          title: "واحد ها و مسئولین واحدها",
          path: "/",
          items: [
            {
              title: "واحد برنامه نویسی و پشتیبانی",
              path: "/sections"
            },
            {
              title: "واحد فروش و گسترش نرم افزار تسکین",
              path: "/"
            },
            {
              title: "واحد تولید محتوا و فضای مجازی",
              path: "/"
            },
            {
              title: "واحد طراحی و گرافیک",
              path: "/"
            },
            {
              title: "واحد چاپ و خدمات مرتبط با کاغذ",
              path: "/"
            },
            {
              title: "واحد مالی",
              path: "/"
            },
            {
              title: "واحد اداری",
              path: "/"
            },
            {
              title: "واحد سایت",
              path: "/"
            },
            {
              title: "واحد پشتیبانی بیماران پروفسور جحواد کجوری",
              path: "/"
            },
            {
              title: "واحد خدمات غیرحضوری آزمایشگاه نیلو",
              path: "/"
            }
          ]
        },
        {
          title: "خدمات و راهکارها",
          path: "/",
          items: [
            {
              title: "خدمات قابل ارائه به بیماران",
              path: "/"
            },
            {
              title: "خدمات قابل ارائه به پزشکان",
              path: "/"
            },
            {
              title: "خدمات قابل ارائه به درمانگاه ها",
              path: "/"
            },
            {
              title: "خدمات قابل ارائه به داروخانه ها",
              path: "/"
            },
            {
              title: "خدمات قابل ارائه به آزمایشگاه ها",
              path: "/"
            }
          ]
        },
        {
          title: "ارتباط با ما",
          path: "/",
          items: [
            {
              title: "آدرس و شماره تماس",
              path: "/"
            },
            {
              title: "تسکین در فضای مجازی",
              path: "/"
            },
            {
              title: "درخواست همکاری با تسکین",
              path: "/"
            }
          ]
        }
      ],
      childItems: []
    };
  },
  watch: {
    close: {
      handler() {
        this.toggleMenu();
      }
    },
    show: {
      handler(val) {
        this.toggleChildItems(val);
      }
    }
  },
  methods: {
    toggleMenu() {
      const menu = this.$refs.menu;
      if (menu.classList.contains("-right-full")) {
        this.close = false;
        menu.classList.replace("-right-full", "right-0");
      } else {
        menu.classList.replace("right-0", "-right-full");
      }
    },
    toggleChildItems(val) {
      val !== null ? (this.childClose = false) : (this.childClose = true);
      val !== null
        ? (this.childItems = this.navItems[val].items)
        : (this.childItems = []);
    }
  }
};
</script>

<style scoped>
.link-hover {
  @apply p-2 rounded-xl hover:bg-purple2-th transition-all duration-300 hover:text-white cursor-pointer;
}
@media (min-width: 1024px) {
  .nav {
    margin-top: -40px;
  }
}
/* .home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
} */
</style>

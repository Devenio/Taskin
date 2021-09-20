<template>
  <footer class="footer pt-5 mt-10">
    <div class="container mx-auto flex flex-col md:flex-row p-3 px-5 md:px-3">
      <!-- Taskin logo and name -->
      <div class="flex flex-col items-center md:w-1/4 md:px-3">
        <img
          src="/img/taskin-logo.png"
          alt="logo"
          class="w-[100px] md:w-auto"
        />
        <img
          src="/img/taskin-name.png"
          alt="logo"
          class="w-[100px] md:w-auto mt-3"
        />
      </div>
      <!-- About taskin -->
      <div class="mt-5 md:mt-0 md:w-1/4 md:px-3">
        <h3 class="text-green-th text-lg md:text-xl font-bold ">
          درباره تسکین
        </h3>
        <p class="md:mt-7">
          لورم اپیسوم متنی بی معنی در صنعت گرافیک لورم اپیسوم متنی بی معنی در
          صنعت گرافیک لورم اپیسوم متنی بی معنی در صنعت گرافیک لورم اپیسوم متنی
          بی معنی در صنعت گرافیک لورم اپیسوم متنی بی معنی در صنعت گرافیک لورم
          اپیسوم متنی بی معنی در صنعت گرافیک
        </p>
      </div>
      <!-- Pages links -->
      <div class="mt-5 md:mt-0 md:w-1/4 md:px-3">
        <h3 class="text-green-th text-lg md:text-xl font-bold md:mb-7">
          دسترسی سریع
        </h3>
        <div class="flex items-center mt-3" v-for="item in 4" :key="item">
          <div class="w-2 h-2 rounded-full bg-green-th ml-3" />
          <nuxt-link to="/">تسکین</nuxt-link>
        </div>
      </div>
      <!-- Contact us -->
      <div class="mt-5 md:mt-0 md:w-1/4 md:px-3">
        <h3 class="text-green-th text-lg md:text-xl font-bold ">
          ارتباط با ما
        </h3>
        <!-- items -->
        <div class="flex items-center mt-3 md:mt-7">
          <div class="text-green-th ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <p>
            شیراز - بلوار زند - جنب حلال احمر - ساختمان مرکزی دانشگاه علوم پزشکی
            شیراز -طبقه 8
          </p>
        </div>
        <div class="flex items-center mt-3">
          <div class="text-green-th ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <a href="tel:07132335385">
            07132335385
          </a>
        </div>
        <div class="flex items-center mt-3">
          <div class="text-green-th ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <a href="tel:07132122717">
            07132122717
          </a>
        </div>
        <div class="flex items-center mt-3">
          <div class="text-green-th ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <a href="tel:07132352530">
            07132352530
          </a>
        </div>
        <div class="flex items-center mt-3">
          <div class="text-green-th ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </div>
          <a href="mailto:herasat@sums.ac.ir">
            herasat@sums.ac.ir
          </a>
        </div>
        <div class="flex items-center justify-end mt-5">
          <img class="ml-2" src="https://img.icons8.com/small/25/2BB6AA/twitter.png"/>
          <img class="ml-2" src="https://img.icons8.com/small/25/2BB6AA/facebook-new.png"/>
          <img class="ml-2" src="https://img.icons8.com/small/25/2BB6AA/instagram-new.png"/>
        </div>
      </div>
    </div>
    <div class="w-full text-center px-5 bg-green-th py-3 text-white mt-3">
        کلیه حقوق محتوای این سایت متعلق به تسکین میباشد
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-image: linear-gradient(45deg, transparent, #e0e6ea80);
}
</style>

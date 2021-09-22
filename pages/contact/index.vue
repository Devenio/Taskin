<template>
  <div class="w-full">
    <div class="container mx-auto px-3 md:px-0">
      <img src="/img/contact-img.png" class="mx-auto max-w-[300px]" />
      <div class="w-full mt-5 flex flex-col md:flex-row md:max-w-[1200px] mx-auto items-center">
        <div class="w-full rounded-xl bg-purple-th text-white p-5 relative z-40 shadow-xl">
          <div class="flex items-center">
            <img src="/img/taskin-logo.png" class="ml-3 w-[50px]" />
            ارتباط با ما
          </div>
          <div class="flex items-center mt-3 md:mt-7">
            <div class="text-white ml-3">
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
              شیراز - بلوار زند - جنب حلال احمر - ساختمان مرکزی دانشگاه علوم
              پزشکی شیراز -طبقه 8
            </p>
          </div>
          <div class="flex items-center mt-3">
            <div class="ml-3">
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
            <div class="ml-3">
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
            <div class="ml-3">
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
            <div class="ml-3">
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
            <img
              class="ml-2"
              src="https://img.icons8.com/small/25/ffffff/twitter.png"
            />
            <img
              class="ml-2"
              src="https://img.icons8.com/small/25/ffffff/facebook-new.png"
            />
            <img
              class="ml-2"
              src="https://img.icons8.com/small/25/ffffff/instagram-new.png"
            />
          </div>
        </div>
        <div class="w-full rounded-xl p-5 shadow-xl mt-5 md:pr-60 md:-mr-44 border-2 border-gray-200">
          <h1 class="font-bold text-center">تماس با ما</h1>
          <form class="w-full mt-3">
            <div class="flex flex-col items-start">
              <label>
                نام و نام خانوادگی :
              </label>
              <input
                type="text"
                class="mt-2 rounded-xl border-2 border-gray-200 w-full p-3 !outline-none"
                v-model="data.name"
                @input="check(data.name, 1)"
              />
              <p class="text-red-600 text-sm">
                {{ err_1 }}
              </p>
            </div>
            <div class="flex flex-col items-start mt-3">
              <label>
                پست الکترونیکی :
              </label>
              <input
                type="text"
                class="mt-2 rounded-xl border-2 border-gray-200 w-full p-3 !outline-none"
                v-model="data.email"
                @input="check(data.email, 2)"
              />
              <p class="text-red-600 text-sm">
                {{ err_2 }}
              </p>
            </div>
            <div class="flex flex-col items-start mt-3">
              <label>
                موضوع :
              </label>
              <input
                type="text"
                class="mt-2 rounded-xl border-2 border-gray-200 w-full p-3 !outline-none"
                v-model="data.title"
                @input="check(data.title, 3)"
              />
              <p class="text-red-600 text-sm">
                {{ err_3 }}
              </p>
            </div>
            <div class="flex flex-col items-start mt-3">
              <label>
                توضیحات :
              </label>
              <textarea
                type="text"
                class="mt-2 rounded-xl border-2 border-gray-200 w-full p-3 !outline-none"
                v-model="data.text"
                @input="check(data.text, 4)"
              />
              <p class="text-red-600 text-sm">
                {{ err_4 }}
              </p>
            </div>
            <button
              type="submit"
              @click.prevent=""
              class="rounded-xl border-2  text-white w-full p-3 mt-3 !outline-none"
              :class="valid ? 'bg-blue-th' : 'bg-gray-400'"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1458.1570546900987!2d52.5231570339918!3d29.62979548504267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb21272ffc98e21%3A0x46ddbb72c59373a1!2sShiraz%20University%20of%20Medical%20Sciences!5e0!3m2!1sen!2s!4v1632333113981!5m2!1sen!2s"
        class="w-full h-[200px] mt-5 rounded-xl shadow-xl md:h-[300px] md:mt-10"
        style="border:0;"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: "",
        email: "",
        title: "",
        text: ""
      },
      err_1: "",
      err_2: "",
      err_3: "",
      err_4: "",
      valid: false
    };
  },
  methods: {
    check(item, index) {
      switch (index) {
        case 1:
          item.length > 0
            ? (this.err_1 = "")
            : (this.err_1 = "پرکردن این فیلد الزامیست");
          break;
        case 2:
          item.length > 0
            ? /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(
                item
              )
              ? (this.err_2 = "")
              : (this.err_2 = "لطفا یک ایمیل معتبر وارد کنید")
            : (this.err_2 = "پرکردن این فیلد الزامیست");
          break;
        case 3:
          item.length > 0
            ? (this.err_3 = "")
            : (this.err_3 = "پرکردن این فیلد الزامیست");
          break;
        case 4:
          item.length > 0
            ? (this.err_4 = "")
            : (this.err_4 = "پرکردن این فیلد الزامیست");
          break;

        default:
          break;
      }
      const valid =
        !this.err_1 &&
        !this.err_2 &&
        !this.err_3 &&
        !this.err_4 &&
        this.data.name &&
        this.data.email &&
        this.data.title &&
        this.data.text;
      this.valid = !!valid;
    },
    send() {}
  }
};
</script>

<style lang="scss" scoped></style>

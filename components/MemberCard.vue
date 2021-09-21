<template>
  <div
    class="flex flex-col items-center w-[160px] h-[190px] border-2 rounded-xl shadow-lg p-3 ml-2 mt-2 cursor-pointer transition-all duration-200 transform hover:scale-105"
    :class="
      false
        ? ['border-purple-th', 'scale-105']
        : ['border-transparent', 'scale-100']
    "
  >
    <div
      class="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-gray-400"
    >
      <img src="/img/test-img3.png" class="w-full h-full object-cover" />
    </div>
    <h1 class="text-lg font-bold mt-3 text-purple-th">
      علی توکلی
    </h1>
    <p class="text-black">طراح</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

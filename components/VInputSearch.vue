<template>
  <div class="relative">
    <input
      type="text"
      placeholder="Search Facebook"
      class="input-color input-decorator text-center font-medium"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="absolute top-0 ml-2 mt-1 h-6 text-trueGray-500 font-medium w-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
input {
  min-width: 220px;
}

.input-color {
  @apply bg-trueGray-200 placeholder-trueGray-500 text-trueGray-600 focus:outline-none focus:ring-2 focus:ring-trueGray-400;
}

.input-decorator {
  @apply rounded-full h-8;
}
</style>

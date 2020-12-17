<template>
  <img
    src="https://ui-avatars.com/api/?name=Taufan Fadhilah&background=random"
    alt="avatar ui"
    :class="'rounded-full ' + (isBordered && 'border-4 border-blue-400')"
    :width="width"
    :height="height"
  />
</template>

<script>
export default {
  props: {
    isBordered: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 50,
    },
    height: {
      type: Number,
      default: 50,
    },
  },
}
</script>

<style></style>

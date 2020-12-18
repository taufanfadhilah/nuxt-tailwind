<template>
  <img
    :src="src"
    alt="avatar ui"
    :class="
      'rounded-full object-center object-cover ' +
      (isBordered && 'border-4 border-blue-400')
    "
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
    src: {
      type: String,
      default: 'https://ui-avatars.com/api/?name=Face Book&background=random',
    },
  },
}
</script>

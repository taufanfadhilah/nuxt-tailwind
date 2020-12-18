<template>
  <div
    class="bg-cover w-28 h-40 rounded-lg mr-3 p-2 relative"
    :style="{
      backgroundImage: 'url(' + image + ')',
    }"
  >
    <v-avatar :is-bordered="true" :width="35" :src="avatar" />
    <p class="text-white font-bold text-sm absolute bottom-1">
      {{ name }}
    </p>
  </div>
</template>

<script>
import VAvatar from './VAvatar.vue'
export default {
  components: { VAvatar },
  props: {
    avatar: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

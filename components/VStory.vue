<template>
  <div class="bg-story bg-cover w-28 h-40 rounded-lg mr-3 p-2 relative">
    <v-avatar :is-bordered="true" :width="35" />
    <p class="text-white font-bold text-sm absolute bottom-1">
      Taufan Fadhilah
    </p>
  </div>
</template>

<script>
import VAvatar from './VAvatar.vue'
export default {
  components: { VAvatar },
}
</script>

<style lang="postcss" scoped>
.bg-story {
  background-image: url('/dufan.jpg');
}
</style>

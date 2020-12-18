<template>
  <div class="flex mb-4">
    <v-avatar class="mr-3 h-10 w-10" :src="avatar" />
    <div>
      <div class="flex flex-row relative">
        <p class="font-bold tracking-wider">{{ name }}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-8 text-gray-500 -mt-1 absolute right-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>
      <div class="flex flex-row mb-1">
        <p class="text-xs text-gray-400 mr-2">Just Now &middot;</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-4 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div>
        <p class="text-gray-600 font-medium tracking-wide">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VAvatar from './VAvatar.vue'
export default {
  components: { VAvatar },
  props: {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
  },
}
</script>

<template>
  <div class="container p-3">
    <!-- START HEADER -->
    <v-logo />
    <div class="flex justify-between p-2">
      <v-avatar />
      <v-input-search class="m-2" />
      <img src="messenger.svg" alt="messeger icon" width="50" height="50" />
    </div>
    <!-- END HEADER -->
    <!-- START STORIES -->
    <div class="inline-flex overflow-x-auto my-5 pb-5 border-b-2">
      <v-story-add />
      <v-story />
      <v-story />
    </div>
    <!-- END STORIES -->
    <!-- START TIMELINE -->
    <div>
      <v-post />
      <v-post />
      <v-post />
    </div>
    <!-- END TIMELINE -->
  </div>
</template>

<script>
import VPost from '~/components/VPost.vue'
import VStory from '~/components/VStory.vue'
import VStoryAdd from '~/components/VStoryAdd.vue'
export default {
  components: { VStoryAdd, VStory, VPost },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

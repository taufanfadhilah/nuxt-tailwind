<template>
  <div class="container p-3">
    <!-- START HEADER -->
    <v-logo />
    <div class="flex justify-between p-2">
      <v-avatar
        :src="'https://tribune.net.ph/wp-content/uploads/2020/11/124093212_367446757865334_3018995726475526600_n.jpg'"
        class="h-14 w-14"
      />
      <v-input-search class="m-2" />
      <img src="messenger.svg" alt="messeger icon" width="50" height="50" />
    </div>
    <!-- END HEADER -->
    <!-- START STORIES -->
    <div class="flex overflow-scroll w-full my-5 pb-5 border-b-2">
      <v-story-add />
      <v-story
        :name="'Do San'"
        :avatar="'https://ui-avatars.com/api/?name=Do San&background=random'"
        :image="'https://img.harianjogja.com/posts/2019/07/12/1005192/whatsapp-image-2019-07-12-at-18.58.34.jpeg'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
      <v-story
        :name="'In Jae'"
        :avatar="'https://ui-avatars.com/api/?name=In Jae&background=random'"
        :image="'https://atourin.com/images/destination/jakarta/taman-impian-jaya-ancol-profile1584761151.png'"
      />
    </div>
    <!-- END STORIES -->
    <!-- START TIMELINE -->
    <div>
      <v-post
        :name="'Tailwind Indonesia'"
        :avatar="'https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg'"
        :content="'Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex , pt-4 , text-center'"
      />
      <v-post
        :name="'Nuxtjs Indonesia'"
        :avatar="'https://nuxtjs.org/logos/nuxt-icon.png'"
        :content="'The Intuitive Vue.js Framework. Nuxt has 42 repositories available. Follow their code on GitHub.'"
      />
      <v-post
        :name="'Laravel Indonesia'"
        :avatar="'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png'"
        :content="'Laravel is a web application framework with expressive, elegant syntax. We\'ve already laid the foundation — freeing you to create without sweating '"
      />
    </div>
    <!-- END TIMELINE -->
  </div>
</template>

<script>
import VAvatar from '~/components/VAvatar.vue'
import VPost from '~/components/VPost.vue'
import VStory from '~/components/VStory.vue'
import VStoryAdd from '~/components/VStoryAdd.vue'
export default {
  components: { VStoryAdd, VStory, VPost, VAvatar },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');

html {
  font-family: 'Noto Sans JP', sans-serif;
}
</style>

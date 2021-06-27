<template>
  <div class="h-screen flex flex-col items-center justify-center bg-primary lg:flex-row text-white">
    <div>
      <img src="/images/ashish-dhamala.jpg"
           alt=""
           class="w-64 h-64 lg:w-96 lg:h-96 rounded-full border-4 border-solid border-white">
    </div>

    <div class="mt-4 lg:mt-0 lg:ml-8">
      <div class="text-4xl lg:text-6xl">Ashish Dhamala</div>
      <div class="tracking-widest uppercase text-gray-200">Loves web development</div>
      <div class="mt-4 flex items-center space-x-4">
        <a href="https://www.youtube.com/c/laratips"
           target="_blank">
          <svgs name="youtube"
                class="h-8 w-8 hover:text-gray-200" />
        </a>

        <a href="https://www.facebook.com/laratipsofficial"
           target="_blank">
          <svgs name="facebook"
                class="h-8 w-8 hover:text-gray-200" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Svgs from '../components/Svgs.vue'
export default defineComponent({
    components: { Svgs },
    name: 'Home',
})
</script>
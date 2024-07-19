<template>
  <div>
  <!-- Top action panel of crud -->
    <div class="flex title-bar border-b border-gray-200">
      <!-- Title of crud -->
      <div class="flex w-64 h-10 py-1 title " >
        <Icon size="25" class="vcb-icon" >
          <svg width="48.834" height="73.242" viewBox="0 0 48.834 73.242" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="#000" style="stroke:#000;stroke-width:0.25mm;fill:#000"><path d="M 8.304 39.063 L 8.304 73.242 L 0.004 73.242 L 0.004 39.063 A 35.146 35.146 0 0 1 1.214 29.401 Q 4.317 18.567 15.376 15.689 A 35.969 35.969 0 0 1 24.418 14.648 A 35.146 35.146 0 0 1 34.079 15.859 Q 44.913 18.962 47.791 30.021 A 35.969 35.969 0 0 1 48.832 39.062 L 48.832 73.242 L 40.531 73.242 L 40.531 39.063 A 26.196 26.196 0 0 0 39.767 32.43 Q 37.022 21.973 24.418 21.973 Q 11.566 21.973 8.965 32.844 A 26.791 26.791 0 0 0 8.304 39.063 Z M 0.004 0 L 48.832 0 L 48.832 7.324 L 0.004 7.324 L 0.004 0 Z" vector-effect="non-scaling-stroke"/></g></svg>
        </Icon>
        <div class="font-muol ml-2 leading-9" v-html="model.title" ></div>
      </div>
      <!-- Actions button of the crud -->
      <div class="flex-grow action-buttons flex-row-reverse flex">
        <router-link to="/kletters/playwithletters" class="border border-gray-400 rounded-full w-8 h-8 ml-2  hover:border-blue-500" >
          <svg class="w-4 h-4 mt-2 mx-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99.09 99.09 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88c26 9 49.25-9.61 71.27-37c25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16c41.02-14.01 40.44-79.13 21.43-165.04z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><circle cx="292" cy="224" r="20" fill="currentColor"></circle><path d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288z" fill="currentColor"></path><circle cx="336" cy="180" r="20" fill="currentColor"></circle><circle cx="380" cy="224" r="20" fill="currentColor"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 176v96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 224h-96"></path></svg>
        </router-link>
        <router-link to="/kletters/vowels" class="border border-gray-400 rounded-full w-8 h-8 ml-2 hover:border-blue-500" >
          <svg class="w-4 h-4 mt-2 mx-auto cursor-pointer " width="29.299" height="73.245" viewBox="0 0 29.299 73.245" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="#000" style="stroke:#000;stroke-width:0.25mm;fill:#000"><path d="M 0 7.327 L 0 0.003 L 9.766 0.003 Q 25.264 0.003 28.464 12.301 A 28.775 28.775 0 0 1 29.297 19.534 L 29.297 73.245 L 20.996 73.245 L 20.996 19.534 Q 20.996 9.164 12.891 7.604 A 16.549 16.549 0 0 0 9.766 7.327 L 0 7.327 Z" vector-effect="non-scaling-stroke"/></g></svg>
        </router-link>
      </div>
      <!-- Filter panel of crud -->
      <div class="filters-bar"></div>
    </div>
    <!-- Table of crud -->
    <div class="vcb-table-panel m-8">
      <div class="grid grid-cols-1 text-green-700 font-ktr px-4 py-8" >
        <div v-for="(row,rindex) in consonants" :key="rindex" class="grid grid-cols-8 gap-4 consonant-row m-4 text-4xl " >
          <div v-for="(column,cindex) in row" :key="cindex" class="relative consonant-column border p-8 rounded text-blue-500 text-center w-full bg-white cursor-pointer hover:shadow-lg hover:border-green-300 " >
            {{ column }}
            <svg @click="playSound('')" class="absolute right-2 top-2 w-6 h-6 text-gray-500 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><g fill="none"><path d="M25.081 6.419C26.208 5.408 28 6.207 28 7.72V40.28c0 1.514-1.792 2.313-2.919 1.302l-8.206-7.366A4.75 4.75 0 0 0 13.702 33H9a5.25 5.25 0 0 1-5.25-5.25v-7.5C3.75 17.35 6.1 15 9 15h4.702a4.75 4.75 0 0 0 3.173-1.216l8.206-7.366zm.419 2.983l-6.955 6.244a7.25 7.25 0 0 1-4.843 1.854H9a2.75 2.75 0 0 0-2.75 2.75v7.5A2.75 2.75 0 0 0 9 30.5h4.702a7.25 7.25 0 0 1 4.843 1.855L25.5 38.6V9.402zm10.838-1.006a1.25 1.25 0 0 1 1.766-.058h.001l.01.01l.019.018a6.104 6.104 0 0 1 .262.267c.17.18.404.441.682.783a20.409 20.409 0 0 1 2.016 3.005C42.553 15.059 44 18.953 44 24c0 5.047-1.447 8.94-2.906 11.58a20.413 20.413 0 0 1-2.016 3.004a14.529 14.529 0 0 1-.885.992a6.428 6.428 0 0 1-.06.058l-.018.018l-.006.006l-.003.002v.001l.22-.22c.107-.107.143-.144-.222.22a1.25 1.25 0 0 1-1.71-1.822v-.001l.004-.003a5.035 5.035 0 0 0 .179-.183c.131-.14.326-.355.563-.647a17.914 17.914 0 0 0 1.766-2.635C40.198 32.034 41.5 28.553 41.5 24c0-4.553-1.302-8.034-2.594-10.37a17.914 17.914 0 0 0-1.766-2.636a12.042 12.042 0 0 0-.71-.798a5.035 5.035 0 0 0-.032-.032l-.003-.003l-.002-.002a1.25 1.25 0 0 1-.055-1.764zM32.334 14.4a1.25 1.25 0 0 1 1.767-.065l.001.001l.002.002l.005.005l.014.012l.042.041a10.274 10.274 0 0 1 .59.644c.365.436.846 1.072 1.325 1.893A13.977 13.977 0 0 1 38 24c0 3.023-.963 5.426-1.92 7.068c-.48.82-.96 1.457-1.326 1.893a10.228 10.228 0 0 1-.59.644l-.019.019l-.022.021l-.014.013l-.005.005l-.002.003H34.1a1.25 1.25 0 0 1-1.705-1.828l.002-.002l.016-.016c.017-.017.046-.045.085-.086c.078-.081.196-.209.34-.381c.29-.346.685-.866 1.081-1.545A11.477 11.477 0 0 0 35.5 24c0-2.477-.787-4.449-1.58-5.807c-.396-.68-.79-1.2-1.08-1.545a7.79 7.79 0 0 0-.426-.467l-.017-.017l.001.001a1.25 1.25 0 0 1-.064-1.765zm5.781-6.052l-.01-.01l.001.002l.003.002l.006.006zm-4.014 5.986l.064.062a.446.446 0 0 1-.064-.062z" fill="currentColor"></path></g></svg>
            <!-- <div class="absolute left-0 top-0 right-0 bottom-0 bg-gray-200 bg-opacity-50 bg-center bg-contain bg-no-repeat" :style=" 'background-image: url(/src/assets/consonants/'+column+'.jpg);' + '' " > </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- End of change password -->
  </div>
</template>
<script>
import { reactive, ref , computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import QrcodeVue from 'qrcode.vue'
import Vue3Barcode from 'vue3-barcode'
import { Icon } from '@vicons/utils'
import { useDialog, useMessage, useNotification } from 'naive-ui'
import soundUrl from './../../../assets/sounds/mouseclick.mp3'

export default {
  name: "User" ,
  components: {
    QrcodeVue ,
    Vue3Barcode,
    Icon
  },
  setup(){
    var store = useStore()
    const dialog = useDialog()
    const message = useMessage()
    const notify = useNotification()

    /**
     * Variables
     */    
    var model = reactive( {
      name: "consonant" ,
      title: "ព្យញ្ជនៈខ្មែរ"
    })

    const visibleConsonant = ref(null)
    const consonants = ref([
      [ "ក" , "ខ" , "គ" , "ឃ" , "ង" ],
      [ "ច" , "ឆ" , "ជ" , "ឈ" , "ញ" ],
      [ "ដ" , "ឋ" , "ឌ" , "ឍ" , "ណ"],
      [ "ត" , "ថ" , "ទ" , "ធ" , "ន"],
      [ "ប" , "ផ" , "ព" , "ភ" , "ម"],
      [ "យ" , "រ" , "វ" , "ល" , "ស" , "ហ" , "ឡ" , "អ" ]
    ])


    function updateConsonant(){
      visibleConsonant.value = consonants.value[  Math.floor(Math.random() * consonants.value.length ) ]
    }

    setInterval( updateConsonant , 6000 )

    function playSound(){
      console.log( soundUrl )
      var audio = new Audio(soundUrl)
      audio.play()
    }

    return {
      /**
       * Variables
       */
      model ,
      visibleConsonant ,
      consonants ,
      /**
       * Functions
       */
      updateConsonant ,
      playSound
    }
  }
}

</script>

<style scoped>
</style>
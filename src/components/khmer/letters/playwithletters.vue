<template>
  <div>
  <!-- Top action panel of crud -->
    <div class="flex title-bar border-b border-gray-200">
      <!-- Title of crud -->
      <div class="flex w-64 h-10 py-1 title " >
        <Icon size="25" class="vcb-icon" >
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99.09 99.09 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88c26 9 49.25-9.61 71.27-37c25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16c41.02-14.01 40.44-79.13 21.43-165.04z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><circle cx="292" cy="224" r="20" fill="currentColor"></circle><path d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288z" fill="currentColor"></path><circle cx="336" cy="180" r="20" fill="currentColor"></circle><circle cx="380" cy="224" r="20" fill="currentColor"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 176v96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 224h-96"></path></svg>
        </Icon>
        <div class="font-muol ml-2 leading-9" v-html="model.title" ></div>
      </div>
      <!-- Actions button of the crud -->
      <div class="flex-grow action-buttons flex-row-reverse flex">
        <router-link to="/kletters/consonants" class="border border-gray-400 rounded-full w-8 h-8 ml-2 hover:border-blue-500" >
          <svg class="w-4 h-4 mt-2 mx-auto cursor-pointer "  width="48.834" height="73.242" viewBox="0 0 48.834 73.242" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="#000" style="stroke:#000;stroke-width:0.25mm;fill:#000"><path d="M 8.304 39.063 L 8.304 73.242 L 0.004 73.242 L 0.004 39.063 A 35.146 35.146 0 0 1 1.214 29.401 Q 4.317 18.567 15.376 15.689 A 35.969 35.969 0 0 1 24.418 14.648 A 35.146 35.146 0 0 1 34.079 15.859 Q 44.913 18.962 47.791 30.021 A 35.969 35.969 0 0 1 48.832 39.062 L 48.832 73.242 L 40.531 73.242 L 40.531 39.063 A 26.196 26.196 0 0 0 39.767 32.43 Q 37.022 21.973 24.418 21.973 Q 11.566 21.973 8.965 32.844 A 26.791 26.791 0 0 0 8.304 39.063 Z M 0.004 0 L 48.832 0 L 48.832 7.324 L 0.004 7.324 L 0.004 0 Z" vector-effect="non-scaling-stroke"/></g></svg>
        </router-link>
        <router-link to="/kletters/vowels" class="border border-gray-400 rounded-full w-8 h-8 ml-2 hover:border-blue-500" >
          <svg class="w-4 h-4 mt-2 mx-auto cursor-pointer " width="29.299" height="73.245" viewBox="0 0 29.299 73.245" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="#000" style="stroke:#000;stroke-width:0.25mm;fill:#000"><path d="M 0 7.327 L 0 0.003 L 9.766 0.003 Q 25.264 0.003 28.464 12.301 A 28.775 28.775 0 0 1 29.297 19.534 L 29.297 73.245 L 20.996 73.245 L 20.996 19.534 Q 20.996 9.164 12.891 7.604 A 16.549 16.549 0 0 0 9.766 7.327 L 0 7.327 Z" vector-effect="non-scaling-stroke"/></g></svg>
        </router-link>
      </div>
      <!-- Filter panel of crud -->
      <div class="filters-bar"></div>
    </div>
    <!-- Table of crud -->
    <div class="vcb-table-panel relative w-full">
      <div class="flex justify-center w-full  p-4 text-green-700 font-ktr pt-16"  >
        <span class="border-4 p-4 w-2/5 rounded m-8 text-blue-500" style="font-size: 200pt; " >{{ visibleConsonant }}</span>
        <span class="border-4 p-4 w-2/5 rounded m-8 text-blue-500" style="font-size: 200pt; " >{{ visibleVowel }}</span>
      </div>
      
      <div class="flex justify-center w-full p-4 text-green-700 font-ktr pt-16" style="font-size: 100pt; " >
        <span class=" p-8 px-16 w-60 h-60 rounded m-8 text-blue-500" >{{ visibleConsonant }}</span>
        <span class=" p-8 px-16 m-8 " >+</span> 
        <span class=" p-8 px-16 m-8 text-green-500 " >{{ visibleVowel }}</span>
        <span class=" p-8 px-16 m-8" >=</span>
        <span class=" p-8 px-16 m-8 text-yellow-500" >{{ visibleConsonant+visibleVowel }}</span>
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
      name: "playwithletters" ,
      title: "ល្បែង ព្យញ្ជនៈ និង ស្រះនិស្ស័យ ខ្មែរ"
    })

    const visibleVowel = ref(null)
    const vowels = ref([
      "ា" , "ិ" , "ី" , "ឹ" , "ឺ" ,
      "ុ" , "ូ" , "ួ" , "ើ" , "ឿ" ,
      "ៀ" , "េ" , "ែ" , "ៃ" , "ោ" ,
      "ៅ" , "ុំ" , "ំ" , "ាំ" , "ះ" ,
      "ិះ" , "ុះ" , "េះ" , "ោះ"
    ])
    
    const visibleConsonant = ref(null)
    const consonants = ref([
      "ក" , "ខ" , "គ" , "ឃ" , "ង" ,
      "ច" , "ឆ" , "ជ" , "ឈ" , "ញ" ,
      "ដ" , "ឋ" , "ឌ" , "ឍ" , "ណ" ,
      "ត" , "ថ" , "ទ" , "ធ" , "ន" ,
      "ប" , "ផ" , "ព" , "ភ" , "ម" ,
      "យ" , "រ" , "វ" , "ល" , "ស" , "ហ" , "ឡ" , "អ"
    ])

    const visibleIndependentVowel = ref(null)
    const independentVowels = ref([
      "ឥ" , "ឦ" , "ឧ" , "ឩ" , "ឪ" ,
      "ឫ" , "ឬ" , "ឭ" , "ឮ" , "ឯ" ,
      "ឰ" , "ឱ" , "ឲ" , "ឳ"
    ])

    const visibleDiacritic = ref(null)
    const diacritics = ref([
      "ំ" , "ះ" , "ៈ" , "៉" , "៊" ,
      "ុ" , "់" , "៌" , "៍" , "៎" ,
      "៏" , "័" , "៑"
    ])

    const visibleNumber = ref(null)
    const numbers = ref([
      "១" , "២" , "៣" , "៤" , "៥" ,
      "៦" , "៧" , "៨" , "៩" , "០"
    ])

    const visiblePunctuation = ref(null)
    const punctuations = ref([
      "។" , "៘" , "ៗ" , "៕" , "៚" , "៙" , "៖" 
    ])


    function updateLetters(){
      visibleVowel.value = vowels.value[  Math.floor(Math.random() * vowels.value.length ) ]
      visibleConsonant.value = consonants.value[  Math.floor(Math.random() * consonants.value.length ) ]
    }

    setInterval( updateLetters , 6000 )

    return {
      /**
       * Variables
       */
      model ,
      visibleVowel ,
      vowels ,
      visibleConsonant ,
      consonants ,
      visibleIndependentVowel ,
      independentVowels ,
      visibleDiacritic ,
      diacritics ,
      visibleNumber ,
      numbers ,
      visiblePunctuation ,
      punctuations ,
      /**
       * Functions
       */
      updateLetters
    }
  }
}

</script>

<style scoped>
</style>
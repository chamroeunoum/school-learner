<template>
  <div class="flex flex-wrap content-center" >
        <!-- Start transaction of the apps -->
        <transition  name="fade" mode="out-in">
            <!-- Apps -->
            <div v-if="toggleApps" class="fixed top-0 bottom-0 left-0 right-0 z-40 w-full px-4 py-24 bg-gray-800 sm:px-4 md:px-4 lg:p-24 xl:p-24 bg-opacity-95">
                <!-- Search -->
                <!-- <div class='absolute top-0 left-0 right-0 flex flex-wrap content-center w-2/5 py-4 m-auto md:w-2/5 xl:w-1/5 lg:w-1/5' >
                    <n-input 
                      suffix="ios-search" 
                      placeholder="ស្វែងរក ..." 
                      clearable 
                      v-model:value="search" 
                      @keyup="filterApps()"  
                    >
                      <template #prefix>
                        <n-icon>
                          <IosSearch />
                        </n-icon>
                      </template>
                    </n-input>
                </div> -->
                <!-- End search -->
                <!-- Apps -->
                <div class="flex apps">
                    <div v-for="(app, index) in matchedApps.value" :key="index" class="w-32 h-32 text-center p4 inline-block ">
                        <div @click="toggleApps=false;$router.push(app.url)" class='w-full dashboard-widget-link cursor-pointer ' >
                          <IconConfigProvider v-if="app.svg == undefined || app.svg == '' " size="64">
                            <Icon class='text-gray-100 ' >
                              <component :is="app.icon" />
                            </Icon>
                          </IconConfigProvider>
                          <Icon v-if="app.svg != undefined && app.svg != '' " size="55" class="my-2" v-html="app.svg" ></Icon>
                          <div class="font-pvh p-2 m-auto text-sm text-center text-gray-100" v-html="app.name" ></div>
                        </div>
                    </div>
                </div>
                <!-- End apps -->
            </div>
        </transition>
        <!-- End transaction of the apps -->
        <!-- Apps launcher -->
        <div class='fixed -bottom-14 h-12 left-0 right-0 z-50 flex flex-wrap justify-center w-full py-4' >
            <!-- Apps icon -->
            <div @click="toggleApps = !toggleApps" class="w-12 h-12 p-2 -mt-20 mx-2 text-center bg-white rounded-full shadow-md border border-gray-300 cursor-pointer " >
                <n-icon class='text-blue-700 ' size="30" >
                  <Apps />
                </n-icon>
            </div>
            <!-- <div @click="logout()" class="w-12 h-12 p-2 -mt-20 mx-2 text-center bg-white rounded-full shadow-md border border-gray-300 cursor-pointer " >
                <n-icon class='text-red-700 ' size="30" >
                  <Power20Regular />
                </n-icon>
            </div> -->
        </div>
        <!-- Profile launcher -->
        <div class='fixed top-0 right-0 flex flex-wrap content-center p-2' >

        </div>
        <!-- Logout -->
        <div v-if="toggleApps" class='fixed top-0 right-0 flex flex-wrap content-center p-2' >

        </div>
    </div>
</template>

<script>
import { reactive, ref , computed } from 'vue'
import { IosSearch } from '@vicons/ionicons4'
import { SupervisedUserCircleOutlined , SupervisedUserCircleSharp } from "@vicons/material"
import { Apps, SpeedometerOutline, StorefrontOutline } from '@vicons/ionicons5'
import { isAuth, authLogout , isAdmin , getUser } from './../../plugins/authentication'
import { Receipt2 } from '@vicons/tabler'
import { Receipt20Regular , Power20Regular, DocumentPdf24Regular, MoneyHand20Regular} from '@vicons/fluent'
import { UserMultiple , ParentChild } from '@vicons/carbon'
import { BrandProducthunt , BuildingWarehouse} from '@vicons/tabler'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useDialog , useMessage } from 'naive-ui'
import { Icon, IconConfigProvider } from "@vicons/utils";

export default {  
  components: {
    Icon, IconConfigProvider ,
    IosSearch,
    SupervisedUserCircleOutlined ,
    SupervisedUserCircleSharp ,
    Apps ,
    UserMultiple ,
    Receipt20Regular ,
    Receipt2 ,
    SpeedometerOutline ,
    Power20Regular ,
    DocumentPdf24Regular , MoneyHand20Regular ,
    ParentChild , 
    StorefrontOutline ,
    BrandProducthunt , BuildingWarehouse
  } ,
  name: 'dock' ,
  props: [
      'active'
  ],
  setup(){
    let search = ref(null)
    let matchedApps = computed( () => {
        let matched = ref([])
        // if( search.value != '' && search.value != null && search.value.trim() != '' ){
        //   matched.value = apps.value.filter( app => app.name.indexOf( search.value ) != -1 && app.roles.includes( parseInt(getUser().role )) )
        // }else{
        //   matched.value = apps.value.filter( app => app.roles.includes( parseInt(getUser().role) ) )
        // }
        matched .value= apps.value
        // console.log( "Role : " + getUser().role )
        // console.log( matched.value.length )
        return matched
        // search.value != '' || search.value != null ? apps :
        // ( search.value.trim() != '' ?
        //   apps.value.filter( app => app.name.indexOf( search.value ) != -1 ) :
        //   apps
        // )
      }
    )
    let apps = ref([
      {
          url: '/home' ,
          icon: '' ,
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="2"></circle><path d="M13.45 11.55L15.5 9.5"></path><path d="M6.4 20a9 9 0 1 1 11.2 0z"></path></g></svg>' ,
          name: 'ផ្ទាំងព័ត៌មាន',
          roles: [
              1, // Admin
              // 2, // Super
              // 3, // Auditor
              // 4, // Member
              // 5 // Customer
          ]
      },
      {
          url: '/kletters/consonants' ,
          icon: '' ,
          svg: '<svg width="48.834" height="73.242" viewBox="0 0 48.834 73.242" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#FFF" stroke-width="0.25mm" fill="#FFF" style="stroke:#FFF;stroke-width:0.25mm;fill:#FFF"><path d="M 8.304 39.063 L 8.304 73.242 L 0.004 73.242 L 0.004 39.063 A 35.146 35.146 0 0 1 1.214 29.401 Q 4.317 18.567 15.376 15.689 A 35.969 35.969 0 0 1 24.418 14.648 A 35.146 35.146 0 0 1 34.079 15.859 Q 44.913 18.962 47.791 30.021 A 35.969 35.969 0 0 1 48.832 39.062 L 48.832 73.242 L 40.531 73.242 L 40.531 39.063 A 26.196 26.196 0 0 0 39.767 32.43 Q 37.022 21.973 24.418 21.973 Q 11.566 21.973 8.965 32.844 A 26.791 26.791 0 0 0 8.304 39.063 Z M 0.004 0 L 48.832 0 L 48.832 7.324 L 0.004 7.324 L 0.004 0 Z" vector-effect="non-scaling-stroke"/></g></svg>' ,
          name: 'ព្យញ្ជនៈខ្មែរ',
          roles: [
              1, // Admin
              // 2, // Super
              // 3, // Auditor
              // 4, // Member
              // 5 // Customer
          ]
      },
      {
          url: '/kletters/vowels' ,
          icon: '' ,
          svg: '<svg width="29.299" height="73.245" viewBox="0 0 29.299 73.245" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#FFF" stroke-width="0.25mm" fill="#FFF" style="stroke:#FFF;stroke-width:0.25mm;fill:#FFF"><path d="M 0 7.327 L 0 0.003 L 9.766 0.003 Q 25.264 0.003 28.464 12.301 A 28.775 28.775 0 0 1 29.297 19.534 L 29.297 73.245 L 20.996 73.245 L 20.996 19.534 Q 20.996 9.164 12.891 7.604 A 16.549 16.549 0 0 0 9.766 7.327 L 0 7.327 Z" vector-effect="non-scaling-stroke"/></g></svg>' ,
          name: 'ស្រះនិស្ស័យខ្មែរ',
          roles: [
              1, // Admin
              // 2, // Super
              // 3, // Auditor
              // 4, // Member
              // 5 // Customer
          ]
      },
      {
          url: '/enletters/phonics' ,
          icon: '' ,
          svg: '<svg width="53.201" height="54.402" viewBox="0 0 53.201 54.402" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0.25mm" fill="#000" style="stroke:#FFF;stroke-width:0.25mm;fill:#FFF"><path d="M 39.101 5.4 L 39.101 1.2 L 47.301 1.2 L 47.301 40.6 A 12.15 12.15 0 0 0 47.402 42.236 Q 47.734 44.67 49.151 45.55 Q 51.001 46.7 53.201 46.7 L 51.301 53.7 A 17.722 17.722 0 0 1 47.036 53.228 Q 41.399 51.828 39.804 46.28 A 13.59 13.59 0 0 1 39.701 45.9 A 21.307 21.307 0 0 1 36.591 49.326 A 28.498 28.498 0 0 1 33.451 51.75 Q 29.501 54.4 23.401 54.4 Q 16.901 54.4 11.601 51.1 A 22.947 22.947 0 0 1 4.187 43.574 A 27.923 27.923 0 0 1 3.151 41.75 A 27.228 27.228 0 0 1 0.52 33.808 A 36.644 36.644 0 0 1 0.001 27.5 A 33.142 33.142 0 0 1 0.997 19.232 A 27.968 27.968 0 0 1 3.151 13.5 Q 6.301 7.3 11.851 3.65 A 22.297 22.297 0 0 1 23.045 0.044 A 27.388 27.388 0 0 1 24.601 0 A 22.584 22.584 0 0 1 29.394 0.491 A 18.703 18.703 0 0 1 32.751 1.55 A 26.002 26.002 0 0 1 37.037 3.844 A 22.103 22.103 0 0 1 39.101 5.4 Z M 38.301 39.9 L 38.301 12 Q 35.601 10.1 32.351 8.95 Q 29.101 7.8 25.501 7.8 A 15.924 15.924 0 0 0 20.529 8.554 A 14.024 14.024 0 0 0 17.051 10.25 A 16.301 16.301 0 0 0 12.031 15.674 A 19.962 19.962 0 0 0 11.301 17.05 A 20.663 20.663 0 0 0 9.547 22.727 A 27.678 27.678 0 0 0 9.201 27.2 Q 9.201 32.8 11.301 37.15 A 17.602 17.602 0 0 0 14.406 41.696 A 15.697 15.697 0 0 0 17.101 43.95 Q 20.801 46.4 25.401 46.4 Q 29.201 46.4 32.601 44.55 Q 36.001 42.7 38.301 39.9 Z" vector-effect="non-scaling-stroke"/></g></svg>' ,
          name: 'Phonics',
          roles: [
              1, // Admin
              // 2, // Super
              // 3, // Auditor
              // 4, // Member
              // 5 // Customer
          ]
      },
    ])
    /** End app metadata */
    let toggleApps = ref(false)
    let user = reactive({})

    function filterApps(){
      if( search.value != '' && search.value != null && search.value.trim() != '' ){
        matchedApps = apps.value.filter( app => app.name.indexOf( search.value ) != -1 && app.roles.includes( parseInt(getUser().role) ) )
      }else{
        matchedApps = apps.value.filter( app => app.roles.includes( parseInt(getUser().role) ) )
      }
    }
    function toggleAppFunc(){
        toggleApps = !toggleApps
    }
    function logoutConfirmation(){
        console.log( "confirm before logout" )
    }

    const dialog = useDialog();
    const message = useMessage();
    const store = useStore();
    const router = useRouter()
    async function logout(){
      const d = dialog.warning({
        title: 'ចាកចេញ',
        content: 'តើអ្នកចង់ចាកចេញមែនទេ?',
        positiveText: 'បាទ / ចាស',
        negativeText: 'ទេ',
        onPositiveClick: () => {
          /**
           * Check whether the user has logged out already
           */
          if( isAuth() ) {
            /**
             * Show confirm dialog
             */
            d.loading = true
            store.dispatch('auth/logout').then( res => {
              authLogout()
              message.success("អ្នកបានចាកចេញដោយជោគជ័យ។")
              d.loading = false
              router.push('/login')
            }).catch( err => {
              // console.log( err )
              authLogout()
              router.push('/login')
            })
          }else{
            router.push('/login')
          }
        },
        // onNegativeClick: () => {
        //   message.error('Not Sure')
        // }
      })
    }
    function isAdminAccount(){
      return isAdmin()
    }

    return {
      logout ,
      search ,
      matchedApps ,
      apps ,
      toggleApps ,
      user ,
      filterApps ,
      toggleAppFunc ,
      logoutConfirmation ,
      isAdminAccount
    }
  },
  mounted() {
      // this.user = localStorage.getItem( 'user' ) ? JSON.parse( localStorage.getItem( 'user' ) ) : null
      // this.search= ""
      // if( this.user !== null && this.user.roles !== null && this.user.roles.length > 0 ){
      //     this.matchedApps = []
      //     for(var i in this.apps ){
      //         for(var j in this.apps[i].roles ){
      //             let app = this.user.roles.find( role => role == this.apps[i].roles[j] )
      //             app !== undefined ? this.matchedApps.push( this.apps[i] ) : false
      //         }
      //     }
      //     return true
      // }else{
      //     console.log( "ព័ត៌មានសម្រាប់ការចូលប្រើប្រាស់ មិនគ្រប់គ្រាន់។ សូមចូលប្រើម្ដងទៀត ។ សូមអរគុណ !" )
      // }
  }
}
</script>
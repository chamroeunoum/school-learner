<template>
  <div class="relative w-full " oncontextmenu="return false; " >
    <!-- Top menu -->
    <div class="main-page p-4">
      <router-view ></router-view>  
    </div>
    <Dock />
  </div>
</template>

<script>
import { ref } from 'vue'
import Dock from './dock.vue'
export default {
  name: "DashboardPage", 
  components: { 
    Dock
  },
  setup() {
      return {};
  },
}
</script>
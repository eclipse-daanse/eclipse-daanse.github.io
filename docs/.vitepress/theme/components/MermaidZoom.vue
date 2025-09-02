<template>
  <div class="mz-wrapper">
    <VueZoomable
        style="width: 700px; height: 500px;
        border: 1px solid #ddd"
        selector=".mermaid"
        :minZoom="3"
        :maxZoom="30"
        :enableControlButton="false"
        :buttonPanStep="13"
        :buttonZoomStep="5"
        ref="zoomRef"
        controls="none"
        class="mz-zoomable"
    >
        <slot />

    </VueZoomable>
<div class="controll__buttons mz-controls">
    <ul class="controll">

      <li @click="fitToScreen" class="list-item">
        <a data-v-3ba139de="">
          <!--<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize-2" data-v-3ba139de="">
            <polyline points="4 14 10 14 10 20" data-v-3ba139de="">
            </polyline><polyline points="20 10 14 10 14 4" data-v-3ba139de="">

          </polyline><line x1="14" y1="10" x2="21" y2="3" data-v-3ba139de=""></line><line x1="3" y1="21" x2="10" y2="14" data-v-3ba139de=""></line
          </svg>-->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round"
               class="feather feather-maximize-2" data-v-3ba139de data-v-9e46fadd>
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </a>
      </li>
      <!--<li @click="fitToScreen" class="list-item">
        <a data-v-3ba139de=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-in" data-v-3ba139de=""><circle cx="11" cy="11" r="8" data-v-3ba139de=""></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-3ba139de=""></line><line x1="11" y1="8" x2="11" y2="14" data-v-3ba139de=""></line><line x1="8" y1="11" x2="14" y2="11" data-v-3ba139de=""></line></svg></a>
      </li>
      <li @click="fitToScreen" class="list-item">
      <svg data-v-3ba139de="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-out"><circle data-v-3ba139de="" cx="11" cy="11" r="8"></circle><line data-v-3ba139de="" x1="21" y1="21" x2="16.65" y2="16.65"></line><line data-v-3ba139de="" x1="8" y1="11" x2="14" y2="11"></line></svg>
      </li>-->
    </ul>
</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import VueZoomable from 'vue-zoomable'


const containerRef = ref<HTMLElement | null>(null)



function fitToScreen() {
  const container = document.querySelector('.mz-zoomable');
  const container2 = document.querySelector('.mz-wrapper');
  if(!container.classList.contains('fit')){
    container.classList.add('fit')
    container2.classList.add('fit')
  }else{
    container.classList.remove('fit')
    container2.classList.remove('fit')
  }

}

onMounted(() => {
  // 1) Falls das SVG schon da ist (z. B. bei Hot Reload)

})

onBeforeUnmount(() => {

})
</script>

<style scoped>
.mz-zoomable.fit{
  width: auto!important;
  height: auto!important;
  position: fixed;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  z-index: 1000;
  background: #fff;
}
.mz-wrapper{
  position: relative;
}
.mz-wrapper.fit{
  position: fixed;
  z-index: 1000;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
}
.mz-controls{
  position: absolute;
  top: 0;
  right: 17px;
  z-index: 1001;
}
.list-item{
  display: block;
  line-height: 1;
  border-bottom: 1px solid #dee2e6;
  padding: 12px;
  list-style: none;

}
.controll{
  box-shadow: 0 5px 25px #32325d0d, 0 5px 15px #0000000d;
  padding: 0;
  background: #fff;
}

</style>

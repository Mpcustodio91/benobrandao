<template>
  <div v-if="links.length > 3">
    <div class="flex flex-wrap -mb-1">
      <template v-for="(link, key) in links">
        
        <div v-if="link.url === null" :key="key+1" class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded" v-html="link.label" />
        <inertia-link v-else :key="key" 
        class="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500" 
        :class="{ 'bg-white': link.active }" 
        :href="link.url" 
        v-html="link.label" />
      </template>
    </div>
    <!-- <div class="card-footer clearfix">
      <ul class="pagination pagination-sm m-0 float-right" v-for="(link, key) in links" :key="key">
        <li class="page-item">
          <div v-if="link.url === null" :key="key+1" class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded" v-html="link.label" />
           <inertia-link v-else class="page-link" :href="link.url" v-html="link.label" />
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import {InertiaLink} from "@inertiajs/inertia-vue3";

export default {
  props: {
    links: Array,
  },
  components : {
    InertiaLink
  }
}
</script>
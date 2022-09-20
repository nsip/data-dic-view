import { ref } from 'vue';

export const selkind = ref('entity') // which kind for current selection 'entity' or 'collection'
export const aim = ref('')           // what item want to be searched
export const entities = ref([])      // name list of entity
export const collections = ref([])   // name list of collection 
export const selclspath = ref(['select an item from below list to show its class path'])    // current selected item's class path
export const selchildren = ref([])   // current selected item's children
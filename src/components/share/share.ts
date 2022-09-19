import { ref } from 'vue';

export const sel = ref('entity')    // which kind for current selection 'entity' or 'collection'
export const aim = ref('')          // what item want to be searched
export const entities = ref([])     // name list of entity
export const collections = ref([])  // name list of collection 
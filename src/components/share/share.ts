import { ref, reactive } from 'vue';
import { fetchNoBody, mEmpty } from './fetch';
import { entityType } from './Entity';
import { collectionType } from './Collection';

//////////////////////////////////////////////////////////////////////////////////////

export const selKind = ref('entity')                        // which kind for current selection 'entity' or 'collection'
export const selEntity = reactive(new entityType())         // entity content
export const selCollection = reactive(new collectionType()) // collection content
export const aim = ref('')                                  // what item want to be search
export const listEntity = ref([])                           // name list of entity
export const listCollection = ref([])                       // name list of collection 
export const selClsPath = ref([])                           // current selected item's class path
export const selChildren = ref([])                          // current selected item's children

//////////////////////////////////////////////////////////////////////////////////////

export const getItemKind = async (name: string) => {
    const mParam = new Map<string, any>([["name", name]])
    const rt = await fetchNoBody(`api/dictionary/pub/kind`, "GET", mParam, "") as any[]
    if (rt[1] != 200) {
        alert(rt[0])
        return
    }
    return rt[0]
}

export const getContent = async (name: string) => {
    const mParam = new Map<string, any>([["name", name]])
    const rt = await fetchNoBody(`api/dictionary/pub/one`, "GET", mParam, "") as any[]
    if (rt[1] != 200) {
        alert(rt[0])
        return
    }
    return rt[0]
}

export const getColEntities = async (name: string) => {
    const mParam = new Map<string, any>([["colname", name]])
    const rt = await fetchNoBody(`api/dictionary/pub/colentities`, "GET", mParam, "") as any[]
    if (rt[1] != 200) {
        alert(rt[0])
        return
    }
    return rt[0]
}

export const getClsInfo = async (name: string) => {
    const mParam = new Map<string, any>([["entname", name]])
    const rt = await fetchNoBody(`api/dictionary/pub/entclasses`, "GET", mParam, "") as any[]
    if (rt[1] != 200) {
        alert(rt[0])
        return
    }
    return rt[0]
}

export const getList = async (kind: string) => {
    const rt = await fetchNoBody(`api/dictionary/pub/list/${kind}`, "GET", mEmpty, "") as any[]
    if (rt[1] != 200) {
        alert(rt[0])
        return
    }
    return rt[0]
}

export const getSearch = async (lookfor: string) => {
    const mParam = new Map<string, any>([
        ["aim", lookfor],
        ["ignorecase", true]
    ])
    const rt = await fetchNoBody(`api/dictionary/pub/search`, "GET", mParam, "") as any[]
    if (rt[1] != 200) {
        alert(rt[0])
        return
    }
    return rt[0]
}

//////////////////////////////////////////////////////////////////////////////////////

export const RefreshPage = async (name: any) => {

    // selected for searching
    aim.value = name

    // selected kind
    selKind.value = await getItemKind(name)

    // get content
    const content = await getContent(name)

    // set content to shared variables
    if (selKind.value == 'entity') {

        selEntity.SetContent(content)

    } else if (selKind.value == 'collection') {

        selCollection.SetContent(content)

        // get collection entities and set them to 'selCollection'
        selCollection.SetEntities(await getColEntities(name))
    }

    // get class info
    const clsinfo = await getClsInfo(name)
    selClsPath.value = clsinfo.DerivedPath
    selChildren.value = clsinfo.Children
}

export const LoadList = async (itemType: string) => {
    if (itemType == "entity") {
        listEntity.value = await getList(itemType)
    } else if (itemType == "collection") {
        listCollection.value = await getList(itemType)
    }
}

export const Search = async () => {
    const list = await getSearch(aim.value.trim())
    listEntity.value = list.Entities
    listCollection.value = list.Collections
}

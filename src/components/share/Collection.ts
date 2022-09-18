import { reactive } from 'vue';

class collectionType {
    Entity = "select one item from left panel"
    Definition = ""
    URL: string[] = []
    Metadata: meta = new meta()

    SetContent(object: any) {
        this.Entity = object.Entity
        this.Definition = object.Definition
        this.URL = object.URL
        this.Metadata = object.Metadata
    }
}

class meta {
    Identifier = ""
    Type = ""
}

export const selCollection = reactive(new collectionType())

import { reactive } from 'vue';

class collectionType {
    Entity = "select one item from left panel"
    Definition = ""
    URL: string[] = []
    Metadata: meta = new meta()
    Entities: string[] = []

    SetContent(object: any) {
        this.Entity = object.Entity
        this.Definition = object.Definition
        this.URL = object.URL
        this.Metadata = object.Metadata
    }

    SetEntities(entities: string[]) {
        this.Entities = entities
    }
}

class meta {
    Identifier = ""
    Type = ""
}

export const selCollection = reactive(new collectionType())

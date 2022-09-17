import { reactive, ref } from 'vue';

class entityType {
    Entity = "";
    OtherNames: string[] = []
    Definition = "";
    SIF: sif[] = [new sif()]
    OtherStandards: otherStd[] = [new otherStd()]
    LegalDefinitions: legalDef[] = [new legalDef()]
    Collections: col[] = [new col()]
    Metadata: meta = new meta()

    SetContent(object: any) {
        this.Entity = object.Entity
        this.OtherNames = object.OtherNames
        this.Definition = object.Definition
        this.SIF = object.SIF
        this.OtherStandards = object.OtherStandards
        this.LegalDefinitions = object.LegalDefinitions
        this.Collections = object.Collections
        this.Metadata = object.Metadata
    }
}

class sif {
    XPath: string[] = []
    Definition = ""
    Commentary = ""
    Datestamp = ""
}

class otherStd {
    Standard = ""
    Link: string[] = []
    Path: string[] = []
    Definition = ""
    Commentary = ""
}

class legalDef {
    LegislationName = ""
    Citation = ""
    Link = ""
    Definition = ""
    Commentary = ""
    Datestamp = ""
}

class col {
    Name = ""
    Description = ""
    Standard = ""
    Elements: string[] = []
    DefinitionModification = ""
}

class meta {
    Identifier = ""
    Type = ""
    ExpectedAttributes: string[] = []
    Superclass: string[] = []
    CrossrefEntities: string[] = []
}

export const selEntity = reactive(new entityType())
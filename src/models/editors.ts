export interface Editor {
    name: string
    degree?: string
    title?: string
    affiliation?: string
}

export interface EditorsTeam {
    chiefEditors: Editor[]
    editorialCouncil: Editor[]
}

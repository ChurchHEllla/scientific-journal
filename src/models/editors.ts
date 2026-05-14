export interface Editor {
  name: string
  degree?: string
  title?: string
  affiliation?: string
}

export interface EditorialTeam {
  chiefEditors: Editor[]
  editorialCouncil: Editor[]
}

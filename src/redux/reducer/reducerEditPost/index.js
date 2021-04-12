import { BODYROULS, CHANGEBODY, CHANGETITLE, EDIT, FETCHCOMPLEATE, SAVEREQUESTEND, SAVEREQUESTSTART, TITLEROULS } from "../../action/type"

export const Reducer = (draft, action) => {
  switch (action.type) {
    case FETCHCOMPLEATE:
      draft.title.value = action.value.title
      draft.body.value = action.value.body
      draft.isFeatching = false
      return
    case CHANGETITLE:
      draft.title.hasError = false

      draft.title.value = action.value
      return
    case CHANGEBODY:
      draft.body.hasError = false
      draft.body.value = action.value
      return
    case EDIT:
      if (!draft.title.hasError && !draft.body.hasError) {
        draft.sendCount++
      }
      return
    case SAVEREQUESTSTART:
      draft.isSaving = true

      return
    case SAVEREQUESTEND:
      draft.isSaving = false

      return
    case TITLEROULS:
      if (!action.value.trim()) {
        draft.title.hasError = true
        draft.title.message = "try again have error"
      }
      return
    case BODYROULS:
      if (!action.value.trim()) {
        draft.body.hasError = true
        draft.body.message = "try again have error"
      }
      return

    default:
      return draft
  }
}

import { updateDaycare } from '../actions/myDaycares.js';

export const updateDaycareForm = (daycareForm) => {
  console.log("daycareForm,", daycareForm)
  return {
      type: "UPDATE_DAYCARE_FORM",
      daycareForm
  }
}
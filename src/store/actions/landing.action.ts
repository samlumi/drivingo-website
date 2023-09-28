import * as Actions from "@/store/actions/constants";

export const setPreviousHeight = (height: number) => {
  return {
    type: Actions.SET_PREVIOUS_SECTION_HEIGHT,
    payload: height
  };
};

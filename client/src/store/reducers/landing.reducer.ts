import { LandingAction } from "@/types/redux";
import * as Actions from "@/store/actions/constants";

const initialState = {
  aboutSectionHeight: 0,
};

const landing = (state = initialState, action: LandingAction) => {
  switch (action.type) {
    case Actions.SET_PREVIOUS_SECTION_HEIGHT: {
      return {
        ...state,
        aboutSectionHeight: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default landing;

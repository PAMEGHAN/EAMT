import {
  ADD_ASSET,
RETRIEVE_ASSET,
UPDATE_ASSET,
DELETE_ASSET,
} from "../actions/types";
const initialState = [];
function assetReducer(asset = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ASSET:
      return [...asset, payload];
    case RETRIEVE_ASSET:
      return payload;
    case UPDATE_ASSET:
      return asset.map((asset) => {
        if (asset.itemNum === payload.itemNum) {
          return {
            ...asset,
            ...payload,
          };
        } else {
          return asset;
        }
      });
    case DELETE_ASSET:
      return asset.filter(({id}) => id !== payload.itemNum);
      default:
        return asset;
  }
};
export default assetReducer;
import {
    ADD_ASSET,
  RETRIEVE_ASSET,
  UPDATE_ASSET,
  DELETE_ASSET,
  } from "./types";
import  AssetService from "../services/AssetService";

export const addAsset = ({ itemName,itemNum,serialNum,status,employee}) => async (dispatch) => {
  try {
    

    const res = await AssetService.create({ itemName,itemNum,serialNum,status,employee});
      
    dispatch({
      type: ADD_ASSET,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveAssets = () => async (dispatch) => {
  try {
    const res = await AssetService.getAll();
    dispatch({
      type: RETRIEVE_ASSET,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateAsset = (itemNum, data) => async (dispatch) => {
  try {
    const res = await AssetService.update(itemNum, data);
    dispatch({
      type: UPDATE_ASSET,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deleteAsset = (itemNum) => async (dispatch) => {
  try {
    await AssetService.remove(itemNum);
    dispatch({
      type: DELETE_ASSET,
      payload: {itemNum},
    });
  } catch (err) {
    console.log(err);
  }
};
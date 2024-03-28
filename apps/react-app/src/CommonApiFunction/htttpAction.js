import axios from "axios";
import getAuthHeaders from "./apiCall";

// HttpsAction is a function that takes several parameters and returns a Redux action creator function
export const HttpsAction = async ({
  method = "GET",
  data = {},
  methodUrl = "",
  headers = {},
  positiveCallBack = (e) => e,
  negativeCallBack = (e) => e,
  finallyCallBack = (e) => e,
  queryParameter,
}) => {
  try {
    // Dispatch an action to set loader state to true
    // dispatch({type: `SET_LOADER`, loading: true});

    // Add authorization headers to the existing headers
    headers = { ...headers, ...getAuthHeaders() };

    // Construct the full API URL
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/` + methodUrl;

    // Make an HTTP request using axios
    return await axios({
      method,
      url: apiUrl,
      data,
      headers,
    }).then(async (response) => {
      // Dispatch a Redux action if actionType and reduxKeyName are provided
      // dispatch({type: actionType, payload: response.data, name: reduxKeyName, meta: {type: actionType}})

      // Dispatch an action to set loader state to false
      // dispatch({type: `SET_LOADER`, loading: false});

      // Call the positiveCallBack function with the response
      // console.log("res", response)
      return await positiveCallBack(response);
    });
  } catch (e) {
    // Dispatch an action to set loader state to false
    // dispatch({type: `SET_LOADER`, loading: false});

    // Call the negativeCallBack function with the error
    return await negativeCallBack(e);
  } finally {
    // Dispatch an action to set loader state to false
    // dispatch({type: `SET_LOADER`, loading: false});

    // Call the finallyCallBack function
    await finallyCallBack();
  }
};

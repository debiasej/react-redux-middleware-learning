export default function({ dispatch }) {
  return next => action => {

    if (!containsPromise(action)) {
      // we don't care about it, send it on to next middleware or to reducers
      return next(action);
    }

    // Make sure the action's promise resolves
    action.payload
      .then(function(response) {
        // create a new action with the old type, but
        // replace the promise with the response data.
        const newAction = { ...action, payload: response.data };
        dispatch(newAction);
      });
  };
}

function containsPromise(action) {
  return action.payload && action.payload.then;
}

// REMEMBER:
// The function above in ES5 sintax
/*return function(next) {
  return function(action) {
    console.log(action);

    next(action);
  }
}*/

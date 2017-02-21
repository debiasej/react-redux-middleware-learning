export default function({ dispatch }) {
  return next => action => {
    console.log(action);

    next(action);
  };

  // ES5
  /*return function(next) {
    return function(action) {
      console.log(action);

      next(action);
    }
  }*/
}

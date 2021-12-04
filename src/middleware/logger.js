const logger = store => next => action => {
    console.group(action.type);
    console.log(
      {
        action,
      }
    );

    const result = next(action);

    console.log(
      {
        newState: store.getState(),
      }
    );
    console.groupEnd();

    return result;
  };
  
  export default logger;
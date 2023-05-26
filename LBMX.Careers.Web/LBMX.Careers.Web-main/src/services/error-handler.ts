function typeErrorHandler(error: TypeError) {
  switch (error.message) {
    case 'Failed to fetch':
      console.warn(error.message);
      break;
    default:
      console.warn(`default ${error}`);
  }
}

function unknownErrorHandler(error: any) {
  console.warn(`unknown error ${error}`);
}

const errorHandler = (error: Error) => {
  switch (error.constructor) {
    case TypeError:
      typeErrorHandler(error);
      break;
    default:
      unknownErrorHandler(error);
  }
};

export default errorHandler;

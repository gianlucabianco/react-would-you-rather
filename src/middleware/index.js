import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

import logger from './logger.js';

export default applyMiddleware(
    thunk,
    logger,
);
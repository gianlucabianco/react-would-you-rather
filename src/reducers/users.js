import { GET_USERS } from '../actions/users.js';

export default function users(
    state = {},
    action,
) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
}
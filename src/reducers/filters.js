import { TOGGLE_IS_NOT_ANSWER_FILTER } from '../actions/filters';
import { TOGGLE_IS_ANSWER_FILTER } from '../actions/filters';

export function isNotAnswerFilter(
    state = true,
    action,
) {
    if(action.type === TOGGLE_IS_NOT_ANSWER_FILTER)
        return action.isNotAnswerFilter;

    return state;
};

export function isAnswerFilter(
    state = false,
    action,
) {
    if(action.type === TOGGLE_IS_ANSWER_FILTER)
        return action.isAnswerFilter;

    return state;
};
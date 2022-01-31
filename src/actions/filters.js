export const TOGGLE_IS_NOT_ANSWER_FILTER = 'TOGGLE_IS_NOT_ANSWER_FILTER';
export const TOGGLE_IS_ANSWER_FILTER = 'TOGGLE_IS_ANSWER_FILTER';

export function toggleIsNotAnswerFilter(
    isNotAnswerFilter,
) {
    return {
        type: TOGGLE_IS_NOT_ANSWER_FILTER,
        isNotAnswerFilter,
    }
    
};

export function toggleIsAnswerFilter(
    isAnswerFilter,
) {
    return {
        type: TOGGLE_IS_ANSWER_FILTER,
        isAnswerFilter,
    }
};

export function handleIsNotAnswerFilter(
    value,
) {
    return dispatch => dispatch(
        toggleIsNotAnswerFilter(
            value,
        )
    );
}

export function handleIsAnswerFilter(
    value,
) {
    return dispatch => dispatch(
        toggleIsAnswerFilter(
            value,
        )
    );
}

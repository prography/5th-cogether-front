export const GETCLUB_REQUEST='GETCLUB_REQUEST';
export const GETCLUB_SUCCESS='GETCLUB_SUCCESS';
export const GETCLUB_FAIL='GETCLUB_FAIL';

export const requestClub = () => ({
    type: 'GETCLUB_REQUEST'

});
export const successClub = (data) => ({
    type: 'GETCLUB_SUCCESS',
    payload:data
});
export const failClub = () => ({
    type: 'GETCLUB_FAIL'
    
});
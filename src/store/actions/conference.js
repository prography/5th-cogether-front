export const GETCONFERENCE_REQUEST='GETCONFERENCE_REQUEST';
export const GETCONFERENCE_SUCCESS='GETCONFERENCE_SUCCESS';
export const GETCONFERENCE_FAIL='GETCONFERENCE_FAIL';

export const requestConference = () => ({
    type: 'GETCONFERENCE_REQUEST'

});
export const successConference = (data) => ({
    type: 'GETCONFERENCE_SUCCESS',
    payload:data
});
export const failConference = () => ({
    type: 'GETCONFERENCE_FAIL'
    
});
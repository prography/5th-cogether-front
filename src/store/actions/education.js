export const GETEDUCATION_REQUEST='GETEDUCATION_REQUEST';
export const GETEDUCATION_SUCCESS='GETEDUCATION_SUCCESS';
export const GETEDUCATION_FAIL='GETEDUCATION_FAIL';

export const requestEducation = () => ({
    type: 'GETEDUCATION_REQUEST'

});
export const successEducation = (data) => ({
    type: 'GETEDUCATION_SUCCESS',
    payload:data
});
export const failEducation = () => ({
    type: 'GETEDUCATION_FAIL'
    
});
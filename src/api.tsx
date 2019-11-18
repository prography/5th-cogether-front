export const fetchClubData = async () => {
    try {
        const response = await fetch("https://cogether.azurewebsites.net/events/?category=circle");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
export const fetchEducationData = async () => {
    try {
        const response = await fetch("https://cogether.azurewebsites.net/events/?category=education");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
export const fetchConferenceData = async () => {
    try {
        const response = await fetch("https://cogether.azurewebsites.net/events/?category=conference");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
export const fetchDetail = async (id: number) => {
    try {
        const response = await fetch(`https://cogether.azurewebsites.net/events/${id}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

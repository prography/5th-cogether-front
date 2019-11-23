export const fetchClubData = async () => {
    try {
        const response = await fetch("https://cogether.azurewebsites.net/event/?category=circle");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
export const fetchEducationData = async () => {
    try {
        const response = await fetch("https://cogether.azurewebsites.net/event/?category=education");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const fetchConferenceData = async () => {
    try {
        const response = await fetch("https://cogether.azurewebsites.net/event/?category=conference");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
export const fetchDetail = async (id: number) => {
    try {
        const response = await fetch(`https://cogether.azurewebsites.net/event/${id}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

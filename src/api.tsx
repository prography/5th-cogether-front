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
export const fetchIntroData = async () => {
    try {
        const response = await fetch("https://cogether.azurewebsites.net/help-center/info");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const fetchFreqData = async () => {
    try {
        const response = await fetch("https://cogether.azurewebsites.net/help-center/freq");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const fetchHelpData = async (payload: any) => {
    try {
        const jwt = require("jsonwebtoken");
        const decoded = jwt.decode(localStorage.getItem("accessToken"));

        const config = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: decoded.user_id
        };
        const response = await fetch("https://cogether.azurewebsites.net/help-center/my-questions", config);
        console.log("config: ", config);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};

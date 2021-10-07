import axios from "axios";

const api = axios.create({
    baseURL: "http://api.taskin.ir/"
});

// Done
export const Contact = {
    contactUs: () => {
        return api({
            method: "GET",
            url: "/Contact/ContactUs"
        })
    },
    sendForm: (data) => {
        return api({
            method: "POST",
            url: "/Contact/SendForm",
            data
        })
    },
};

// Done
export const Landing = {
    chairmen: () => {
        return api({
            method: "GET",
            url: "/Landing/Chairmen"
        })
    },
    honor: () => {
        return api({
            method: "GET",
            url: "/Landing/Honor"
        })
    },
    introduction: () => {
        return api({
            method: "GET",
            url: "/Landing/Introduction"
        })
    },
    taskinWithYou: () => {
        return api({
            method: "GET",
            url: "/Landing/TaskinWithYou"
        })
    },
};

// Done
export const Service = {
    serviceList: () => {
        return api({
            method: "GET",
            url: "/Service/ServiceList"
        })
    },
};

// Done
export const Section = {
    sectionList: () => {
        return api({
            method: "GET",
            url: "/Section/SectionList"
        })
    },
};

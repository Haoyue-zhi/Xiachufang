import axios from "@/utils/axios";

export function map(params) {
    return axios({
        url: `/ip`,
        method: "get",
        otherURL:'map',
        params,
    });
}
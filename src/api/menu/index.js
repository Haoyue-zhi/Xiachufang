import axios from "@/utils/axios";

export function upload(data) {
    return axios({
        url: `/reip/recipe/upload`,
        method: "put",
        otherURL:'java', // 调用java接口
        data,
        headers: {'content-type': 'multipart/form-data'}
    });
}

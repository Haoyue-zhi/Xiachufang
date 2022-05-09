import axios from "@/utils/axios";

// 筛选菜谱
export function list(params,pageSize,pageNum){
    return axios({
        url:`/reip/recipe/${pageSize}/${pageNum}`,
        method: "get",
        otherURL:'java',
        params
    })
}
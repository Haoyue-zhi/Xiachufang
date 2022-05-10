import axios from "@/utils/axios";

// 菜谱详情
export function details(id){
    return axios({
        url:`/reip/recipe/${id}`,
        method: "get",
        otherURL:'java'
    })
}
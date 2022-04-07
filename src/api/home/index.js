import axios from "@/utils/axios";

export function test(params){
    return axios({
        method: "get",
        otherURL:'alipay.trade.wap.pay',
        params,
    })
}
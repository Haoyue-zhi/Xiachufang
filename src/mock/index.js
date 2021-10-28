import Mock from 'mockjs'

Mock.mock(
    "http://api.tianapi.com/txapi/getlist", 
    {
        "array|1-10": [
            "Hello",
            "Mock.js",
            "!"
        ]
    }
)
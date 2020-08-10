import connection from './index'

// 发送 description
export const sendDescription = () => {
    connection.send({
        funcname: "test",
        data: '123123'
    })
}
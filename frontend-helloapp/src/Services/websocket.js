const host = process.env.NODE_ENV === 'production' ? window.location.host : 'localhost:8080'

export let send
let onMessageCallback


export const startWebsocketConnection = () => {
    const ws = new window.WebSocket('ws://' + host + '/chat') || {}

    ws.onopen = () => {
        console.log('se conecto el ws')
    }

    ws.onclose = (e) => {
        console.log('se cerro la conexion con el ws: ', e.code, e.reason)
    }

    ws.onmessage = (m) => {
        onMessageCallback && onMessageCallback(m.data)
    }

    send = ws.send.bind(ws)
}

export const registerOnMessageCallback = (fn) => {
    onMessageCallback = fn
}
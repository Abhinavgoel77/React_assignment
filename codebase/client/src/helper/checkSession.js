export default function checkSession() {
    let token = localStorage.getItem("token")
    let username = localStorage.getItem("username")
    if(username){
        username = localStorage.getItem("username")
        return [username,true]
    }
    else{
        return ["",false]
    }
}
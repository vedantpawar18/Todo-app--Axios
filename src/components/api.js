import axios from "axios";

export function getTodos(){
    return axios.get("http://localhost:8080/users");
}

export function deleteaTodo(id){
    return axios({
        url:`http://localhost:8080/users/${id}`,
        method:"DELETE"
    })
}

export function addTodo({title, status}){
    return axios({
        url:`http://localhost:8080/users`,
        method:"POST",
        data:{
            title,
            status
        }
    })
}

export function toggleTodoStatus({id, newStatus}){
    return axios({
        url:`http://localhost:8080/users/${id}`,
        method:"PATCH",
        data:{
            status:newStatus
        }
    })
}
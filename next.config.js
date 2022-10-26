/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, env: { 
    API_GET_TASK: "https://servicios3.ingetec.com.co/API_GetTasks/api", 
    API_PUT_TASK: "https://servicios3.ingetec.com.co/API_UpdateTask/api",
    API_POST_TASK: "https://servicios3.ingetec.com.co/API_AddTask/api",  
    API_DELETE_TASK: "https://servicios3.ingetec.com.co/API_DeleteTask/api",  
    API_GET_TASK_USER: "test",
    API_GET_TASK_PW: "123",
  },
}

module.exports = nextConfig

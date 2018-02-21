import axios from 'axios'

const api = axios.create({
  baseURL: 'https://que-backend.herokuapp.com/api',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzdGVwaGVuQHBldGVya2lucy5jYSIsInVzZXJuYW1lIjoiQmVhcmd1eSIsInBhc3N3b3JkIjoicGFzc3dvcmQiLCJldmVudF9pZHMiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDE3LTA0LTIyVDE4OjAwOjMyLjcyN1oiLCJ1cGRhdGVkX2F0IjoiMjAxNy0wNC0yMlQxODowMDozMi43MjdaIiwiaWF0IjoxNDkyOTYwNDExfQ.qvhGZQ30_Zrr_CubAqCncR_G3Ijdqj5pO14-u5ckh4c'
  }
})

export default api
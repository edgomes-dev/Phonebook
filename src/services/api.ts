import axios from 'axios'

export  const api = axios.create(
{
    baseURL: "http://localhost:3333/api"
});

/*
export class ApiReq 
{
    getContactGroup(id: any)
    {
        return api.get(`/${id}`)
    }
}*/
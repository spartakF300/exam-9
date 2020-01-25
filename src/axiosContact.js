import axios from 'axios'
export  const axiosContact= axios.create({
    baseURL: "https://post-7681c.firebaseio.com/"
});
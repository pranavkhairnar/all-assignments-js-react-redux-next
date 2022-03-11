import '../styles/globals.css'

import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000/api/comments`
})

function MyApp({ Component, pageProps }) {

  
    api.get('/').then(res => {
      console.log(res.data);
    })


  return <Component {...pageProps} />
}

export default MyApp

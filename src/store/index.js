import { createStore, createLogger } from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    apiServer: 'http://127.0.0.1:8000/api/admin' ,
    // apiServer: 'http://wephoneapi.sctthaicambodia.com/api/admin'
    // apiServer: 'http://192.168.0.143:8000/api/admin' // Local server with specific ip , home network
  },
  modules: {
  },
  strict: debug,
  plugins: debug ? 
    [
      createLogger()
    ] : 
    [
      
    ]
})

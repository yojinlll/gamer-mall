import axios from 'axios'

function fetch(url, data){
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      let status = res.data.status
      if(status === 200){
        resolve(res)
      }
      if(status === 300){
        location.href = 'login.html'
        resolve(res)
      }
      if(status >= 500){
        reject(res)
        console.log('error')
      }
    }).catch(error => {
      reject(error)
    })
  })
}

export default fetch

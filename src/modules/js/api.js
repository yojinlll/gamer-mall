let url = {
  all: '/category/all',
  game: '/category/game',
  super: '/category/super',
  cart: '/member/cart',
  address: '/member/address'
}

let host = 'http://rap2api.taobao.org/app/mock/119045'

for(let key in url){
  if(url.hasOwnProperty(key)){
    url[key] = host + url[key]
  }
}

export default url

import * as API from './'
export default {
  List:params => {
    return API.GET('/mock/e9652287a0f5d632d496ebbe9348dc7d/p/api', params)
  },
  Arr:params =>{
     return API.GET('/mock/25fcd77beab3c58922a63880730f441d/shouyeList/user',params)
  },
  Model:params =>{
    return API.GET('/mock/25fcd77beab3c58922a63880730f441d/shouyeList/model',params)
  },
  classList:params => {
    return API.GET('/mock/ccb5252694a39a59be502799e75f23cb/list/meiri', params)
  }
}


import {Module} from 'vuex'
import {IAnalysisState} from './types'
import {IRootState} from '../../types'
import {getCategoryGoodsCount,getCategoryGoodsFavor,getCategoryGoodsSale,getCitySaleCount, getGoodsAmountList,getGoodsCountTop} from '@/service/main/system/system'
const analysisModule: Module<IAnalysisState,IRootState> = {
  namespaced:true,
  state(){
    return{
      categoryGoodsCount:[],
      categoryGoodsSale:[],
      categoryGoodsFavor:[],
      citySaleCount:[],
      goodsAmountList:[],
      goodsCountTop:[]
    }
  },
  mutations:{
    saveCategoryGoodsCount(state,list){
      state.categoryGoodsCount = list
    },
    saveCategoryGoodsSale(state,list){
      state.categoryGoodsSale = list
    },
    saveCategoryGoodsFavor(state,list){
      state.categoryGoodsFavor = list
    },
    saveCitySaleCount(state,list){
      state.citySaleCount = list
    },
    saveGoodsAmountList(state,list){
      state.goodsAmountList = list
    },
    saveGoodsCountTopList(state,list){
      state.goodsCountTop = list
    }
  },
  actions:{
    // 获取图表数据
    async getCategoryGoodsDataAction({commit},payload){

      // 查询每个分类商品的数量
      const res1 = await getCategoryGoodsCount("goods/category/count")
      commit("saveCategoryGoodsCount",res1.data)

      // 查询每个分类商品的销量
      const res2 = await getCategoryGoodsSale("/goods/category/sale")
      commit("saveCategoryGoodsSale",res2.data)

      // 查询每个分类商品的收藏量
      const res3 = await getCategoryGoodsFavor("/goods/category/favor")
      commit("saveCategoryGoodsFavor",res3.data)

      // 查询不同城市的销量数据
      const res4 = await getCitySaleCount("/goods/address/sale")
      commit("saveCitySaleCount",res4.data)

      // 查询商品数据统计的数量
      const res5 = await getGoodsAmountList("/goods/amount/list")
      commit("saveGoodsAmountList",res5.data)

      // 查询销售前十的商品数量
      const res6 = await getGoodsCountTop("/goods/sale/top10")
      commit("saveGoodsCountTopList",res6.data)
    },
  }
}

export default analysisModule
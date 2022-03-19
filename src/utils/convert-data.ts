import {coordinateData} from '@/components/echarts/data/coordinateData'

function convertData(data:any){
  const res:any = []
  for (let i=0; i<data.length;i++) {
    const geo = coordinateData[data[i].name]
    if(geo){
      res.push({
        name: data[i].name,
        value: geo.concat(data[i].value)
      })
    }
  }
  return res
}
export {convertData}
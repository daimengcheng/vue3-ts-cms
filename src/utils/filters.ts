import moment from 'moment'

function formatTime(time:any){
  return moment(time).format("YYYY-MM-DD  HH:mm:ss ")
}

function formatStatus(code:number){
  if(code) return "可用"
  else return "禁用"
}

export {formatTime,formatStatus} 
const fomatDate = (time) =>{
   let date = new Date(time);
    let yy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (mm < 10) {
        mm = '0' + mm
    }
    if (dd < 10) {
        dd = '0' + dd
    }
    return yy + '-' + mm + '-' + dd
}

//发布时间距离当前时间的计算

const distanceDate = ( time ) =>{
    if(time == null || time == ''){
        return;
    }
    let date = new Date(time);
    let newdate = new Date();
    let totalSec = (newdate - date)/1000;
    let days = Math.floor(totalSec/3600/24);
    let hours = Math.floor((totalSec-days*24*3600)/3600);
    let mins = Math.floor((totalSec-days*24*3600-hours*3600)/60); 
    let secs = Math.floor((totalSec-days*24*3600-hours*3600-mins*60)); 

    if(secs != 0 && mins < 1){
        return secs+'秒前'
    }else if(mins != 0 && hours < 1){
        return mins+'分钟前'
    }else if(hours != 0 && days<1){
        return hours+'小时前'
    }else if(days != 0 && days < 30){
        return days+'天前'
    }else{
        return '1个月前'
    }
}

module.exports = {
    fomatDate,
    distanceDate
}
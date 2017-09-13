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

module.exports = {
    fomatDate,
}
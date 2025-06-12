export function convertminutes (minutes){
    const hours =Math.floor(minutes/60);
    const remainingmins = minutes % 60 ;
    return `${hours}h   ${remainingmins}m`

}



const log = position =>{
    console.log(position)
}


const onLoad = () =>{
    navigator.geolocation.getCurrentPosition(log);
}
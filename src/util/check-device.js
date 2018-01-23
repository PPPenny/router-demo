const DeviceName = ()=>{
    let device = navigator.userAgent.toLowerCase(); 
     if(device.indexOf('iphone') !== -1){
         return 'iphone-device';
     }
     else{
      
         return 'android-device';
     }
}; 

export default DeviceName();
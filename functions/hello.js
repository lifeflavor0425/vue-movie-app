exports.handler = async function( event, context){
     return{
         statusCode : 200,
         body : JSON.stringify({
             name : 'lifeflavor',
             age : 27,
             email : 'rjsdnakfmzh@naver.com'
         })
     }
}
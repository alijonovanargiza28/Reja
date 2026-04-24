//A TASK
function countLetter(a,word){
    let hisob = 0;
    for(const harf of word){
        if(harf === a){
            hisob++;
        }
    }
    return hisob;
}
console.log(countLetter("a","Dianaaa"))

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba boling",//0-20
//     "togrli boshliq tanlang va koproq hato qiling",//20-30
//     "uzingizga ishlashni boshlang",//30-40
//     "sizni kuchli qiladigan narsalarni qiling",//40-50
//     "yoshlarga invistitsiya qiling",//50-60
//     "endi dam oling , foydasi yoq"//60
// ];
// //asyn/await
// async function maslahatbering(a){
//     if(typeof a !=='number') throw new Error("insert a number");
//     else if (a<=20 )return list[0];
//     else if (a>20 && a<=30) return list[1]
//     else if (a>30 && a<=40) return list[2]
//     else if (a>40 && a<=50) return list[3]
//     else if (a>50 && a<=60) return list[4]
//     else{
//         //   return(null,list[5])
//          return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 resolve(list[5]);
//             },5000);
//          })

        // setTimeout(function(){
        //     return(null,list[5])
        // },5000)
//     }
// }
// async function run(){
//   let javob = await maslahatbering(20);
//   console.log(javob);
//   javob = await maslahatbering(70);
//   console.log(javob);
//   javob = await maslahatbering(20);
//   console.log(javob);
//   javob = await maslahatbering(69);
//   console.log(javob);
// }
// run();


//Than catch
// console.log("passed here");
// maslahatbering(25)
// .then(data=>{
// console.log('javob', data)
// })
// .catch(err=>{
// console.log('ERRoR', err)
// })
// console.log("passed here1")

// function maslahatbering(a, callback){
//     if(typeof a !== 'number')callback("insert a number", null);
//     else if (a <=20)callback(null, list[0]);
//     else if(a > 20 && a<=30)callback(null,list[1]);
//     else if(a > 30 && a<=40)callback(null,list[2]);
//     else if(a > 40 && a<=50)callback(null,list[3]);
//     else if(a > 50 && a<=60)callback(null,list[4]);
//     else{
//         setTimeout(function(){
//             callback(null,list[5])
//         },5000)
//     }
//     }
//     console.log("passed here0")
// maslahatbering(70, (err, data)=>{
//    if(err)console.log('Error:',err);
//   else{ console.log('javob', data)
//   }
// });
// console.log("passed here")
console.log("Jack Ma maslahatlari");
const list = [
    "yahshi talaba boling",//0-20
    "togrli boshliq tanlang va koproq hato qiling",//20-30
    "uzingizga ishlashni boshlang",//30-40
    "sizni kuchli qiladigan narsalarni qiling",//40-50
    "yoshlarga invistitsiya qiling",//50-60
    "endi dam oling , foydasi yoq"//60
];
//ASYNC function 
async function maslahatbering(a){
    if(typeof a !=='number')throw new Error("insert a number");
    else if(a <=20 )return list[0];
    else if(a > 20 && a <= 30 )return list[1];
    else if(a > 30 && a <= 40 )return list[2];
    else if(a > 40 && a <= 50 )return list[3];
    else if(a > 50 && a <= 60 )return list[4];
    else {
        // return list[5];
        return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(list[5]);
        },5000);
        })

        // setTimeout(function(){
        // return list[0];
        // },5000);
    
    }
    }

    // Call via asyn/await

async function run(){
  let javob = await maslahatbering(25);
  console.log(javob);
  javob = await maslahatbering(31);
  console.log(javob);
  javob = await maslahatbering(65);
  console.log(javob);
  javob = await maslahatbering(51);
  console.log(javob);
  javob = await maslahatbering(61);
  console.log(javob);
}
run();



// Call vie than catch
    // console.log("passed here0");
    // maslahatbering(90)
    // .then((data)=>{
    //     console.log('Javob:', data);

    // })
    // .catch((err)=>{
    //     console.log('ERROR', err)
    // })
    // console.log("passed here1")

    // console.log("passed here0")
    // maslahatbering(70, (err,data)=>{
    //  if(err)console.log('Error', err);
    //  else{
    //    console.log('javob', data);
    //  }
     
    // })
  
//CALL BACK
// console.log("Sizning bilimingiz")
// const baholar = [
//   "Yomon (qayta topshir)",     // 0-50
//   "Qoniqarli",                 // 51-70
//   "Yaxshi",                    // 71-85
//   "A'lo",                      // 86-100
//   "Sen ustoz bolishing mumkin 😄" // 100+
// ];

// function natijam(a, callback){
//     if(typeof a!=='number')callback('insert a number', null);
//     else if(a <= 50)callback(null,baholar[0]);
//     else if(a > 50 && a <=70 )callback(null,baholar[1]);
//     else if(a > 70 && a <=85 )callback(null,baholar[2]);
//     else if(a > 86 && a <=100 )callback(null,baholar[3]);
//    else{
//     setTimeout(function(){
//       callback(null, baholar[4])
//     },5000);

//    }
// }
// natijam(900,(err,data)=>{
//     if(err)console.log('Error', err);
//     else{
//         console.log('javob', data)
//     }
// })
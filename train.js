//D task
function checkContent(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}

console.log(checkContent("Flexy", "xyleF"));
//C task
// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   // vaqt chiqarish
//   vaqt() {
//     let now = new Date();
//     return `${now.getHours()}:${now.getMinutes()}`;
//   }

//   // qoldiq
//   qoldiq() {
//     console.log(
//       `Hozir ${this.vaqt()} da ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola mavjud`
//     );
//   }

//   // sotish
//   sotish(mahsulot, son) {
//     this[mahsulot] -= son;
//     console.log(
//       `${this.vaqt()} da ${mahsulot}dan ${son}ta sotildi`
//     );
//   }

//   // qoshish
//   qoshish(mahsulot, son) {
//     this[mahsulot] += son;
//     console.log(
//       `${this.vaqt()} da ${mahsulot}ga ${son}ta qabul qilindi`
//     );
//   }
// }

// const shop = new Shop(20, 15, 30);

// shop.qoldiq();
// shop.sotish("non", 5);
// shop.qoshish("cola", 40);
// shop.qoldiq();
//B Task
// function chooseword(word){
//     let hisob = 0;
//     for(const harf of word){
//         if(harf >= '0' && harf <= '9'){
//             hisob++;
//         }
//     }
//     return hisob;
// }
// console.log(chooseword("Bizning guruhda 15 ta o`quvchi bor va 2 ta mentor bor 4ta guruh bor biz 41-guruh"))

//A TASK
// function countLetter(a,word){
//     let hisob = 0;
//     for(const harf of word){
//         if(harf === a){
//             hisob++;
//         }
//     }
//     return hisob;
// }
// console.log(countLetter("a","Dianaaa"))



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

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba boling",//0-20
//     "togrli boshliq tanlang va koproq hato qiling",//20-30
//     "uzingizga ishlashni boshlang",//30-40
//     "sizni kuchli qiladigan narsalarni qiling",//40-50
//     "yoshlarga invistitsiya qiling",//50-60
//     "endi dam oling "//60
// ];
//ASYNC function 
// async function maslahatbering(a){
//     if(typeof a !=='number')throw new Error("insert a number");
//     else if(a <=20 )return list[0];
//     else if(a > 20 && a <= 30 )return list[1];
//     else if(a > 30 && a <= 40 )return list[2];
//     else if(a > 40 && a <= 50 )return list[3];
//     else if(a > 50 && a <= 60 )return list[4];
//     else {
//         // return list[5];
//         return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(list[5]);
//         },5000);
//         })

        // setTimeout(function(){
        // return list[0];
        // },5000);
    
    //}
    //}

    // Call via asyn/await

// async function run(){
//   let javob = await maslahatbering(25);
//   console.log(javob);
//   javob = await maslahatbering(31);
//   console.log(javob);
//   javob = await maslahatbering(65);
//   console.log(javob);
//   javob = await maslahatbering(51);
//   console.log(javob);
//   javob = await maslahatbering(61);
//   console.log(javob);
// }
// run();



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

// console.log("Diana maslahatlari");
// const list = [
//     "yahshi talaba boling",//0-20
//     "togrli boshliq tanlang va koproq hato qiling",//20-30
//     "uzingizga ishlashni boshlang",//30-40
//     "sizni kuchli qiladigan narsalarni qiling",//40-50
//     "yoshlarga invistitsiya qiling",//50-60
//     "endi dam oling "//60
// ]

// async function maslahatbering(a){
//     if(typeof a!== 'number')throw new Error("insert number");
//     else if(a<=20)return list[0];
//     else if (a>20 && a<=30)return list[1];
//     else if (a>30 && a<=40)return list[2];
//     else if (a>40 && a<=50)return list[3];
//     else if (a>50 && a<=60)return list[4];
//     else{
//          return new Promise((resolve,reje))
        
//     }
// }

// async function run(){
//    let javob = await maslahatbering(20);
//    console.log(javob);
//    javob = await maslahatbering(30);
//    console.log(javob);
//    javob = await maslahatbering(60);
//    console.log(javob)
// }
// run()
// maslahatbering(25)
// .then(data=>{
// console.log('Javob', data)
// }).catch(err=>{
// console.log('Error', err)
// })

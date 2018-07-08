function shout(string){
 return string.toUpperCase() 
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  let word = string.toUpperCase()
  console.log(word)
}

function logWhisper(string){
  let word = string.toLowerCase()
  console.log(word)
}

function sayHiToGrandma(string){
  var stringUpperCase = string.toUpperCase()
  var stringLowerCase = string.toLowerCase()
 
  if (stringLowerCase === string){ return 'I can\'t hear you!' }
  if (stringUpperCase === string){ return 'YES INDEED!' }
  if (stringUpperCase === string){ return 'YES INDEED!' }
}




// function sayHiToGrandma(string){

//   if (word.toLowerCase === word){
//     return "I can/'t hear you!"
//   } else if (word.toUpperCase === word){
//     return "YES INDEED!"
//   } else if (word === "I love you, Grandma."){
//     return "I love you, too."
//   }
//   }
   
// }


// describe('sayHiToGrandma(string)', function() {
//   it('returns "I can\'t hear you!" if `string` is lowercase', function() {
//     expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
//   })

//   it('returns "YES INDEED!" if `string` is uppercase', function() {
//     expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
//   })

//   it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
//     expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
//   })
// })

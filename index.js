class Formatter {
  
 static capitalize(string){
   return string.charAt(0).toUpperCase() + string.slice(1)
 }
 static sanitize(string){return string.replace(/[^A-Za-z0-9-'-' ']+/g, '');}
 static titleize(string){
  return string.replace(/\w\S*/g,function(txt){
    if (!(txt in ['of'])){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }})
    }
  
  }
    
  
   
 
// getting|giggles|a|tale|of|two|cities|where|the|wild|things|are
// /[^'the'-'a'-'an'-'but'-'of'-'and'-'for'-'at'-'by'-' ']/g
// function toTitleCase(str) {
//   return str.replace(
//     /\w\S*/g,
//     function(txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     }
//   );
// }
// text3.replace(/[^'the'-'a'-'an'-'but'-'of'-'and'-'for'-'at'-'by'-'and'-'from'-' ']/,function(txt){
//   return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
// 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'

// return string.replace(/[^the-a-an-but-of-and-for-at-by]/,'7')


module.exports = function toReadable (number) {
  
 
    let str = String(number)
  
    let firstNumber =  str[str.length - 1 ];
    let secondNumber = str[str.length - 2 ];
    let thirdNumber = str[str.length - 3 ];
    
    let units ='';
    let tens = '';
    let hungreeds = '';
    let result = ''
      
    if (str == '0') { 
      return 'zero'
    } else if  (str == '21') { return 'twenty one'
  } else if  (str == '31') { return 'thirty one'
 }  else if  (str == '41') { return 'forty one'
} else if (str == '51') { return 'fifty one'
} else if(str == '61') { return 'sixty one'
} else if(str == '71') { return 'seventy one'
} else if(str == '81') { return 'eighty one'
} else if(str == '91') { return 'ninety one'
} else {


    
  
      if ( str.length == 3 )  {
       getHungreeds(str)
       if (str[1] == '1') {
        getTeens(str)
         result = `${hungreeds} ${tens}`
         return result.trim()
       } 
       
       else if (str[1] == '0') {
        getUnits(str)
        result = `${hungreeds} ${units}`
        return result.trim()
       }
        else {
          getTens(str)
          getUnits(str)
          result = `${hungreeds} ${tens} ${units}`
          return result.trim()
        }
       
      }
      
      else if ( str.length == 2 )  {
         if ( secondNumber == "1" && firstNumber == '0' ) return 'ten'
            if ( secondNumber == "1" && firstNumber == '1' ) return'eleven'
              if ( secondNumber == "1" && firstNumber == '2' ) return 'twelve'
                if ( secondNumber =="1" && firstNumber == '3' ) return 'thirteen'
                  if ( secondNumber == "1" && firstNumber == '4' ) return 'fourteen'
                    if ( secondNumber == "1" && firstNumber == '5' ) return 'fifteen'
                      if ( secondNumber == "1" && firstNumber == '6' ) return 'sixteen'
                        if ( secondNumber == "1" && firstNumber == '7' ) return 'seventeen'
                          if ( secondNumber == "1" && firstNumber == '8' ) return 'eighteen'
                            if ( secondNumber == "1" && firstNumber == '9' ) return 'nineteen'
        
      
       if (str[1] == '1') {
        getTeens(str)
         result = `${tens}`
         return result.trim()
       } 
        else {
          getTens(str)
          getUnits(str)
           result = `${tens} ${units}`
           return result.trim()
        }
       
      }
      
    
      
      else if ( str.length == 1 ) {
        getUnits()
        return `${units}`
       }
       
       
      
      
    
    
      function getUnits(str) {
      
        if ( firstNumber == '1') return units = 'one'
        if ( firstNumber == '2') return units = 'two'
        if ( firstNumber == '3') return units = 'three' 
        if ( firstNumber == '4') return units = 'four' 
        if ( firstNumber == '5') return units = 'five'
        if ( firstNumber == '6') return units = 'six'
        if ( firstNumber == '7') return units = 'seven'
        if ( firstNumber == '8') return units = 'eight'
        if ( firstNumber == '9') return units = 'nine'
    
      }
    
      function getTeens(n) {
          if ( secondNumber == "1" && firstNumber == '0' ) return tens = 'ten'
            if ( secondNumber == "1" && firstNumber == '1' ) return tens = 'eleven'
              if ( secondNumber == "1" && firstNumber == '2' ) return tens = 'twelve'
                if ( secondNumber =="1" && firstNumber == '3' ) return tens = 'thirteen'
                  if ( secondNumber == "1" && firstNumber == '4' ) return tens = 'fourteen'
                    if ( secondNumber == "1" && firstNumber == '5' ) return tens = 'fifteen'
                      if ( secondNumber == "1" && firstNumber == '6' ) return tens = 'sixteen'
                        if ( secondNumber == "1" && firstNumber == '7' ) return tens = 'seventeen'
                          if ( secondNumber == "1" && firstNumber == '8' ) return tens = 'eighteen'
                            if ( secondNumber == "1" && firstNumber == '9' ) return tens = 'nineteen'
      }
    
    
       function getTens(n) {
         if ( secondNumber == "2") return tens = 'twenty'
          if ( secondNumber == "3") return tens = 'thirty'
          if ( secondNumber == "4") return tens = 'forty'
          if ( secondNumber == "5") return tens = 'fifty'
          if ( secondNumber == "6") return tens = 'sixty'
          if ( secondNumber == "7") return tens = 'seventy'
          if ( secondNumber =="8") return tens = 'eighty'
          if ( secondNumber == "9") return tens = 'ninety'      
       }
    
    
      function getHungreeds(n) {
        if ( thirdNumber == "1") return hungreeds = 'one hundred'
        if ( thirdNumber == "2") return hungreeds = 'two hundred' 
        if ( thirdNumber == "3") return hungreeds = 'three hundred' 
        if ( thirdNumber == "4") return hungreeds = 'four hundred'
        if ( thirdNumber == "5") return hungreeds = 'five hundred'
        if ( thirdNumber == "6") return hungreeds = 'six hundred' 
        if ( thirdNumber == "7") return hungreeds = 'seven hundred' 
        if ( thirdNumber == "8") return hungreeds = 'eight hundred' 
        if ( thirdNumber == "9") return hungreeds = 'nine hundred' 
      }
     
    }
  }


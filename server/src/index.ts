const ref = [
  { decimal: 1000, roman: 'M' },
  { decimal: 900, roman: 'CM' },
  { decimal: 500, roman: 'D' },
  { decimal: 400, roman: 'CD' },
  { decimal: 100, roman: 'C' },
  { decimal: 90, roman: 'XC' },
  { decimal: 50, roman: 'L' },
  { decimal: 40, roman: 'XL' },
  { decimal: 10, roman: 'X' },
  { decimal: 9, roman: 'IX' },
  { decimal: 6, roman: 'VI' },
  { decimal: 5, roman: 'V' },
  { decimal: 4, roman: 'IV' },
  { decimal: 1, roman: 'I' },
];

const converter = (input: number | string): number | string => {

  if (typeof input === 'number') {
    
    // const toRoman  = (input: number): number | string => {
      if(input < 1 || input > 3000) throw new Error('1 - 3000 only')
       let romanResult = '';
      // 3000 => 'MMM'
      ref.map(({decimal, roman}) => {
        while(input >= decimal) {
          romanResult += roman;
          input -= decimal;
        }
      })
      return romanResult;
    // }
    // return toRoman;

  }

  if (typeof input === 'string') {

    // const toDecimal = (input: string): number | string => {
      let decimalResult = 0; 
      // 'MMM' => 3000
      ref.map(({decimal, roman}) => {
        while(input.startsWith(roman)) {
          decimalResult += decimal;
          input = input.substring(roman.length);
        }
      })
      return decimalResult;
    // }
    // return toDecimal;
  }
  
}



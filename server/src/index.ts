interface RomanDecimalPair {
  decimal: number;
  roman: string;
}

const ref: RomanDecimalPair[] = [
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
    
      if(input < 1 || input > 3000) throw new Error('1 - 3000 only')
       let romanResult = '';
      // 3000 => 'MMM'
      ref.map(({decimal, roman}: RomanDecimalPair) => {
        while(input as number >= decimal) {
          romanResult += roman;
          (input as number) -= decimal;
        }
      })
      return romanResult;

  }

if (typeof input === 'string') {

    let decimalResult = 0; 
    // 'MMM' => 3000
    ref.map(({decimal, roman}: RomanDecimalPair) => {
      while((input as string).startsWith(roman)) {
        decimalResult += decimal;
        input = (input as string).substring(roman.length);
      }
    })
    return decimalResult;

}
  
}



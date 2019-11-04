
//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(rowNumber) {
    this.rowNumber = rowNumber
    }

    get rows(){
      let pascal = [[1], [1, 1]]
      if (this.rowNumber < 2){
        if (this.rowNumber == 1){
          pascal.pop([1, 1])  
          return pascal
        }
        return pascal[this.rowNumber - 1]
      }
      else{
        let i = 2
        while (i < this.rowNumber){
          let pascalArray = [1]
          for (let t = 1; t < pascal[i - 1].length; t++){
            pascalArray.push(pascal[i - 1][t] + pascal[i - 1][t - 1])
          }
          i++
          pascalArray.push(1)
          pascal.push(pascalArray)
        }
      }
      return pascal
    }

    get lastRow(){
      let pascal = this.rows
      return pascal[pascal.length - 1]
    }
}

console.log(new Triangle(1).rows)
export class Dyn{

    constructor(page) {
       this.regions=['beds-and-bucks', 'banana', 'orange', 'grape']
      }
    
   generaterandomindex(){
    

      const randomIndex = Math.floor(Math.random() * arr.length);
      return randomIndex;
    }
    returnrandomregions(){
// Pick a random index from the 'regions' array
const randomIndex = getRandomIndex(regions);
    
// Get the value at the random index
const randomValue = regions[randomIndex];

return randomValue;
    }

  
   
}
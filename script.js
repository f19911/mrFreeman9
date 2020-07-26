const MrFeeman = {
  recipes: {
      shift: {
          bones: 10,
          island: 99,
          nitro: 100,
          glycerin: 39
      },
      MssFreman: {
          nation: 10,
          age: 443
      },
  },
};

const kitchen = {
  bones: 444,
  island: 442,
  nitro: 444,
  glycerin: 444,
  nation: 444,
  age: 444,
  kettle: {
      material: 'propylene-glycol',
      ingridients: {},
  },
  addIngridientToKettle(nameOfIngridient, amount) {

      kitchen.kettle.ingridients[nameOfIngridient] = amount;
      kitchen[nameOfIngridient] = kitchen[nameOfIngridient] - amount;
      console.log(kitchen);
  },

  cook(check) {
      let recipes = MrFeeman.recipes[check];
      for (const key in recipes) {
          if (recipes.hasOwnProperty(key)) {
              if (recipes[key] === kitchen.kettle.ingridients[key]) {
                  
                console.log(check);
                
              } else {
                  check = 'Неправильное количество ингридиентов';
              };
          };
      };
  },
};

kitchen.addIngridientToKettle('bones', 10);
kitchen.addIngridientToKettle('island', 100);
kitchen.addIngridientToKettle('nitro', 100);
kitchen.addIngridientToKettle('glycerin', 39);
kitchen.cook('shift');

kitchen.addIngridientToKettle('nation', 1);
kitchen.addIngridientToKettle('age', 999);
kitchen.cook('MssFreeman'); 




/*Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

Bonus:
crea un peperone con una funzione */

const peperoni = [
      {
          varietà: 'Ginetta',
          'peso': 2,
         'lunghezza' : 1990,
          
      },
      {
         varietà: 'Ginetta',
         'peso': 2,
        'lunghezza' : 1990,
         
     },
     {
      varietà: 'Ginetta',
      'peso': 2,
     'lunghezza' : 1990,
      
  },
  {
   varietà: 'Ginetta',
   'peso': 2,
  'lunghezza' : 1990,
   
},
{
   varietà: 'Ginetta',
   'peso': 2,
  'lunghezza' : 1990,
   
},
{
   varietà: 'Ginetta',
   'peso': 2,
  'lunghezza' : 1990,
   
},
{
   varietà: 'Ginetta',
   'peso': 2,
  'lunghezza' : 1990,
   
},
{
   varietà: 'Ginetta',
   'peso': 2,
  'lunghezza' : 1990,
   
},
{
   varietà: 'Ginetta',
   'peso': 2,
  'lunghezza' : 1990,
   
},
{
   varietà: 'Ginetta',
   'peso': 2,
  'lunghezza' : 1990,
   
},
 ];

 let sumOfPeso = 0;

   for(let index = 0; index<peperoni.length; index++){
     
      
      sumOfPeso += peperoni[index].peso;
      
   }
 console.log(sumOfPeso);
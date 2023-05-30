/**

Crea un array composto da 15 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 

nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

 */

const auto = [
      {
          marca: 'ferrari',
          modello: 'super',
         alimentazione : 'benzina',
          
      },
      {
         marca: 'ferrari',
         modello: 'super',
        alimentazione : 'benzina',
         
     },
     {
      marca: 'mercedes',
      modello: 'benz',
     alimentazione : 'benzina',
      
  },
  {
   marca: 'mercedes',
   modello: 'dies',
  alimentazione : 'diesel',
   
},
{
   marca: 'mercedes',
   modello: 'dies',
  alimentazione : 'diesel',
   
},
{
   marca: 'mercedes',
   modello: 'g',
  alimentazione : 'gpl',
   
},
{
   marca: 'mercedes',
   modello: 'g',
  alimentazione : 'gpl',
   
},
{
   marca: 'ferrari',
   modello: 'grrr',
  alimentazione : 'gpl',
   
},
{
   marca: 'ferrari',
   modello: 'grrr',
  alimentazione : 'gpl',
   
},
{
   marca: 'ferrari',
   modello: 'ele',
  alimentazione : 'elettrico',
   
},
{
   marca: 'ferrari',
   modello: 'ele',
  alimentazione : 'elettrico',
   
},
{
   marca: 'ferrari',
   modello: 'ele',
  alimentazione : 'elettrico',
   
},
{
   marca: 'ferrari',
   modello: 'ele',
  alimentazione : 'elettrico',
   
},
{
   marca: 'ferrari',
   modello: 'met',
  alimentazione : 'metano',
   
},
{
   marca: 'ferrari',
   modello: 'met',
  alimentazione : 'metano',
   
},
 ];

 const autoBenzina = [];

 for (let i = 0; i < auto.length; i++) {

   if (auto[i].alimentazione === 'benzina') {

     autoBenzina.push(auto[i]);
     
   }
 }
 
 console.log(autoBenzina);
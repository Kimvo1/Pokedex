Instrucciones de Implementación

Bienvenidos al reto 19, para cumplirlo deberán seguir lo siguiente:

1. Ver el video de explicación de reto.

2. Tienen los siguientes recursos: HTML y parte del css 
   
   * Acá les damos una estructura y una guía de cómo deben hacerlo sientanse libres de cambiar el código en donde necesiten para llegar al resultado final.

3. Resultado: El reto debe ser igual al que visualizan en el video.

¡HINTS!

CSS

-  El CSS está completo pero deben practicar y entender cómo se crearon las cards en este reto


JS

la API que se usará es:

pokeapi.co

Deberás crear createPokemonCard: se encargará de

Traer el nombre del pokemon
el id
el tipo de pokemon, este será útil para hacer match con el fondo que debe tener cada pokemon

con esta información podrás construir la card de cada uno de ellos.

explicación:

1. seleciona el contenedor de pokemon del HTML usando "document.queryselector
   y lo almacena en la variable "poke_Container"

2. se crea un const colors que mapea los tipos de pokemon a colores hexadecimales

3. se crea una funciona llamada "fetchPokemon que realiza la solicitud a la PokeApi
   para obtener la informacion de los pokemon segun su ID  y luego llama a la funcion tarjeta "createPokemon"
   con los datos obtenidos.

4. se crea una funcion  con un ciclo for que llama a "fetchPokemon" para obtener la inofrmacion sobre los pokemon 
   en un rango de ID, esto genra las tarjetas pokemon.

5. se crea la funcion tarjeta pokemon con un bloque "div" con la clase de "pokemon-block"
   y agraga elementos para mostar la imagen, numero , nombre y tipo. luego agrega la tarjeta
   al contenedor de pokemon en el HTML.

6. La ultima linea se llama a "fetchPokemon(160)" para cargar y mostrar el numero de pokemons
   que se pone dentro de los parentesis, cada tarjeta de pokemon incluye la imagen del pokemon, 
   su numero de identificacion, nombre y tipo. cada tarjeta tambien tiene un fondo de color igual al tipo de pokemon.
   




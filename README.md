----------------------
Instalar dependencias con 'npm install'
----------------------
Ejecutar con 'npm start' o 'node index.js'
-------------------------
Diseno de la solucion

La solucion proporciona el listado y filtrado de hoteles, datos consumidos en la aplicación cliente.
Ademas, se desarrollaron y testearon los items:
* Añadir alguna capa de persistencia de datos.
* Implementar el CRUD de hoteles (solo a nivel API).

Para ello se implemento un diseno en capas, donde esencialmente el router de la aplicacion dirige los pedidos al hotelsController, 
este delega las peticiones de datos al hotelsService, el cual utiliza una capa de persistencia que hace uno de 'NeDB' 
https://github.com/louischatriot/nedb.
Dado que node es single-threaded, para poder aprovechar todos los nucleos del procesador utiliza node cluster, levantando un proceso worker por cada nodo. 

-------------------------
Configuracion

Se puede cambiar las configuraciones desde config.json, donde se puede setear el ambiente 'production' o 'development'.
Cada uno de ellos levanta en un puerto distinto, y solo el ambiente development tiene debug en true.
Para cambiar el ambiente, editar el script package.json en la linea
	"start": "cross-env NODE_ENV=development node index.js",
se cambiar 'development' por 'production' 

--------------
Aclaraciones:

* La parte de CRUD se teste utilizando POSTMAN.
* La base de datos NeDB elegida se utilizo solo para crear rapidamente una capa de persistencia para poder crear, editar y borrar
  hoteles. 

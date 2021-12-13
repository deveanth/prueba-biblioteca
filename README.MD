# Prueba Bibliotecca

---

## Crear en postgres una base de datos con el nombre: **library-test**

### Configuración del archivo .env

##### Crear en la carpeta raiz de server un archivo .**env** con las siguiente estructura

    PORT = 5000
    LOCAL_DATABASE = localhost
    PORT_DATABASE = 5432
    NAME_DATABASE = library-test
    USER_DATABASE = postgres  // u otro usuarion con permisos administrador
    PASSWORD_DATABASE = root  // o contraseña del usuario anterior

## Configuración del servidor

1. Ejecutar el comando **yarn install** dentro de la carpeta server.
2. Ejecutar el comando **yarn start** dentro de la carpeta server para iniciar el servidor.
3. Esperar el mensaje por consola "server running"

## Configuracion del Cliente

1.  Ejecutar el comando **yarn install** dentro de la carpeta client.
2.  Ejecutar el comando **yarn dev** dentro de la carpeta client para iniciar el cliente.
3. Esperar el mensaje por consola "event - compiled client and server successfully in  .. ms (175 modules)"
3. Abrir en el navegadpr la siguiente url http://localhost:3000/

# Exercise Tracker de freeCodeCamp

## Descripción

Este es un proyecto de desafio de freeCodeCamp. El mismo consiste en realizar una aplicación que permite asignar ejercicios a los usuarios y poder ver un listado de todos los ejercicios asignados y poder filtrarlos por fecha o cantidad.

## Tecnologias

- Express
- Node js
- Mongo
- Mongoose
- JavaScript
- HTML
- CSS

## Retos

- Se tuvo que repasar como utilizar Mongo como base de datos

- Se tuvo que repasar como usar el ODM Mongoose para el manejo de la base de datos

- Se tuvo que practicar como utilziar correctamente los Query Params del objeto Request

- Se tuvo que aprender como realizar relaciones One-To-Many utilizando mongoose

## Razón

A fin de mejorar mis conocimientos en express y completar el curso *Back End Development and APIs* de freeCodeCamp.

## Instalación

1- Clonar el repositorio

2- Instalar las dependencias del proyecto

3- Crear el archivo de las variables de entorno (.env) utilizando las variables del archivo de ejemplo [sample.env](sample.env)

4- Iniciar la aplicación

```sh
npm install
npm run start
```
## Como usar la aplicación:

La aplicacion consta de una pagina web.

Esta pagina tiene 2 formularios:

- Crear nuevo usuario

- Añadir ejercicios

### Formulario para crear usuario:

Como indica su nombre este permite crear un usuario al cual se le podrá asignar ejercicios y obtener iformación del mismo.

### Formulario para añadir ejercicios:

Este formulario permite añadirle ejercicios a los usuarios.


### Rutas o Endpoints 

Página principal con los formularios: **/ [GET]**

Ruta para obtener información fundamental de cada usario registrado: **/api/users [GET]**

Ruta para obtener toda la información de un usario: **/api/users/:_id/logs [GET]**

Ruta para obtener informacion información del usario utilizando filtros: **/api/users/:_id/logs[from][&to][&limit] [GET]**

> Nota: los query params que están entre corchetes son optionales y hacen referencia a: from y to: fecha en formato yyyy-mm-dd, y limit: número maximo de registros esperados.

Ruta que escucha los datos del formulario de creación de usuario: **/api/users [POST]**

Ruta que escucha los datos del formulario de agregar ejercicios: **/api/users/:_id/exercises [POST]**


### Proyecto original

This is the boilerplate for the Exercise Tracker project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker

## Licencia

MIT License

Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.


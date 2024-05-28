# Portfolio Angular

## Descripción

Elegí hacer un portafolio personal para el seminario de Angular. Incluye secciones divididas en componentes para presentar mi información personal, habilidades, proyectos destacados y formas de contacto.

## Datos del Estudiante

- **Nombre:** Santiago Moyano Suárez
- **Sede:** Tres Arroyos
- **Email:** santisebmoyanosuarez@gmail.com

## Enlace a StackBlitz

Intenté subir el proyecto con el /edit pero no me dejó porque mi proyecto superaba el límite de MB, pero asocié mi repo de Github a Stackblitz y parece comportarse igual, sino avisenme por favor si necesitan con el /edit
[StackBlitz](https://stackblitz.com/~/github.com/SantiMoyano/portfolio)

También esta deployado en [Vercel](https://santiagodev.vercel.app)

## Requerimientos Mínimos

1. **Ruteo:**

- Clickeando los elementos del header
  - (`/`) (Todos los componentes)
  - (`/about`)
  - (`/experience`)
  - (`/projects`)
  - (`/contact`)
  - Implementación: [src/app/app-routing.module.ts](src/app/app-routing.module.ts)

2. **Componentes:**

   - Header, Hero, About, Experience, Projects, Contact

3. **Interfaces:**

   - Interfaz `Project` para tipar los datos de los proyectos.
   - Implementación: [src/app/models/project.model.ts](src/app/components/projects/project.model.ts)

   - Lo mismo en el componente Experience.

4. **Directivas o Control de Flujo:**

   - Uso de `*ngFor` y `*ngIf` en la plantilla de Proyectos.
   - Implementación: [src/app/components/projects/projects.component.html](src/app/components/projects/projects.component.html)
   - ngFor, para recorre los elementos del array del tipo 'Project' y también otro para recorrer el array de tecnologías.
   - ngIf, para que en caso de que sea el ultimo elemento de las tecnologías, no ponga un punto separador

   - Similar en el componente Experience

5. (y 6) **Comunicación entre Componentes:** . **Servicios:**

Se implementó un Servicio (theme.service.ts), el cual se encarga de cambiar el color principal de la página cuando el usuario interactua en la animación del hero o del contacto, donde posteriormente se comunica con AppComponent para pedirle que cambie el color de la página.
theme.service define una variable "color" observable a la cual se suscribe AppComponent.
Cuando el usuario clickea el gif se llama a un metodo del servicio el cual se encarga de recorrer los distintos colores de la página.
Como App Component esta suscrito a ese atributo, cada vez que sufre un cambio, le pido que cambie la variable css del color principal de la página.

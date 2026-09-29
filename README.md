# LunarMC — Tienda Minecraft Oficial

## Descripción del Proyecto

LunarMC es una aplicación web desarrollada para la comunidad de LunarMC Network. El proyecto presenta información del servidor, recursos para la comunidad, registro de usuarios y diferentes secciones de navegación.

Para el Trabajo Práctico N.º 4 se realizó la refactorización del proyecto original hacia PHP, incorporando una estructura modular y reutilizable. Se implementaron plantillas PHP para separar elementos comunes de las diferentes páginas, como el encabezado, la navegación y el pie de página.

La refactorización permite mantener una estructura más organizada y facilita la modificación de elementos que se utilizan en varias páginas del sitio.

 Enlace al Prototipo de Figma

Prototipo original del proyecto:

https://www.figma.com/design/efkpVleWlvFE5e1KMBGIju/Sin-t%C3%ADtulo?node-id=0-1&t=YdVa33IKAquP9MfG-1

> Reemplazar el texto anterior por el enlace correspondiente al prototipo de Figma.

## Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript
* PHP 8.x
* Bootstrap
* XAMPP
* MySQL
* Git
* GitHub
* Figma

## Estructura del Proyecto

El proyecto se encuentra organizado mediante una estructura modular en PHP.

Entre los principales archivos y componentes se encuentran:

* `index.php` — Página principal.
* `registro.php` — Página de registro.
* `config.php` — Archivo de configuración del proyecto.
* `includes/header.php` — Encabezado reutilizable.
* `includes/nav.php` — Navegación del sitio.
* `includes/footer.php` — Pie de página reutilizable.
* `index-.css` — Hoja de estilos principal.
* `index-.js` — Funciones JavaScript del proyecto.
* `.env.example` — Ejemplo de las variables de entorno necesarias para ejecutar el proyecto.

## Instalación y Ejecución Local

### 1. Clonar el repositorio

Clonar el repositorio desde GitHub:

```bash
git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git
```

Reemplazar `TU-USUARIO` y `TU-REPOSITORIO` por los datos correspondientes al repositorio.

### 2. Ubicar el proyecto en el servidor local

Si se utiliza XAMPP, colocar la carpeta del proyecto dentro de:

```text
C:\xampp\htdocs\
```

Por ejemplo:

```text
C:\xampp\htdocs\lunarmc\
```

### 3. Iniciar XAMPP

Abrir el panel de control de XAMPP e iniciar:

* Apache
* MySQL, si el proyecto requiere conexión con la base de datos.

### 4. Configurar las variables de entorno

Utilizar el archivo `.env.example` como referencia para crear el archivo `.env` correspondiente al entorno local.

No se deben subir al repositorio datos sensibles como contraseñas o claves privadas.

### 5. Crear/configurar la base de datos

Si el proyecto utiliza una base de datos, importar el archivo SQL correspondiente mediante phpMyAdmin y verificar los datos de conexión configurados para el entorno local.

### 6. Ejecutar el proyecto

Abrir el navegador y acceder a:

```text
http://localhost/LunarMC/
```

La dirección exacta puede variar según el nombre utilizado para la carpeta del proyecto dentro de `htdocs`.

## Evidencia de Funcionamiento

### Servidor Local Ejecutándose

Se incluye una captura de pantalla donde se observa el proyecto ejecutándose correctamente en el servidor local mediante:

```text
http://localhost/LunarMC/
```

**Captura:**
![Servidor Local Ejecutándose](lunarmc/prueba de funcionalidad)

---

### Estructura Modular (SSI)

La aplicación utiliza una estructura modular mediante archivos PHP reutilizables.

Los principales componentes son:

```text
includes/
├── header.php
├── nav.php
└── footer.php
```

Estos archivos permiten reutilizar las diferentes partes de la interfaz entre las páginas del proyecto.

**Captura:**

*Pegar aquí una captura donde se observe la estructura y/o el código de los archivos PHP.*

---

### Navegación Dinámica

La navegación del sitio utiliza PHP para adaptar dinámicamente determinados elementos de acuerdo con la sección actual.

Entre los aspectos implementados se encuentran:

* Cambio dinámico del título de la pestaña del navegador.
* Identificación de la sección actual.
* Aplicación de la clase `active` al elemento correspondiente del menú de navegación.

**Captura:**

*Pegar aquí una captura donde se observe el título dinámico y la opción activa del menú.*

---

### Configuración de Variables de Entorno

El proyecto incluye un archivo `.env.example` que sirve como referencia para configurar las variables necesarias en el entorno local.

El archivo de ejemplo no contiene credenciales reales ni información sensible.

**Captura:**

*Pegar aquí una captura del archivo `.env.example`.*

## Git y Control de Versiones

El desarrollo del proyecto se realizó utilizando Git y GitHub.

Se utilizó una rama de trabajo para realizar los cambios correspondientes a la refactorización antes de integrarlos a la rama principal.

Ejemplo de flujo utilizado:

```text
main
  │
  └── feature/migracion-php
            │
            ├── commits de desarrollo
            │
            └── Pull Request
                    │
                    ▼
                   main
```

Los commits fueron organizados de manera descriptiva para identificar los diferentes cambios realizados durante el desarrollo y la refactorización.

## Autor

Proyecto desarrollado para el Trabajo Práctico N.º 4.

**LunarMC Network**

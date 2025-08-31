# Node SQL REST API

Este proyecto es una API REST construida con Node.js y Express para gestionar empleados en una base de datos SQL. Utiliza MariaDB para el entorno local y Railway para producción.

## Despliegue en Producción

La API está desplegada en Railway y disponible en:

**https://node-sql-restapi-production.up.railway.app/**

Puedes realizar peticiones HTTP (GET, POST, PUT, DELETE) a los endpoints definidos para interactuar con la base de datos de empleados.

## Producción con Railway y MySQL

En producción, este proyecto utiliza Railway como plataforma de despliegue y una base de datos MySQL gestionada por Railway.

**Pasos para configurar:**

1. **Crea un proyecto en Railway** y añade un plugin de MySQL.
2. **Obtén las credenciales de conexión** (host, usuario, contraseña, base de datos, puerto) desde Railway.
3. **Configura las variables de entorno** en Railway con estos datos:
   - `DB_HOST`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
   - `DB_PORT`
4. **El código de la API** utiliza estas variables para conectarse automáticamente a la base de datos MySQL en producción.

Esto permite que la API funcione de forma segura y escalable en Railway usando MySQL como base de datos.

## Configuración de Base de Datos

- **Local:** Usa MariaDB. Configura las credenciales en el archivo `.env`.
- **Producción:** Usa Railway. Configura las variables de entorno en Railway con los datos de tu instancia.

## Estructura del Proyecto

- `src/app.js`: Configuración principal de Express.
- `src/controllers/`: Lógica de negocio.
- `src/routes/`: Definición de rutas/endpoints.
- `src/db.js`: Conexión a la base de datos.
- `db/database.sql`: Script para crear la base de datos y tablas.

## Uso

1. Instala las dependencias:
   ```
   npm install
   ```
2. Configura el archivo `.env` con tus credenciales de base de datos.
3. Inicia el servidor:
   ```
   npm start
   ```

## Endpoints

Consulta la documentación de rutas en el proyecto para ver los endpoints disponibles y cómo utilizarlos.

## Herramientas para manipular tablas y creación de base de datos

Para gestionar y manipular tus tablas MySQL/MariaDB desde la terminal, puedes usar herramientas como:

- **mycli**: Cliente de línea de comandos para MySQL/MariaDB con autocompletado y resaltado de sintaxis.
  - Instalación en Linux:
    ```
    pip install mycli
    ```
  - Conexión a tu base de datos local:
    ```
    mycli -h localhost -u root -p companydb
    ```
  - Conexión a la base de datos MySQL de Railway:
    ```
    mycli -h <host_railway> -u <usuario_railway> -p <base_de_datos_railway>
    ```
    Utiliza las credenciales proporcionadas por Railway para conectarte y manipular la base de datos directamente desde la terminal.

- **mysql**: Cliente oficial de MySQL, disponible por defecto en la mayoría de instalaciones de MySQL/MariaDB.

Estas herramientas te permiten crear bases de datos, modificar tablas, ejecutar consultas y administrar tu base de datos de forma eficiente desde la terminal, tanto en

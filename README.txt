

# **Ceniceros Construye – Sitio Web Corporativo**

Sitio web desarrollado para la empresa **Ceniceros Construye**, dedicado a mostrar sus servicios, portafolio, información corporativa y permitir la comunicación directa con clientes mediante formularios conectados a una base de datos MySQL.

Este proyecto incluye frontend completo, backend en PHP y una base de datos estructurada para almacenar contactos y cotizaciones.

---

## 🚧 **Tecnologías utilizadas**

* **HTML5** – estructura del sitio
* **CSS3** – estilos y diseño visual
* **JavaScript** – interacción en el navegador
* **PHP 8+** – backend y conexión con la base de datos
* **MySQL** – almacenamiento de información
* **XAMPP** – servidor local Apache + MySQL

---

## 📦 **Estructura del proyecto**

```
/Ceniceros_construye
│
├── Index.html
├── nosotros.html
├── servicios.html
├── portafolio.html
├── cotizacion.html
├── contacto.html
│
├── guardar_mensaje.php
├── guardar_cotizacion.php (si se usa)
├── conexion.php
│
├── Style.css
├── script.js
│
└── /img
```

---

## 🗄️ **Base de datos**

El proyecto utiliza una base de datos llamada:

```
ceniceros_construye
```

### Tablas incluidas

* **clientes** – registro de clientes frecuentes
* **servicios** – catálogo de servicios
* **cotizaciones** – solicitudes enviadas desde el sitio
* **contacto** – mensajes enviados desde el formulario de contacto

### Archivo SQL incluido

```
/database/ceniceros_construye.sql
```

Este archivo crea toda la estructura y agrega algunos registros iniciales.

---

## 🔌 **Configuración del proyecto**

### 1. Colocar el proyecto en XAMPP

Mover la carpeta del proyecto a:

```
C:\xampp\htdocs\Ceniceros_construye\
```

### 2. Crear base de datos

1. Abrir **phpMyAdmin**
2. Crear la base de datos:

   ```
   ceniceros_construye
   ```
3. Importar el archivo SQL con las tablas.

### 3. Configurar `conexion.php`

```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "ceniceros_construye";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
```

---

## ✉️ **Formulario de contacto**

El formulario envía datos mediante `POST` hacia **guardar_mensaje.php**, los cuales son almacenados en la tabla **contacto**.

Campos enviados:

* nombre
* correo
* mensaje

El sistema responde con un mensaje de éxito si la operación se completa correctamente.

---

## 🖼️ **Secciones del sitio**

El sitio contiene las siguientes secciones:

* **Inicio**
* **Nosotros**
* **Servicios**
* **Portafolio**
* **Cotización**
* **Contacto**

Cada sección cuenta con diseño responsivo y navegación desde un menú superior.

---

## 🧪 **Pruebas realizadas**

1. **Prueba de formulario lleno**
   ✓ se verificó que los campos permiten introducir datos.

2. **Prueba de envío correcto**
   ✓ el sistema muestra el mensaje “Formulario enviado correctamente”.

3. **Prueba en phpMyAdmin**
   ✓ los datos quedan registrados en la tabla *contacto*.

4. **Prueba de navegación**
   ✓ todas las secciones cargan correctamente sin errores 404.

---

## 📌 **Estado del proyecto**

✔ Proyecto funcional
✔ Base de datos operativa
✔ Formularios conectados
✔ Navegación completa
✔ Diseño compatible con móviles

---

## 👤 **Autor**

Proyecto desarrollado por:
Astrid Ceniceros Caratachea
Miguel Angel Mendoza Alvarado
Ceniceros Construye – 2025



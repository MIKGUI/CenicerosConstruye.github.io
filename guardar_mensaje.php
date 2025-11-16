<?php
include("conexion.php");

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$stmt = $conn->prepare("INSERT INTO contacto (nombre, correo, mensaje) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nombre, $correo, $mensaje);

if ($stmt->execute()) {
    echo "<h2>✅ Tu mensaje ha sido enviado correctamente.</h2>";
    echo "<a href='contacto.html'>Volver</a>";
} else {
    echo "<h2>❌ Error al enviar el mensaje.</h2>";
}

$stmt->close();
$conn->close();
?>

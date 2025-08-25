-- Crear el usuario (si no existe todavía)
CREATE USER 'user'@'localhost' IDENTIFIED BY 'tu_password';

-- Dar todos los privilegios solo sobre companydb
GRANT ALL PRIVILEGES ON companydb.* TO 'user'@'localhost';

-- Aplicar cambios --> actualizar bases de datos
FLUSH PRIVILEGES;


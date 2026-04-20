# Proyecto de Gestión de Tareas

Aplicación full stack para gestionar tareas con frontend en React y backend en Flask, usando MySQL como base de datos.

## Stack tecnológico

- Frontend: React + Vite
- Backend: Flask + SQLAlchemy
- Base de datos: MySQL 8
- Contenedores: Docker + Docker Compose

## Estructura del proyecto

- `back/`: API REST y lógica de negocio
- `Front/`: interfaz web
- `docker-compose.yml`: orquestación de frontend, backend y MySQL

## Ejecución con Docker (recomendado)

1. Ubíquese en la raíz del proyecto.
2. (Opcional) Define variables en un archivo `.env` en la raíz.
3. Levanta los servicios:

```bash
docker compose up
```


from src.domain.entities.tarea_entity import TareaEntity
from src.domain.repositories.tarea_repository_interface import ITareaRepository


class ObtenerTareasUseCase:
    def __init__(self, tarea_repository: ITareaRepository):
        self.tarea_repository = tarea_repository

    def ejecutar(self) -> list[TareaEntity]:
        tareas = self.tarea_repository.obtener_tareas()
        return tareas




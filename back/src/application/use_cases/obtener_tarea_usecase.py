from src.domain.entities.tarea_entity import TareaEntity
from src.domain.repositories.tarea_repository_interface import ITareaRepository


class ObtenerTareaUseCase:
    def __init__(self, tarea_repository: ITareaRepository):
        self.tarea_repository = tarea_repository

    def ejecutar(self, id) -> TareaEntity | None:
        tarea = self.tarea_repository.obtener_tarea(id)

        if not tarea:
            return None

        return tarea

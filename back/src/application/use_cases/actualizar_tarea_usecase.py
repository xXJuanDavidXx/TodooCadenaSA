from src.domain.entities.tarea_entity import TareaEntity
from src.domain.repositories.tarea_repository_interface import ITareaRepository
from src.application.DTOs.tarea_dto import ActualizarTareaDTO

class ActualizarTareaUseCase:
    def __init__(self, tarea_repository: ITareaRepository):
        self.tarea_repository = tarea_repository

    def ejecutar(self, id: int, tarea_dto: ActualizarTareaDTO) -> TareaEntity | None:
        tarea = self.tarea_repository.obtener_tarea(id)

        if tarea is None:
            return None

        if tarea_dto.titulo is not None:
            tarea.titulo = tarea_dto.titulo

        if tarea_dto.descripcion is not None:
            tarea.descripcion = tarea_dto.descripcion

        if tarea_dto.completado is not None:
            tarea.completado = tarea_dto.completado

        self.tarea_repository.actualizar_tarea(id_tarea=id, tarea=tarea)
        return tarea





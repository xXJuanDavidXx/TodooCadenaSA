from src.domain.entities.tarea_entity import TareaEntity
from src.domain.repositories.tarea_repository_interface import ITareaRepository
from src.application.DTOs.tarea_dto import CrearTareaDTO


class CrearTareaUseCase:
    def __init__(self, tarea_repository: ITareaRepository):
        self.tarea_repository = tarea_repository


    def ejecutar(self, tarea_dto: CrearTareaDTO):
        titulo = tarea_dto.titulo
        descripcion = tarea_dto.descripcion
        tarea = TareaEntity(id=None, titulo=titulo, descripcion=descripcion, completado=False)
        self.tarea_repository.crear_tarea(tarea)





from src.domain.repositories.tarea_repository_interface import ITareaRepository

class EliminarTareaUseCase:
    def __init__(self, tarea_repository: ITareaRepository):
        self.tarea_repository = tarea_repository

    def ejecutar(self, id: int) -> bool:
        tarea = self.tarea_repository.obtener_tarea(id_tarea=id)

        if tarea is None:
            return False

        return self.tarea_repository.eliminar_tarea(id_tarea=id)

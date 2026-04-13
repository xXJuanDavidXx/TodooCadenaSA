from abc import ABC, abstractmethod
from src.domain.entities.tarea_entity import TareaEntity

class ITareaRepository(ABC):

    @abstractmethod
    def crear_tarea(self, tarea: TareaEntity) -> None:
        pass

    @abstractmethod
    def obtener_tareas(self) -> list[TareaEntity]:
        pass

    @abstractmethod
    def obtener_tarea(self, id_tarea:int) -> TareaEntity | None:
        pass

    @abstractmethod
    def actualizar_tarea(self, id_tarea:int, tarea: TareaEntity) -> TareaEntity | None:
        pass

    @abstractmethod
    def eliminar_tarea(self, id_tarea:int) -> bool:
        pass

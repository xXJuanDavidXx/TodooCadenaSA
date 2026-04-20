from sqlalchemy import select
from src.domain.entities.tarea_entity import TareaEntity
from src.domain.repositories.tarea_repository_interface import ITareaRepository
from src.infrastructure.sql_repository.database import Base, SessionLocal, engine
from src.infrastructure.sql_repository.models import TareaModel


def db_init():
    Base.metadata.create_all(bind=engine)


class SqlRepository(ITareaRepository):

    @staticmethod
    def __convertir_modelo_a_entidad(tarea_model: TareaModel) -> TareaEntity:
        return TareaEntity(
            id=tarea_model.id,
            titulo=tarea_model.titulo,
            descripcion=tarea_model.descripcion,
            completado=tarea_model.completado
        )


    def crear_tarea(self, tarea: TareaEntity) -> None:
        with SessionLocal() as sesion:
            tarea_model = TareaModel(
                titulo=tarea.titulo,
                descripcion=tarea.descripcion,
                completado=tarea.completado
            )
            sesion.add(tarea_model)
            sesion.commit()
            sesion.refresh(tarea_model)
            tarea.id = tarea_model.id


    def obtener_tareas(self) -> list[TareaEntity]:
        with SessionLocal() as sesion:
            resultado = sesion.execute(select(TareaModel).order_by(TareaModel.id))
            lista_modelos = resultado.scalars().all()
            return [self.__convertir_modelo_a_entidad(modelo) for modelo in lista_modelos]


    def obtener_tarea(self, id_tarea: int) -> TareaEntity | None:
        with SessionLocal() as sesion:
            tarea_model = sesion.get(TareaModel, id_tarea)

            if tarea_model is None:
                return None

            return self.__convertir_modelo_a_entidad(tarea_model)


    def actualizar_tarea(self, id_tarea: int, tarea: TareaEntity) -> TareaEntity | None:
        with SessionLocal() as sesion:
            tarea_model = sesion.get(TareaModel, id_tarea)

            if tarea_model is None:
                return None

            tarea_model.titulo = tarea.titulo
            tarea_model.descripcion = tarea.descripcion
            tarea_model.completado = tarea.completado
            sesion.commit()

            return self.__convertir_modelo_a_entidad(tarea_model)


    def eliminar_tarea(self, id_tarea: int) -> bool:
        with SessionLocal() as sesion:
            tarea_model = sesion.get(TareaModel, id_tarea)

            if tarea_model is None:
                return False

            sesion.delete(tarea_model)
            sesion.commit()
            return True


sql_repository = SqlRepository()

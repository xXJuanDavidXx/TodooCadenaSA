##import os
##from flask_sqlalchemy import SQLAlchemy
##base_datos = os.path.join(os.path.dirname(__name__), "db.sqlite")
from src.domain.entities.tarea_entity import TareaEntity
from src.domain.repositories.tarea_repository_interface import ITareaRepository
import json
import os

base_datos = os.path.join(os.path.dirname(__name__), "db.json")

def db_init():
    if not os.path.exists(base_datos):
        with open(base_datos, "w") as f:
            data = []
            json.dump(data, f, indent=4)



class JsonRepository(ITareaRepository):

    def __obtener_db(self):
        with open(base_datos, "r") as f:
            return json.load(f)


    def __escribir_db(self, datos):
        with open(base_datos, "w") as f:
            json.dump(datos, f, indent=4)


    def __generar_id(self) -> int:
        db = self.__obtener_db()
        try:
            ultimo_id = db[-1]["id"] + 1
            return ultimo_id
        except IndexError:
            return 1

    
    def __obtener_index_tarea(self, id_tarea):
        db = self.__obtener_db()
        for i, tarea_db in enumerate(db):
            if tarea_db["id"] == id_tarea:
                return i





    def crear_tarea(self, tarea: TareaEntity) -> None:
        db = self.__obtener_db()
        tarea_id = self.__generar_id()
        tarea_dict = {"id":tarea_id, "titulo":tarea.titulo, "descripcion":tarea.descripcion, "completado":tarea.completado}
        db.append(tarea_dict)
        self.__escribir_db(db)


    def obtener_tareas(self) -> list[TareaEntity]:
        db = self.__obtener_db()
        lista_tareas = []

        for tarea in db:
            entidad_tarea = TareaEntity(tarea["id"],tarea["titulo"],tarea["descripcion"], tarea["completado"])
            lista_tareas.append(entidad_tarea)

        return lista_tareas


    def obtener_tarea(self, id_tarea: int) -> TareaEntity | None:
        db = self.__obtener_db()

        for tarea in db:
            if tarea["id"] == id_tarea:
                return TareaEntity(tarea["id"], tarea["titulo"], tarea["descripcion"], tarea["completado"])
        return None


    def actualizar_tarea(self, id_tarea: int, tarea: TareaEntity) -> TareaEntity | None:
        db = self.__obtener_db()

        index_tarea_db = self.__obtener_index_tarea(id_tarea)
        #Nota para mi, no tengo que validar aqui la existencia del tarea en la db porque ya lo esta haciendo el use case

        db[index_tarea_db] = {"id": tarea.id, "titulo": tarea.titulo, "descripcion": tarea.descripcion, "completado": tarea.completado}

        self.__escribir_db(db)
        return tarea




    def eliminar_tarea(self, id_tarea: int) -> bool:
        db = self.__obtener_db()

        index_tarea_db = self.__obtener_index_tarea(id_tarea)
        db.pop(index_tarea_db)
        self.__escribir_db(db)

        return True



json_repository = JsonRepository()

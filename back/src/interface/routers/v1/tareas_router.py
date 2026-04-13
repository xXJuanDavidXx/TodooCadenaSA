from flask import Blueprint, request, jsonify 
from src.application.use_cases.obtener_tareas_usecase import ObtenerTareasUseCase
from src.application.use_cases.crear_tarea_usecase import CrearTareaUseCase
from src.application.use_cases.obtener_tarea_usecase import ObtenerTareaUseCase
from src.application.use_cases.actualizar_tarea_usecase import ActualizarTareaUseCase
from src.application.use_cases.eliminar_tarea_usecase import EliminarTareaUseCase
from src.application.DTOs.tarea_dto import CrearTareaDTO, ActualizarTareaDTO
from src.infrastructure.json_repository.repository import json_repository
from src.interface.controllers.validaciones import validar_datos_actualizar, validar_datos_crear
from dataclasses import asdict # este ijuemadre me sirve de DTO

tarea_bp = Blueprint('tareas', __name__)


@tarea_bp.route("/tareas", methods=["GET", "POST"])
def crear_obtener_tareas():

    if request.method == "POST":
        datos_request = request.get_json()

        if not datos_request:
            res = {"mensaje":"request vacio"}
            return jsonify(res), 400

        exito, mensaje = validar_datos_crear(datos_request)


        if not exito:
            res = {"mensaje":mensaje}
            return jsonify(res), 400

        ########EFECTUAMOS GUARDADO EN DB###############

        tarea_dto = CrearTareaDTO(**datos_request)
        crear_tarea_uc = CrearTareaUseCase(json_repository) #7w7 lo lindo de depender de abstracciones
        crear_tarea_uc.ejecutar(tarea_dto)
        res = {"mensaje": "OK"}
        return jsonify(res), 201

    ###GET###
    obtener_tareas_uc = ObtenerTareasUseCase(json_repository)
    tareas = obtener_tareas_uc.ejecutar()
    dict_tareas = [asdict(t) for t in tareas]


    return jsonify(dict_tareas), 200




@tarea_bp.route("/tareas/<int:id>", methods=["GET", "PATCH", "DELETE"])
def obtener_actualizar_eliminar_tarea(id):

    if request.method == "PATCH":
        data_request = request.get_json()

        if not data_request:
            res = {"mensaje":"request vacio"}
            return jsonify(res), 400

        ## Pensar en las validaciones pertinentes

        exito, mensaje = validar_datos_actualizar(data_request)

        if not exito:
            res = {"mensaje":mensaje}
            return jsonify(res), 400

        tarea_dto = ActualizarTareaDTO(**data_request)

        actualizar_tarea_uc = ActualizarTareaUseCase(json_repository)
        tarea_actualizada = actualizar_tarea_uc.ejecutar(id, tarea_dto)

        if tarea_actualizada is None:
            res = {"mensaje":f"Tarea con id {id} no existe"}
            return jsonify(res), 404

        #SI TODO ESTA BIEn
        res = {"mensaje":"Actualizado", "detalles": asdict(tarea_actualizada)} #La tarea debe ser un diccionariooo
        return jsonify(res), 200



    elif request.method == "DELETE":
        eliminar_tarea_uc = EliminarTareaUseCase(json_repository)
        eliminado = eliminar_tarea_uc.ejecutar(id)

        if not eliminado:
            res = {"mensaje":f"No existe la tarea con id {id}"}
            return jsonify(res), 404

        res = {"mensaje": "OK"}
        return jsonify(res), 200



    ###GET ####
    obtener_tarea_uc = ObtenerTareaUseCase(json_repository)
    tarea = obtener_tarea_uc.ejecutar(id)
    if not tarea:
        res = {"mensaje": "No se encontro la tarea"}
        return jsonify(res), 404
    dict_tarea = asdict(tarea)
    return jsonify(dict_tarea)





















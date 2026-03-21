from flask import Blueprint, request, jsonify 
from src.application.use_cases.obtener_tareas_usecase import ObtenerTareasUseCase
from src.application.use_cases.crear_tarea_usecase import CrearTareaUseCase
from src.application.use_cases.obtener_tarea_usecase import ObtenerTareaUseCase
from src.application.DTOs.tarea_dto import TareaDTO
from src.infrastructure.repository import json_repository
from src.interface.controllers.validaciones import validar_datos
from dataclasses import asdict # este ijuemadre me sirve de DTO

tarea_bp = Blueprint('tareas', __name__)


@tarea_bp.route("/tareas", methods=["GET", "POST"])
def crear_obtener_tareas():

    if request.method == "POST":
        datos_request = request.get_json()

        if not datos_request:
            res = {"mensaje":"request vacio"}
            return jsonify(res), 400

        exito, mensaje = validar_datos(datos_request)


        if not exito:
            res = {"mensaje":mensaje}
            return jsonify(res), 400

        ########EFECTUAMOS GUARDADO EN DB###############

        tarea_dto = TareaDTO(datos_request["titulo"], datos_request["descripcion"])
        crear_tarea_uc = CrearTareaUseCase(json_repository) #7w7 lo lindo de depender de abstracciones
        crear_tarea_uc.ejecutar(tarea_dto)
        res = {"mensaje": "OK"}
        return jsonify(res), 201

    ###GET###
    obtener_tareas_uc = ObtenerTareasUseCase(json_repository)
    tareas = obtener_tareas_uc.ejecutar()
    dict_tareas = [asdict(t) for t in tareas]


    return jsonify(dict_tareas), 200







@tarea_bp.route("/tareas/<int:id>", methods=["GET", "PUT", "DELETE"])
def obtener_actualizar_eliminar_tarea(id):

    if request.method == "PUT":
        pass



    elif request.method == "DELETE":
        pass


    ###GET ####
    obtener_tarea_uc = ObtenerTareaUseCase(json_repository)
    tarea = obtener_tarea_uc.ejecutar(id)
    if not tarea:
        res = {"mensaje": "No se encontro la tarea"}
        return jsonify(res), 404
    dict_tarea = asdict(tarea)
    return jsonify(dict_tarea)





















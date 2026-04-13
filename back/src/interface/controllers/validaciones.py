
def validar_datos_crear(datos):
    campos_obligatorios = ["titulo", "descripcion"]

    
    for campo in datos.keys():
        if campo not in campos_obligatorios:
            return False, f"El campo {campo} no forma parte de una tarea"

    for campo in campos_obligatorios:
        if campo not in datos or str(datos[campo]).strip() == "":
            return False, f"El campo '{campo}' es obligatorio y no puede estar vacío."



    return True, "Validación exitosa"


def validar_datos_actualizar(datos):
    campos_validos = ["titulo", "descripcion", "completado"]

    for campo, valor in datos.items():
        if campo not in campos_validos:
            return False, f"El campo '{campo}' no forma parte de una tarea."

        if campo in ["titulo", "descripcion"] and str(valor).strip() == "":
            return False, f"El campo '{campo}' no puede ser un texto vacío."

        if campo == "completado" and not isinstance(valor, bool):
            return False, "El campo 'completado' debe ser un valor booleano (True/False)."

    return True, "Validación exitosa"

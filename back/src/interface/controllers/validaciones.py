


def validar_datos(datos):
    campos_obligatorios = ["titulo", "descripcion"]

    for campo in campos_obligatorios:
        try:
            if campo not in datos or datos[campo] == "":
                return False, f"El {campo} es obligatorio"

        except KeyError:
            return False, "Error de campo desconocido"

        except Exception as e:
            return False, f"Error {e}"

    return True, "OK"

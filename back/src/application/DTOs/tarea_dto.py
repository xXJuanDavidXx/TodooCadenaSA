from dataclasses import dataclass

@dataclass
class CrearTareaDTO:
    titulo: str
    descripcion: str


@dataclass
class ActualizarTareaDTO:
    titulo: str | None = None
    descripcion: str | None = None
    completado: bool | None = None

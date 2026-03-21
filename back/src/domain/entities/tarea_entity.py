from dataclasses import dataclass

@dataclass
class TareaEntity:
    id: int | None
    titulo: str
    descripcion: str
    completado: bool


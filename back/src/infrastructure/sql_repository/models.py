from sqlalchemy import Boolean, Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from src.infrastructure.sql_repository.database import Base


class TareaModel(Base):
    __tablename__ = "tareas"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    titulo: Mapped[str] = mapped_column(String(255), nullable=False)
    descripcion: Mapped[str] = mapped_column(String(500), nullable=False)
    completado: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)

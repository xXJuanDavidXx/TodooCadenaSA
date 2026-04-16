from flask import Flask
from flask_cors import CORS
from src.infrastructure.json_repository.repository import db_init
from src.interface.routers.v1.tareas_router import tarea_bp

db_init()
app = Flask(__name__)
app.register_blueprint(tarea_bp, url_prefix="/api/v1")
CORS(app)




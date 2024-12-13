from flask import Blueprint, request, Response
from .logique import load_searches, paginate_data
import json

bp = Blueprint('routes', __name__)

# Route pour récupérer toutes les données
@bp.route('/searches/all', methods=['GET'])
def get_all_searches():
    searches = load_searches()
    return Response(json.dumps(searches, ensure_ascii=False, indent=2), mimetype='application/json')


# Route pour les méthodes non implémentées
@bp.route('/searches', methods=['POST', 'PUT', 'DELETE'])
@bp.route('/searches/<int:id>', methods=['POST', 'PUT', 'DELETE'])
def method_not_implemented(id=None):
    return Response(
        json.dumps({'erreur': 'Méthode non implémentée'}, ensure_ascii=False, indent=2),
        status=501,
        mimetype='application/json'
    )
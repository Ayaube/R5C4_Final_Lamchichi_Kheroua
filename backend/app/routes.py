from flask import Blueprint, request, Response
from .logique import load_searches, paginate_data
import json

bp = Blueprint('routes', __name__)

# Route pour récupérer toutes les données
@bp.route('/searches/all', methods=['GET'])
def get_all_searches():
    searches = load_searches()
    return Response(json.dumps(searches, ensure_ascii=False, indent=2), mimetype='application/json')

# Route pour récupérer les données paginées
@bp.route('/searches', methods=['GET'])
def get_paginated_searches():
    searches = load_searches()
    # Parse les paramètres de query
    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 30))

    # Obtenir les données paginées
    paginated_data = paginate_data(searches, page, limit)

    return Response(json.dumps(paginated_data, ensure_ascii=False, indent=2), mimetype='application/json')

# Route pour création
@bp.route('/searches', methods=['POST'])
def create_search():
    return Response(json.dumps({'error': 'Method not implemented'}, ensure_ascii=False, indent=2),
                    status=501, mimetype='application/json')

# Route pour modification
@bp.route('/searches/<int:id>', methods=['PUT'])
def update_search(id):
    return Response(json.dumps({'error': 'Method not implemented'}, ensure_ascii=False, indent=2),
                    status=501, mimetype='application/json')

# Route pour suppression
@bp.route('/searches/<int:id>', methods=['DELETE'])
def delete_search(id):
    return Response(json.dumps({'error': 'Method not implemented'}, ensure_ascii=False, indent=2),
                    status=501, mimetype='application/json')
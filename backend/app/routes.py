from flask import Blueprint, jsonify, request

main = Blueprint('main', __name__)

# Charger les données JSON
import json
with open('app/searches.json') as f:
    data = json.load(f)

@main.route('/searches', methods=['GET'])
def get_searches():
    # Récupérer les paramètres de pagination
    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 30))
    start = (page - 1) * limit
    end = start + limit

    return jsonify(data[start:end])

@main.route('/all-searches', methods=['GET'])
def get_all_searches():
    return jsonify(data)

@main.route('/create', methods=['POST'])
@main.route('/update', methods=['PUT'])
@main.route('/delete', methods=['DELETE'])
def not_implemented():
    return jsonify({"error": "Method not implemented"}), 501
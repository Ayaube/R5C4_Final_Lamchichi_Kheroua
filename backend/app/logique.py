import json
import math

# Charger les données depuis le fichier JSON
def load_searches(file_path='app/searches.json'):
    with open(file_path) as f:
        return json.load(f)

# Appliquer la pagination aux données
def paginate_data(data, page, limit):
    total = len(data)
    start = (page - 1) * limit
    end = start + limit
    paginated = data[start:end]

    return {
        'page': page,
        'limit': limit,
        'total': total,
        'data': paginated
    }
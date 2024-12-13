//Type représentant une recherche
export type Recherche = {
  id: number;
  algorithm: 'DFS' | 'BFS' | 'Djikstra' | 'A*';
  grid_width: number;
  grid_height: number;
  start: [number, number];
  end: [number, number];
  move_type: 'orthogonal' | 'diagonal';
  path_length: number;
  visited_nodes: number;
  time_ns: number;
}

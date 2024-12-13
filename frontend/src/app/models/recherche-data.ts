export interface RechercheData {
  id: number;
  algorithm: string;
  grid_width: number;
  grid_height: number;
  start: [number, number];
  end: [number, number];
  move_type: string;
  path_length: number;
  visited_nodes: number;
  time_ns: number;
}

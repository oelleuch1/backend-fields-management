
export interface Field {
  id: string,
  label: string,
  location: FieldLocation
  // ....
}

export interface FieldLocation {
  id: string,
  longitude: number
  latitude: number
}
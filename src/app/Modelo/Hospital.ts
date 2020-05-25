export class Hospital{
  id: number;
  nombre: String;
  descripcion: String;
  telefono: String;
  direccion: String;
  fechaCreacion = (new Date().toLocaleDateString());
  ciudad: String;
}

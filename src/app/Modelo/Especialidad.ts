export class Especialidad{
  id: number;
  nombre: String;
  descripcion: String;
  avatar: String;
  fechaCreacion  = (new Date().toLocaleDateString());
}

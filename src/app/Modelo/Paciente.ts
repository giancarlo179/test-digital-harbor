export class Paciente{
  id: number;
  nombre: String;
  apellidos: String;
  fechaNacimiento: String;
  direccion: String;
  fotoPerfil: String;
  fechaCreacion = (new Date().toLocaleDateString());
  telefono: String;
}

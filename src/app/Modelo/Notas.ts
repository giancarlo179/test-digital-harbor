export class Notas{
  id: number;
  descripcion: String;
  fechaVisita: String;
  fechaCreacion = (new Date().toLocaleDateString());
  paciente: String;
  doctor:String;
}

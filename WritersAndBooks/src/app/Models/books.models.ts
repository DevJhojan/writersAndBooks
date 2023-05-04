export class Books {
  id: number;
  titulo: string;
  publicado: number;
  imagen: string;
  escritor: number;

  constructor(
    cId: number = 0,
    cTitle: string = '',
    cPublic: number = 0,
    cImage: string,
    cWriter: number = 0
  ) {
    this.id = cId;
    this.titulo = cTitle;
    this.publicado = cPublic;
    this.imagen = cImage;
    this.escritor = cWriter;
  }
}

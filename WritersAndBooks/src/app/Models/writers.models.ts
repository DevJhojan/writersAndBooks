export class Writers{

  id: number;
  nombre: string;
  apellidos: string;
  imagen: string;
  pais: string;

  constructor(
    cId:number = 0,
    cName: string = '',
    cLastName: string = '',
    cImage: string = '',
    cCountry: string = ''
  ){
    this.id = cId;
    this.nombre = cName;
    this.apellidos =cLastName;
    this.imagen = cImage;
    this.pais = cCountry;
  }
}

import { Injectable } from '@angular/core';
import { Writers } from '../Models/writers.models';
import { ESCRITORES } from '../db/escritores.db';


@Injectable({
  providedIn: 'root'
})
export class WriterServiceService {

  constructor() { }

  getAllPromise():Promise<Writers[]>{
    return new Promise((resolve, reject) =>{
      resolve(ESCRITORES);
    })
  }

  getCountry(fCountry: string):Promise<Writers[]>{
    return new Promise((resolve, reject) =>{
      const countryFind = ESCRITORES.filter(
        writer =>{
          return writer.pais === fCountry;
        }
      );
      resolve(countryFind);
    })
  }

  getById(index: number):Promise<Writers>{
    return new Promise((resolve, reject) =>{
      let writerFound = ESCRITORES.find(writer =>{
        return writer.id === index;
      });
      resolve(writerFound);
    });
  }

}

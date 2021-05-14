export class Vol {
  constructor(private id: number, public code:string, public aeroportDepart: string, public dateDepart : number, public aeroportArrive: string, public dateArrive: number, public price: number, public retard:boolean =false){

  }
}

export class Book {
    description: string[];
    isOut: boolean;
  
    constructor(public titre: string, public auteur: string) {
      this.isOut = false;
    }
  }
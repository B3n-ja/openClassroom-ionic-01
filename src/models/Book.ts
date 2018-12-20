export class Book {
    description: string[];
    isOut: boolean;
    isOutTo: string;
  
    constructor(public titre: string, public auteur: string) {
      this.description = [];
      this.isOut = false;
      this.isOutTo = '';
    }
  }
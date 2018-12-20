export class Cd {
    description: string[];
    isOut: boolean;
    isOutTo: string;
  
    constructor(public titre: string, public artiste: string) {
      this.description = [];
      this.isOut = false;
      this.isOutTo = '';
    }
  }
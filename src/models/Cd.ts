export class Cd {
    description: string[];
    isOut: boolean;
  
    constructor(public titre: string, public artiste: string) {
      this.isOut = false;
    }
  }
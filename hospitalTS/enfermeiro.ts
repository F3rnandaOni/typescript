namespace hospital{
    export class Enfermeiro extends Pessoa{
        private coren: number;

        getCoren(): number{
            return this.coren;
        }

        setCoren(coren:number): void{
            this.coren = coren;
        }
    }
}
namespace hospital{
    export class Medico extends Pessoa{
        private crm: number;
        private especialidade: string;

        getCrm(): number{
            return this.crm;
        }

        setCrm(crm:number): void{
            this.crm = crm;
        }

        getEspecialidade(): string{
            return this.especialidade;
        }

        setEspecialidade(especialidade: string): void{
            this.especialidade = especialidade;
        }
    }
}
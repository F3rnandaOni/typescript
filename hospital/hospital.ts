namespace hospital{
    export class Hospital{
        private nome:string;
        private enfermeiros: Array<Enfermeiro> = [];
        private medicos: Array<Medico> = [];
        private pacientes: Array<Paciente> = [];

        getNome():string{
            return this.nome;
        }

        setNome(nomeH:string):void{
            this.nome = nomeH;
        }

        addEnfermeiro(enfermeiro:Enfermeiro):void{
            this.enfermeiros.push(enfermeiro);
        }

        getEnfermeiros(){
            return this.enfermeiros;
        }

        addMedicos(medico:Medico):void{
            this.medicos.push(medico);
        }

        getMedicos(){
            return this.medicos;
        }

        addPacientes(paciente:Paciente):void{
            this.pacientes.push(paciente);
        }

        getPacientes(){
            return this.pacientes;
        }

    }
}
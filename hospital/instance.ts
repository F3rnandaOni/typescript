namespace hospital{
    let m = new Medico("Josué","158.976.423.22");
    m.setCrm(87450978);
    m.setEspecialidade("Psicologo");


    document.getElementById("nomeM").textContent =  m.getNome();
    document.getElementById("cpfM").textContent = m.getCpf();
    document.getElementById("crm").textContent = m.getCrm().toString();
    document.getElementById("espM").textContent = m.getEspecialidade();

    let m2 = new Medico("hémersom","521.890.476.33");
    m2.setCrm(98457809);
    m2.setEspecialidade("Oftalmologista");


    document.getElementById("nomeM2").textContent =  m2.getNome();
    document.getElementById("cpfM2").textContent = m2.getCpf();
    document.getElementById("crm2").textContent = m2.getCrm().toString();
    document.getElementById("espM2").textContent = m2.getEspecialidade();

    let m3 = new Medico("Eleonor","103.478.923.99");
    m3.setCrm(45671209);
    m3.setEspecialidade("Dermatologista");


    document.getElementById("nomeM3").textContent =  m3.getNome();
    document.getElementById("cpfM3").textContent = m3.getCpf();
    document.getElementById("crm3").textContent = m3.getCrm().toString();
    document.getElementById("espM3").textContent = m3.getEspecialidade();


    let e = new Enfermeiro("Nancy","628.890.143-54");
    e.setCoren(89566723);

    document.getElementById("nomeE").textContent =  e.getNome();
    document.getElementById("cpfE").textContent = e.getCpf();
    document.getElementById("coren").textContent = e.getCoren().toString();

    let e2 = new Enfermeiro("Igor","490.823.178-67");
    e2.setCoren(64291234);

    document.getElementById("nomeE2").textContent =  e2.getNome();
    document.getElementById("cpfE2").textContent = e2.getCpf();
    document.getElementById("coren2").textContent = e2.getCoren().toString();

    let e3 = new Enfermeiro("Diogo","519.823.116-43");
    e3.setCoren(12344321);

    document.getElementById("nomeE3").textContent =  e3.getNome();
    document.getElementById("cpfE3").textContent = e3.getCpf();
    document.getElementById("coren3").textContent = e3.getCoren().toString();


    let p = new Paciente("Varyo", "140.389.543-09");
    p.setCodPaciente(825);

    document.getElementById("nomeP").textContent =  p.getNome();
    document.getElementById("cpfP").textContent = p.getCpf();
    document.getElementById("codP").textContent = p.getCodPaciente().toString();

    let p2 = new Paciente("Ligiane", "789.000.016-34");
    p2.setCodPaciente(092);

    document.getElementById("nomeP2").textContent =  p2.getNome();
    document.getElementById("cpfP2").textContent = p2.getCpf();
    document.getElementById("codP2").textContent = p2.getCodPaciente().toString();

    let p3 = new Paciente("Elias", "000.000.000-40");
    p3.setCodPaciente(313);

    document.getElementById("nomeP3").textContent =  p3.getNome();
    document.getElementById("cpfP3").textContent = p3.getCpf();
    document.getElementById("codP3").textContent = p3.getCodPaciente().toString();

    let h = new Hospital();
    h.setNome("Camila Mendes");
    h.addEnfermeiro(e);
    h.addEnfermeiro(e2);
    h.addEnfermeiro(e3);
    h.addMedicos(m);
    h.addMedicos(m2);
    h.addMedicos(m3);
    h.addPacientes(p);
    h.addPacientes(p2);
    h.addPacientes(p3);

    document.getElementById("nomeH").textContent =  h.getNome();
}
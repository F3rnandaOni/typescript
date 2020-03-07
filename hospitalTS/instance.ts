namespace hospital{
    let m = new Medico("Domitilio","120.120.120.00");
    m.setCrm(59346700);
    m.setEspecialidade("Neurocirurgião");


    document.getElementById("nomeM").textContent =  m.getNome();
    document.getElementById("cpfM").textContent = m.getCpf();
    document.getElementById("crm").textContent = m.getCrm().toString();
    document.getElementById("espM").textContent = m.getEspecialidade();

    let m2 = new Medico("Henrique","130.130.130.00");
    m2.setCrm(79823466);
    m2.setEspecialidade("Psiquiatra");


    document.getElementById("nomeM2").textContent =  m2.getNome();
    document.getElementById("cpfM2").textContent = m2.getCpf();
    document.getElementById("crm2").textContent = m2.getCrm().toString();
    document.getElementById("espM2").textContent = m2.getEspecialidade();

    let m3 = new Medico("Januário","140.140.140.00");
    m3.setCrm(55566678);
    m3.setEspecialidade("Cardiologista");


    document.getElementById("nomeM3").textContent =  m3.getNome();
    document.getElementById("cpfM3").textContent = m3.getCpf();
    document.getElementById("crm3").textContent = m3.getCrm().toString();
    document.getElementById("espM3").textContent = m3.getEspecialidade();


    let e = new Enfermeiro("Adelaidy","112.112.112-12");
    e.setCoren(47682239);

    document.getElementById("nomeE").textContent =  e.getNome();
    document.getElementById("cpfE").textContent = e.getCpf();
    document.getElementById("coren").textContent = e.getCoren().toString();

    let e2 = new Enfermeiro("Dionísio","114.114.114-14");
    e2.setCoren(33349268);

    document.getElementById("nomeE2").textContent =  e2.getNome();
    document.getElementById("cpfE2").textContent = e2.getCpf();
    document.getElementById("coren2").textContent = e2.getCoren().toString();

    let e3 = new Enfermeiro("Anselmo","116.116.116-16");
    e3.setCoren(11332297);

    document.getElementById("nomeE3").textContent =  e3.getNome();
    document.getElementById("cpfE3").textContent = e3.getCpf();
    document.getElementById("coren3").textContent = e3.getCoren().toString();


    let p = new Paciente("Açussena", "555.555.555-55");
    p.setCodPaciente(749);

    document.getElementById("nomeP").textContent =  p.getNome();
    document.getElementById("cpfP").textContent = p.getCpf();
    document.getElementById("codP").textContent = p.getCodPaciente().toString();

    let p2 = new Paciente("Willian", "553.553.553-53");
    p2.setCodPaciente(222);

    document.getElementById("nomeP2").textContent =  p2.getNome();
    document.getElementById("cpfP2").textContent = p2.getCpf();
    document.getElementById("codP2").textContent = p2.getCodPaciente().toString();

    let p3 = new Paciente("Sergyo", "550.550.550-50");
    p3.setCodPaciente(713);

    document.getElementById("nomeP3").textContent =  p3.getNome();
    document.getElementById("cpfP3").textContent = p3.getCpf();
    document.getElementById("codP3").textContent = p3.getCodPaciente().toString();

    let h = new Hospital();
    h.setNome("Emílio Benício");
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
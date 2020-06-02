function data1(campo) {
    if (campo.value.length == 2 || campo.value.length == 5) {
        campo.value += "/";
    }
}
function salario1(campo) {
    if (campo.value.length == 0) {
        campo.value += "R$: ";
    }
}
function tel(campo) {
    if (campo.value.length == 0) {
        campo.value += "(";
    } if (campo.value.length == 3) {
        campo.value += ") ";
    }
    if (campo.value.length == 10) {
        campo.value += "-";
    }
}
function parcela1() {
    let names = document.getElementById("nome").value
    let dat = document.getElementById("datanasc").value;
    let email = document.getElementById("email").value;
    let local = document.getElementById("local").value;
    let pais = document.getElementById("tPais").value;
    let valor = document.getElementById("tValor").value;
    let moeda = document.getElementById("tMoeda").value;
 
    let vtotal = emprestimo / parcelas;
    let porcentagem = salario * 0.10;
 
    if (email.value.includes("@show.com.br") != true) {
        alert("Preencha os Dados Corretamente");
        return false;
    }
    if (vtotal >= porcentagem) {
        alert('Não é possivel adquirir um ingresso');
    } else {
        alert('Ingresso adquirido com sucesso');
    }
}
function gjson(form) {
    let jason= {
        "nome":form.nome.value,
        "datanasc":form.data.value,
        "email":form.email.value,
        "local":form.telefone.value,
        "tPais":form.pais.value,
        "tValor":form.valor.value,
        "tMoeda":form.moeda.value,
 
    };
    let html = JSON.stringify(jason,0,4);
    document.getElementById('texto').innerHTML = html;
    return false;
}
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-bg-success border-0';
    toast.role = 'alert';
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    document.getElementById('toastContainer').appendChild(toast);
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    setTimeout(() => toast.remove(), 5000);
}

document.getElementById('formCliente').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nomeCliente').value;
    const email = document.getElementById('emailCliente').value;
    const tbody = document.getElementById('listaClientes').querySelector('tbody');

    const row = document.createElement('tr');
    row.innerHTML = `<td>${nome}</td><td>${email}</td><td><button class='btn btn-warning btn-sm editCliente'>Editar</button> <button class='btn btn-danger btn-sm deleteCliente'>Excluir</button></td>`;
    tbody.appendChild(row);

    updateDashboardCounts();
    showToast('Cliente cadastrado com sucesso!');
    this.reset();
});

document.getElementById('formOrcamento').addEventListener('submit', function(event) {
    event.preventDefault();
    const descricao = document.getElementById('descricaoOrcamento').value;
    const valor = document.getElementById('valorOrcamento').value;
    const tbody = document.getElementById('listaOrcamentos').querySelector('tbody');

    const row = document.createElement('tr');
    row.innerHTML = `<td>${descricao}</td><td>R$ ${parseFloat(valor).toFixed(2)}</td><td><button class='btn btn-warning btn-sm editOrcamento'>Editar</button> <button class='btn btn-danger btn-sm deleteOrcamento'>Excluir</button></td>`;
    tbody.appendChild(row);

    updateDashboardCounts();
    showToast('Orçamento cadastrado com sucesso!');
    this.reset();
});

document.getElementById('formObra').addEventListener('submit', function(event) {
    event.preventDefault();
    const descricao = document.getElementById('descricaoObra').value;
    const cliente = document.getElementById('clienteObra').value;
    const tbody = document.getElementById('listaObras').querySelector('tbody');

    const row = document.createElement('tr');
    row.innerHTML = `<td>${descricao}</td><td>${cliente}</td><td><button class='btn btn-warning btn-sm editObra'>Editar</button> <button class='btn btn-danger btn-sm deleteObra'>Excluir</button></td>`;
    tbody.appendChild(row);

    updateDashboardCounts();
    showToast('Obra cadastrada com sucesso!');
    this.reset();
});

function updateDashboardCounts() {
    document.getElementById('totalClientes').innerText = document.getElementById('listaClientes').querySelector('tbody').rows.length;
    document.getElementById('totalOrcamentos').innerText = document.getElementById('listaOrcamentos').querySelector('tbody').rows.length;
    document.getElementById('totalObras').innerText = document.getElementById('listaObras').querySelector('tbody').rows.length;
}

function filterTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toLowerCase();
    const rows = document.getElementById(tableId).querySelector('tbody').rows;
    for (let row of rows) {
        row.style.display = row.textContent.toLowerCase().includes(filter) ? '' : 'none';
    }
}

document.getElementById('searchClientes').addEventListener('input', () => filterTable('searchClientes', 'listaClientes'));
document.getElementById('searchOrcamentos').addEventListener('input', () => filterTable('searchOrcamentos', 'listaOrcamentos'));
document.getElementById('searchObras').addEventListener('input', () => filterTable('searchObras', 'listaObras'));

document.getElementById('toggleDarkMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
});

document.getElementById('exportExcel').addEventListener('click', function() {
    showToast('Função de exportação para Excel ainda em desenvolvimento!');
});
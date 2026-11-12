function aggiungiImpegno() {
  const giornoInput = document.getElementById('giorno');
  const oraInput = document.getElementById('ora');
  const impegnoInput = document.getElementById('impegno');
  const lista = document.getElementById('listaImpegni');

  const giorno = giornoInput.value;
  const ora = oraInput.value;
  const impegno = impegnoInput.value.trim();

  if (!giorno || !ora || !impegno) {
    alert('Inserisci data, orario e impegno!');
    return;
  }

  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.innerHTML = `
    <span><span class="badge bg-secondary me-2">${giorno}</span> <strong>${ora}</strong> - ${impegno}</span>
    <button class="btn btn-outline-danger btn-sm">Elimina</button>
  `;

  li.querySelector('button').onclick = function() {
    li.remove();
  };

  lista.appendChild(li);

  giornoInput.value = '';
  oraInput.value = '';
  impegnoInput.value = '';
}
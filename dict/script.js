function aggiungiImpegno() {
  const giornoInput = document.getElementById('giorno');
  const oraInput = document.getElementById('ora');
  const impegnoInput = document.getElementById('impegno');
  const lista = document.getElementById('listaImpegni');
  const liste = document.createElement('liste');
  
  const giorno = giornoInput.value;
  const ora = oraInput.value;
  const impegno = impegnoInput.value.trim();

  if (!giorno || !ora || !impegno) {
    alert('Inserisci data, orario e impegno!');
    return;
  }

  liste.className = 'list-group-item d-flex justify-content-between align-items-center';
  liste.innerHTML = `
    <span><span class="badge bg-secondary me-2">${giorno}</span> <strong>${ora}</strong> - ${impegno}</span>
    <button class="btn btn-outline-danger btn-sm">Elimina</button>
  `;

  liste.querySelector('button').onclick = function() {
    liste.remove();
  };

  lista.appendChild(liste);

  giornoInput.value = '';
  oraInput.value = '';
  impegnoInput.value = '';
}
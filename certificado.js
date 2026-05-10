const CODIGO_CERTIFICADO = "RICA-2026-AV-0002";

function buscarCertificado(codigo) {
  return CERTIFICADOS_RICA.find(certificado => certificado.codigo === codigo);
}

function obterUrlValidacao(codigo) {
  const caminhoAtual = window.location.pathname;
  const pastaProjeto = caminhoAtual.substring(0, caminhoAtual.lastIndexOf("/") + 1);

  return `${window.location.origin}${pastaProjeto}validar.html?codigo=${encodeURIComponent(codigo)}`;
}

function preencherCertificado() {
  const certificado = buscarCertificado(CODIGO_CERTIFICADO);

  if (!certificado) {
    alert("Certificado não encontrado em certificados.js");
    return;
  }

  document.getElementById("nome-avaliador").textContent = certificado.nome;
  document.getElementById("periodo-avaliacao").textContent = certificado.periodo;
  document.getElementById("editor-chefe").textContent = certificado.editor;
  document.getElementById("emissao").textContent = `Emitido em ${certificado.emissao}.`;
  document.getElementById("codigo-certificado").textContent = certificado.codigo;

  const urlValidacao = obterUrlValidacao(certificado.codigo);

  new QRCode(document.getElementById("qrcode"), {
    text: urlValidacao,
    width: 120,
    height: 120,
    correctLevel: QRCode.CorrectLevel.H
  });
}

document.addEventListener("DOMContentLoaded", preencherCertificado);
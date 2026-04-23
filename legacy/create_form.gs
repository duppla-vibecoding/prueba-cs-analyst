/**
 * Crea el Google Form "Prueba CS Analyst - Duppla" con 10 preguntas
 * situacionales de texto largo, todas obligatorias, y vincula una
 * Google Sheet donde caen las respuestas.
 *
 * Uso:
 *  1. Abre script.google.com -> New project
 *  2. Pega este codigo, guarda, corre createDuppleCSForm()
 *  3. Autoriza permisos (Google Forms + Google Drive)
 *  4. Al terminar, el log imprime URL del form (editor), URL publica
 *     y URL de la Sheet de respuestas.
 */
function createDuppleCSForm() {
  var form = FormApp.create('Prueba CS Analyst - Duppla')
    .setDescription(
      'Tienes 30 minutos para responder 10 preguntas. ' +
      'No hay respuestas correctas o incorrectas: queremos ver como piensas ' +
      'y resuelves bajo presion. Responde con tus propias palabras, ' +
      'de forma concreta. El timer se activa al abrir el formulario.'
    )
    .setCollectEmail(true)
    .setLimitOneResponsePerUser(false)
    .setShowLinkToRespondAgain(false)
    .setConfirmationMessage(
      'Recibimos tu prueba. Te contactaremos en los proximos dias con la ' +
      'siguiente etapa del proceso. Gracias por tu tiempo.'
    );

  var questions = [
    {
      title: '1. Caso cerradura',
      help: 'Un cliente lleva 3 dias sin poder entrar a su inmueble porque la cerradura no abre. Ya hablo con Property y le dijeron que lo escalan. Te escribe molesto. Tienes 5 min antes de otra reunion. Que haces exactamente?'
    },
    {
      title: '2. Organizacion del dia',
      help: 'Recibes 8 casos nuevos hoy + 15 pendientes de ayer + onboarding de 2 clientes nuevos esta semana. Son las 9am. Describe como organizas tu dia.'
    },
    {
      title: '3. Promesa no escrita',
      help: 'Un cliente insiste en que Duppla le prometio algo que no esta en el contrato. No hay registro de esa promesa. Esta muy molesto. Como procedes?'
    },
    {
      title: '4. Coordinacion cross-area',
      help: 'Tienes que coordinar con Property, Contabilidad y Legal para activar la facturacion de un cliente. Cada area te dice que "falta info de la otra". Que haces?'
    },
    {
      title: '5. Mensaje al cliente (max 5 lineas)',
      help: 'Redacta el mensaje que le mandarias a un cliente que aun no entiende por que su primera factura llego con un valor distinto al que esperaba.'
    },
    {
      title: '6. Proceso que automatizaste o documentaste',
      help: 'Describe un proceso repetitivo que hayas automatizado o documentado en tu ultimo rol. Que hiciste, como, y cual fue el resultado?'
    },
    {
      title: '7. Cohorte de marzo',
      help: 'Tu jefe te pide "que revises como va la cohorte de marzo". No te da mas contexto. Que haces en los proximos 30 min?'
    },
    {
      title: '8. Info equivocada',
      help: 'Te diste cuenta de que le diste info equivocada a un cliente hace 2 dias y ya tomo decisiones con esa info. Que haces?'
    },
    {
      title: '9. Trade-off de 1 hora',
      help: 'Tienes 1 hora. Opcion A: cerrar 5 casos faciles. Opcion B: resolver 1 caso complejo de un cliente con riesgo de churn. Que eliges y por que?'
    },
    {
      title: '10. Situacion frustrante',
      help: 'Cual ha sido la situacion laboral mas frustrante que has manejado y como la resolviste? Se especifica: que hiciste tu, que no funciono, que aprendiste.'
    }
  ];

  questions.forEach(function(q) {
    form.addParagraphTextItem()
      .setTitle(q.title)
      .setHelpText(q.help)
      .setRequired(true);
  });

  // Crear Sheet de respuestas
  var ss = SpreadsheetApp.create('Prueba CS Analyst - Respuestas');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  var editUrl = form.getEditUrl();
  var publishedUrl = form.getPublishedUrl();
  var sheetUrl = ss.getUrl();

  Logger.log('EDITOR DEL FORM: ' + editUrl);
  Logger.log('URL PUBLICA (para candidatos): ' + publishedUrl);
  Logger.log('SHEET DE RESPUESTAS: ' + sheetUrl);

  return {
    editUrl: editUrl,
    publishedUrl: publishedUrl,
    sheetUrl: sheetUrl
  };
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Service = require('node-windows').Service;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const EventLogger = require('node-windows').EventLogger;

//Se crea el ejemplar de Servicio

let svc = new Service({
  name: 'API REST Juego Planeta Esri',
  description: 'Aplicación backend del juego de planeta Esri',
  script: 'C:\\inetpub\\wwwroot\\APIRESTGame\\app.js',
});

//Escucha el evento 'install' cuando se indica que el
//proceso esta habilitado como servicio

svc.on('install', () => svc.start());
svc.on('alreadyinstalled', function () {
  console.log('This service is already installed.');
});
svc.install();

// Listen for the "uninstall" event so we know when it's done.
// svc.on('uninstall', function () {
//   console.log('Uninstall complete.');
//   console.log('The service exists: ', svc.exists);
// });

// // Uninstall the service.
// svc.uninstall();

const log = new EventLogger('Api Rest Juego Planeta');

log.info('Basic information.');
log.warn('Watch out!');
log.error('Something went wrong.');
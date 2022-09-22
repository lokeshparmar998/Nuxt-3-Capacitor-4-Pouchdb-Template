import PouchDB from "pouchdb";
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import pouchFind from 'pouchdb-find'
export default defineNuxtPlugin(async () => {
  const remote = 'http://avrioenergy:AvrioEnergy9789@couchdb.buildingmanager.io/dev_ticket_db/' // update this
  PouchDB.plugin(cordovaSqlitePlugin);
  PouchDB.plugin(pouchFind);
  const ticketDB = new PouchDB("tickets", { adapter: 'cordova-sqlite' }); // change db name
  /* ticketDB.sync(remote, {
    live: true,
    retry: true,
  }).on('complete', function () {
    console.log("Remote to Device - Success");
  })
  .on('error', function (err) {
    console.log("Remote to Device - Error", err);
    return err;
  }).on('paused', function(){
    console.log('pausesd');
  }); */
  return {
    provide: { ticketDB },
  };
});

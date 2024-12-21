// Lade eine LDraw-Ressource
loader.load(
  // Ressourcen-URL
  "public/city-plate-plain.ldr",
  // Aufgerufen, wenn die Ressource geladen ist
  function (group) {
    // Füge die Gruppe zur Szene hinzu
    scene.add(group);
  },
  // Aufgerufen während des Ladevorgangs
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% geladen");
  },
  // Aufgerufen, wenn beim Laden Fehler auftreten
  function (error) {
    console.log("Ein Fehler ist aufgetreten");
  }
);

// Fehlerbehandlung
if (WebGL.isWebGLAvailable()) {
  // Initiiere Funktion oder andere Initialisierungen hier
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  container.appendChild(warning);
}

// Kleine correcties op de bestaande lesdata voordat de interface wordt opgebouwd.
if (typeof theme2 !== 'undefined' && theme2.lessons && theme2.lessons[0]) {
  theme2.lessons[0].html = theme2.lessons[0].html.replace('mobiele datanetwerk|/strong>', 'mobiele datanetwerk</strong>');
}
if (typeof theme3 !== 'undefined' && theme3.lessons && theme3.lessons[8]) {
  theme3.lessons[8].title = '9. Focus → Niet storen';
  theme3.lessons[8].summary = 'Tijdelijk minder onderbrekingen met Focus.';
  theme3.lessons[8].html = `<div class="bubble"><strong>Niet storen</strong> is een onderdeel van <strong>Focus</strong>. Daarmee bepaal je wanneer meldingen, oproepen en apps je wel of niet mogen onderbreken.</div><div class="step">Ga naar <strong>Instellingen → Focus → Niet storen</strong>.</div><div class="step">Je kunt personen en apps toelaten, een schema instellen en bepalen welk toegangsscherm of beginscherm bij deze Focus hoort.</div><div class="tip">Krijg je onverwacht geen oproepen of meldingen? Controleer dan eerst of er een Focus actief is.</div>`;
}

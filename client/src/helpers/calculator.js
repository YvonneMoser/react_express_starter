export function round(number) {
  const newV = Math.round(number * 100) / 100;
  return newV;
}

export function numberWithCommas(number) {
  try {
    return number.toFixed(2).toLocaleString("de");
  } catch (e) {
    return number;
  }
}

export function calculateReturnOnInvest(data) {
  const wohngeld = Number(data.wohngeld);
  const qm = Number(data.qm);
  const makler = Number(data.makler) / 100;
  const instandhaltung = Number(data.instandhaltung);
  const nettomiete = Number(data.nettomiete);
  const grunderwerbssteuer = mapBundeslandToPercentage(data.bundesland) / 100;
  const kaufpreis = Number(data.kaufpreis);
  const eigenkapital = Number(data.eigenkapital);
  const zinsen = Number(data.zinsen) / 100;
  const tilgungsrate = Number(data.tilgungsrate) / 100;

  // Berechnet
  const kaufpreisqm = round(kaufpreis / qm);
  const grunderwerbssteuerSum = round(kaufpreis * grunderwerbssteuer);
  const notar = round(kaufpreis * 0.015); // konfigurierbar machen?
  const maklerSum = round(makler * kaufpreis);
  const gesamtOhneInstand = round(
    kaufpreis + grunderwerbssteuerSum + notar + maklerSum
  );
  const gesamt = round(gesamtOhneInstand + instandhaltung);

  const nebenkostenGesamt = maklerSum + grunderwerbssteuerSum + notar;
  const nettoqm = round(nettomiete / qm);
  const umlagefähigeNebenkosten = round(0.6 * wohngeld); // konfigurierbar
  const nichtUmlageFähigeNebenkosten = round(0.4 * wohngeld);
  const nettoMieteNachNichtUmlagefähigenNK = round(
    nettomiete - nichtUmlageFähigeNebenkosten
  );
  const zuFinanzierendeSumme = round(gesamtOhneInstand - eigenkapital);

  const annuität = round(
    (zuFinanzierendeSumme * zinsen + tilgungsrate * zuFinanzierendeSumme) / 12
  );

  const differenzCashflowAnnuität = round(
    nettoMieteNachNichtUmlagefähigenNK - annuität
  );
  const jährlicheNettomieteNachNichtumlagefähigenNebenkosten = round(
    nettoMieteNachNichtUmlagefähigenNK * 12
  );
  const ergebnisNachZinsen = round(
    jährlicheNettomieteNachNichtumlagefähigenNebenkosten -
      zinsen * (gesamtOhneInstand - eigenkapital)
  );
  const steuerlichesErgebnisNachAfA = round(
    ergebnisNachZinsen - kaufpreis * 0.3 * 0.02
  );
  const jährlicheNettoMieteRendite = round((ergebnisNachZinsen / gesamt) * 100);
  const tilgungNach10Jahren = round(tilgungsrate * zuFinanzierendeSumme * 10);
  const jahreBisTilgung = round(
    zuFinanzierendeSumme / (tilgungsrate * zuFinanzierendeSumme)
  );
  const cashFlowNach10Jahren = round(10 * ergebnisNachZinsen - 0.005 * gesamt);
  const zuVersteuernNach10Jahren = round(
    cashFlowNach10Jahren - 10 * 0.02 * (0.3 * kaufpreis)
  );
  const zuFinanzieren = gesamt - eigenkapital;

  const calculatedData = {
    kaufpreisqm,
    grunderwerbssteuerSum,
    notar,
    maklerSum,
    gesamtOhneInstand,
    gesamt,
    nettoqm,
    umlagefähigeNebenkosten,
    nebenkostenGesamt,
    zuFinanzieren,
    nettoMieteNachNichtUmlagefähigenNK,
    nichtUmlageFähigeNebenkosten,
    zuFinanzierendeSumme,
    annuität,
    differenzCashflowAnnuität,
    jährlicheNettomieteNachNichtumlagefähigenNebenkosten,
    ergebnisNachZinsen,
    steuerlichesErgebnisNachAfA,
    jährlicheNettoMieteRendite,
    tilgungNach10Jahren,
    jahreBisTilgung,
    cashFlowNach10Jahren,
    zuVersteuernNach10Jahren,
  };

  return calculatedData;
}

function mapBundeslandToPercentage(bundesland) {
  const mapping = {
    "Baden Württemberg": 5.0,
    Bayern: 3.5,
    Berlin: 6.0,
    Brandenburg: 6.5,
    Bremen: 5.0,
    Hamburg: 4.5,
    Hessen: 6.0,
    "Mecklenburg-Vorpommern": 6.0,
    Niedersachsen: 5.0,
    "Nordrhein Westfalen": 6.5,
    "Rheinland-Pfalz": 5.0,
    Saarland: 6.5,
    Sachsen: 3.5,
    "Sachsen-Anhalt": 5.0,
    "Schleswig-Holstein": 6.5,
    Thüringen: 6.5,
  };
  return mapping[bundesland];
}

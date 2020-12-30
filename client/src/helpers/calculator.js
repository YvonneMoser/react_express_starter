export function round(number) {
  return Math.round(number * 100) / 100;
}
export function calculateReturnOnInvest(data) {
  const wohngeld = parseInt(data.wohngeld);
  const qm = parseInt(data.qm);
  const makler = parseInt(data.makler) / 100;
  const instandhaltung = parseInt(data.instandhaltung);
  const nettomiete = parseInt(data.nettomiete);
  const grunderwerbssteuer = parseInt(data.grunderwerbssteuer) / 100;
  const kaufpreis = parseInt(data.kaufpreis);
  const eigenkapital = parseInt(data.eigenkapital);
  const zinsen = parseInt(data.zinsen) / 100;
  const tilgungsrate = parseInt(data.tilgungsrate) / 100;

  // Berechnet
  const kaufpreisqm = round(kaufpreis / qm);
  const grunderwerbssteuerSum = round(kaufpreis * grunderwerbssteuer);
  const notar = round(kaufpreis * 0.015); // konfigurierbar machen?
  const maklerSum = round(makler * kaufpreis);
  const gesamtOhneInstand =
    round(kaufpreis + grunderwerbssteuerSum + notar + maklerSum);
  const gesamt = round(gesamtOhneInstand + instandhaltung);

  const nettoqm = round(nettomiete / qm);
  const umlagefähigeNebenkosten = round(0.6 * wohngeld); // konfigurierbar
  const nichtUmlageFähigeNebenkosten = round(0.4 * wohngeld);
  const nettoMieteNachNichtUmlagefähigenNK =
    round(nettomiete - nichtUmlageFähigeNebenkosten);
  const zuFinanzierendeSumme = round(gesamtOhneInstand - eigenkapital);

  const annuität =
    round((zuFinanzierendeSumme * zinsen + tilgungsrate * zuFinanzierendeSumme) / 12);

  const differenzCashflowAnnuität =
    round(nettoMieteNachNichtUmlagefähigenNK - annuität);
  const jährlicheNettomieteNachNichtumlagefähigenNebenkosten =
    round(nettoMieteNachNichtUmlagefähigenNK * 12);
  const ergebnisNachZinsen =
    round(jährlicheNettomieteNachNichtumlagefähigenNebenkosten -
    zinsen * (gesamtOhneInstand - eigenkapital));
  const steuerlichesErgebnisNachAfA =
    round(ergebnisNachZinsen - kaufpreis * 0.3 * 0.02);
  const jährlicheNettoMieteRendite = round((ergebnisNachZinsen / gesamt) * 100);
  const tilgungNach10Jahren = round(tilgungsrate * zuFinanzierendeSumme * 10);
  const jahreBisTilgung =
    round(zuFinanzierendeSumme / (tilgungsrate * zuFinanzierendeSumme));
  const cashFlowNach10Jahren = round(10 * ergebnisNachZinsen - 0.005 * gesamt);
  const zuVersteuernNach10Jahren =
    round(cashFlowNach10Jahren - 10 * 0.02 * (0.3 * kaufpreis));

  const calculatedData = {
    kaufpreisqm,
    grunderwerbssteuerSum,
    notar,
    maklerSum,
    gesamtOhneInstand,
    gesamt,
    nettoqm,
    umlagefähigeNebenkosten,
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

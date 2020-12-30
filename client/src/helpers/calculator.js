export function calculateReturnOnInvest(data){
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
  const kaufpreisqm = kaufpreis / qm;
  const grunderwerbssteuerSum = kaufpreis * grunderwerbssteuer;
  const notar = kaufpreis * 0.015; // konfigurierbar machen?
  const maklerSum = makler * kaufpreis;
  const gesamtOhneInstand =
    kaufpreis + grunderwerbssteuerSum + notar + maklerSum;
  const gesamt = gesamtOhneInstand + instandhaltung;

  const nettoqm = nettomiete / qm;
  const umlagefähigeNebenkosten = 0.6 * wohngeld; // konfigurierbar
  const nichtUmlageFähigeNebenkosten = 0.4 * wohngeld;
  const nettoMieteNachNichtUmlagefähigenNK =
    nettomiete - nichtUmlageFähigeNebenkosten;
  const zuFinanzierendeSumme = gesamtOhneInstand - eigenkapital;

  const annuität =
    (zuFinanzierendeSumme * zinsen + tilgungsrate * zuFinanzierendeSumme) / 12;

  const differenzCashflowAnnuität =
    nettoMieteNachNichtUmlagefähigenNK - annuität;
  const jährlicheNettomieteNachNichtumlagefähigenNebenkosten =
    nettoMieteNachNichtUmlagefähigenNK * 12;
  const ergebnisNachZinsen =
    jährlicheNettomieteNachNichtumlagefähigenNebenkosten -
    zinsen * (gesamtOhneInstand - eigenkapital);
  const steuerlichesErgebnisNachAfA =
    ergebnisNachZinsen - kaufpreis * 0.3 * 0.02;
  const jährlicheNettoMieteRendite = (ergebnisNachZinsen / gesamt) * 100;
  const tilgungNach10Jahren = tilgungsrate * zuFinanzierendeSumme * 10;
  const jahreBisTilgung =
    zuFinanzierendeSumme / (tilgungsrate * zuFinanzierendeSumme);
  const cashFlowNach10Jahren = 10 * ergebnisNachZinsen - 0.005 * gesamt;
  const zuVersteuernNach10Jahren =
    cashFlowNach10Jahren - 10 * 0.02 * (0.3 * kaufpreis);

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

  return calculatedData
}
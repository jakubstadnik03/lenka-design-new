import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const pricingPlans = [
  {
    id: 1,
    title: "Balíček návrhu místnosti",
    price: "Od 8 000 Kč / místnost",
    description: "Úvodní konzultace je schůzka mezi designérem a klientem k projednání projektu.",
    features: [
      { name: "Zaměření", available: true },
      { name: "Moodboard (barevná koláž použitých barev v interiéru)", available: true },
      { name: "Komplexní návrh interiéru ", available: true },
      { name: "Doporučení zdrojů nábytku", available: true },
      { name: "Nákupní seznam doporučeného nábytku a doplňků", available: true },
      { name: "Elektroinstalace", available: true },
      { name: "Zajištění a ukázka vzorků materiálů", available: true },
      { name: "Rozměry nábytku na míru", available: true },
      { name: "Podklady na cen. nabídky a cenová nabídka od doporučených dodavatelů", available: true },
    ],
  },
  
  {
    id: 3,
    title: "Prémiový plán",
    price: "419 Kč",
    description: "Úvodní konzultace je schůzka mezi designérem a klientem k projednání projektu.",
    features: [
      { name: "Vývoj konceptu", available: true },
      { name: "Vývoj designu", available: true },
      { name: "Administrace výstavby", available: true },
      { name: "Další služby", available: true },
    ],
  },
];

const serviceDetails = {
  heading: "Ceník služeb interiérového designu",
  subheading: "S každým klientem prodiskutuji jeho požadavky a následně předložím cenovou nabídku.",
  details: [
    "Každý projekt je individuální, proto nelze říct přesnou částku ceny dopředu, aniž bych o projektu něco věděla. Záleží na domluvě s klientem, jaké služby designu požaduje, jaké detailní vybavení požaduje, výrobu na míru či hotové výrobky… a mnoho dalších aspektů od kterých se cena odvíjí.",
    "1. schůzka ZDARMA před zadáním projektu",
    "Nejprve se sejdeme k bezplatné konzultační schůzce (cca 1hod), kde zjistím Vaše požadavky. Doporučuji připravit fotografie či jiné podklady, abych lépe porozuměla Vašim představám. Doprava mimo Liberec je zpoplatněna.",
    "Dále dojde k zaměření a domluvení termínu. Poté Vám zašlu cenovou nabídku a po Vašem souhlasu zálohovou fakturu na 60% z celkové částky. Následně budu pracovat na projektu dle dohody a požadavků. Během přípravy projektu budu s Vámi ve spojení telefonicky, emailem či videokonferencí a budeme případně konzultovat rozpracovaný projekt. Vždy zasílám několik verzí a možností, které konzultuji s klientem. Po dokončení projektu Vás požádám o doplatek ceny.",
    "Jsem plátce DPH a níže uvedené ceny jsou bez DPH."
  ],
  subheading2: "Konzultace nad projektem či doporučení změn a tipů v interiéru",
  details2: ["Konzultace bytového designu provádím nejčastěji v místě realizace změn či online po dodání podkladů. Časté konzultace jsou ohledně změn daného projektu od projektanta, aby se již zohlednil nábytek či ostatní požadavky na vybavení.", "Možno zakoupit dárkový poukaz, s platností 1 rok, na konzultaci či doporučení změn v interiéru. Součástí poukazu je následný souhrn doporučených změn a tipů v elektronické podobě."],
  subheading3: "Home staging - příprava nemovitosti k prodeji či pronájmu",
  details3: ["Nejprve domluvíme schůzku a konzultaci v místě nemovitosti. V průběhu konzultace s Vámi projdu celou nemovitost a zapíšu navrhované změny, úpravy a typy v jednotlivých místnostech k dosažení největšího efektu. Poté ode mě obdržíte podrobný rozpis a plán navrhovaných úprav, vše v ceně konzultace. Dále seznam a ceny produktů, které jsou doporučeny do interiéru doplnit, případně ode mě zapůjčit.", "Zapůjčené produkty jsou zpoplatnění dle doby zapůjčení. Cenová nabídka ihned po konzultaci."],
 subheading4: "Fotodokumentace",
details4: ["Fotodokumentace nemovitosti se nejčastěji provádí ihned po provedení doporučených úprav Home stagingu, ale také na požádání kdykoliv.", "Pěkné, vhodné fotografie jsou vhodné na inzerci nemovitosti na pronájme či prodej. Hotové fotografie Vám budou dodány na flashdisku do 5 pracovních dní." ],
  pricing: [
    { service: "Konzultace nad projektem či změn v interiéru", price: "1500 Kč/1hod." },
    { service: "3D vizualizace jedné místnosti", price: "6800 - 10000 Kč" },
    { service: "Návrh dispozic interiéru ve 2D", price: "4000 - 6000 Kč" },
    { service: "On-Line 3D vizualizace jedné místnosti", price: "6500 - 8000 Kč" },
    { service: "Návrh celé místnosti: dispozice + 3D vizualizace + balíček", price: "9000 - 11000 Kč" },
    { service: "Návrh celého bytu: dispozice + 3D vizualizace + balíček", price: "od 30 000 Kč" },
    { service: "Návrh rodinného domu: dispozice + 3D vizualizace + balíček", price: "od 45 000 Kč" },
    { service: "Konzultace s klientem v terénu či v showroomu", price: "800Kč/hod." },
    { service: "Doprava mimo Liberec", price: "20Kč/km" },
    { service: "Home staging bytu", price: "od 9000Kč" },
    { service: "Fotodokumentace nemovitosti", price: "od 5000 Kč" }  ]
};

const PricingPlans = () => {
  return (
    <div className="rts-pricing-area rts-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-center">
              <div className="pre-title-area">
                <img src="assets/images/about/02.png" alt="about" />
                <span className="pre-title">Ceník služeb</span>
              </div>
              <h2 className="title mt--10">Cenový plán</h2>
              <p className="disc">
                Vyberte si nejlepší cenový plán pro interiérový a architektonický design.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5 mt--30">
          {pricingPlans.map(plan => (
            <div key={plan.id} className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="single-pricing-main">
                <div className="head">
                  <span>{plan.title}</span>
                  <h2 className="price">{plan.price}</h2>
                </div>
                <div className="body">
                  <p className="disc">{plan.description}</p>
                  {plan.features.map((feature, index) => (
                    <div key={index} className={`available ${!feature.available ? 'not' : ''}`}>
                      {feature.available ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}
                      {feature.name}
                    </div>
                  ))}
                  <a href="/" className="rts-btn btn-border">Začít</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt--50">
          <div className="col-lg-12">
            <h3>{serviceDetails.heading}</h3>
            <p>{serviceDetails.subheading}</p>
            {serviceDetails.details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Služba</th>
                  <th>Cena</th>
                </tr>
              </thead>
              <tbody>
                {serviceDetails.pricing.map((item, index) => (
                  <tr key={index}>
                    <td>{item.service}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>{serviceDetails.subheading2}</h3>
            {serviceDetails.details2.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
            <h3>{serviceDetails.subheading3}</h3>
            {serviceDetails.details3.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
            <h3>{serviceDetails.subheading4}</h3>
            {serviceDetails.details4.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;

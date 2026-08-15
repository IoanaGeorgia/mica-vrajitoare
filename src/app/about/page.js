'use client';

export default function About() {
  return (
    <div className="page">
      <div className="page-header">
        <h2 className="subtitle">Cartea micii vrăjitoare</h2>
        <p>Informații generale</p>
      </div>

      <div className="cards-container">
        <p>
          Această carte este menită să vină în ajutorul vrăjitoarelor și vrăjitorilor
          începători, precum și altor ființe magice. Este de datoria noastră să
          cunoaștem și să protejăm lumea din jurul nostru. Indiferent dacă trăim în
          adâncurile oceanului, în lumea subterană sau în ceruri, toate creaturile mici
          trebuie tratate cu respect și prețuite.
        </p>

        <p>
          Conținutul acestei cărți a fost creat și revizuit de vrăjitori și vrăjitoare
          briliante. Mai jos sunt câțiva dintre cei mai notabili colaboratori.
        </p>

        <div className="cards-container">
          <div className="card column">
            <p className="card-title">Hellen McGrimm</p>
            <p>Predestinare și Soartă</p>
          </div>

          <div className="card column">
            <p className="card-title">Al Alhaitham</p>
            <p>Spirale și Locomoție</p>
          </div>

          <div className="card column">
            <p className="card-title">Ivan I. Ivanovich</p>
            <p>Geografie și Blesteme</p>
          </div>

          <div className="card column">
            <p className="card-title">Ich Indemmeiner</p>
            <p>Practică Medicală</p>
          </div>

          <div className="card column">
            <p className="card-title">Alice Ainsi</p>
            <p>Portale, Văluri și Comunicare</p>
          </div>

          <div className="card column">
            <p className="card-title">Kyoko Murihama</p>
            <p>Transfigurare și Vampirism</p>
          </div>

          <div className="card column">
            <p className="card-title">Gretel A. Hansel</p>
            <p>Poțiuni și Farmece de Sentimente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
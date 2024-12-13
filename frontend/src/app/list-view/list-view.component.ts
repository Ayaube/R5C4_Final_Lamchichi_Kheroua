import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RechercheData } from '../models/recherche-data';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  donnees: RechercheData[] = [];
  donneesAffichees: RechercheData[] = [];
  pageActuelle: number = 1;
  elementsParPage: number = 30;
  totalPages: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.recupererDonnees();
  }

  recupererDonnees(): void {
    const url = 'http://127.0.0.1:5001/searches/all';
    this.http.get<RechercheData[]>(url).subscribe((reponse: RechercheData[]) => {
      this.donnees = reponse;
      this.totalPages = Math.ceil(this.donnees.length / this.elementsParPage);
      this.mettreAJourDonneesAffichees();
    });
  }

  mettreAJourDonneesAffichees(): void {
    const indiceDebut = (this.pageActuelle - 1) * this.elementsParPage;
    const indiceFin = indiceDebut + this.elementsParPage;
    this.donneesAffichees = this.donnees.slice(indiceDebut, indiceFin);
  }

  pageSuivante(): void {
    if (this.pageActuelle < this.totalPages) {
      this.pageActuelle++;
      this.mettreAJourDonneesAffichees();
    }
  }

  pagePrecedente(): void {
    if (this.pageActuelle > 1) {
      this.pageActuelle--;
      this.mettreAJourDonneesAffichees();
    }
  }
}

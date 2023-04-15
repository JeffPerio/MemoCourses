import { Component, OnDestroy, OnInit } from '@angular/core';
import { InterfaceMemo } from './interfaceMemo';
import { MemoService } from '../memo/memo.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-memo-liste',
  templateUrl: './memo-liste.component.html',
  styleUrls: ['./memo-liste.component.css']
})
export class MemoListeComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Mémo Liste';
  imageLargeur: number = 50;
  imageMarge: number = 2;
  showImage: boolean = false;
  //Liste des mémos
  memosFiltres: InterfaceMemo[] = [];
  memos: InterfaceMemo[] = []
  //Filtre pour la liste des produits
  private _filtreListe: string = '';

  //Message d'erreur
  errorMessage: string = '';
  //Stockage de l'abonnement aux data
  sub!: Subscription;

  //Constructeur et injection du service
  constructor(private memoService : MemoService) { }

  /**
   * Custom Get et Set pour le filtre e la liste
   */
  get filtreListe(): string{
    return this._filtreListe;
  }
  set filtreListe(value: string){
    this._filtreListe = value;
    this.memosFiltres = this.performFilter(value);
  }

  /**
   * Méthode filtrer la liste
   */
  performFilter(filtrePar: string): InterfaceMemo[]{
    //Conversion du filtre en lowercase pour s'assurer que le filtre ne tient pas compte de la casse
    filtrePar = filtrePar.toLowerCase();
    //Filtre la liste originale des memos par le nom passé en paramètre, conversion du titre en lowercase pour filtrer sans tenir compte de la casse
    return this.memos.filter((memoTmp : InterfaceMemo) => memoTmp.memoTitre.toLowerCase().includes(filtrePar));
  }

  /**
   * Méthode pour changer l'affichage des images de vrai a faux
   */
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  /**
   * Méthode pour initialiser le filtre a l'initialisation du composant
   * abonnement au service qui renvoie les données
   */
  ngOnInit(): void {
    //Appel au service pour récupérer la data
    this.sub = this.memoService.getMemos().subscribe({
      next: data => {
        this.memos = data;
        this.memosFiltres = this.memos;
      },
      error: err => this.errorMessage = err
    });
  }

  /**
   * Méthode a la destruction du composant
   * désabonnement au service
   */
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /**
   * Méthode de l'action lors du click sur le composant étoile
   * @param message message transmis par le composant Star
   */
  onImportanceClicked(message : string): void {
    this.pageTitle = 'Mémo Liste : ' + message;
  }
}

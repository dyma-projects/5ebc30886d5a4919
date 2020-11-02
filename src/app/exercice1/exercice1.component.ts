import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  salutation: String;
  inputType: String;
  nom: String;
  constructor() {
    this.salutation = "Bonjour !";
    this.inputType = "date";
    this.nom = "";
  }

  ngOnInit(): void {}
}

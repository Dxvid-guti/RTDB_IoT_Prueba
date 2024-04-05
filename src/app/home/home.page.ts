import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private database:Database) {}

  variablesDB: any[] = [];

  ngOnInit() {
    const route = ref(this.database, "/casa");
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      this.variablesDB = Object.keys(valores_db).map(key => ({
        key,
        value: valores_db[key],
        lightOn: valores_db[key] === true // Indicador de estado de luz
      }));
    });
  }

}

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
        imageUrl: valores_db[key] ? 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f4a1.png' : 'https://imagenpng.com/wp-content/uploads/2015/04/Imagenes-Foco-PNG-0.png'
      }));
    });
  }

}

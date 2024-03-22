import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    
    provideDatabase(() => getDatabase()),
    provideFirebaseApp(() => initializeApp({"projectId":"rtdb-iot-prueba","appId":"1:475428477943:web:802dd1d8fa764c2886acf2","databaseURL":"https://rtdb-iot-prueba-default-rtdb.firebaseio.com","storageBucket":"rtdb-iot-prueba.appspot.com","apiKey":"AIzaSyAs__1YZQZ3iOyrwq1y5WkFR2elgX9DbR0","authDomain":"rtdb-iot-prueba.firebaseapp.com","messagingSenderId":"475428477943"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

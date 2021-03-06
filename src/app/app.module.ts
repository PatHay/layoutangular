import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component'; 
@NgModule({ 
	declarations: [ 
		AppComponent, HeaderComponent, NavComponent, MainComponent
	], 
	imports: [
		BrowserModule,
		FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
	], 
	providers: [], 
	bootstrap: [AppComponent] 
}) 
export class AppModule { }
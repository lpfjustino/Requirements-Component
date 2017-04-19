import { NgModule } 							from '@angular/core';
import { FormsModule } 							from '@angular/forms';
import { BrowserModule } 						from '@angular/platform-browser';
import { DatepickerModule, AlertModule } 		from 'ng2-bootstrap';
import { HttpModule } 							from '@angular/http';
import { MaterialModule } 						from '@angular/material';

// Main app components
import { AppComponent } 						from './app.component';
import { AppConfig}								from './app.config';

// Draft Components
import { CurrentDraftComponent } 				from './draft/current-draft.component';
import { ChampionListComponent } 				from './champions/champion-list.component';
import { HomePageComponent } 					from './walkthrough/home-page.component';

// App services
import { ChampionService }						from './champions/champion.service';
import { DraftService }							from './draft/draft.service';
import { VersionService }						from './services/version.service';
import { StatisticsService }					from './engine/services/statistics.service';

// Authentication imports
import { AppRoutingModule }        				from './app-routing.module';
import { AuthRoutingModule }					from './auth/auth-routing.module';

import { MyAlertComponent } 					from './auth/_directives/index';
import { AuthGuard } 							from './auth/_guards/index';
import { AlertService,
	AuthenticationService,
	UserService } 								from './auth/_services/index';

// Authentication components
import { AuthComponent }						from './auth/auth.component'
import { SummonerInfoComponent } 				from './auth/summoner/index';
import { LoginComponent } 						from './auth/login/index';
import { RegisterComponent } 					from './auth/register/index';

import { TreeView } from './tree-view.component';
import { DerpPipe } from './derp.pipe';
import { RequirementsService }		from './requirements.service';

@NgModule({
	declarations: [
		AppComponent,
		CurrentDraftComponent,
		ChampionListComponent,
		// Authentication components
		AuthComponent,
		MyAlertComponent,
        SummonerInfoComponent,
        HomePageComponent,
        LoginComponent,
        RegisterComponent,
        AuthComponent,
        TreeView,
        DerpPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AlertModule.forRoot(),
		DatepickerModule.forRoot(),
		MaterialModule.forRoot(),
		AuthRoutingModule,
		AppRoutingModule
	],
	providers: [
		ChampionService,
		DraftService,
		VersionService,
		StatisticsService,
		RequirementsService,
		
		// Authentication providers
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
	],
	bootstrap: [ AppComponent ]
})

export class AppModule {
}
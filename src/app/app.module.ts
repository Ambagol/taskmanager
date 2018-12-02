import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { InterlinkService } from './interlink.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
	declarations: [ AppComponent, LoginRegistrationComponent, DashboardComponent ],
	imports: [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
	providers: [InterlinkService],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

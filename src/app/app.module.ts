import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchPipe } from './Pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AuthModule,
    UserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

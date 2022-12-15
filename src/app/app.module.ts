import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelperErrorComponent } from './pages/helper-error/helper-error.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsPageComponent,
    SpinnerComponent,
    FormularioComponent,
    HelperErrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

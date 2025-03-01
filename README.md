# Angular CustomCursor 🎨🖱️
A lightweight and customizable cursor library for Angular. Replace the default cursor with a smooth animated cursor for a unique UI experience.

## 📦 Installation

Install the package using npm or yarn:

```bash
npm install angular-custom-cursor
```
or:
```bash
yarn add angular-custom-cursor
```

## usage

### 1️⃣ Standalone Component Approach (Angular 15+)
`If your app uses standalone components, you can directly import AngularCustomCursorComponent:`

#### ✅ Import in app.component.ts

```bash
import { Component } from '@angular/core';
import { AngularCustomCursorComponent } from 'angular-custom-cursor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularCustomCursorComponent], // Import here
})

export class AppComponent {}

```
### 2️⃣ Non-Standalone (NgModule) Approach
`If you are using a traditional NgModule-based Angular app, follow these steps:`
#### ✅ Import in app.module.ts
`Modify app.module.ts to include AngularCustomCursorModule:`
```bash
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularCustomCursorModule } from 'angular-custom-cursor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularCustomCursorModule // Import here
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

```
## ✅ Use in app.component.html

```bash
<lib-angular-custom-cursor></lib-angular-custom-cursor>

```

### 3️⃣ You can just Import in `App.component.ts` to use all over the application.
```bash
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularCustomCursorComponent } from 'angular-custom-cursor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularCustomCursorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-project';
}

```
## ✅ Use in app.component.html

```bash
<lib-angular-custom-cursor></lib-angular-custom-cursor>

```

import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  lightTheme(): void {
    this.renderer.addClass(document.body, 'parfay-light-theme');
    this.renderer.removeClass(document.body, 'parfay-dark-theme');
  }

  darkTheme(): void {
    this.renderer.addClass(document.body, 'parfay-dark-theme');
    this.renderer.removeClass(document.body, 'parfay-light-theme');
  }
}

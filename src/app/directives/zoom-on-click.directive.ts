import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[zoomOnClick]',
  standalone: true // 🔑 torna a diretiva standalone
})
export class ZoomOnClickDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    const src = this.el.nativeElement.src;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
    modal.innerHTML = `
      <img src="${src}" class="max-h-full max-w-full rounded shadow-lg" />
      <button class="absolute top-4 right-4 text-white text-3xl">&times;</button>
    `;
    document.body.appendChild(modal);

    modal.querySelector('button')?.addEventListener('click', () => modal.remove());
  }
}

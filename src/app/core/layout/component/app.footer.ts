import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        Developed by
        <a href="https://www.morzaa.com" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Morzaa Tech Ltd.</a>
    </div>`
})
export class AppFooter {}

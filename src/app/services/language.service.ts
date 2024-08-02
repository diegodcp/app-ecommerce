import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    private platform = inject(PLATFORM_ID);
    private translateService = inject(TranslateService);
    private storageService = inject(StorageService);

    initializeLanguage(): void {
        let defaultLanguage = 'es';
        if (isPlatformBrowser(this.platform)) {
            const savedLanguage = this.storageService.getLocalStorage('lang');
            if (savedLanguage) {
                defaultLanguage = savedLanguage;
            }
        }
        this.translateService.setDefaultLang(defaultLanguage);
    }
}

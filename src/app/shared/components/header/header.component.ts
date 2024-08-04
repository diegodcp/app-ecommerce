import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Company, CompanyImage } from '../../models/company.interface';
import { GlobalService } from '../../../services/global.service';
import { environment } from '../../../../environments/environment';
import { CurrencyPipe, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { StorageService } from '../../../services/storage.service';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CartItem } from '../../models/cart.interface';
import { AuthService } from '../../../services/auth.service';
import { SidenavService } from '../../../services/sidenav.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule,
    MatSelectModule,
    MatIconModule,
    MatBadgeModule,
    CurrencyPipe,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  private platform = inject(PLATFORM_ID);
  private globalService = inject(GlobalService);
  private translateService = inject(TranslateService);
  private storageService = inject(StorageService);
  private authService = inject(AuthService);
  private sidenavService = inject(SidenavService);
  private router = inject(Router);
  
  company: Company | undefined;
  companyImg: CompanyImage | undefined;
  imgUrl: string = '';
  selectedLanguage: string = '';

  isLogged: boolean = false;
  isAdmin: boolean = false;

  cartListItem: CartItem[] = [];
  favouritesProducts: string[] = [];
  showDropdownCart: boolean = false;
  showDropdownAccount: boolean = false;

  searchword: string = '';
  
  locales = [
    {value: 'es', name:'España', img: environment.CLOUDINARY_IMG_BASE+'/image/upload/v1722543183/ico/es-icon.png'},
    {value: 'en', name:'English', img: environment.CLOUDINARY_IMG_BASE+'/image/upload/v1722543183/ico/en-icon.png'}
  ];

  constructor() {
    if (isPlatformBrowser(this.platform)) {
      this.getLanguageFromStorage();
    }
  }

  ngOnInit(): void {
    this.imgUrl = environment.DEFAULT_IMAGE_URL;    
    this.company = this.globalService.getCompany();
    this.companyImg = this.company.images?.filter((image: CompanyImage) => image.type == 'LOGO')[0];
  }

  getLocale(lang: string): any {
    return this.locales.find(locale => locale.value === lang);
  }

  getLanguageFromStorage() {
    let lang = this.storageService.getLocalStorage('lang');
    if(!lang) {
      lang = this.translateService.defaultLang;
      this.updateLanguageInStorage(lang);
    }
    this.selectedLanguage = lang;
  }

  changeLanguage() {
    if(this.selectedLanguage) {
      this.translateService.use(this.selectedLanguage);
      this.updateLanguageInStorage(this.selectedLanguage);
    }
  }

  updateLanguageInStorage(lang: string) {
    this.storageService.saveLocalStorage('lang', lang);
  }

  toggleCart() {
    this.showDropdownAccount = false;
    this.showDropdownCart = !this.showDropdownCart;
  }
  
  toggleAccount() {
    this.showDropdownCart = false;
    this.showDropdownAccount = !this.showDropdownAccount;
  }

  onLogout(): void{
    // this.authService.logout();
  }

  toggleRightSidenav() {
		this.sidenavService.toggle();
	}

  searchItem() {
    this.router.navigate(['/products'], { queryParams: { search: this.searchword } });
  }

}

import { Component, inject, OnInit } from '@angular/core';
import { Company, CompanyImage } from '../../models/company.interface';
import { GlobalService } from '../../../services/global.service';
import { environment } from '../../../../environments/environment';
import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule,
    MatSelectModule
  ],
  providers: [
    provideCloudinaryLoader(environment.CLOUDINARY_IMG_BASE)
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  private globalService = inject(GlobalService);
  private translateService = inject(TranslateService);
  
  company: Company | undefined;
  companyImg: CompanyImage | undefined;
  imgUrl: string = '';
  selectedLanguage: string = '';
  
  locales = [
    {value: 'es', name:'España', img: environment.CLOUDINARY_IMG_BASE+'/image/upload/v1722543183/ico/es-icon.png'},
    {value: 'en', name:'English', img: environment.CLOUDINARY_IMG_BASE+'/image/upload/v1722543183/ico/en-icon.png'}
  ];
  
  ngOnInit(): void {
    this.imgUrl = environment.DEFAULT_IMAGE_URL;    
    this.company = this.globalService.getCompany();
    this.companyImg = this.company.images?.filter((image: CompanyImage) => image.type == 'LOGO')[0];
    this.selectedLanguage = this.translateService.defaultLang;
  }

  getLanguage(lang: string): any {
    return this.locales.find(locale => locale.value === lang);
  }

  changeLanguage() {
    if(this.selectedLanguage) {
      this.translateService.use(this.selectedLanguage);
    }
  }

}

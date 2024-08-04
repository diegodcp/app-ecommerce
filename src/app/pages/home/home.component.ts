import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Company, CompanyImage } from '../../shared/models/company.interface';
import { GlobalService } from '../../services/global.service';
import { SEOService } from '../../services/seo..service';
import { environment } from '../../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    NgOptimizedImage,
    UpperCasePipe,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  private globalService = inject(GlobalService);
  private seoService = inject(SEOService);
  
  company: Company;
  companySlides: CompanyImage[] = [];
  companyPhoneFormatted: string = '';
  
  
  ngOnInit(): void {

    this.company = this.globalService.getCompany();
    this.companyPhoneFormatted = this.company.phone.replaceAll(' ', '');
    this.seoService.setTitle(this.company.name);
    this.companySlides = this.company.images?.filter((image: CompanyImage) => image.type == 'SLIDE');

  }

}

import { NgOptimizedImage } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Company, CompanyImage } from '../../shared/models/company.interface';
import { GlobalService } from '../../services/global.service';
import { SEOService } from '../../services/seo..service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  private globalService = inject(GlobalService);
  private seoService = inject(SEOService);
  
  img_base_url = '';

  company: Company;
  companySlides: CompanyImage[] = [];
  
  
  ngOnInit(): void {

    this.img_base_url = environment.CLOUDINARY_IMG_BASE;
    
    this.company = this.globalService.getCompany();
    this.seoService.setTitle(this.company.name);
    this.companySlides = this.company.images?.filter((image: CompanyImage) => image.type == 'SLIDE');

  }

}

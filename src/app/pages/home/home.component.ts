import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Company, CompanyImage } from '../../shared/models/company.interface';
import { GlobalService } from '../../services/global.service';
import { SEOService } from '../../services/seo..service';
import { TranslateModule } from '@ngx-translate/core';
import { Product } from '../../shared/models/product.interface';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';


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
export class HomeComponent implements OnInit, OnDestroy {
  private globalService = inject(GlobalService);
  private seoService = inject(SEOService);
  private productService = inject(ProductService);

  private sub: Subscription;
  
  company: Company;
  companySlides: CompanyImage[] = [];
  companyPhoneFormatted: string = '';

  productList: Product[] = [];
  
  
  ngOnInit(): void {

    this.company = this.globalService.getCompany();
    this.companyPhoneFormatted = this.company.phone.replaceAll(' ', '');
    this.seoService.setTitle(this.company.name);
    this.companySlides = this.company.images?.filter((image: CompanyImage) => image.type == 'SLIDE');

    this.getProductList();

  }

  ngOnDestroy(): void{
    if(this.sub)
      this.sub.unsubscribe();
  }

  getProductList(): void{
    this.sub = this.productService.getBestSellers().subscribe( res => {
      if(res){
        this.productList = res;
      }
    });
  }

}

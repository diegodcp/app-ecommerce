import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../../services/global.service';
import { SEOService } from '../../../services/seo..service';
import { SidenavService } from '../../../services/sidenav.service';
import { Company, CompanyImage } from '../../models/company.interface';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    TranslateModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  private globalService = inject(GlobalService);
  private seoService = inject(SEOService);
  private sidenavService = inject(SidenavService);

  @ViewChild('sidenav', {static:true}) public sidenav: MatSidenav;

  company: Company;
  companyLogo: CompanyImage;
  imgBaseUrl = environment.CLOUDINARY_IMG_BASE;
  title = 'app-ecommerce';

  isLogged: boolean = false;

  ngOnInit(): void {
    this.setCompanyData();

    this.sidenavService.setSidenav(this.sidenav);
  }

  setCompanyData(): void {
    let company: Company = this.globalService.getCompany();
    if(company) {
      this.seoService.setTitle(company.name);
      this.seoService.setDescription(company.metaDescription);
      this.companyLogo = company.images?.filter((image: CompanyImage) => image.type == 'LOGO')[0];
    }
  }


}

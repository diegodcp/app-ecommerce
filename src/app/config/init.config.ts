import { inject, Injectable } from "@angular/core";
import { CompanyService } from "../services/company.service";
import { GlobalService } from "../services/global.service";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class InitConfig {
    private companyService = inject(CompanyService);
    private globalService = inject(GlobalService);

    load() {
        return new Promise<void>((resolve, reject) => {
            this.companyService.getCompanyByCode(environment.companyCode).subscribe({
                next: (res) => {
                    this.globalService.setCompanyId(res.id);
                    this.globalService.setCompany(res);
                    resolve();
                },
                error: (error: any) => {
                    reject(new Error(error.message || error));
                }
             });
        });
    }

}
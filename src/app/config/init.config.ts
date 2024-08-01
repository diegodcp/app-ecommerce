import { inject, Injectable } from "@angular/core";
import { CompanyService } from "../services/company.service";
import { GlobalService } from "../services/global.service";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class InitConfig {
    private CompanyServ = inject(CompanyService);
    private GlobalServ = inject(GlobalService);

    load() {
        return new Promise<void>((resolve, reject) => {
            this.CompanyServ.getCompanyByCode(environment.companyCode).subscribe({
                next: (res) => {
                    this.GlobalServ.setCompanyId(res.id);
                    this.GlobalServ.setCompany(res);
                    resolve();
                },
                error: (error: any) => {
                    reject(new Error(error.message || error));
                }
             });
        });
    }

}
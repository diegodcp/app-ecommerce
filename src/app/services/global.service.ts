import { Injectable } from "@angular/core";
import { Company } from "../shared/models/company.interface";

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    private companyId!: number;
    private company!: Company;

    getCompanyId(): number {
        return this.companyId;
    }

    setCompanyId(companyId: number): void {
        this.companyId = companyId;
    }

    getCompany(): Company {
        return this.company;
    }

    setCompany(company: Company): void {
        this.company = company;
    }
  
}
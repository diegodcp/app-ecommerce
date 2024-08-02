import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalService } from './global.service';
import { Category, Product, ProductVariationColor, ProductVariationSize, ShipTime, SizeTable } from '../shared/models/product.interface';
import { environment } from '../../environments/environment';
import { ErrorHandler } from '../shared/utils/error.handler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private http = inject(HttpClient);
    private globalService = inject(GlobalService);
    private errHandler = inject(ErrorHandler);


    getAll(includeDeleted?:boolean): Observable<Product[]> {
        let extraParam = "";

        if(includeDeleted)
        extraParam = "?deleted=true";

        return this.http
        .get<Product[]>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/products${extraParam}`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getCategory(categoryId: number, subCategoryId?: number): Observable<Category> {
        let extraUri:string = categoryId.toString();
        if(subCategoryId)
        extraUri += '/' + subCategoryId

        return this.http
        .get<Category>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/categories/${extraUri}`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getCategories(): Observable<Category[]> {
        return this.http
        .get<Category[]>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/categories`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getSizetables(): Observable<SizeTable[]> {
        return this.http
        .get<SizeTable[]>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/products/config/sizetables`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getShiptimes(): Observable<ShipTime[]> {
        return this.http
        .get<ShipTime[]>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/products/config/shiptimes`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getVariationColors(): Observable<ProductVariationColor[]> {
        return this.http
        .get<ProductVariationColor[]>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/products/config/colors`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getVariationSizes(): Observable<ProductVariationSize[]> {
        return this.http
        .get<ProductVariationSize[]>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/products/config/sizes`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getAllPromos(): Observable<Product[]> {
        return this.http
        .get<Product[]>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/products/filter/promos`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getBestSellers(): Observable<Product[]> {
        return this.http
        .get<Product[]>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/products/filter/bestsellers`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getById(id: number): Observable<Product> {
        return this.http
        .get<Product>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/products/${id}`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getByVariationId(id: number): Observable<Product> {
        return this.http
        .get<Product>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/products/variations/${id}`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getByCategory(categoryId: number, subCategoryId?: number): Observable<Product[]> {
        let extraUri: string = categoryId.toString();
        if(subCategoryId)
        extraUri += '/'+subCategoryId;

        return this.http
        .get<Product[]>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/category/${extraUri}/products`)
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

    getByText(text: string): Observable<Product[]> {
        let params = new HttpParams();
        params = params.append('text', text);

        return this.http
        .get<Product[]>(`${environment.API_URL}/companies/${this.globalService.getCompanyId()}/products/filter/search`,{params: params})
        .pipe(
        catchError( (err) => this.errHandler.handlerError(err))
        );
    }

}

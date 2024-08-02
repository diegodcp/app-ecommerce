import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    hash: string = '-ecom';
    
    // SESSION STORAGE
    getSessionStorage(key: any): any {
      let value = sessionStorage.getItem(key+this.hash);
      if(value) {
        value = JSON.parse(value)
      }
      return value;
    }
  
    saveSessionStorage(key: any, value: any): void {
      sessionStorage.setItem(key+this.hash, JSON.stringify(value));
    }
  
    removeSessionStorage(key: any): void {
      sessionStorage.removeItem(key+this.hash);
    }
  
    removeAllSessionStorage(): void {
      sessionStorage.clear();
    }
  
    // LOCAL STORAGE
    getLocalStorage(key: any): any {
      let value = localStorage.getItem(key+this.hash);
      if(value) {
        value = JSON.parse(value)
      }
      return value;
    }
  
    saveLocalStorage(key: any, value: any): void {
      localStorage.setItem(key+this.hash, JSON.stringify(value));
    }
  
    removeLocalStorage(key: any): void {
      localStorage.removeItem(key+this.hash);
    }
  
    removeAllLocalStorage(): void {
      localStorage.clear();
    }
  
}
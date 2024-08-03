import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

    constructor(
      private titleService: Title,
      private meta: Meta  
    ) { }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    public setDescription(description: string) {
      this.meta.updateTag({ name: 'description', content: description })
    }

}
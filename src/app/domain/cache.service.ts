import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    } else {
      return this.http.get(url).pipe(tap(data => this.cache.set(url, data)));
    }
  }

  clearCache() {
    this.cache.clear();
  }
}
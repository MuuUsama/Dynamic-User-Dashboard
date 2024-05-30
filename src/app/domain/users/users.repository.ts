import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './models/users';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResourceService } from 'src/app/core/config/resource.service';
import { Respn, Response } from 'src/app/core/models/response';
import { CacheService } from '../cache.service';

@Injectable({
    providedIn: 'root'
})

export class UsersRepository extends ResourceService<Users> {
    private apiUrl = 'https://reqres.in/api/users';
    constructor(protected http: HttpClient, private cacheService: CacheService) {
        super(http)
    }
    getResourceUrl(): string {
        return 'users';
    }
    getUsersData(page: number): Observable<Response<Users>> {
        const url = `${this.apiUrl}?page=${page}`;
        return this.cacheService.get(url);
        // const params = new HttpParams({ fromObject: p });
        // return this.http.get<Response<Users>>(`https://reqres.in/api/users?${params.toString()}`).pipe(
        //     map(list => list),
        //     catchError(err => {
        //         throw new Error(err.message);
        //     })
        // )
    }
    getUserById(userId: number): Observable<Respn<Users>> {
        const url = `${this.apiUrl}/${userId}`;
        return this.cacheService.get(url);

        // const params = new HttpParams({ fromObject: p });
        // return this.http.get<Respn<Users>>(`https://reqres.in/api/users/${userId}}`).pipe(
        //     catchError(err => {
        //         throw new Error(err.message);
        //     })
        // );
    }
}

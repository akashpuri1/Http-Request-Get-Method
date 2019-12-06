import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idata } from './data';
import { Observable } from 'rxjs';

    @Injectable({
        providedIn: 'root'
    })
    export class DataService {
    private _url:string = "https://jsonplaceholder.typicode.com/posts";

    constructor(private http : HttpClient) {}

    get_products() :Observable<Idata[]> {
        return this.http.get<Idata[]>(this._url);
    }
    }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
  private url = environment.API_ENDPOINT;

  constructor(private http: HttpClient) {}

  getIcons = () => {
    return this.http.get<Config>(`${this.url}icons/`);
  };
}

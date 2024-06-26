import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { Configuration } from '../models/configuration.model';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  static configurationEnvironment: Configuration = { api: { baseUrl: '' } };
  sideNavState$: Subject<boolean> = new Subject();
  
}

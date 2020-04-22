import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, API_KEY } from '../../environments/environment';

export interface IGeocodedResponse{
  results: google.maps.GeocoderResult[],
  status: google.maps.GeocoderStatus;
}

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(
    private _http: HttpClient
  ) { }

  public getLocationByAddress(address: string): Observable<IGeocodedResponse>{
    let params = new HttpParams();
    params = params.append('address', address);
    params = params.append('key', API_KEY);
    
    return this._http.get<IGeocodedResponse>(`${environment.api.geocode}`, { params });
  }

  public getLocationByLatLng(lat: number, lng: number): Observable<IGeocodedResponse>{
    let params = new HttpParams();
    params = params.append('latlng', `${lat},${lng}`);
    params = params.append('key', API_KEY);

    return this._http.get<IGeocodedResponse>(`${environment.api.geocode}`, { params });
  }
}

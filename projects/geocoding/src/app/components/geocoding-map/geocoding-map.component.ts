import { Component, OnInit, ViewChild } from '@angular/core';
import { GeocodingService, IGeocodedResponse } from '../../services/geocoding.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-geocoding-map',
  templateUrl: './geocoding-map.component.html',
  styleUrls: ['./geocoding-map.component.scss']
})
export class GeocodingMapComponent implements OnInit {

  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  public mapOptions: google.maps.MapOptions;
  public markers: google.maps.MarkerOptions[] = [];
  public markerInfo: string = '';
  public mousePosition: google.maps.LatLngLiteral;

  public address: string;

  public isLoading: boolean;

  public markerCounter: number = 0;

  constructor(
    private _geocodeService: GeocodingService
  ) { }

  ngOnInit(): void {
    this._initMap();
  }

  private _initMap(): void{
    this.mapOptions = {
      disableDoubleClickZoom: true,
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 2
    };
  }

  public openInfoWindow(marker: google.maps.MarkerOptions, elem: MapMarker): void{
    this.markerInfo = marker.title;
    this.infoWindow.open(elem);
  }

  public searchByAddress(): void{
    if(this.address){
      this.isLoading = true;
      this._geocodeService.getLocationByAddress(this.address).subscribe(
        (data: IGeocodedResponse) => {
          if(data.status === google.maps.GeocoderStatus.OK && data.results.length){
            this.address = '';
            this.markers.push({
              title: data.results[0].formatted_address,
              position: data.results[0].geometry.location
            })
          }
          this.isLoading = false;
        }, 
        (e: HttpErrorResponse) => {
          console.log(e.message);
          this.isLoading = false;
        }
      );
    }
  }

  public addMarker(e: google.maps.MouseEvent): void{
    this._geocodeService.getLocationByLatLng(e.latLng.lat(), e.latLng.lng()).subscribe(
      data => {
        if(data.status === google.maps.GeocoderStatus.OK && data.results.length){
          this.markers.push({
            title: data.results.length ? data.results[0].formatted_address : `Marker ${this.markerCounter}`,
            position: e.latLng
          });
          this.markerCounter++;
        }
      },
      (e: HttpErrorResponse) => {
        console.log(e.message);
      }
    );
  }

}

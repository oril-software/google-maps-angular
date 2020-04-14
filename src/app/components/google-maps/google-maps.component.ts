import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  public mapOptions: google.maps.MapOptions;
  public markers: google.maps.MarkerOptions[] = [];
  public markerInfo: string = '';
  public mousePosition: google.maps.LatLngLiteral;

  constructor() { }

  ngOnInit(): void {
    this.mapOptions = {
      scrollwheel: false,
      center: {
        lat: 45,
        lng: -25
      },
      zoom: 4
    };

    this.markers.push({
      title: 'Lviv ORIL office',
      position: {
        lat: 49.84,
        lng: 24.03
      }
    }, {
      title: 'New York ORIL office',
      position: {
        lat: 40.730610,
        lng: -73.935242
      }
    });
    
  }

  public move(event: google.maps.MouseEvent) {
    this.mousePosition = event.latLng.toJSON();
  }

  public openInfoWindow(marker: google.maps.MarkerOptions, elem: MapMarker): void{
    this.markerInfo = marker.title;
    this.infoWindow.open(elem);
  }

}

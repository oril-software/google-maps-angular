import { Component, OnInit, ViewChild } from '@angular/core';
import { MapMarker, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

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

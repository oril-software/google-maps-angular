import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-map-directions',
  templateUrl: './map-directions.component.html',
  styleUrls: ['./map-directions.component.scss']
})
export class MapDirectionsComponent implements OnInit, AfterViewInit {

  @ViewChild('mapElement') mapNativeElement: ElementRef;
  @ViewChild('origin') originEl: ElementRef;
  @ViewChild('destination') destinationEl: ElementRef;
  
  public directionsService = new google.maps.DirectionsService;
  public directionsDisplay = new google.maps.DirectionsRenderer;
  public result: google.maps.DirectionsResult;

  public isLoading: boolean;

  public directionsForm: FormGroup;
  public waypointsEls = [];
  public waypointsForm: FormArray;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.directionsForm = this._fb.group({
      origin: [null],
      destination: [null]
    });
    this.waypointsForm = this._fb.array([]);
    this.directionsForm.addControl('waypoints', this.waypointsForm);
  }

  ngAfterViewInit(): void{    
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 2,
      center: {lat: 0, lng: 0}
    });
    this.directionsDisplay.setMap(map);
    new google.maps.places.Autocomplete(this.originEl.nativeElement);
    new google.maps.places.Autocomplete(this.destinationEl.nativeElement);
  }

  public addWaypoint(): void{
    if(this.waypointsForm.value.length < 5){
      this.waypointsForm.push(this._fb.group({
        location: [null]
      }));
      
      setTimeout(() => {
        const element = document.getElementById(`waypoint-${this.waypointsEls.length}`) as HTMLInputElement;
        const autocomplete = new google.maps.places.Autocomplete(element);
        this.waypointsEls.push({ element, autocomplete });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
          const group = this.waypointsForm.get((this.waypointsForm.controls.length-1).toString()) as FormGroup; 
          group.get('location').setValue(autocomplete.getPlace().formatted_address);
          this.waypointsEls[this.waypointsEls.length-1].place = autocomplete.getPlace();
        });
      }, 0);
    }
  }

  public removeWaypoint(index: number): void{
    google.maps.event.clearListeners(this.waypointsEls[index].autocomplete, 'place_changed');
    this.waypointsForm.removeAt(index);
    this.waypointsEls.splice(index, 1)
  }

  public buildRoute(): void{
    if(this.originEl.nativeElement.value && this.destinationEl.nativeElement.value){
      const request: google.maps.DirectionsRequest = {
        origin: this.originEl.nativeElement.value,
        destination: this.destinationEl.nativeElement.value,
        waypoints: this.waypointsForm.value,
        travelMode: google.maps.TravelMode['DRIVING'],
      };

      this.directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          this.result = result;
          this.directionsDisplay.setDirections(result);
        }
      });
    }
  }

}

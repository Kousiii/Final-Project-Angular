import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReachusService } from 'src/app/services/reachus.service';
// import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  // @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  // map: google.maps.Map;
  // latitude = 51.5074;
  // longitude = 0.1278;
  
  // constructor(private ms: ReachusService) { }

  // ngOnInit() {
  //   this.ms.getLocation().subscribe((location: any) => {
  //     this.latitude = location.lat;
  //     this.longitude = location.lng;
  //     this.mapInitializer();
  //   });
  // }

  // mapInitializer() {
  //   const coordinates = new google.maps.LatLng(this.latitude, this.longitude);
  //   const mapOptions: google.maps.MapOptions = {
  //     center: coordinates,
  //     zoom: 8
  //   };
  //   this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
  //   new google.maps.Marker({
  //     position: coordinates,
  //     map: this.map
  //   });
  // }
}

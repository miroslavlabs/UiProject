import { Component } from '@angular/core';
declare var google: any;

@Component({
  selector: 'top-search-panel',
  templateUrl: './top-search-panel.component.html',
  styleUrls: ['./top-search-panel.component.scss']
})
export class TopSearchComponent {
  mapOptions: object;
  topSearches: object;

  ngOnInit() {
    this.mapOptions = {
      center: { lat: 36.890257, lng: 30.707417 },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 1,
      styles: [
        {
          elementType: 'geometry',
          stylers: [{ color: '#c1c1c1' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: "all",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ],
      disableDefaultUI: true, // a way to quickly hide all controls
      scaleControl: true,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      }
    };

    this.topSearches = [
      {
        countryName: 'America',
        countryImage: 'assets/images/countries/united-states.svg',
        searchPercent: '46%',
      },
      {
        countryName: 'U.Kingdom',
        countryImage: 'assets/images/countries/united-kingdom.svg',
        searchPercent: '24%',
      },
      {
        countryName: 'Bangladesh',
        countryImage: 'assets/images/countries/bangladesh.svg',
        searchPercent: '18%',
      },
      {
        countryName: 'Canada',
        countryImage: 'assets/images/countries/canada.svg',
        searchPercent: '12%',
      },
      {
        countryName: 'Russia',
        countryImage: 'assets/images/countries/russia.svg',
        searchPercent: '10%',
      }
    ];
  }
}
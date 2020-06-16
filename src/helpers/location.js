import React, { Component } from 'react';
import { geolocated } from 'react-geolocated'


//send request to view location 
//get IP to location, IP to language and IP to timezone
//response is sent back to the be
//infos: location + timezone + currency + amountbid
//be sends this info to be used dynamically in the fe
//auction pages show infos from most recent and previous bids index of 0,1, and 2
//auction bid form shows minBid

class Location extends Component {
    state = {
        locationinfo: {
            coords: {
                latitude: undefined,
                longitude: undefined
            },
            country: "",
            city: "",

            timezone: {
                timeofbid: ""
            }
        },
        bidInfo: {
            currency: {
                currency: "EURO",
                symbol: "€"
            },
            amount: ""
        },

        limit: 3

    }

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{this.props.coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{this.props.coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>country</td>
                        <td>{this.props.country}</td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td>{this.props.city}</td>
                    </tr>
                    <tr>
                        <td>timeofbid</td>
                        <td>{this.props.timeofbid}</td>
                    </tr>
                </tbody>
            </table>
        ) : (
                        <div>Getting the location data&hellip; </div>
                    );
    }
}


export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Location)


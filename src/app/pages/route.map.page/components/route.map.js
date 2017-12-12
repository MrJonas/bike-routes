import {compose, withProps, withStateHandlers} from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Polyline,
    InfoWindow
} from "react-google-maps";

const DEFAULT_CENTER = {lat: 55.379934, lng: 23.959290};

const MarkerInfoWindow = compose(
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onMouseOver: ({isOpen}) => () => ({
            isOpen: true,
        }),
        onMouseOut: ({isOpen}) => () => ({
            isOpen: false,
        }),
    }))(props =>
    <Marker
        position={props.position}
        icon={props.icon}
        onMouseOver={props.onMouseOver}
        onMouseOut={props.onMouseOut}
    >
        {props.text && props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <div style={{maxWidth: '200px'}}>
                <h6>{props.title}</h6>
                <p>{props.text}</p>
            </div>
        </InfoWindow>}
    </Marker>
);

const MainMap = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        zoom={props.mode === 'one' ? props.route.zoom : 7}
        center={props.mode === 'one' ? {
            lat: parseFloat(props.route.center_lat),
            lng: parseFloat(props.route.center_lng)
        } : DEFAULT_CENTER}
    >
        {props.mode === 'all' && props.routes.map(route =>
            <MarkerInfoWindow key={route.url}
                              icon={`/icons/${route.main_icon}-15.svg`}
                              text={route.short_description}
                              position={{lat: parseFloat(route.center_lat), lng: parseFloat(route.center_lng)}}/>
        )}
        {props.mode === 'one' && props.route &&
        <Polyline path={JSON.parse(props.route.coordinates)} options={{strokeColor: '#3a93b2', strokeWeight: 6}}/>}
        {props.mode === 'one' && props.route && props.route.atractions.length > 0 && props.route.atractions.map((atraction, index) =>
            <MarkerInfoWindow key={index}
                              icon={`/icons/${atraction.icon}-15.svg`}
                              text={atraction.description}
                              title={atraction.name}
                              position={{lat: parseFloat(atraction.lat), lng: parseFloat(atraction.lng)}}/>
        )}
    </GoogleMap>
));

export const RouteMap = (props) =>
    <MainMap
        routes={props.routes}
        route={props.route}
        mode={props.mode}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDWm9_FvglT7taNzRUJdLEYC0tShcKOyOI&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div style={{height: `100%`}}/>}
        mapElement={<div style={{height: `100%`}}/>}
    />;

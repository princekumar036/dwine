Handlebars.registerHelper('ifeq', function(v1, v2, options) {
    if(v1 == v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper('getLabel', function(v1, v2, v3, options) {
    if(v1 && v2 && v3 && v2[v3]){
        return typeof v1[v2[v3]] == 'object' ? (v1[v2[v3]].label || '...') : v1[v2[v3]];
    }else{
        return v1 && v1[0] && v1[0].label ? '...' : '';
    }
});
Handlebars.registerHelper('getStatusText', function(v1, v2, v3, options) {
    return v1[v2[v3]] ? v1[v2[v3]].label : '...';
});
Handlebars.registerHelper('round', function(x, options) {
    return Math.round(x);
});
Handlebars.registerHelper('ifinr', function(v1, v2, options) {
  for(var i in v2){
      if(v2[i].id == v1)
          return options.fn(this);
  }
  return options.inverse(this);
});
Handlebars.registerHelper('ifselected', function(v1, v2, options) {
    for(var i in v2){
      if(v2[i].value == v1)
          return options.fn(this);
  }
  return options.inverse(this);
});
Handlebars.registerHelper('ifin', function(v1, v2, options) {
    if(v2.indexOf(v1)!=-1) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper('ifnoteq', function(v1, v2, options) {
    if(v1 != v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper('ifjson', function(v1, v2, options) {
    if(typeof v1[v2] == 'object') {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper('ifnotjson', function(v1, v2, options) {
    if(typeof v1[v2] != 'object') {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper('getRegions', function(v1, v2, options) {
    var regions = v1[v2];
    var str = '';
    if(regions && regions.length){
        // regions.forEach(function(region){
        str += '<label class="label label-default">'+(regions[0].title?regions[0].title:regions[0].id)+'</label> ';
        // });
        if(regions.length > 1)
            str += '<span class="mapsvg-data-image-counter">+'+(regions.length-1)+'</span>';

        return new Handlebars.SafeString(str);
    }
});
Handlebars.registerHelper('getSelectedOptions', function(v1, v2, options) {
    var regions = v1[v2];
    var str = '';
    if(regions && regions.length){
        var label = regions[0].label === undefined ? regions[0].value : regions[0].label;
        str += '<label class="label label-default">'+label+'</label> ';
        if(regions.length > 1)
            str += '<span class="mapsvg-data-image-counter">+'+(regions.length-1)+'</span>';

        return new Handlebars.SafeString(str);
    }
});
Handlebars.registerHelper('getRegionIDs', function(v1, v2, options) {
    var regions = v1[v2];
    var str = '';
    if(regions && regions.length){
        // regions.forEach(function(region){
            str += '<label class="label label-default">'+(region.title?region.title:region.id)+'</label> ';
        // });
        if(regions.length > 1)
            str += '<span class="mapsvg-data-image-counter">+'+(regions.length-1)+'</span>';

        return new Handlebars.SafeString(str);
    }
});

Handlebars.registerHelper('getThumbs', function(v1, v2, options) {
    var images = v1[v2];
    var str = '';
    if(images && images.length){
        // images.forEach(function(img){
        //     str += '<img src="'+img.thumbnail+'" class="mapsvg-data-thumbnail"/>';
        // });
        str +='<img src="'+images[0].thumbnail+'" class="mapsvg-data-thumbnail"/>';
        if(images.length > 1)
            str += '<span class="mapsvg-data-image-counter">+'+(images.length-1)+'</span>';
        return new Handlebars.SafeString(str);
    }
});

Handlebars.registerHelper('getMarkerImage', function(v1, v2, options) {
    var location = v1[v2];
    if(location && location.img){
        return new Handlebars.SafeString('<img src="'+location.markerImageUrl+'" class="mapsvg-marker-image"/> '+((location.address && location.address.formatted) ? location.address.formatted : ''));
    }
});
Handlebars.registerHelper('not', function(v1, v2, options) {
    if(v1 != v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper('if_starts', function(v1, v2, options) {
    if(v1 && v1.indexOf(v2) == 0) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper('if_function', function(v1, options) {
    return (typeof v1 == "function") ? options.fn(this) : options.inverse(this);
});
Handlebars.registerHelper('if_number', function(v1, options) {
    return jQuery.isNumeric(v1) ? options.fn(this) : options.inverse(this);
});
Handlebars.registerHelper('if_string', function(v1, options) {
    return (typeof v1 == "string" && !jQuery.isNumeric(v1)) ? options.fn(this) : options.inverse(this);
});
Handlebars.registerHelper('toString', function(object) {
    return object!=undefined ? MapSVG.convertToText(object) : "";
});
Handlebars.registerHelper('jsonToString', function(object) {
    return object!=undefined ? JSON.stringify(object) : "";
});
Handlebars.registerHelper('log', function(object) {
    console.log(object);
    return object;
});

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}
function deg2rad(deg) {
    return deg * (Math.PI/180)
}

Handlebars.registerHelper('distanceFrom', function(location) {
    if(MapSVG.distanceSearch){
        var distance = getDistanceFromLatLonInKm(location.lat, location.lng, MapSVG.distanceSearch.latlng.lat, MapSVG.distanceSearch.latlng.lng);
        if (MapSVG.distanceSearch.units === 'mi'){
            distance = distance * 0.62137
        }
        return distance.toFixed(2)+' '+MapSVG.distanceSearch.unitsLabel;
    } else {
        return '';
    }
});
Handlebars.registerHelper('distanceTo', function(location) {
    if(MapSVG.distanceSearch){
        var distance = getDistanceFromLatLonInKm(location.lat, location.lng, MapSVG.distanceSearch.latlng.lat, MapSVG.distanceSearch.latlng.lng);
        if (MapSVG.distanceSearch.units === 'mi'){
            distance = distance * 0.62137
        }
        return distance.toFixed(2)+' '+MapSVG.distanceSearch.unitsLabel;
    } else {
        return '';
    }
});
Handlebars.registerHelper('stripUnderscores', function(object) {
    return object!=undefined ? object.replace(/_/g, " ") : "";
});
Handlebars.registerHelper('spacesToUnderscores', function(object) {
    return object!=undefined ? object.replace(/ /g, "_") : "";
});
Handlebars.registerHelper("switch", function(value, options) {
    this._switch_value_ = value;
    this._switch_break_ = false;
    var html = options.fn(this);
    delete this._switch_break_;
    delete this._switch_value_;
    return html;
});

Handlebars.registerHelper("case", function(value, options) {
    var args = Array.prototype.slice.call(arguments);
    var options    = args.pop();
    var caseValues = args;

    if (this._switch_break_ || caseValues.indexOf(this._switch_value_) === -1) {
        return '';
    } else {
        if (options.hash.break === true) {
            this._switch_break_ = true;
        }
        return options.fn(this);
    }
});

Handlebars.registerHelper("default", function(options) {
    if (!this._switch_break_) {
        return options.fn(this);
    }
});
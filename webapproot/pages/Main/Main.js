
function getLatitudeLongitude(address) {
    var geocoder = new google.maps.Geocoder();
    var latLng = [];
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            latLng[0] = results[0].geometry.location.lat();
            latLng[1] = results[0].geometry.location.lng();
            return latLng; 
        }
    });
    return latLng;
}


dojo.declare("Main", wm.Page, {
    start: function() {
    },
    "preferredDevice": "desktop",

    button1Click: function(inSender) {
        this.dojoGrid1.showCSVData();
    },
    dojoGrid1RenderData: function(inSender) {
        var count = this.dojoGrid1.getRowCount();
        for (var i = 0; i < count; i++) {
            var address = this.dojoGrid1.getCell(i, "address");
            var latLng = getLatitudeLongitude(address);
            console.log(latLng[0], latLng[1]);
            this.dojoGrid1.setCell(i, "Latitude", latLng[0], false); 
            if (this.dojoGrid1.edit.isEditing()) {
                this.dojoGrid1.edit.apply();
            }
            //this.dojoGrid1.setCell(i, "Longitude", latLng[1], false); 
            //if (this.dojoGrid1.edit.isEditing()) {
            //    this.dojoGrid1.edit.apply();
            //}
            
        }
    },
    _end: 0
});

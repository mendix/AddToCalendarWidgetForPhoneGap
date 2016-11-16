define([
    "dojo/_base/declare",
    "AddToCalendarWidgetForPhoneGap/lib/AbstractPhoneGapWidget/widget"
], function(declare, AbstractPhoneGapWidget) {
    "use strict";

    return declare("AddToCalendarWidgetForPhoneGap.widget.AddToCalendarWidgetForPhoneGap", [AbstractPhoneGapWidget], {

        // Set in modeler
        titleAttr: "",
        startDateAttr: "",
        endDateAttr: "",
        locationAttr: "",
        notesAttr: "",

        // Overwriting Abstract widget
        phoneGapPluginName: "calendar",
        pluginNotFoundError: "Unable to detect Phonegap/Calendar functionality.",

        _onClickAction: function() {
            logger.debug(this.id + "._createEvent");

            var startDateMs = this._obj.get(this.startDateAttr),
                startDate = new Date(startDateMs),
                endDateMs = this._obj.get(this.endDateAttr),
                endDate = new Date(endDateMs);

            var title = this._obj.get(this.titleAttr),
                location = this._obj.get(this.locationAttr),
                notes = this._obj.get(this.notesAttr);

            var success = function(message) {
                // TODO: What todo?
            };
            var error = function(message) {
                // TODO: What to do with an error
                //alert("Error: " + message);
            };

            window.plugins.calendar.createEventInteractively(title,location,notes,startDate,endDate,success,error);
        }
    });
});

// Compatibility with older mendix versions.
require([ "AddToCalendarWidgetForPhoneGap/widget/AddToCalendarWidgetForPhoneGap" ]);

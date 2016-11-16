define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dojo/_base/lang",
    "mxui/dom",
    "dojo/query",
    "dojo/_base/array",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/NodeList-traverse"
], function(declare, _WidgetBase, lang, mxuiDom, query, array, dojoClass, dojoConstruct) {
    "use strict";

    return declare("AddToCalendarWidgetForPhoneGap.widget.AddToCalendarWidgetForPhoneGap", _WidgetBase, {

        // Set in modeler
        elementClass: "",
        elementName: "",
        titleAttr: "",
        startDateAttr: "",
        endDateAttr: "",
        locationAttr: "",
        notesAttr: "",

        // internal variables.
        _button: null,
        _setup: false,
        _obj: null,

        update: function(obj, callback) {
            this._obj = obj;

            if (this.elementClass === "" && this.elementName === "") {
                logger.warn(this.id + ".update: No element/class is set in the modeler");
                return;
            }

            if (!this._setup) {
                this._setupWidget(callback);
            } else {
                mendix.lang.nullExec(callback);
            }
        },

        _setupWidget: function(callback) {
            logger.debug(this.id + "._setupWidget");
            this._setup = true;

            this._setElementEventHandler();

            mendix.lang.nullExec(callback);
        },

        _setElementEventHandler: function () {
            logger.debug(this.id + "._setElementEventHandler");
            var className = this.elementClass || ".mx-name-" + this.elementName,
                parentNode = query(this.domNode).parent(),
                targetElements = parentNode.children(className).first();

            if (targetElements.length === 0) {
                logger.warn(this.id + "._setElementEventHandler: Can't find element with class " + className + ", quiting");
                return;
            }

            array.forEach(targetElements, lang.hitch(this, function (el, i) {
                this._setupEvents(el, className);
            }));
        },

        _setupEvents: function(element, className) {
            logger.debug(this.id + "._setupEvents " + className);
            // Attach only one event to dropdown list.
            this.connect(element, "click", lang.hitch(this, function(evt) {
                if (!window.plugins || !window.plugins.calendar) {
                    mx.ui.error("Unable to detect Phonegap/Calendar functionality.");
                    return;
                }
                this._createEvent();
            }));
        },

        _createEvent: function() {
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
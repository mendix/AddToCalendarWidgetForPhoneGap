# Add to Calendar Widget For PhoneGap

Add an event to the calendar of a phone or tablet. It uses the [Phonegap Calendar Plugin](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin).

## Contributing

For more information on contributing to this repository visit
[Contributing to a GitHub repository](https://docs.mendix.com/howto6/Contributing+to+a+GitHub+repository)!

## Installation
Install this widget through the AppStore. This widget will not work out of the box with your Phonegap build. You will have to customize the build package. Follow [this tutorial](https://docs.mendix.com/refguide6/Customizing+PhoneGap+Build+packages) to download the PhoneGap build package. Once you have downloaded the zip-file, you will have to add the following two entries to your ``config.xml`` file.


```xml
  <preference name="android-build-tool" value="gradle"/>
  <plugin name="cordova-plugin-calendar" version="4.5.5"/>
```

Note: _The first line might not be necessary, if it is already in your config.xml_

## Compatibility
The widget works in Mendix 6 and upwards.

## Offline
This widget works offline.

## Configuration

### Button

#### Label

The label text that is shown on the button.

#### Class

An optional class to be placed directly on the button dom node.

### Data source

#### Title

The attribute on the dataview where the title of the event is set

#### Start date attribute

The attribute on the dataview where the start of an event is set

#### End date attribute

The attribute on the dataview where the end of an event is set

#### Location (optional)

The attribute on the dataview where the location of an event is set. This is a string and is optional.

#### Notes (optional)

The attribute on the dataview where the notes of an event is set. This is a string and is optional.

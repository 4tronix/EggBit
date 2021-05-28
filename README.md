# Makecode Extension for 4tronix EggBit Range

This library provides a Microsoft Makecode extension for 4tronix EggBit range of wearables, see
https://4tronix.co.uk/eggbit/.

## Reading the buttons

There are 4 buttons that can be checked: `Red`, `Yellow`, `Green` and `Blue`.

You can directly read the state of each button.
If the button is pressed it will return a '1'. If it isn't pressed, then it returns a '0'
The following code checks the Green button and does something if it is pressed

```
// Check Green button
if (eggbit.readButton(EBButtons.Green)) {
    ... do something ...
}
```

Alternatively, you can wait for an event Button Press, or Button Release and then take action
eggbit.onEvent(EBPins.Blue, EBEvents.Press, function () {
    eggbit.setExpression(EBExpression.Sad)
})

## Setting the Mouth

EggBit has three sections to the mouth: Upper, Middle and Lower. You can directly set the individual parts of the mouth using the setMouth function
eggbit.setMouth(EBMouth.Upper, true)

Alternatively, you can use the predefined expressions for all 8 possible configurations of the mouth:
eggbit.setExpression(EBExpression.Smile)

## Reading the Ultrasonic

The ultrasonic distance sensor can be read in centimetres, inches or microseconds. The value returned is the distance to the nearest reflective object within range
eggbit.sonar(ebPingUnit.Centimeters)


## Fireled helpers

The EggBit has 9 Fireleds
The default update mode is automatic so LEDs will be updated immediately after changes

```blocks
// Set all leds to Red
eggbit.setLedColor(0xff0000);

// Clear all leds
eggbit.ledClear();

// Set Fireled at position 1 to Green
eggbit.setPixelColor(0, 0x00ff00);

// Show rainbow across all Fireleds (Red..Violet)
eggbit.ledRainbow();

// Show led rainbow and shift
eggbit.ledRainbow();
eggbit.ledShift();

// Show led rainbow and rotate
eggbit.ledRainbow();
eggbit.ledRotate();

// Set brightness of leds
eggbit.ledBrightness(100);
```
## Larson Scanner

The nine FireLeds can be set to operate a Larson scanner (as used in Knight Rider). You can select the colour and the speed of operation. This examples sets the scanner to Red with a 100ms delay between updates.
eggbit.startScanner(0xFF0000, 100)

Stop the scanner when required using the stopScanner function
eggbit.stopScanner()

## Bar Graph

The nine FireLeds can be setup as a bargraph. First define the minimum and maximum values to use, as well as the start and end colours. This example sets the range to be from 0 to 100, the start colour to Green and the end colour to Red
eggbit.setBargraph(0, 100, 0x00FF00, 0xFF0000)

Then draw the bargraph using a number in the range given. Numbers outside the range will be treated as either the minimum or maximum. This example uses 50 so will light up half the FireLeds
eggbit.drawBargraph(50)


## Supported targets

* for PXT/microbit

## License
MIT

{
  // Check the buttons
  eggbit.onEvent(EBPins.Blue, EBEvents.Press, function () {
    eggbit.setExpression(EBExpression.Sad)
  })
  eggbit.onEvent(EBPins.Yellow, EBEvents.Release, function () {
    eggbit.setExpression(EBExpression.Surprise)
  })
  if (eggbit.readButton(EBButtons.Red)) {
    eggbit.setExpression(EBExpression.Smile)
  }

  // Check the mouth parts
  eggbit.setExpression(EBExpression.AllOff)
  basic.pause(1000);

  eggbit.setExpression(EBExpression.Sad)
  basic.pause(1000);

  eggbit.setExpression(EBExpression.Neutral)
  basic.pause(1000);

  eggbit.setExpression(EBExpression.Smile)
  basic.pause(1000);

  eggbit.setExpression(EBExpression.AllOn)
  basic.pause(1000);

  // Read the ultrasonic
  basic.showNumber(eggbit.sonar(ebPingUnit.Centimeters))
  basic.pause(1000);

  // Set all FireLeds to Red
  eggbit.setLedColor(0xFF0000);
  basic.pause(1000);

  // Clear all leds
  eggbit.ledClear();
  basic.pause(1000);

  // Set FireLed at position 3 to Green
  eggbit.setPixelColor(3, 0x00FF00);
  basic.pause(1000);

  // Start FireLed scanner for 5 seconds
  eggbit.startScanner(0xFF0000, 100)
  basic.pause(5000)
  eggbit.stopScanner();

}

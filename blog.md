# Gesture based browsing and checkout

The lines between online and offline shopping has already blurred. With companies like Amazon and Instacart innovating online commerce, shopping patterns have changed. Getting groceries and apparel delivered to our doorstep with the touch of a button was a distant dream only few years back. Now, it seems the norm. Shopping online is convenient, fast and stress free. It is not all bad news for brick and mortar. They still have something that online commerce will not be able to provide - a physical instore experience. How retail stores can re-imagine an instore experience will determine the quality of engagement with their customers.

[Innovative sensor technologies](https://gigaom.com/2013/11/29/sensing-the-future-of-retail/) are already making their way into retail locations. Several companies have been experimenting with ideas in geo fencing, guided shopping and precise in-store location based deals using beacons.

At Braintree, we hacked a quick prototype application for a touch-free kiosk where customers can browse a catalog and checkout a prouduct using hand gestures. It is a simple application that uses the [Leap motion controller](https://developer.leapmotion.com/)

[![LEAP](http://img.youtube.com/vi/8-xn-mFMd9M/0.jpg)](http://www.youtube.com/watch?v=8-xn-mFMd9M "Gesture driven catalog browsing")

For this example, we used `simplecart.js` and `bootstrap` to create a demo store. The application responds to the following gestures. One reason for choosing simplecart for this example is its readily available PayPal integration.

- Swipe right - Selects the next product
- Swipe left - Selects the previous product
- Tap - Adds the current product to the cart
- Pinch - Checks out using PayPal

The code can be found [here](https://github.com/saranyan/leap-simplecart-paypal)

Pinch Gesture -
```
Leap.loop(controllerOptions, function(frame) {

  if(frame.hands.length > 0){
    if(frame.hands[0].pinchStrength > 0.999){
      ... //trigger checkout
    }
  }
}
```

Swipe Gesture -
```
if (frame.gestures.length > 0) {
    var gesture = frame.gestures[0];
    switch (gesture.type) {
      ...
      case "swipe":
          if(swipeDirection(gesture.direction) == 1){
            //do something for right swipe
            ...
          }
          else {
            //do something for left swipe
            ...
          }
       ...
    }
}
```

This deceptively simple app does lead to some interesting use cases around in-store shopping. Hack on! Let us know if we can help you build cool commerce use cases using Leap.

import React from "react";

export default function WeatherResponse(props) {
  const codeMapping = {
    "01d": "radiating good vibes and clear skies",
    "02d": "mildly sunny so trust me on the sunscreen",
    "03d": "cloudy with a chance of more clouds",
    "04d": "a little dull but you should still wear SPF",
    "09d":
      "warning you to maybe wear a hoodie if you're not gonna bring an umbrella",
    "10d":
      "pouring. Bring an umbrella or pretend you're in The Notebook I guess",
    "11d": "just chaos at the moment, stay indoors!!",
    "13d":
      "either a winter wonderland right now or watching people slip on ice",
    "50d":
      "acting like it's a paid prop in a mystery drama with all the mist and fog",
    "01n":
      "looking like a great night out to connect with the moon(?) or some shit like that",
    "02n":
      "night time right now, no rain, no sun, just some clouds to keep you company",
    "03n":
      "gonna get a bit dark out but you can still see the moon, just a bit if the clouds let you",
    "04n": "somewhat dark now, have a good evening, hug your friends",
    "09n":
      "tearing up a little watching the sun go down, hope your night is going well :)",
    "10n":
      "the perfect ASMR weather, unless you're planning to go line up for the club, raincoat look check",
    "11n": "gonna be a rough night, get your earplugs out",
    "13n": "going to wake up to a snowy morning, very cute",
    "50n": "a little yikes at the moment, dark and foggy",
  };

  return <span> {codeMapping[props.code]} </span>;
}

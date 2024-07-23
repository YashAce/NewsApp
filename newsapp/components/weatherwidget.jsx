/**
@CreatedBy    : Yashwanth S
@CreatedTime  : July 21 2024
@ModifiedBy   : Yashwanth S
@ModifiedTime : July 21 2024
@Description  : Weather widget component.
**/

import { useEffect } from 'react';

const WeatherWidget = ({ cityId }) => {

    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

  useEffect(() => {
    window.myWidgetParam = window.myWidgetParam || [];
    window.myWidgetParam.push({
      id: 11,
      cityid: cityId,
      appid: apiKey,
      units: 'metric',
      containerid: 'openweathermap-widget-11',
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
    document.getElementsByTagName('script')[0].parentNode.insertBefore(script, null);

    return () => {
      window.myWidgetParam = []; // Clean up on unmount
    };
  }, [cityId]);

  return <div id="openweathermap-widget-11"></div>;
};

export default WeatherWidget;

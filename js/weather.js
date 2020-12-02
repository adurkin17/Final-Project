export default class weather
{
    constructor()
    {
        this._high = 0;
        this._low = 0;
        this._currentTemp = 0;
        this._humidity = 0;
        this._windSpeed = 0;
    }

    getHigh()
    {
        return this._high;
    }

    getLow()
    {
        return this._low;
    }
    
    getCurrentTemp()
    {
        return this._currentTemp;
    }

    getHumidity()
    {
        return this._humidity;
    }

    getWindSpeed()
    {
        return this._windSpeed;
    }

    setHigh(newHigh)
    {
        this._high = newHigh;
    }

    setLow(newLow)
    {
        this._low = newLow;
    }

    setHumidity(newHumidity)
    {
        this._humidity = newHumidity;
    }

    setWindSpeed(newWindSpeed)
    {
        this._windSpeed = newWindSpeed;
    }

    setCurrentTemp(currentTemp)
    {
        this._currentTemp = currentTemp;
    }
}
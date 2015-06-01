// Яндекс Карта

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.4701,61.1224],
            zoom: 12,
            controls: []
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.4701,61.1224]
            },
            // Свойства.
            properties: {
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: true
        });

    myMap.geoObjects
        .add(myGeoObject)

}

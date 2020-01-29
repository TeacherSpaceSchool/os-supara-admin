let notificationUrl = 'https://azyk.store';
//notification registered feature for getting update automatically from server api
self.addEventListener('push', function (event) {
    let _data = event.data ?
        event.data.json()
        :
        {title: 'AZYK.STORE', message: 'Не забудьте сделать свой заказ', tag: 'AZYK.STORE', url: 'https://azyk.store', icon: 'https://azyk.store/static/192x192.png'};
    event.waitUntil(
        self.registration.showNotification(_data.title, {
            body: _data.message,
            icon: _data.icon,
            badge: _data.icon,
            tag: _data.tag,
            silent: false,
            vibrate: [200, 100, 200, 100, 200, 100, 200],
        })
    );
});

//notification url redirect event click
self.addEventListener('notificationclick', function (event) {
    event.notification.close();

    event.waitUntil(
        clients.matchAll({
            type: "window"
        })
            .then(function (clientList) {
                if (clients.openWindow) {
                    return clients.openWindow(notificationUrl);
                }
            })
    );
});
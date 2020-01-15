let notificationUrl = '';
//notification registered feature for getting update automatically from server api
self.addEventListener('push', function (event) {
    let _data = event.data ? JSON.parse(event.data.text()) : {};
    console.log('Push received: ', _data);
    notificationUrl = _data.url;
    event.waitUntil(
        self.registration.showNotification(_data.title, {
            body: _data.message,
            icon: _data.icon,
            tag: _data.tag
        })
    );
});
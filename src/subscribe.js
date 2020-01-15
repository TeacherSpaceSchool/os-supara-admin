import Cookies from 'js-cookie';
let isSubscribed = false;
let swRegistration = null;
import { applicationKey, urlSubscribe } from '../redux/constants/other';

export let register = (update) => {
// Installing service worker
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.ready.then((swReg)=>{
            if(!!swReg) {
                swRegistration = swReg;
                swRegistration.pushManager.getSubscription()
                    .then(function (subscription) {
                        isSubscribed = !(subscription === null);
                        if (isSubscribed) {
                            if (update) {
                                subscription.unsubscribe().then(function () {
                                    console.log('User is unsubscribed');
                                    swRegistration.pushManager.subscribe({
                                        userVisibleOnly: true,
                                        applicationServerKey: urlB64ToUint8Array(applicationKey)
                                    })
                                        .then(function (subscription) {
                                            console.log(subscription);
                                            console.log('User is subscribed');

                                            saveSubscription(subscription);

                                            isSubscribed = true;
                                        })
                                        .catch(function (err) {
                                            console.log('Failed to subscribe user: ', err);
                                        })
                                }).catch(function (err) {
                                    console.log('Failed to unsubscribe user: ', err);
                                })
                            }
                            else console.log('User was subscribed');
                        } else {
                            swRegistration.pushManager.subscribe({
                                userVisibleOnly: true,
                                applicationServerKey: urlB64ToUint8Array(applicationKey)
                            })
                                .then(function (subscription) {
                                    console.log(subscription);
                                    console.log('User is subscribed');
                                    saveSubscription(subscription);
                                    isSubscribed = true;
                                })
                                .catch(function (err) {
                                    console.log('Failed to subscribe user: ', err);
                                })
                        }
                    })
            }
        })


    }
}

export let unregister = () => {
    if(localStorage.browserNumber){
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open('POST', `${urlSubscribe}/unregister`);
        xmlHttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8', );
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState != 4) return;
            localStorage.browserNumber = undefined
        };
        if(localStorage.browserNumber)
            xmlHttp.send(JSON.stringify({number: localStorage.browserNumber}));
    }
}

// Url Encription
function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// Send request to database for add new subscriber
function saveSubscription(subscription) {
    let xmlHttp = new XMLHttpRequest();
    //put here API address
    xmlHttp.open('POST', `${urlSubscribe}/register`);
    xmlHttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8', );
    xmlHttp.setRequestHeader('Authorization', 'Bearer '+Cookies.get('jwt'), );
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState != 4) return;
        console.log(xmlHttp.response)
        if(xmlHttp.response)
            localStorage.browserNumber = xmlHttp.response
    };
    if(localStorage.browserNumber)
        subscription.number = localStorage.browserNumber
    xmlHttp.send(JSON.stringify(subscription));
}
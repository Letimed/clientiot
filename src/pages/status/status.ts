import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

declare var require: any

@Component({
  selector: 'page-status',
  templateUrl: 'status.html'
})

export class StatusPage { 
myusername: any;
mypassword: any;
listupclass:any[] = [];
listdownclass:any[] = [];

constructor(public navCtrl: NavController,public navParams: NavParams,private push: Push) {
	this.myusername = navParams.get('username');
	this.mypassword = navParams.get('password');
	this.listupclass = navParams.get('listupclass');
	this.listdownclass = navParams.get('listdownclass');
	this.connectmqtt(navCtrl, push);
}

connectmqtt(navCtrl:NavController, push: Push){
var mqtt = require('mqtt');
var fs = require('fs');
var __dirname = '/home/syzik/clientiot';
var KEY = __dirname + '/mobile.key.pem';
var CERT = __dirname + '/mobile.cert.pem';
var TRUSTED_CA_LIST = [__dirname + '/ca.crt'];

//var PORT = 1884;
//var HOST = '127.0.0.1';
var PORT = 1884;
var HOST = '192.168.43.193';

var options = {
  port: PORT,
  host: HOST,
  username: this.myusername,
  password: this.mypassword,
  //rejectUnauthorized : true,
  keyPath: KEY,
  certPath: CERT,
  ca: TRUSTED_CA_LIST
};

var client = mqtt.connect(options);
var listup: any[] = [];
var listdown: any[] = [];
client.subscribe('services/#');
client.on('error', function(error){
	console.log(error);
});
client.publish('services', 'device connected !');
client.on('message',function(services,message)
{
	if (message.toString() != null && services.toString() == 'services/up')
	{
		console.log("le service est up et le message est : " + message.toString());
			var i = existInTab(message.toString(), listup);
			var j = existInTab(message.toString(), listdown);
			if (i == -1)
			{
				listup.push(message.toString());
				if (j != -1)
				{
					listdown.splice(j,1);
					this.listdownclass = listdown;
				}
				// createnotif(push);
				navCtrl.pop();
				navCtrl.push(StatusPage, {username: this.myusername, password: this.mypassword, listupclass: listup, listdownclass: listdown});
			}
	}
	if (message.toString() != null && services.toString() == 'services/down')
	{
		console.log('le service est down');
		var k =  existInTab(message.toString(), listup);
		var l = existInTab(message.toString(), listdown);
		if (l == -1)
			{
				listdown.push(message.toString());
				if (k != -1)
					listup.splice(k,1);
			}
			//createnotif(push);
			navCtrl.pop();
			navCtrl.push(StatusPage, {username: this.myusername, password: this.mypassword, listupclass: listup, listdownclass: listdown});
	}
	if (services.toString() == 'services/delete' && message.toString() != null)
	{
		console.log('recu from delete ' + message.toString());
		let o = existInTab(message.toString(), listup);
		let p = existInTab(message.toString(), listdown);
		if (o != -1)
			listup.splice(o, 1);
		if (p != -1)
			listdown.splice(p,1);
		if (o != -1 || p != -1){
			// createnotif(push);
			navCtrl.pop();
			navCtrl.push(StatusPage, {username: this.myusername, password: this.mypassword, listupclass: listup, listdownclass: listdown});
		}
	}
});

function existInTab(message:string, tab: any[]){
	for (var i = 0; i < tab.length; i++)
	{
		if (message == tab[i].toString())
			return i;
	}
	return -1;
}

function createnotif( push: Push){
	push.hasPermission().then((res: any) => {
    if (res.isEnabled)
      console.log('We have permission to send push notifications');
    else 
      console.log('We do not have permission to send push notifications');
  });
	push.createChannel({
	id: "testchannel1",
 	description: "My first test channel",
 	importance: 3
	}).then(() => console.log('Channel created'));
	push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
	push.listChannels().then((channels) => console.log('List of channels', channels))

const option: PushOptions = {
   	android: {
   		senderID: '84958'
   	},
   	ios: {
       alert: 'true',
       badge: true,
       sound: 'false'
   	},
   	windows: {},
   	browser: {
    pushServiceURL: 'http://push.api.phonegap.com/v1/push'
   }
};
const pushObject: PushObject = push.init(option);
pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
}

}
}

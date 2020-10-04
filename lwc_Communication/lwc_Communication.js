/**
 * Created by gerry on 10/3/2020.
 */

import {LightningElement, api, track} from 'lwc';

export default class LwcCommunication extends LightningElement
{
	//Tracked variables ensure that they are refreshed on the page when their values are
	//updated in the code
	@track dataReceived;

	//This method creates a custom event that dispatches itself.
	//The Aura component then handles this event
	communicateToAura()
	{
		console.log('Communicating to Aura ::: ');

		//We are grabbing the value from the lightning input field that has the dataToSend class
		let dataToSend = this.template.querySelector(".dataToSend").value;

		//We are creating a custom event named senddata and passing a value in the detail portion
		//of the custom event
		const sendDataEvent = new CustomEvent('senddata', {
			detail: {dataToSend}
		});

		//Actually dispatching the event that we created above.
		this.dispatchEvent(sendDataEvent);
	}

	//The api decorator makes this a public method that any component that houses this component
	//can access/call
	@api receiveData(data)
	{
		this.dataReceived = data;
	}
}
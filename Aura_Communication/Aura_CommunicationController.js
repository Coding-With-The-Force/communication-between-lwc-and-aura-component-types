/**
 * Created by gerry on 10/3/2020.
 */

({
	//This method receives data from our LWC and sets the dataReceived
	//Aura attribute with the events dataToSend parameter (this is the name of the variable we
	//send in the LWC
	receiveLWCData : function(component, event, helper)
	{
		console.log('We received the data ::: ' + JSON.stringify(event));
		component.set("v.dataReceived", event.getParam("dataToSend"));
	},

	//This method send out data to our LWC from the Aura component.
	passDataToLWC : function(component, event, helper)
	{
		let stringToSend = component.find("dataToPass").get("v.value");

		//We are calling the receieveData method in our Lightning Web Component here
		component.find("lwcComp").receiveData(stringToSend);
	}
});
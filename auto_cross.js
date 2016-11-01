alicorn.shard("auto_cross")//for firing the crossbow during auton whie vortex is straght ahead of bot

	function sleep(milliseconds) {
  	var start = new Date().getTime();
  	for (var i = 0; i < 1e7; i++) {
    	if ((new Date().getTime() - start) > milliseconds){
      	break;
    	}
  	}
	}

	.create(function(self) {

		var sdk = self.require("AndroidFTC");

	})

	.update(function(self) {

		sdk.set("cross", -.25)
		sleep(4000)  //idk how long it will take for the crossbow to get all the way back so 4 sec for now
		sdk.set("cross", 0)
		
		//fire
		sdk.set("release", -1) 
		
	.destroy(function(self) {

		//whaddup

	});

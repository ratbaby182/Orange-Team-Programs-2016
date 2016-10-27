alicorn.shard("Auton")

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

	sdk.set("left", -1);
  sdk.set("right", 1);
	sleep(2000);

	while(true) {

  	sdk.set("left", 0);
  	sdk.set("right", 0);
	}

	})

	.destroy(function(self) {

		//whaddup

	});

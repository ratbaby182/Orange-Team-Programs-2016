var sdk;

alicorn.shard("Auton")

	//maybe try self.sleep

	.create(function(self) {

		sdk = self.require("AndroidFTC");

	})

	.update(function(self) {

	while(true) {
	sdk.set("left", .25)
	sdk.set("right", -.25)
  	
	}

	})

	.destroy(function(self) {

		//whaddup

	});

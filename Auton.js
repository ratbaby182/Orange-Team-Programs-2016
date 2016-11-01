var sdk;

alicorn.shard("Auton")

	//maybe try self.sleep

	.create(function(self) {

		sdk = self.require("AndroidFTC");

	})

	.update(function(self) {

	sdk.set("left", -1);
  sdk.set("right", 1);
	self.sleep(2000);

	while(true) {

  	sdk.set("left", 0);
  	sdk.set("right", 0);

	}

	})

	.destroy(function(self) {

		//whaddup

	});

alicorn.shard("Auton")

	.create(function(self) {

		var sdk = self.require("AndroidFTC");
    var rghd = 63;

	})

	.update(function(self) {

  if(rghd == 63) {

		sdk.set("left", -1);
    sdk.set("right", 1);
    sleep(3000);

    sdk.set("left", 0);
    sdk.set("right", 0);

    rghd = 1005;

  }

	})

	.destroy(function(self) {

		//whaddup

	});

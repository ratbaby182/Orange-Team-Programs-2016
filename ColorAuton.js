alicorn.shard("ColorAuton")

	.create(function(self) {

		var sdk = self.require("AndroidFTC");

	})

	.update(function(self) {

		for (var i = 0; i < 1; i++) {
			console.log(sdk.get("color1"));
		}

	})

	.destroy(function(self) {

		//whaddup

	});

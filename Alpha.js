var sdk, joy1, joy2, left_variable, right_variable;

alicorn.shard("Alpha")

	.create(function(self) {

		sdk = self.require("AndroidFTC");
		joy1 = sdk.get("gamepad_1");
		joy2 = sdk.get("gamepad_2");

		//left - controls the left treads
		//right - controls the right treads
		//crank - the motor that primes the crossbow
		//release - the servo on the crossbow

	})

	.update(function(self) {

		//drive section

		left_variable = joy1.get("y1") * 0.55;
		right_variable = joy1.get("y2") * -0.55;

		if (joy1.get("y1") > 0.1) {
			sdk.set("left", left_variable);
		} else if (joy1.get("y1") < -0.1) {
			sdk.set("left", left_variable);
		} else {
			sdk.set("left", 0);
		}

		if (joy1.get("y2") > 0.1) {
			sdk.set("right", right_variable);
		} else if (joy1.get("y2") < -0.1) {
			sdk.set("right", right_variable);
		} else {
			sdk.set("right", 0);
		}

		//crossbow section

		if (joy1.get("a") == true) {
			sdk.set("crank", 0.25);
		} else if (joy1.get("b") == true) {
			sdk.set("crank", -0.25);
		} else {
			sdk.set("crank", 0);
		}

		if (joy1.get("y") == true) {
			sdk.set("release", 0);
		} else if (joy1.get("x") == true) {
			sdk.set("release", -1);
		}

	})

	.destroy(function(self) {
		//oh sh*t Continuity whaddup
	});

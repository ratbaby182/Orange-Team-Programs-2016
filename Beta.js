var sdk, joy1;

//comment
//another flippin comment
//testin this out.........

alicorn.shard("Beta")

	.create(function(self) {

		sdk = self.require("AndroidFTC");
		joy1 = sdk.get("gamepad_1");
		joy2 = sdk.get("gamepad_2");

		//left - controls the left treads
		//right - controls the right treads
		//crank - the motor that primes the crossbow

		//left_servo - the left button pusher
		//right_servo - the right button pusher
		//pusher - pushes the ball out of the plow
		//release - the servo on the crossbow

	})

	.update(function(self) {

		//drive section

		var xoneboy = joy1.get("x1");
		var yoneboy = joy1.get("y1");

		var leftvariable = (xoneboy + yoneboy) / 2;
		var rightvariable = (xoneboy - yoneboy) / 2;

		sdk.set("left", leftvariable);
		sdk.set("right", rightvariable);

		//button pushers

		if (joy1.get("a") == true) {
			sdk.set("left_servo", 0);
		} else if (joy1.get("b") == true) {
			sdk.set("left_servo", -1)
		}

		if (joy1.get("x") == true) {
			sdk.set("right_servo", 0);
		} else if (joy1.get("y") == true) {
			sdk.set("right_servo", -1);
		}

		//ball pusher servo
		//don't use this yet it's clamped in the closed position

		if (joy1.get("left_bumper") == true) {
			sdk.set("pusher", 0);
		} else if (joy1.get("right_bumper")) {
			sdk.set("pusher", -1);
		}

		//crossbow section

		if (joy2.get("a") == true) {
			sdk.set("crank", 0.125);
		} else if (joy2.get("b") == true) {
			sdk.set("crank", -0.125);
		} else {
			sdk.set("crank", 0);
		}

		if (joy2.get("x") == true) {
			sdk.set("release", 0);
		} else if (joy2.get("y") == true) {
			sdk.set("release", -0.5);
		}

	})

	.destroy(function(self) {
		//whaddup
	});

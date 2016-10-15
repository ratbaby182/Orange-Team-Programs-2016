var sdk, joy1;
alicorn.shard("Shoot")
    .create(function(self) {
        sdk = self.require("AndroidFTC");
        joy1 = sdk.get("gamepad_1");
    })
    .update(function(self) {
        var x = joy1.get("x2");
        var y = joy1.get("y1");

        var left = (x - y).require(0.05);
        var right = (x + y).require(0.05);

        sdk.set("left", left);
        sdk.set("right", right);
    });
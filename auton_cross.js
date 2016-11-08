var sdk;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
alicorn.shard("auton_cross")//for firing the crossbow during auton whie vortex is straght ahead of bot

  .create(function(self) {

		sdk = self.require("AndroidFTC");
    
	})

	.update(function(self) {

    sdk.set("crank", .25);
    sleep(2000);
    sdk.set("crank", 0);
    sleep(1000);
    sdk.set("release", -1);
    sleep(1000);
		sdk.set("crank", -.25);
		sleep(2000);
		sdk.set("crank", 0);
    sleep(1000);
    sdk.set("release", 0);
    sleep(1000);

	})

	.destroy(function(self) {

    sdk.set("crank", 0);
    sdk.set("release", 0);

  });

var sdk;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

alicorn.shard("auton_fates")

  .create(function(self) {

    sdk = self.require("AndroidFTC");

  })

  .update(function(self) {

    //fire that crossbow whaddup
    sleep(1000);
    sdk.set("release", 0);
    sleep(1000);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //what's up lets hit that ball

    //to the middle bit
  	sdk.set("left", -.5);
  	sdk.set("right", .5);
    sleep(3000);

  	sdk.set("left", 0);
  	sdk.set("right", 0);
    sleep(25000);

  })

  .destroy(function(self) {

    sdk.set("crank", 0);
    sdk.set("release", 0);
    sdk.set("left", 0);
    sdk.set("right", 0);

  });
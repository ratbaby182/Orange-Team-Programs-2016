var sdk;
var efgtc = 0;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

alicorn.shard("auton_ghghg")
  .create(function(self) {
    sdk = self.require("AndroidFTC");
  })

  .update(function(self) {

    if(efgtc == 0) {
      //fire that crossbow whaddup
      //TWICE

      sdk.set("release", 0);
      sleep(500);

      //get the crank in position
      sdk.set("crank", 0.25);
      sleep(1750);
      sdk.set("crank", 0);
      sleep(100);

      //grab the elastic
      sdk.set("release", -1);
      sleep(500);

      //pull the elastic back
      sdk.set("crank", -0.25);
      sleep(1500);
      sdk.set("crank", 0);
      sleep(1000);

      efgtc += 1;
    }
  })

  .destroy(function(self) {
    efgtc = 0;
  });

var sdk;
var efgt = 0;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

alicorn.shard("auton_shoot")

  .create(function(self) {

    sdk = self.require("AndroidFTC");

  })

  .update(function(self) {

    if(efgt == 0) {
      //fire that crossbow whaddup
      //but only once
      sdk.set("release", 0);
      efgt = 1;
    }

  })

  .destroy(function(self) {

    efgt = 0;

  });

var sdk;
var hgtvc = 0;

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

    if(hgtvc == 0) {

      //fire that crossbow whaddup
      sleep(1000);
      sdk.set("release", 0);
      sleep(1000);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      //what's up lets hit that ball

      //to the middle bit
  	  sdk.set("left", -.5);
  	  sdk.set("right", .5);
      sleep(2500);

      sdk.set("left", 0);
  	  sdk.set("right", 0);
      sleep(1000);

		  //roobt does a little turn to try to dislodge the ball
		  sdk.set("left", -.25);
		  sdk.set("right", -.25);
		  sleep(1000);

		  //robot stops and waits
      sdk.set("left", 0);
  	  sdk.set("right", 0);
      sleep(1000);

      sdk.set("left", .25);
		  sdk.set("right", .25);
		  sleep(1000);

      sdk.set("left", 0);
  	  sdk.set("right", 0);
      sleep(1000);

      sdk.set("left", -.5);
  	  sdk.set("right", .5);
      sleep(500);

      sdk.set("left", 0);
      sdk.set("right", 0);

      hgtvc = 1;
    }

    if(hgtvc == 1) {
      sdk.set("left", 0);
      sdk.set("right", 0);
      sdk.set("release", 0);

      hgtvc = 2;
    }

  })

  .destroy(function(self) {

    //peepo

  });

var sdk;
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }}}
alicorn.shard("Auton_Blue_Ball")

	//use sleep() function above
	//for this program, start the robot from
	//start above 1 meter from right wall
	//BLUE TEAM

	.create(function(self) {
		//it's in the create fucntion yeah

		sdk = self.require("AndroidFTC");
	  
	//to the middle bit
	sdk.set("left", -.5)
	sdk.set("right", .5)
  sleep(1500)	
	
	//turn
	sdk.set("left", 0.5);
	sdk.set("right", 0.5);
	sleep(300);
	
	//hit the ball
	sdk.set("left", -.5)
	sdk.set("right", .5)
  sleep(1000)	
	
	sdk.set("left", 0)
	sdk.set("right", 0)

	})

	.update(function(self) {


		
	

	})

	.destroy(function(self) {

		//whaddup

	});

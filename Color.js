alicorn.shard("Color")

	.create(function(self) {
		
		var sdk = self.require("AndroidFTC");
		var i = 0;
		
	})
	
	.update(function(self) {
		
		if(i == 0){
			
			var hcjhfx = sdk.get("color_sensor");
			console.log(hcjhfx);
			i = 1;
			
		}
		
	})
	
	.destroy(function(self) {
		
		//whaddup
		
	});
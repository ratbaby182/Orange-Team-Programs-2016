class ColorSensorAuton < Alicorn::Shard
	
	def create
		
		@sdk = getSphere("AndroidFTC")
		
		@i = 0
		
	end
	
	def update
		
		if @i == 0
			
			@output = @sdk.get("color")
			puts "output of the color sensor is #{@output}"
			
			@i += 1
			
		end
		
	end
	
	def destroy
		
		#peepo
		
	end
	
end
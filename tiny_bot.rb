class TinyBot < Alicorn::Shard

	def create

		@sdk = getShard("AndroidFTC")
		@joy1 = @sdk.get("gamepad_1")

	end

	def update

		#@left = @joy1.get("y1").divide(2)
		#@right = @joy1.get("y2").divide(-2)

		@sdk.set("left", @joy1.get("y1"))
		@sdk.set("right", @joy1.get("y2"))

	end

	def destroy

		#peepo

	end

end

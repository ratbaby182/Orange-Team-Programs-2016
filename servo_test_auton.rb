class ServoTestAuton < Alicorn::Shard

	def create

		@sdk = getShard("AndroidFTC")

	end

	def update

		@sdk.set("left_servo", Alicorn::Vector.max)
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.75))
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.5))
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.25))
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.zero)
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.25).invert())
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.5).invert())
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.75).invert)
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.min)
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.75).invert)
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.5).invert())
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.25).invert())
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.zero)
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.25))
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.5))
		sleep(1000)

		@sdk.set("left_servo", Alicorn::Vector.new(0.75))
		sleep(1000)

	end

end

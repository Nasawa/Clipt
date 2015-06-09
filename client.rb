require 'rubygems'
require 'socket.io-client-simple'
require 'clipboard'

id = nil
id = ARGV[1] if ARGV[1]

socket = SocketIO::Client::Simple.connect("#{ARGV[0]}")

socket.on :connect do
	puts "socket connected"
end

socket.on :id do |i|
	id = i if id.nil?
	
	puts "My id is: #{id}"
	s = id.to_sym
	
	socket.on s do |msg|
		puts "Adding #{msg} to the clipboard"
		Clipboard.copy msg
	end
end

loop do
	sleep(10)
	puts "zzz"
end
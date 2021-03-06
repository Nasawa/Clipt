# Clipt

Clipt is a cross-machine clipboard manager served by Node.js, made possible by [`xavi's`](https://github.com/xavi-) [`node-copy-paste`](https://github.com/xavi-/node-copy-paste). Works using [`clip`](http://www.labnol.org/software/tutorials/copy-dos-command-line-output-clipboard-clip-exe/2506/) (for Windows), [`pbcopy/pbpaste`](https://developer.apple.com/library/mac/#documentation/Darwin/Reference/Manpages/man1/pbcopy.1.html) (for OSX), [`xclip`](http://www.cyberciti.biz/faq/xclip-linux-insert-files-command-output-intoclipboard/) (for Linux and OpenBSD (*don't forget to __apt-get install xclip__*)).

I currently have clients for Node, Python, Ruby, and the browser. The server is only in Node.js.

## Using Clipt

Clipt's clients take the following arguments:

- `server`: selects which server you want to listen to for clipboard changes. A free server and web interface can be found [`here`](http://clipt.azurewebsites.net/). Please be sure to use a secure id to avoid getting erroneous clips. If you're worried about security, feel free to host your own server with server.js.
- `[id]`: if no id is provided, Clipt autogenerates a unique token based on your connection to use in conjunction with the web client. If you plan on using Clipt with multiple machines, it's usually a good idea to provide your own id, but keep in mind that this can be less secure.

## Getting Clipt

If you're looking to host your own server, simply git clone this repo:

	git clone git://github.com/nasawa/clipt.git
	
If you just want to connect to the default server at http://clipt.azurewebsites.net/, simply use any of the included clients.

## Todo

I'm working off-and-on with Clipt, so I can't guarantee any updates. Of course, please feel free to submit any pull requests, and I'll evaluate them on a case-by-case basis.

## Developed by
* Christopher Johnson

## License
This project is released under [The MIT License](http://www.opensource.org/licenses/mit-license.php).

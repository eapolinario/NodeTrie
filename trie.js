var sys = require('sys'),
    fs = require('fs');

var root = {};

function loadWords(filename){
	fs.stat(filename, function (stat_error, stat){
		if(stat_error){
			sys.puts("error in file");
			process.exit(1);
		}

		debugger;
		if(stat.isFile()){
			fs.readFile(filename, 'utf8', function (read_error, content) {
				debugger;
				root = JSON.parse(content);
				sys.puts(content);

				sys.puts(findWord("bar"));
                                sys.puts(findWord("rat"));
                                sys.puts(findWord("rate"));
                                sys.puts(findWord("a"));
			});
		}
	});
}

function findWord(word){ 
        var node = root;
	debugger;
        for(var i = 0; i < word.length - 1; i++){
                if(!node[word[i]]){ 
                        return false;
                }
                node = node[word[i]];
        }

	if(node[word[i]]){
		return node[word[i]].end === true;
	} else{
		return false;
	}
}

loadWords(process.argv[2]);

sys.puts(findWord("bar"));

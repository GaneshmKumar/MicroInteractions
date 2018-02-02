			var names = [
				'Dhanushu',
				'Ganesh',
				'Kalai',
				'Madhan',
				'Selva',
				'Suren',
				'Venu'
			]

			var input = document.querySelector('#input'),
				suggestion = document.querySelector('#suggestion')
			input.placeholder = 'Enter a name: ' + names.join(',')
			input.focus()
			function findMatch(query) {
				for(var i = 0; i < names.length; i ++) {
					if(names[i].startsWith(query)) {
						return names[i]
					}
				}
			}

			input.addEventListener('keyup', function(e) {
				var value = e.target.value
				if(value != "") {
					var name = findMatch(value)
					suggestion.innerHTML = (name == undefined) ? "" : name
					if(e.keyCode == 13 && name != undefined) {
						input.value = name
					}
				}
				else {
					suggestion.innerHTML = ""
				}
			});
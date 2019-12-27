// 'Hamburgers < Pizza < Tacos'
// Shoudl return   'Hamburgers &lt; Pizza &lt; Tacos'

function checker(m,s1,str){
	let htmlEntities = {
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"&": "&amp;",
		"\'": "&apos;"
	};
	return htmlEntities.hasOwnProperty(m) ? 
		   				          htmlEntities[m] :
		   				          m;
};

function convertHTML(str) {
  // &colon;&rpar;
  let splitUp = str.split('');
  let insertEntity = splitUp
  						        .map(char => char.replace(char, checker(char)))
  						        .join('');

  return insertEntity;
}

console.log(convertHTML('Hamburgers < Pizza < Tacos'));




let str = 'tathanhlam/`13 !@#$%^&*.,tah""/"w3549104-0-0=-00-i */-*+.2@#$^@%^%*^$(^sdguiqywrquijkavn lahjorfiqjwgf  ';

function PrintLoop(str) {
  let pos = {};

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (!pos[charCode] ) {
      pos[charCode] = "";
    }

    pos[charCode] += (i + 1).toString() + ', ';
  }

  for (let key in pos) {
    console.log(`${String.fromCharCode(key)}: ${pos[key]}`);
  }
}

PrintLoop(str);

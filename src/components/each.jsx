
import emojipedia from "../emojipedia";


function listMean(meaningAll) {
    let meanSin = meaningAll.meaning.substring(0,100);
    return meanSin
}


let Meaning = emojipedia.map(listMean)


console.log(Meaning);
export default Meaning;
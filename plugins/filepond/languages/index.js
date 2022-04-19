import de from './de-de.js'
import en from './en-en.js'
import es from './es-es.js'
import pt from './pt-br.js'

export default class Lang {
    
    de(){
        FilePond.setOptions(de);
    }

    en(){
        FilePond.setOptions(en);
    }

    es(){
        FilePond.setOptions(es);
    }

    pt(){
        FilePond.setOptions(pt);
    }
}

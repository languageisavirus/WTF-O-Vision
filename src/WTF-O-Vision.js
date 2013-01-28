/**
 * WTF-O-Vision
 * @fileOverview WTF-O-Vision <br />
 * The Glorious WTF-O-Vision (js)
 * @author <a href="mailto:matthewkastor@gmail.com">
 * Matthew Christopher Kastor-Inare III </a><br />
 * ☭ Hial Atropa!! ☭
 */


/*jslint indent: 4, maxerr: 50, white: true, browser: true, devel: true, plusplus: true, regexp: true */
/*global XPathResult */

/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa;
atropa = {};


/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint indent: 4, maxerr: 50, white: true, browser: true, devel: true, plusplus: true, regexp: true */
/*global atropa */
/**
 * Container for regex functions.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @namespace Container for regex functions.
 */
atropa.regex = {};
/**
 * Appends common prefix, suffix, and word boundary regex strings to
 * the supplied word.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130110
 * @param {String} word The word to append prefix and suffix to
 * @param {Integer} threshold The word.length at which it does not
 * make sense to append prefix and suffix. Defaults to 3.
 * @returns {String} Returns the supplied word with prefix, suffix,
 * and word boundaries attached. If the word.length was not greater
 * than the threshold, only word boundaries are attached. The string
 * represents a RegEx which should pick out most forms of regular
 * words.
 */
atropa.regex.appendPrefixesAndSuffixes = function (word, threshold) {
	"use strict";
	var prefixes,
	suffixes;
	prefixes = '(pre|un|re)?';
	suffixes = '(ification|tionally|ication|ified|istic|iness|fare|tion|ance|ence|less|ally|able|ness|ized|ised|ous|ify|ing|ity|ful|ant|ate|est|ism|izm|ist|ic|al|ed|er|et|ly|rs|in|y|s|r|d)?';
	
	threshold = threshold === undefined ? 3 : threshold;
	
	if (word.length > threshold) {
		word = '\\b' + prefixes + word + suffixes + '\\b';
	} else {
		word = '\\b()' + word + '()\\b';
	}
	return word;
};


/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint indent: 4, maxerr: 50, white: true, browser: true, devel: true, plusplus: true, regexp: true */
/*global atropa */
/**
 * Set default values for optional function parameters.
 * @example
 * <pre>
 *   // To set a default value for an optional parameter
 *   function(optionalArg) {
 *       var defaultVal = 'hello there!';
 *       optionalArg = atropa.setAsOptionalArg(defaultVal, optionalArg);
 *       return optionalArg;
 *   }
 * </pre>
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Mixed} defaultVal The default value to set.
 * @param {Mixed} optionalArg A reference to the optional argument.
 * @returns {Mixed} Returns the default value supplied when the optional
 * argument is undefined or null. Otherwise, the supplied optional argument
 * is returned.
 */
atropa.setAsOptionalArg = function (defaultVal, optionalArg) {
	"use strict";
	if (optionalArg === undefined || optionalArg === null) {
		optionalArg = defaultVal;
	}
	return optionalArg;
};


/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint indent: 4, maxerr: 50, white: true, browser: true, devel: true, plusplus: true, regexp: true */
/*global atropa */
/**
 * A few utilities for manipulating strings.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace A few utilities for manipulating strings.
 */
atropa.string = {};
/**
 * Converts the first character of a given string to
 * uppercase.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {String} string The string for which you want the
 * first letter to be in upper case.
 * @returns {String} The given string with it's first letter capitalized.
 */
atropa.string.ucFirst = function ucFirst(string) {
	"use strict";
	string = string.charAt(0).toUpperCase() + string.slice(1);
	return string;
};
/**
 * Counts words.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {String} someText Plain text.
 * @return {Number} Returns the count of words in someText.
 */
atropa.string.countWords = function (someText) {
	"use strict";
	var wordCount,
	re;
	wordCount = 0;
	re = /\s+/gi;
	wordCount = someText.split(re);
	return wordCount.length;
};

/**
 * Converts end of line markers into whatever you want. 
 * Automatically detects any of \r\n, \n, or \r and 
 * replaces it with the user specified EOL marker.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @param {String} text The text you want processed.
 * @param {String} newEOL The replacement for the current EOL marks.
 * @returns {String} Returns the processed text.
 */
atropa.string.convertEol = function convertEOL(text, newEOL) {
	'use strict';
    return text.replace(/(\r\n|\n|\r)/g, newEOL);
};

/**
 * Removes a quantity of leading spaces specified by offset.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @param {String} text The text to process.
 * @param {Number} offset The amount of spaces you want removed 
 * from the beginning of the text.
 * @returns Returns the processed text.
 */
atropa.string.offsetWhiteSpace = function offsetWhiteSpace(text, offset) {
	'use strict';
    var regx;
    regx = new RegExp('^ {' + offset + '}');
    text = text.replace(regx, '');
    return text;
};

/**
 * Converts all tabs in leading whitespace into four spaces.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @param {String} text The text to process
 * @returns {String} Returns the processed text.
 */
atropa.string.normalizeWhiteSpacePrefix = function normalizeWhiteSpacePrefix(text) {
	'use strict';
    var prefix = text.match(/^\s*/);
    if(prefix) {
        prefix = prefix[0];
        prefix = prefix.replace(/\t/g, '    ');
        text = text.replace(/^\s*/, prefix);
    }
    return text;
};

/**
 * Converts all tabs into four spaces.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @param {String} text The text to process
 * @returns {String} Returns the processed text.
 */
atropa.string.normalizeWhiteSpace = function normalizeWhiteSpace(text) {
	'use strict';
    text = text.replace(/\t/g, '    ');
    return text;
};

/**
 * Counts the number of leading space or tab characters but not both.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @param {String} text The text to analyze.
 * @returns {Number} Returns the quantity of leading spaces or tabs.
 */
atropa.string.getOffset = function getOffset(text) {
	'use strict';
    var offset = 0,
        leadingChar = text.charAt(0);
        
    if( leadingChar === ' ' || leadingChar === '\t') {
        while(text.charAt(offset) === leadingChar && offset < text.length) {
            offset++;
        }
    }
    return offset;
};
/**
 * Breaks a string into an array of words.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @param {String} text The text to analyze.
 * @returns {Array} Returns an array of the words in
 *  the given text.
 */
atropa.string.getWords = function (text) {
	"use strict";
	var out = [];
	function invalidChars(element) {
		var matched = /^[\-'’`]+$/.test(element);
		// invert the result of test. throw out elements that match.
		return !matched;
	}
	out = atropa.arrays.removeEmptyElements(
		text.split(/[^A-Za-z\-'’`]+/gi)
	);
	out = out.filter(invalidChars);
	return out;
};
/**
 * Escapes <code>CDATA</code> sections in text
 *  so that the text may be embedded into a 
 *  <code>CDATA</code> section. This should be run
 *  on any text which may contain the string 
 *  <code>]]></code> since said string will effectively
 *  end the <code>CDATA</code> section prematurely.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @param {String} text The text containing 
 *  <code>CDATA</code> sections to escape.
 * @returns {Array} Returns a string with escaped
 *  <code>CDATA</code> sections.
 * @see <a href="http://en.wikipedia.org/wiki/CDATA#Nesting">
 *  http://en.wikipedia.org/wiki/CDATA#Nesting</a>
 * @see <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=98168">
 *  https://bugzilla.mozilla.org/show_bug.cgi?id=98168</a>
 */
atropa.string.escapeCdata = function escapeCdata(text) {
	return String(text).replace(/]]>/g, ']]]]><![CDATA[>');
};


/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint indent: 4, maxerr: 50, white: true, browser: true, devel: true, plusplus: true, regexp: true */
/*global atropa */
/**
 * Container for all Glorious WTFifier related functions and such.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @namespace Container for all Glorious WTFifier related functions and such.
 */
atropa.wtf = {};
/**
 * The Glorious WTFification Dictionary: Turning Shit
 * Into Polished Turds.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130110
 */
atropa.wtf.dictionary = {
	"novelty quickly wears off" : "dumb shit gits old fast",
	"the way it is" : "how it be",
	"put up with" : "manhandle",
	"yet" : "immediately",
	"lose" : "shake",
	"for no reason" : "maiacally",
	"given a choice" : "extorted",
	"not strong enough" : "ain't got the nuts",
	"now at an end" : "brand spankin new",
	"be together" : "mash up",
	"apocalypse" : "party time",
	"nothing is assured" : "we live to deliver",
	"to no avail" : "for great good",
	"too good to be true" : "fucking fantastic",
	"growing apart" : "fucking other people",
	"rest in peace" : "party like it's 1999",
	"back stab" : "rump shake",
	"back stabb" : "rump shake",
	"look into their eyes" : "give them AIDS",
	"look into her eyes" : "give her AIDS",
	"look into his eyes" : "give him AIDS",
	"can't live without" : "touch myself about",
	"can't be without" : "touch myself about",
	"could never be without" : "can't work anal beads without",
	"no matter" : "irregardless of",
	"will be there" : "stick like shit",
	"will always be there" : "stick like wet shit",
	"holding them close to" : "handcuffing them to",
	"by your side" : "on your ass",
	"by my side" : "on my ass",
	"by his side" : "on his ass",
	"by her side" : "on her ass",
	"leave your side" : "get off your ass",
	"leave my side"   : "get off my ass",
	"leave his side"  : "get off his ass",
	"leave her side"  : "get off her ass",
	"doesn't happen over" : "cartwheels straight across",
	"means many things" : "is best described with lies",
	"laying in bed" : "taking a shit",
	"promise" : "lie",
	"liar" : "fibber",
	"lie" : "fib",
	"lies" : "fibs",
	"what's the point" : "the fucks this mean",
	"it must be true" : "for real 'n' shit",
	"what people say" : "muthaphukkas be talkin",
	"etched" : "ground",
	"don't have a clue" : "got shit twisted",
	"viscious cycle" : "clusterfuck",
	"don't need" : "could give a fuck about",
	"raven" : "pigeon",
	"to get away" : "to fucking run",
	"to a better" : "for some glittered",
	"beautiful face" : "enormous tits",
	"might as well" : "oh fuck I oughtta",
	"the first moment" : "straightaway",
	"as well" : "also",
	"so good" : "neato",
	"could do anything" : "is fucking insane",
	"set the mood" : "whip it out",
	"baby if" : "look bitch,",
	"through your hair" : "upside your head",
	"entered the house of" : "got up in the barn for",
	"always love you the same" : "always love you like my other suckers",
	"kissing other" : "going down on",
	"never thought you would do that" : "got turned out like a dumb fuck",
	"laying on the floor" : "begging for it",
	"first laid eyes on" : "first tried groping",
	"most people can only" : "most freaks and dope fiends",
	"you were the one" : "you were my target",
	"standing out from the crowd" : "wobbling like an elephant on a bicycle",
	"stood out from the crowd" : "jiggled like a jello Santa",
	"stand out from the crowd" : "look like a jackass",
	"stands out from the crowd" : "smells like old dick",
	"i've never felt this way" : "i've done this",
	"with every fiber" : "from pithy pits",
	"wander" : "stumble",
	"haunt" : "stalk",
	"mask" : "trashbag",
	"demonic angel" : "ass pirate",
	"angelic demon" : "ass pirate",
	"cunning" : "desperate",
	"dangerous" : "cock catching",
	"demi-god" : "punk bitch",
	"demigod" : "punk bitch",
	"mortal" : "queer",
	"immortal" : "whiny",
	"betrayal" : "game",
	"betray" : "screw",
	"gave up on" : "don't give a fuck about",
	"give up on" : "won't give a fuck about",
	"given up on" : "don't give a fuck about",
	"giving up on" : "ain't givin a fuck about",
	"coffin" : "tobogan",
	"beautiful" : "gaudy",
	"the best" : "the baddest",
	"selfish" : "thieving",
	"walked out" : "narrowly escaped",
	"walk out" : "narrowly escape",
	"walking out" : "narrowly escaping",
	"got in your way" : "got all up in your shit",
	"try" : "shoot",
	"the point of no return" : "the fat girls bedrooom door",
	"only wanted" : "begged for",
	"guess it doesn't matter" : "know this shit is pointless",
	"look back" : "lick windows",
	"path" : "sidewalk",
	"shine" : "bling",
	"in the middle of" : "all up in",
	"deep down inside" : "in the bottom of the tank",
	"piece by piece" : "one handjob at a time",
	"aura" : "stench",
	"candle" : "glowstick",
	"for her" : "to that broads",
	"for she" : "'cause the cunt",
	"for he" : "this dumb mother fucker",
	"forest" : "campground",
	"hand in hand" : "cock to jaw",
	"hand to hold" : "nuts to grip",
	"girl meets boy" : "horny kids hook up",
	"boy meets girl" : "horny kids hook up",
	"sunny" : "sweltering",
	"so nervous" : "so fucking drunk",
	"kiss" : "slap",
	"fingertips" : "chicken nuggets",
	"tell you i'm fine" : "screm I'M FUCKIN OK",
	"write" : "scrawl",
	"written" : "scrawled",
	"wrote" : "scrawled",
	"first of all" : "mm-kay",
	"bring forth" : "whip out",
	"into the light" : "on to the light",
	"the only one" : "fucking stupid",
	"to the light" : "out in public",
	"talk" : "cuss",
	"full of life" : "full of shit",
	"can't find the words to say" : "could blurt out some dumb shit",
	"consume" : "suck",
	"consuming" : "sucking",
	"pillow" : "stone",
	"advice" : "bullshit",
	"universe" : "toilet bowl",
	"elder" : "old folk",
	"magick" : "delusion",
	"magic" : "hope",
	"arcane" : "foolish",
	"speak of" : "talk about",
	"shall" : "should-will",
	"obtain" : "get",
	"battle" : "squabble",
	"midnight" : "daybreak",
	"sorrow" : "whimper",
	"crimson" : "azure",
	"black" : "yellow",
	"won't make it through" : "could shimmy past",
	"night" : "bedtime",
	"day" : "morning",
	"fragile" : "sturdy",
	"crack" : "mend",
	"solitude" : "ambiance",
	"torment" : "tickle",
	"incantation" : "much yammering",
	"hopeless" : "pitiful",
	"depressing" : "inebriating",
	"depressed" : "drunk",
	"depression" : "so much booze",
	"saddened" : "made flaccid",
	"sadness" : "impotence",
	"neverending" : "never ending",
	"never ending" : "relentless",
	"never going" : "fucked for trying",
	"change one thing" : "fuck some'n up",
	"never end" : "drag on",
	"will not heal" : "festers",
	"outward appearance" : "facade",
	"emo" : "closet homo",
	"blackened walls" : "filthy rooms",
	"farewell" : "adios",
	"meet again" : "have another go-round",
	"sadd" : "flaccid",
	"sad" : "impotent",
	"amidst" : "all up in",
	"midst" : "pants",
	"knowledge" : "trivia",
	"known" : "got",
	"know" : "get",
	"knew" : "got",
	"passionate" : "delirious",
	"passion" : "delirium",
	"o'" : "uh",
	"o" : "uh",
	"fang" : "denture",
	"curse" : "stain",
	"love" : "confuse",
	"vampiric" : "pedophilic",
	"vampyre" : "pedophyle",
	"vampire" : "pedophile",
	"problem" : "useless concern",
	"feel" : "fondle",
	"woe" : "chlamydia",
	"empty" : "bloated",
	"hatred" : "odium",
	"hate" : "dislike",
	"scarred" : "striated",
	"scars" : "striae",
	"scare" : "tickle",
	"scary" : "tickly",
	"scar" : "stria",
	"wound" : "ouchie",
	"slit" : "crevice",
	"slice" : "pet",
	"twas" : "it was",
	"big brother" : "my paranoia",
	"eternity" : "awhile",
	"eternally" : "for a bit",
	"eternal" : "imagined",
	"prophet" : "insomniac",
	"prophecies" : "wives tales",
	"prophecy" : "wives tale",
	"soldier" : "maniac",
	"militia" : "gang",
	"military" : "gangster",
	"militant" : "maniacal",
	"goddess" : "Kylee Strutt",
	"higher power" : "crusty sock",
	"dark" : "effervescent",
	"ancient" : "elderly",
	"quest" : "stroll",
	"heartbeat" : "cock beat",
	"heart" : "cock",
	"blood" : "grease",
	"bleed" : "whine",
	"cut" : "mutilate",
	"slash" : "mutilate",
	"moonlight" : "moonshine",
	"moon" : "night light",
	"steel" : "latex",
	"knife" : "dildo",
	"razorblade" : "butt plug",
	"razor" : "dildo",
	"blade" : "handle",
	"pain" : "hot sex",
	"emotional" : "childish",
	"emotion" : "lubricant",
	"teardrop" : "tear drop",
	"tear" : "sperme",
	"castle" : "chateau",
	"world" : "hand towel",
	"dead" : "inert",
	"goodbye" : "peace y'all",
	"good-bye" : "get the fuck out",
	"good bye" : "fuck off",
	"death" : "Santa",
	"pale" : "sexy",
	"drift" : "him-haw",
	"fade" : "him-haw",
	"flesh" : "twinkie",
	"corpse" : "mannequin",
	"skin" : "twinkies",
	"putrid" : "pleasant",
	"breathe" : "pause awkwardly",
	"breath" : "awkward pause",
	"stopp" : "push",
	"stop" : "push",
	"scream" : "grunt",
	"think" : "scheme",
	"spiritual" : "banana craving",
	"spirit" : "banana",
	"soul" : "banana",
	"ghost" : "imaginary friend",
	"monster" : "dislexic lover",
	"beast" : "erection",
	"demon" : "hard-on",
	"angel" : "porn star",
	"shooting star" : "swift missile",
	"star" : "missile",
	"lost" : "aroused",
	"time" : "throbbing",
	"cheek" : "rump",
	"fingers" : "sausage",
	"daydream" : "fantasize",
	"the spring" : "tube sock",
	"spring" : "tube socks",
	"illusion" : "drunken mistake",
	"loneliness" : "arousal",
	"lonely" : "horny",
	"alone" : "ecstatic",
	"lone" : "single",
	"perfect" : "fucked",
	"hidden" : "stashed",
	"mystery" : "neon sign",
	"mysteries" : "neon signs",
	"rose" : "butt hole",
	"petal" : "dingleberry",
	"different" : "awkward",
	"wrong" : "buzzing",
	"fate" : "coincidence",
	"cold" : "fuzzy",
	"hellfire" : "hell fire",
	"hell" : "my cock's",
	"crystal" : "bedazler",
	"rainbow" : "pizzazz",
	"rain" : "jizzum",
	"storm" : "orgy",
	"wind" : "blow",
	"breeze" : "draft",
	"brilliance" : "shinyness",
	"brilliant" : "shiny",
	"dreamland" : "obsession island",
	"dreams" : "obsessions",
	"dream" : "obsess",
	"prison" : "outhouse",
	"golden ray" : "gaudy scribble",
	"ray" : "scribble",
	"deadly" : "fertile",
	"truth" : "trivia",
	"sun" : "yellow disk",
	"cruel" : "haphazard",
	"cloud" : "balloon",
	"twinkle" : "strobe",
	"twinkling" : "strobing",
	"escape" : "snuggle",
	"understand" : "stroke my ego",
	"remember" : "mumble",
	"illumination" : "mumbo jumbo",
	"reality" : "toilet bowl",
	"bind" : "coddle",
	"bound" : "coddled",
	"torn" : "huggled",
	"died" : "made marshmallows",
	"dies" : "makes marshmallows",
	"die" : "make marshmallows",
	"dying" : "making marshmallows",
	"body" : "jiggling clump",
	"bodies" : "jiggling piles",
	"warfare" : "children laughing",
	"debutantes" : "hookers",
	"slave" : "gimp",
	"poetic" : "flatulent",
	"poetry" : "bad gas",
	"poet" : "hobo",
	"poem" : "scribble",
	"country" : "bathroom",
	"naked" : "unshaved",
	"jesus christ" : "jim bob jr",
	"christ" : "jim bob jr",
	"jesus" : "jim bob jr",
	"healer" : "fondler",
	"gods" : "jim bob sr et al.",
	"god" : "jim bob sr",
	"weapon" : "pocket pussy",
	"existence" : "whatever",
	"minion" : "horny pirate",
	"raping" : "what",
	"rape" : "what",
	"gravestone" : "mile marker",
	"grave" : "personal space",
	"infinite" : "abstract",
	"suicide" : "murder",
	"brink" : "border",
	"cried" : "came",
	"cries" : "skeets",
	"crying" : "cumming",
	"had done" : "done did",
	"cry" : "cum",
	"cryptic" : "drunken",
	"crypt" : "urinal",
	"mystic" : "transexual",
	"balanced individual" : "psycho",
	"balanced person" : "psycho",
	"balanced man" : "psycho",
	"balanced woman" : "psycho",
	"wisdom" : "bull shit",
	"wise" : "bull shitting",
	"blessed be" : "suck eggs",
	"energy" : "juice",
	"riddle" : "polka dot",
	"my lord" : "sweet palm",
	"so mote it be" : "it's real in my head",
	"pray" : "murmur",
	"nomad" : "drunk hobo",
	"destiny" : "taxes",
	"sword" : "dildo",
	"void" : "bucket",
	"just" : "sure",
	"vengeance" : "slap happiness",
	"avenge" : "git rowdy for",
	"venge" : "-rowdy-",
	"heavens" : "skies",
	"heaven" : "sky",
	"endless" : "real long",
	"valley" : "ditch",
	"arduous" : "not easy",
	"touch" : "grope",
	"wretched" : "skeezy",
	"wretch" : "skeeze",
	"awe" : "fearful reverence",
	"ritual" : "banana dance",
	"behold" : "oogle",
	"veil" : "disguise",
	"vista" : "scene",
	"always" : "usually",
	"believe" : "buy",
	"wish" : "want",
	"fell" : "flopped",
	"fall" : "flop",
	"righteous" : "arrogant",
	"warrior" : "kitten",
	"uncaring" : "prickish",
	"care to give" : "shit to give",
	"take care of" : "decimate",
	"taking care" : "forgeting",
	"takes care" : "forgets",
	"take care" : "forget",
	"forget" : "disremember",
	"caring" : "giving a shit",
	"cared" : "gave a shit",
	"care" : "give a shit",
	"wield" : "jerk",
	"ocean" : "sewer",
	"sea" : "bath",
	"bay" : "sink",
	"twilight" : "moonshine",
	"broken" : "beaten",
	"broke" : "beat",
	"break" : "beat",
	"forever" : "so very",
	"human race" : "gerbil empire",
	"nightmare" : "tantrum",
	"suffer" : "pirouette",
	"myself" : "my muchness",
	"me" : "i",
	"my" : "i's ",
	"mine" : "i's",
	"was i" : "were i",
	"am i" : "are i",
	"im" : "i'm",
	"i'm" : "i are",
	"i've" : "i have",
	"i'll" : "i will",
	"i am" : "i are",
	"yourself" : "you's muchness",
	"yours" : "you's",
	"your" : "you's",
	"you all" : "all you",
	"you'll" : "you will",
	"you've" : "you has",
	"you're" : "you is",
	"thee" : "you",
	"thine" : "you's",
	"thou" : "you",
	"we" : "they",
	"us" : "them",
	"our" : "their",
	"ours" : "theirs",
	"i" : "Kevin",
	"you" : "Retards"
};
/**
 * Accepts plain text input and Gloriously WTFifies it.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130110
 * @param {String} target The text to WTFify.
 * @return {String} Returns Genuine WTFified text.
 */
atropa.wtf.wtfify = function (target, isHTML) {
	"use strict";
	var regexValue,
	replacementText,
	x,
	oldWord,
	wtfCount,
	wordCount,
	ret;
	
	if(true !== isHTML) {
		isHTML = false;
	}
	ret = {};
	wtfCount = 0;
	target = target.trim();
	target = target.replace(/(\. ?){2,}/gi, '<span style="color : brown ;"> [shit taco] </span>');
	target = target.replace(/\b[ivxcl]+\./gi, '<span style="color : brown ;"> [#!~ syntax error : unexpected shit taco ~!#] </span>');
	if(true === isHTML) {
		target = '<p> ' + target.replace(/(\r\n|\r|\n)/g,' <br/> ') + ' </p>';
	}
	wordCount = atropa.string.countWords(target);
	/**
	 * Accepts plain text input and Gloriously WTFifies it.
	 * @author <a href="mailto:matthewkastor@gmail.com">
	 *  Matthew Christopher Kastor-Inare III </a><br />
	 *  ☭ Hial Atropa!! ☭
	 * @version 20130112
	 * @methodOf atropa.wtf.wtfify-
	 * @private
	 * @param {String} m First matched pattern in string searched.
	 * @param {String} sub1 First matched subpattern in string searched.
	 * @param {String} sub2 Second matched subpattern in string searched.
	 */
	replacementText = function (m, sub1, sub2) {
		wtfCount++;
		sub1 = atropa.setAsOptionalArg('', sub1);
		sub2 = atropa.setAsOptionalArg('', sub2);
		var out;
		if(true === isHTML) {
			out = '<span style="color : red ;">' + sub1 + atropa.wtf.dictionary[x] + sub2 + '</span>';
		} else {
			out = sub1 + atropa.wtf.dictionary[x] + sub2;
		}
		return out;
	};
	for (x in atropa.wtf.dictionary) {
		if (atropa.wtf.dictionary.hasOwnProperty(x)) {
			oldWord = atropa.regex.appendPrefixesAndSuffixes(x);
			regexValue = new RegExp(oldWord, 'gi');
			target = target.replace(regexValue, replacementText);
		}
	}
	ret.wtfCount = wtfCount;
	ret.wordCount = wordCount;
	ret.score = wtfCount / wordCount;
	ret.txt = target;
	return ret;
};
/**
 * WTFifies the <code>textContent</code> or <code>value</code> of the
 *  given element and replaces the element with a pre block
 *  containing the results of WTFification.
 * @param {HTMLElement} elementReference A reference to an HTML Element.
 * @version 20130112
 */
atropa.wtf.htmlElement = function (elementReference) {
	"use strict";
	var wtfified, txt;
	elementReference.innerHTML = elementReference.innerHTML.replace(/<br>(\s+)?\r?\n?/g, '\r\n');
	txt = elementReference.value || elementReference.textContent;
	wtfified = atropa.wtf.wtfify(txt, true);
	elementReference.innerHTML = '<pre style="color:black; background:white; white-space:pre-wrap;">' + wtfified.txt + '</pre>';
};


// atropa.wtf.htmlElement(document.getElementsByClassName('content')[0]);
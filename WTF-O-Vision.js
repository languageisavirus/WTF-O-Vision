/**
 * WTF-O-Vision
 * @fileOverview WTF-O-Vision <br />
 * The Glorious WTF-O-Vision (js)
 * @author <a href="mailto:matthewkastor@gmail.com">
 * Matthew Christopher Kastor-Inare III </a><br />
 * ☭ Hial Atropa!! ☭
 */


/*jslint indent: 4, maxerr: 50, white: true, browser: true, devel: true, plusplus: true */
/*global XPathResult */

/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 * Matthew Christopher Kastor-Inare III </a><br />
 * ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa;
atropa = {};


/**
 * Container for all Glorious WTFifier related functions and such.
 * @author <a href="mailto:matthewkastor@gmail.com">
 * Matthew Christopher Kastor-Inare III </a><br />
 * ☭ Hial Atropa!! ☭
 * @version 20120909
 * @namespace Container for all Glorious WTFifier related functions and such.
 */
atropa.wtf = {};

/**
 * The Glorious WTFification Dictionary: Turning Shit
 * Into Polished Turds.
 * @author <a href="mailto:matthewkastor@gmail.com">
 * Matthew Christopher Kastor-Inare III </a><br />
 * ☭ Hial Atropa!! ☭
 * @version 20130101
 */
atropa.wtf.dictionary = {
	"novelty quickly wears off" : "dumb shit gits old fast",
	"now at an end" : "brand spankin new",
	"be together" : "mash up",
	"apocalypse" : "party time",
	"nothing is assured" : "we live to deliver",
	"to no avail" : "for great good",
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
	"doesn't happen over" : "cartwheels straight across",
	"means many things" : "is best described with lies",
	"laying in bed" : "taking a shit",
	"promise" : "lie",
	"to get away" : "to fucking run",
	"to a better" : "for some glittered",
	"beautiful face" : "enormous tits",
	"might as well" : "oh fuck I oughtta",
	"as well" : "also",
	"so good" : "like two cheeseburgers and a chocolate shake",
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
	"stands out from the crowd" : "smells like old milk",
	"i've never felt this way" : "i've done this",
	"with every fiber" : "from pithy pits",
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
	"got in your way" : "got all up in your shit",
	"try" : "shoot",
	"the point of no return" : "The Krusty Krab",
	"only wanted" : "begged for",
	"guess it doesn't matter" : "know this shit is pointless",
	"look back" : "lick windows",
	"path" : "sidewalk",
	"shine" : "bling",
	"in the middle of" : "dead nuts on",
	"deep down inside" : "in the bottom of the tank",
	"piece by piece" : "one handjob at a time",
	"im" : "This Asshole",
	"aura" : "stench",
	"candle" : "glowstick",
	"for he" : "this dumb mother fucker",
	"for she" : "'cause the cunt",
	"forest" : "campground",
	"hand in hand" : "cock to jaw",
	"girl meets boy" : "horny kids hook up",
	"boy meets girl" : "horny kids hook up",
	"sunny" : "sweltering",
	"so nervous" : "so fucking drunk",
	"kiss" : "slap",
	"fingertips" : "chicken nuggets",
	"tell you i'm fine" : "screm I'm all-fuckin-right",
	"write" : "scrawl",
	"written" : "scrawled",
	"wrote" : "scrawled",
	"first of all" : "mm-kay",
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
	"depression" : "so much booze",
	"saddened" : "made flaccid",
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
	"hate" : "dislike",
	"scarred" : "striated",
	"scars" : "striae",
	"scare" : "tickle",
	"scary" : "tickly",
	"scar" : "stria",
	"wound" : "ouchie",
	"slit" : "crevice",
	"slice" : "stroke",
	"twas" : "i'was",
	"big brother" : "my paranoia",
	"eternity" : "awhile",
	"eternally" : "for a grip",
	"eternal" : "imagined",
	"prophet" : "insomniac",
	"prophecies" : "wives tales",
	"prophecy" : "wives tale",
	"soldier" : "maniac",
	"militia" : "gang",
	"military" : "gangster",
	"militant" : "maniacal",
	"goddess" : "kylee strutt",
	"higher power" : "crusty sock",
	"dark" : "smog",
	"ancient" : "elderly",
	"quest" : "stroll",
	"heartbeat" : "loin-beat",
	"heart" : "loin",
	"blood" : "grease",
	"bleed" : "whine",
	"moonlight" : "moonshine",
	"moon" : "cheese",
	"steel" : "latex",
	"knife" : "spatula",
	"razorblade" : "spatula handle",
	"razor" : "spatula",
	"blade" : "handle",
	"pain" : "diarrhea",
	"emotional" : "childish",
	"emotion" : "laxative",
	"teardrop" : "tear drop",
	"tear" : "urine",
	"world" : "hand towel",
	"dead" : "fishy",
	"goodbye" : "peace y'all",
	"good-bye" : "get the fuck out",
	"death" : "Santa",
	"pale" : "pasty",
	"drift" : "him-haw",
	"fade" : "him-haw",
	"flesh" : "twinkie",
	"corpse" : "mannequin",
	"skin" : "twinkies",
	"putrid" : "pureed",
	"breathe" : "wheeze",
	"breath" : "nasal whistle",
	"stopp" : "push",
	"stop" : "push",
	"scream" : "grunt",
	"was i" : "were i",
	"am i" : "are i",
	"i'm" : "i are",
	"i've" : "i have",
	"i'll" : "i will",
	"i am" : "i are",
	"i" : "Spongebob",
	"me" : "Spongebob",
	"my" : "Spongebob's ",
	"mine" : "Spongebob's",
	"yourself" : "you",
	"yours" : "you's",
	"your" : "you's",
	"you all" : "all you",
	"you'll" : "you will",
	"you've" : "you has",
	"you're" : "you is",
	"suffer" : "pirouette",
	"thee" : "you",
	"thine" : "you's",
	"you" : "Patrick",
	"spiritual" : "banana craving",
	"spirit" : "banana",
	"soul" : "banana",
	"ghost" : "imaginary friend",
	"monster" : "ferret",
	"beast" : "marmot",
	"demon" : "squirrel",
	"lost" : "aroused",
	"time" : "throbbing",
	"cheek" : "rump",
	"fingers" : "sausage",
	"daydream" : "fantasize",
	"the spring" : "tube sock",
	"spring" : "tube socks",
	"illusion" : "fun house",
	"loneliness" : "arousal",
	"lonely" : "horny",
	"alone" : "ecstatic",
	"lone" : "single",
	"perfect" : "retarded",
	"hidden" : "stashed",
	"mystery" : "neon sign",
	"mysteries" : "neon signs",
	"rose" : "butt hole",
	"different" : "awkward",
	"wrong" : "buzzing",
	"fate" : "coincidence",
	"cold" : "fuzzy",
	"hellfire" : "hell fire",
	"hell" : "my loins",
	"crystal" : "bedazler",
	"rainbow" : "pizzazz",
	"rain" : "leak",
	"storm" : "hugfest",
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
	"escape" : "snuggle",
	"understand" : "stroke my ego",
	"remember" : "mumble",
	"illumination" : "mumbo jumbo",
	"reality" : "toilet bowl",
	"bind" : "coddle",
	"bound" : "coddled",
	"torn" : "huggled",
	"died" : "made marshmallows",
	"die" : "make marshmallows",
	"dying" : "making marshmallows",
	"body" : "jiggling clump",
	"bodies" : "jiggling piles",
	"warfare" : "children laughing",
	"debutantes" : "bums and hookers",
	"slave" : "disgruntled working folk",
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
	"weapon" : "waffle bat",
	"existence" : "whatever",
	"minion" : "horny pirate",
	"raping" : "what",
	"rape" : "what",
	"gravestone" : "mile marker",
	"grave" : "personal space",
	"infinite" : "abstract",
	"suicide" : "murder",
	"brink" : "border",
	"cried" : "urinated",
	"cries" : "urinating",
	"cry" : "urinate",
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
	"behold" : "stare",
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
	"caring" : "giving a shit",
	"cared" : "gave a shit",
	"care" : "give a shit",
	"wield" : "jerk",
	"ocean" : "sewer",
	"sea" : "bath",
	"bay" : "sink",
	"twilight" : "moonshine",
	"broken" : "busted",
	"forever" : "so very",
	"human race" : "gerbil empire",
	"never ending nightmare" : "series of whiny tantrums"
};

/**
 * Accepts plain text input and Gloriously WTFifies it.
 * @author <a href="mailto:matthewkastor@gmail.com">
 * Matthew Christopher Kastor-Inare III </a><br />
 * ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {String} target The text to WTFify.
 * @return {String} Returns Genuine WTFified text.
 */
atropa.wtf.wtfify = function (target) {
	"use strict";
	var regexValue,
	replacementText,
	x,
	oldWord,
	wtfCount,
	wordCount,
	ret;
	
	ret = {};
	wtfCount = 0;
	target = target.trim();
	wordCount = atropa.string.countWords(target);
	/**
	 * Accepts plain text input and Gloriously WTFifies it.
	 * @author <a href="mailto:matthewkastor@gmail.com">
	 * Matthew Christopher Kastor-Inare III </a><br />
	 * ☭ Hial Atropa!! ☭
	 * @version 20120909
	 * @methodOf atropa.wtf.wtfify-
	 * @private
	 * @param {String} m First matched pattern in string searched.
	 * @param {String} sub1 First matched subpattern in string searched.
	 * @param {String} sub2 Second matched subpattern in string searched.
	 */
	replacementText = function (m, sub1, sub2) {
		wtfCount++;
		return sub1 + atropa.wtf.dictionary[x] + sub2;
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
 * WTFifies the textContent of the given element and replaces
 *  the element with a pre block containing the results of
 *  WTFification.
 * @param {HTMLElement} elementReference A reference to an HTML Element.
 * @version 20121229
 * @todo Determine wheter the element stores text values in a textContent or value property ie. form field or other.
 */
atropa.wtf.htmlElement = function(elementReference) {
	"use strict";
	var wtfified = atropa.wtf.wtfify(elementReference.textContent);
	elementReference.innerHTML = '<pre style="color:black; background:white; white-space:pre-wrap;">' + wtfified.txt + '</pre>';
};


/**
 * A few utilities for manipulating strings.
 * @author <a href="mailto:matthewkastor@gmail.com">
 * Matthew Christopher Kastor-Inare III </a><br />
 * ☭ Hial Atropa!! ☭
 * @version 20120909
 * @namespace A few utilities for manipulating strings.
 */
atropa.string = {};

/**
 * Converts the first character of a given string to
 * uppercase.
 * @author <a href="mailto:matthewkastor@gmail.com">
 * Matthew Christopher Kastor-Inare III </a><br />
 * ☭ Hial Atropa!! ☭
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
 * Matthew Christopher Kastor-Inare III </a><br />
 * ☭ Hial Atropa!! ☭
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
 * Container for regex functions.
 * @author <a href="mailto:matthewkastor@gmail.com">
 * Matthew Christopher Kastor-Inare III </a><br />
 * ☭ Hial Atropa!! ☭
 * @version 20120909
 * @namespace Container for regex functions.
 */
atropa.regex = {};

/**
 * Appends common prefix, suffix, and word boundary regex strings to
 * the supplied word.
 * @author <a href="mailto:matthewkastor@gmail.com">
 * Matthew Christopher Kastor-Inare III </a><br />
 * ☭ Hial Atropa!! ☭
 * @version 20130101
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
	suffixes = '(ification|tionally|ication|ified|istic|iness|fare|tion|ance|ence|less|ally|able|ness|ized|ised|ous|ify|ing|ity|ful|ant|ate|est|ism|izm|ist|ic|al|ed|er|et|ly|rs|y|s|r|d)?';
	
	threshold = threshold === undefined ? 3 : threshold;
	
	if (word.length > threshold) {
		word = '\\b' + prefixes + word + suffixes + '\\b';
	} else {
		word = '\\b()' + word + '()\\b';
	}
	return word;
};


// atropa.wtf.htmlElement(document.getElementsByClassName('content')[0]);
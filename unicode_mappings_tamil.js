tamil = {};

// All declarations
etot = {};
tamil.startoffset = 0;
tamil.useradded = {};
tamil.setAsTypingLanguage = {};
tamil.punctuations = {};
tamil.digits = {};
tamil.vowel = {};
tamil.matra = {};
tamil.name = 'Tamil';

tamil.bindu = etot["*"] = "ஂ"; // SIGN ANUSVARA2946U+0B82
tamil.ak = etot[":"] = "ஃ"; // SIGN VISARGA2947U+0B83
etot["q"] = "ஃ"; // SIGN VISARGA2947U+0B83
tamil.A = etot["A"] = "அ"; // LETTER A2949U+0B85
tamil.AA = etot["AA"] = "ஆ"; // LETTER AA2950U+0B86
tamil.I = etot["I"] = "இ"; // LETTER I2951U+0B87
tamil.II = etot["II"] = "ஈ"; // LETTER II2952U+0B88
tamil.U = etot["U"] = "உ"; // LETTER U2953U+0B89
tamil.UU = etot["UU"] = "ஊ"; // LETTER UU2954U+0B8A
tamil.E = etot["E"] = "எ"; // LETTER E2958U+0B8E
tamil.EY = etot["EY"] = "ஏ"; // LETTER EE2959U+0B8F
tamil.AI = etot["AI"] = "ஐ"; // LETTER AI2960U+0B90
tamil.O = etot["O"] = "ஒ"; // LETTER O2962U+0B92
tamil.OO = etot["OO"] = "ஓ"; // LETTER OO2963U+0B93
tamil.OW = etot["OW"] = "ஔ"; // LETTER AU2964U+0B94
tamil.OU = etot["OU"] = "ஔ"; // LETTER AU2964U+0B94
etot["k"] = "க"; // LETTER KA2965U+0B95
etot["kh"] = "க"; // LETTER KA2965U+0B95
etot["c"] = "க"; // LETTER KA2965U+0B95
etot["g"] = "க"; // LETTER KA2965U+0B95
etot["gh"] = "க"; // LETTER KA2965U+0B95
etot["ng"] = "ங"; // LETTER NGA2969U+0B99
etot["ch"] = "ச"; // LETTER CA2970U+0B9A
etot["j"] = "ஜ"; // LETTER JA2972U+0B9C
etot["ny"] = "ஞ"; // LETTER NYA2974U+0B9E
etot["tt"] = "ட"; // LETTER TTA2975U+0B9F
etot["T"] = "ட"; // LETTER TTA2975U+0B9F
etot["NN"] = "ண"; // LETTER NNA2979U+0BA3
etot["nnn"] = "ண"; // LETTER NNA2979U+0BA3
etot["t"] = "த"; // LETTER TA2980U+0BA4
etot["th"] = "த"; // LETTER TA2980U+0BA4
etot["d"] = "த"; // LETTER TA2980U+0BA4
etot["dh"] = "த"; // LETTER TA2980U+0BA4
etot["n"] = "ந"; // LETTER NA2984U+0BA8
etot["nn"] = "ன"; // LETTER NNNA2985U+0BA9
etot["N"] = "ன"; // LETTER NNNA2985U+0BA9
etot["p"] = "ப"; // LETTER PA2986U+0BAA
etot["b"] = "ப"; // LETTER PA2986U+0BAA
etot["f"] = "ப"; // LETTER PA2986U+0BAA
etot["bh"] = "ப"; // LETTER PA2986U+0BAA
etot["ph"] = "ப"; // LETTER PA2986U+0BAA
etot["m"] = "ம"; // LETTER MA2990U+0BAE
etot["y"] = "ய"; // LETTER YA2991U+0BAF
etot["r"] = "ர"; // LETTER RA2992U+0BB0
etot["R"] = "ற"; // LETTER RRA2993U+0BB1
etot["l"] = "ல"; // LETTER LA2994U+0BB2
etot["L"] = "ள"; // LETTER LLA2995U+0BB3
etot["z"] = "ழ"; // LETTER LLLA2996U+0BB4
etot["Z"] = "ழ"; // LETTER LLLA2996U+0BB4
etot["v"] = "வ"; // LETTER VA2997U+0BB5
etot["w"] = "வ"; // LETTER VA2997U+0BB5
etot["S"] = "ஶ"; // LETTER SHA2998U+0BB6
etot["sh"] = "ஷ"; // LETTER SSA2999U+0BB7
etot["s"] = "ஸ"; // LETTER SA3000U+0BB8
etot["h"] = "ஹ"; // LETTER HA3001U+0BB9
tamil.a = etot["a"] = "ா"; // VOWEL SIGN AA3006U+0BBE
tamil.i = etot["i"] = "ி"; // VOWEL SIGN I3007U+0BBF
tamil.ii = etot["ii"] = "ீ"; // VOWEL SIGN II3008U+0BC0
tamil.u = etot["u"] = "ு"; // VOWEL SIGN U3009U+0BC1
tamil.uu = etot["uu"] = "ூ"; // VOWEL SIGN UU3010U+0BC2
tamil.e = etot["e"] = "ெ"; // VOWEL SIGN E3014U+0BC6
tamil.ey = etot["ey"] = "ே"; // VOWEL SIGN EE3015U+0BC7
tamil.ai = etot["ai"] = "ை"; // VOWEL SIGN AI3016U+0BC8
tamil.o = etot["o"] = "ொ"; // VOWEL SIGN O3018U+0BCA
tamil.oo = etot["oo"] = "ோ"; // VOWEL SIGN OO3019U+0BCB
tamil.ow = etot["ow"] = "ௌ"; // VOWEL SIGN AU3020U+0BCC
tamil.ou = etot["ou"] = "ௌ"; // VOWEL SIGN AU3020U+0BCC
tamil.virama = etot["\\"] = "்"; // SIGN VIRAMA3021U+0BCD
tamil.om = etot["OM"] = "ௐ"; // OM3024U+0BD0
tamil.AUM = etot["AUM"] = "ௐ"; // OM3024U+0BD0
tamil.AU = etot["AU"] = "ௗ"; // AU LENGTH MARK3031U+0BD7
/*etot[""] = "௦"; // DIGIT ZERO3046U+0BE6
etot[""] = "௧"; // DIGIT ONE3047U+0BE7
etot[""] = "௨"; // DIGIT TWO3048U+0BE8
etot[""] = "௩"; // DIGIT THREE3049U+0BE9
etot[""] = "௪"; // DIGIT FOUR3050U+0BEA
etot[""] = "௫"; // DIGIT FIVE3051U+0BEB
etot[""] = "௬"; // DIGIT SIX3052U+0BEC
etot[""] = "௭"; // DIGIT SEVEN3053U+0BED
etot[""] = "௮"; // DIGIT EIGHT3054U+0BEE
etot[""] = "௯"; // DIGIT NINE3055U+0BEF
etot[""] = "௰"; // NUMBER TEN3056U+0BF0
etot[""] = "௱"; // NUMBER ONE HUNDRED3057U+0BF1
etot[""] = "௲"; // NUMBER ONE THOUSAND3058U+0BF2
etot[""] = "௳"; // DAY SIGN3059U+0BF3
etot[""] = "௴"; // MONTH SIGN3060U+0BF4
etot[""] = "௵"; // YEAR SIGN3061U+0BF5
etot[""] = "௶"; // DEBIT SIGN3062U+0BF6
etot[""] = "௷"; // CREDIT SIGN3063U+0BF7
etot[""] = "௸"; // AS ABOVE SIGN3064U+0BF8
etot[""] = "௹"; // RUPEE SIGN3065U+0BF9
etot[""] = "௺"; // NUMBER SIGN3066U+0BFA
*/

etot["x"] = etot["k"] + tamil.virama +
            etot["sh"];

tamil.matra[tamil.bindu] = 1;
tamil.matra[tamil.ak] = 1;
tamil.matra[tamil.a] = 1;
tamil.matra[tamil.i] = 1;
tamil.matra[tamil.ii] = 1;
tamil.matra[tamil.u] = 1;
tamil.matra[tamil.uu] = 1;
tamil.matra[tamil.e] = 1;
tamil.matra[tamil.ey] = 1;
tamil.matra[tamil.ai] = 1;
tamil.matra[tamil.o] = 1;
tamil.matra[tamil.oo] = 1;
tamil.matra[tamil.ow] = 1;
tamil.matra[tamil.virama] = 1;

tamil.vowel[tamil.A] = 1;
tamil.vowel[tamil.AA] = 1;
tamil.vowel[tamil.I] = 1;
tamil.vowel[tamil.II] = 1;
tamil.vowel[tamil.U] = 1;
tamil.vowel[tamil.UU] = 1;
tamil.vowel[tamil.E] = 1;
tamil.vowel[tamil.EY] = 1;
tamil.vowel[tamil.AI] = 1;
tamil.vowel[tamil.O] = 1;
tamil.vowel[tamil.OO] = 1;
tamil.vowel[tamil.OW] = 1;
tamil.vowel[tamil.AUM] = 1;

tamil.matra_to_vowel = {};
tamil.matra_to_vowel[tamil.a] = tamil.A;
tamil.matra_to_vowel[tamil.i] = tamil.I;
tamil.matra_to_vowel[tamil.ii] = tamil.II;
tamil.matra_to_vowel[tamil.u] = tamil.U;
tamil.matra_to_vowel[tamil.uu] = tamil.UU;
tamil.matra_to_vowel[tamil.e] = tamil.E;
tamil.matra_to_vowel[tamil.ey] = tamil.EY;
tamil.matra_to_vowel[tamil.ai] = tamil.AI;
tamil.matra_to_vowel[tamil.o] = tamil.O;
tamil.matra_to_vowel[tamil.oo] = tamil.OO;
tamil.matra_to_vowel[tamil.ow] = tamil.OW;

tamil.startoffset = tamil.bindu.charCodeAt(0);

tamil.setAsTypingLanguage = function() {
  language = tamil;
  languagemappings = etot;
}
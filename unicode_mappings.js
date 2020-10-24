sanskrit = {};

// All declarations
etoh = {};
sanskrit.startoffset = 0;
sanskrit.useradded = {};
sanskrit.setAsTypingLanguage = {};
sanskrit.punctuations = {};
sanskrit.digits = {};
sanskrit.vowel = {};
sanskrit.matra = {};
sanskrit.name = 'Sanskrit';

sanskrit.chandrabindu = etoh["**"] = "ँ"; // 2305  ठँ  0901  DEVANAGARI SIGN CANDRABINDU (combined with ttha)
sanskrit.bindu = etoh["*"] = "ं"; // 2306  ठं  0902  DEVANAGARI SIGN ANUSVARA (combined with ttha)
etoh["M"] = "ं"; // 2306  ठं  0902  DEVANAGARI SIGN ANUSVARA (combined with ttha)
sanskrit.visarga = etoh[":"] = "ः"; // 2307  ठः  0903  DEVANAGARI SIGN VISARGA (combined with ttha)
etoh["H"] = "ः"; // 2307  ठः  0903  DEVANAGARI SIGN VISARGA (combined with ttha)
etoh["`"] = "ऄ"; // 2308  ऄ 0904  DEVANAGARI LETTER SHORT A
sanskrit.A = etoh["A"] = "अ"; // 2309  अ 0905  DEVANAGARI LETTER A
sanskrit.AA = etoh["AA"] = "आ"; // 2310  आ 0906  DEVANAGARI LETTER AA
sanskrit.I = etoh["I"] = "इ"; // 2311  इ 0907  DEVANAGARI LETTER I
sanskrit.II = etoh["II"] = "ई"; // 2312  ई 0908  DEVANAGARI LETTER II
sanskrit.U = etoh["U"] = "उ"; // 2313  उ 0909  DEVANAGARI LETTER U
sanskrit.UU = etoh["UU"] = "ऊ"; // 2314  ऊ 090A  DEVANAGARI LETTER UU
sanskrit.RR = etoh["RR"] = "ऋ"; // 2315  ऋ 090B  DEVANAGARI LETTER VOCALIC R
sanskrit.LL = etoh["LL"] = "ऌ"; // 2316  ऌ 090C  DEVANAGARI LETTER VOCALIC L
etoh["`"] = "ऍ"; // 2317  ऍ 090D  DEVANAGARI LETTER CANDRA E
etoh["`"] = "ऎ"; // 2318  ऎ 090E  DEVANAGARI LETTER SHORT E
sanskrit.E = etoh["E"] = "ए"; // 2319  ए 090F  DEVANAGARI LETTER E
sanskrit.AI = etoh["AI"] = "ऐ"; // 2320  ऐ 0910  DEVANAGARI LETTER AI
etoh["`"] = "ऑ"; // 2321  ऑ 0911  DEVANAGARI LETTER CANDRA O
etoh["`"] = "ऒ"; // 2322  ऒ 0912  DEVANAGARI LETTER SHORT O
sanskrit.O = etoh["O"] = "ओ"; // 2323  ओ 0913  DEVANAGARI LETTER O
sanskrit.OU = etoh["OU"] = "औ"; // 2324  औ 0914  DEVANAGARI LETTER AU
etoh["AU"] = "औ"; // 2324  औ 0914  DEVANAGARI LETTER AU
etoh["OW"] = "औ"; // 2324  औ 0914  DEVANAGARI LETTER AU
etoh["k"] = "क"; // 2325  क 0915  DEVANAGARI LETTER KA
etoh["c"] = "क"; // 2325  क 0915  DEVANAGARI LETTER KA
etoh["q"] = "क"; // 2325  क 0915  DEVANAGARI LETTER KA
etoh["kh"] = "ख"; // 2326  ख 0916  DEVANAGARI LETTER KHA
etoh["K"] = "ख"; // 2326  ख 0916  DEVANAGARI LETTER KHA
etoh["Q"] = "ख"; // 2326  ख 0916  DEVANAGARI LETTER KHA
etoh["g"] = "ग"; // 2327  ग 0917  DEVANAGARI LETTER GA
etoh["gh"] = "घ"; // 2328  घ 0918  DEVANAGARI LETTER GHA
etoh["G"] = "घ"; // 2328  घ 0918  DEVANAGARI LETTER GHA
etoh["ng"] = "ङ"; // 2329  ङ 0919  DEVANAGARI LETTER NGA
etoh["ch"] = "च"; // 2330  च 091A  DEVANAGARI LETTER CA
etoh["C"] = "च"; // 2330  च 091A  DEVANAGARI LETTER CA
etoh["chh"] = "छ"; // 2331  छ 091B  DEVANAGARI LETTER CHA
etoh["j"] = "ज"; // 2332  ज 091C  DEVANAGARI LETTER JA
etoh["jh"] = "झ"; // 2333  झ 091D  DEVANAGARI LETTER JHA
etoh["J"] = "झ"; // 2333  झ 091D  DEVANAGARI LETTER JHA
etoh["J"] = "ञ"; // 2334  ञ 091E  DEVANAGARI LETTER NYA
etoh["T"] = "ट"; // 2335  ट 091F  DEVANAGARI LETTER TTA
etoh["TH"] = "ठ"; // 2336  ठ 0920  DEVANAGARI LETTER TTHA
etoh["D"] = "ड"; // 2337  ड 0921  DEVANAGARI LETTER DDA
etoh["DH"] = "ढ"; // 2338  ढ 0922  DEVANAGARI LETTER DDHA
etoh["N"] = "ण"; // 2339  ण 0923  DEVANAGARI LETTER NNA
etoh["t"] = "त"; // 2340  त 0924  DEVANAGARI LETTER TA
etoh["th"] = "थ"; // 2341  थ 0925  DEVANAGARI LETTER THA
etoh["d"] = "द"; // 2342  द 0926  DEVANAGARI LETTER DA
etoh["dh"] = "ध"; // 2343  ध 0927  DEVANAGARI LETTER DHA
etoh["n"] = "न"; // 2344  न 0928  DEVANAGARI LETTER NA
etoh["x"] = "ऩ"; // 2345  ऩ 0929  DEVANAGARI LETTER NNNA
etoh["p"] = "प"; // 2346  प 092A  DEVANAGARI LETTER PA
etoh["ph"] = "फ"; // 2347  फ 092B  DEVANAGARI LETTER PHA
etoh["f"] = "फ"; // 2347  फ 092B  DEVANAGARI LETTER PHA
etoh["F"] = "फ"; // 2347  फ 092B  DEVANAGARI LETTER PHA
etoh["P"] = "फ"; // 2347  फ 092B  DEVANAGARI LETTER PHA
etoh["b"] = "ब"; // 2348  ब 092C  DEVANAGARI LETTER BA
etoh["bh"] = "भ"; // 2349  भ 092D  DEVANAGARI LETTER BHA
etoh["B"] = "भ"; // 2349  भ 092D  DEVANAGARI LETTER BHA
etoh["m"] = "म"; // 2350  म 092E  DEVANAGARI LETTER MA
etoh["y"] = "य"; // 2351  य 092F  DEVANAGARI LETTER YA
etoh["r"] = "र"; // 2352  र 0930  DEVANAGARI LETTER RA
etoh["`"] = "ऱ"; // 2353  ऱ 0931  DEVANAGARI LETTER RRA
etoh["l"] = "ल"; // 2354  ल 0932  DEVANAGARI LETTER LA
etoh["L"] = "ळ"; // 2355  ळ 0933  DEVANAGARI LETTER LLA
etoh["`"] = "ऴ"; // 2356  ऴ 0934  DEVANAGARI LETTER LLLA
etoh["v"] = "व"; // 2357  व 0935  DEVANAGARI LETTER VA
etoh["w"] = "व"; // 2357  व 0935  DEVANAGARI LETTER VA
etoh["V"] = "व"; // 2357  व 0935  DEVANAGARI LETTER VA
etoh["W"] = "व"; // 2357  व 0935  DEVANAGARI LETTER VA
etoh["sh"] = "श"; // 2358  श 0936  DEVANAGARI LETTER SHA
etoh["shh"] = "ष"; // 2359  ष 0937  DEVANAGARI LETTER SSA
etoh["S"] = "श"; // 2358  श 0936  DEVANAGARI LETTER SHA
etoh["Sh"] = "ष"; // 2359  ष 0937  DEVANAGARI LETTER SSA
etoh["s"] = "स"; // 2360  स 0938  DEVANAGARI LETTER SA
etoh["h"] = "ह"; // 2361  ह 0939  DEVANAGARI LETTER HA
//etoh["x" = "ठऺ"; // 2362  ठऺ  093A  DEVANAGARI VOWEL SIGN OE (combined with ttha)
//etoh["x ठऻ"] = ""; // 2363  ठऻ  093B  DEVANAGARI VOWEL SIGN OOE (combined with ttha)
//etoh["x ठ़"] = ""; // 2364  ठ़  093C  DEVANAGARI SIGN NUKTA (combined with ttha)
sanskrit.avagraha = etoh["$"] = "ऽ"; // 2365  ऽ 093D  DEVANAGARI SIGN AVAGRAHA
sanskrit.a = etoh["a"] = "ा"; // 2366  ठा  093E  DEVANAGARI VOWEL SIGN AA (combined with ttha)
sanskrit.i = etoh["i"] = "ि"; // 2367  ठि  093F  DEVANAGARI VOWEL SIGN I (combined with ttha)
sanskrit.ii = etoh["ii"] =  "ी"; // 2368  ठी  0940  DEVANAGARI VOWEL SIGN II (combined with ttha)
sanskrit.u = etoh["u"] = "ु"; // 2369  ठु  0941  DEVANAGARI VOWEL SIGN U (combined with ttha)
sanskrit.oo = etoh["oo"] = "ू"; // 2370  ठू  0942  DEVANAGARI VOWEL SIGN UU (combined with ttha)
sanskrit.uu = etoh["uu"] = "ू"; // 2370  ठू  0942  DEVANAGARI VOWEL SIGN UU (combined with ttha)
sanskrit.R = etoh["R"] = "ृ"; // 2371  ठृ  0943  DEVANAGARI VOWEL SIGN VOCALIC R (combined with ttha)
sanskrit.Rr = etoh["Rr"] = "ॄ"; // 2372  ठॄ  0944  DEVANAGARI VOWEL SIGN VOCALIC RR (combined with ttha)
sanskrit.chandra = etoh["`"] = "ॅ"; // 2373  ठॅ  0945  DEVANAGARI VOWEL SIGN CANDRA E (combined with ttha)
//etoh["x ठॆ"; // 2374  ठॆ  0946  DEVANAGARI VOWEL SIGN SHORT E (combined with ttha)
sanskrit.e = etoh["e"] = "े"; // 2375  ठे  0947  DEVANAGARI VOWEL SIGN E (combined with ttha)
sanskrit.ai = etoh["ai"] = "ै"; // 2376  ठै  0948  DEVANAGARI VOWEL SIGN AI (combined with ttha)
etoh["Y"] = "ै"; // 2376  ठै  0948  DEVANAGARI VOWEL SIGN AI (combined with ttha)
etoh["`"] = "ॉ"; // 2377  ठॉ  0949  DEVANAGARI VOWEL SIGN CANDRA O (combined with ttha)
etoh["`"] = "ॊ"; // 2378  ठॊ  094A  DEVANAGARI VOWEL SIGN SHORT O (combined with ttha)
sanskrit.o = etoh["o"] = "ो"; // 2379  ठो  094B  DEVANAGARI VOWEL SIGN O (combined with ttha)
sanskrit.ow = etoh["ow"] = "ौ"; // 2380  ठौ  094C  DEVANAGARI VOWEL SIGN AU (combined with ttha)
etoh["au"] = "ौ"; // 2380  ठौ  094C  DEVANAGARI VOWEL SIGN AU (combined with ttha)
etoh["ou"] = "ौ"; // 2380  ठौ  094C  DEVANAGARI VOWEL SIGN AU (combined with ttha)
sanskrit.virama = etoh["\\"] ="्"; // 2381  ठ्  094D  DEVANAGARI SIGN VIRAMA (combined with ttha)
etoh["`"] = "ॎ"; // 2382  ठॎ  094E  DEVANAGARI VOWEL SIGN PRISHTHAMATRA E (combined with ttha)
etoh["`"] = "ॏ"; // 2383  ठॏ  094F  DEVANAGARI VOWEL SIGN AW (combined with ttha)
sanskrit.om = etoh["OM"] = "ॐ"; // 2384  ॐ 0950  DEVANAGARI OM
sanskrit.AUM = etoh["AUM"] = "ॐ"; // 2384  ॐ 0950  DEVANAGARI OM

// fix bugs:
etoh["jai"] = "ज" + etoh["ai"];

// derived
etoh["x"] = etoh["X"] =
              etoh["k"] + sanskrit.virama +
              etoh["shh"];
etoh["nj"] =  etoh["j"] + sanskrit.virama +
              etoh["J"];

/*
etoh["x ठ॑"] = ""; // 2385  ठ॑  0951  DEVANAGARI STRESS SIGN UDATTA (combined with ttha)
etoh["x ठ॒"] = ""; // 2386  ठ॒  0952  DEVANAGARI STRESS SIGN ANUDATTA (combined with ttha)
etoh["x ठ॓"] = ""; // 2387  ठ॓  0953  DEVANAGARI GRAVE ACCENT (combined with ttha)
etoh["x ठ॔"] = ""; // 2388  ठ॔  0954  DEVANAGARI ACUTE ACCENT (combined with ttha)
etoh["x ठॕ"] = ""; // 2389  ठॕ  0955  DEVANAGARI VOWEL SIGN CANDRA LONG E (combined with ttha)
etoh["x ठॖ"] = ""; // 2390  ठॖ  0956  DEVANAGARI VOWEL SIGN UE (combined with ttha)
etoh["x ठॗ"] = ""; // 2391  ठॗ  0957  DEVANAGARI VOWEL SIGN UUE (combined with ttha)
etoh["x"] = "क़"; // 2392  क़ 0958  DEVANAGARI LETTER QA
etoh["x"] = "ख़"; // 2393  ख़ 0959  DEVANAGARI LETTER KHHA
etoh["x"] = "ग़"; // 2394  ग़ 095A  DEVANAGARI LETTER GHHA
etoh["x"] = "ज़"; // 2395  ज़ 095B  DEVANAGARI LETTER ZA
etoh["x"] = "ड़"; // 2396  ड़ 095C  DEVANAGARI LETTER DDDHA
etoh["x"] = "ढ़"; // 2397  ढ़ 095D  DEVANAGARI LETTER RHA
etoh["x"] = "फ़"; // 2398  फ़ 095E  DEVANAGARI LETTER FA
etoh["x"] = "य़"; // 2399  य़ 095F  DEVANAGARI LETTER YYA
etoh["x"] = "ॠ"; // 2400  ॠ 0960  DEVANAGARI LETTER VOCALIC RR
etoh["x"] = "ॡ"; // 2401  ॡ 0961  DEVANAGARI LETTER VOCALIC LL
etoh["x ठॢ"] = ""; // 2402  ठॢ  0962  DEVANAGARI VOWEL SIGN VOCALIC L (combined with ttha)
etoh["x ठॣ"] = ""; // 2403  ठॣ  0963  DEVANAGARI VOWEL SIGN VOCALIC LL (combined with ttha)
*/
etoh["."] = "।"; // 2404  । 0964  DEVANAGARI DANDA
etoh["|"] = "।"; // 2404  । 0964  DEVANAGARI DANDA
etoh[".."] = "॥"; // 2405  ॥ 0965  DEVANAGARI DOUBLE DANDA
etoh["||"] = "॥"; // 2404  । 0964  DEVANAGARI DANDA
etoh["0"] = "०"; // 2406  ० 0966  DEVANAGARI DIGIT ZERO
etoh["1"] = "१"; // 2407  १ 0967  DEVANAGARI DIGIT ONE
etoh["2"] = "२"; // 2408  २ 0968  DEVANAGARI DIGIT TWO
etoh["3"] = "३"; // 2409  ३ 0969  DEVANAGARI DIGIT THREE
etoh["4"] = "४"; // 2410  ४ 096A  DEVANAGARI DIGIT FOUR
etoh["5"] = "५"; // 2411  ५ 096B  DEVANAGARI DIGIT FIVE
etoh["6"] = "६"; // 2412  ६ 096C  DEVANAGARI DIGIT SIX
etoh["7"] = "७"; // 2413  ७ 096D  DEVANAGARI DIGIT SEVEN
etoh["8"] = "८"; // 2414  ८ 096E  DEVANAGARI DIGIT EIGHT
etoh["9"] = "९"; // 2415  ९ 096F  DEVANAGARI DIGIT NINE
/*
etoh["`"] = "॰"; // 2416  ॰ 0970  DEVANAGARI ABBREVIATION SIGN
etoh["`"] = "ॱ"; // 2417  ॱ 0971  DEVANAGARI SIGN HIGH SPACING DOT
etoh["`"] = "ॲ"; // 2418  ॲ 0972  DEVANAGARI LETTER CANDRA A
etoh["`"] = "ॳ"; // 2419  ॳ 0973  DEVANAGARI LETTER OE
etoh["`"] = "ॴ"; // 2420  ॴ 0974  DEVANAGARI LETTER OOE
etoh["`"] = "ॵ"; // 2421  ॵ 0975  DEVANAGARI LETTER AW
etoh["`"] = "ॶ"; // 2422  ॶ 0976  DEVANAGARI LETTER UE
etoh["`"] = "ॷ"; // 2423  ॷ 0977  DEVANAGARI LETTER UUE
etoh["`"] = "ॹ"; // 2425  ॹ 0979  DEVANAGARI LETTER ZHA
etoh["`"] = "ॺ"; // 2426  ॺ 097A  DEVANAGARI LETTER HEAVY YA
etoh["`"] = "ॻ"; // 2427  ॻ 097B  DEVANAGARI LETTER GGA
etoh["x"] = "ॼ"; // 2428  ॼ 097C  DEVANAGARI LETTER JJA
etoh["x"] = "ॽ"; // 2429  ॽ 097D  DEVANAGARI LETTER GLOTTAL STOP
etoh["x"] = "ॾ"; // 2430  ॾ 097E  DEVANAGARI LETTER DDDA
etoh["x"] = "ॿ"; // 2431  ॿ 097F  DEVANAGARI LETTER BBA
*/

sanskrit.matra[sanskrit.chandrabindu] = 1;
sanskrit.matra[sanskrit.bindu] = 1;
sanskrit.matra[sanskrit.avagraha] = 1;
sanskrit.matra[sanskrit.a] = 1;
sanskrit.matra[sanskrit.i] = 1;
sanskrit.matra[sanskrit.ii] = 1;
sanskrit.matra[sanskrit.u] = 1;
sanskrit.matra[sanskrit.oo] = 1;
sanskrit.matra[sanskrit.R] = 1;
sanskrit.matra[sanskrit.Rr] = 1;
sanskrit.matra[sanskrit.chandra] = 1;
sanskrit.matra[sanskrit.e] = 1;
sanskrit.matra[sanskrit.ai] = 1;
sanskrit.matra[sanskrit.o] = 1;
sanskrit.matra[sanskrit.ow] = 1;
sanskrit.matra[sanskrit.virama] = 1;
sanskrit.matra[sanskrit.visarga] = 1;

sanskrit.vowel[sanskrit.A] = 1;
sanskrit.vowel[sanskrit.AA] = 1;
sanskrit.vowel[sanskrit.I] = 1;
sanskrit.vowel[sanskrit.II] = 1;
sanskrit.vowel[sanskrit.U] = 1;
sanskrit.vowel[sanskrit.UU] = 1;
sanskrit.vowel[sanskrit.RR] = 1;
sanskrit.vowel[sanskrit.E] = 1;
sanskrit.vowel[sanskrit.AI] = 1;
sanskrit.vowel[sanskrit.O] = 1;
sanskrit.vowel[sanskrit.OU] = 1;
sanskrit.vowel[sanskrit.AUM] = 1;

sanskrit.digits[etoh["0"]] = 1;
sanskrit.digits[etoh["1"]] = 1;
sanskrit.digits[etoh["2"]] = 1;
sanskrit.digits[etoh["3"]] = 1;
sanskrit.digits[etoh["4"]] = 1;
sanskrit.digits[etoh["5"]] = 1;
sanskrit.digits[etoh["6"]] = 1;
sanskrit.digits[etoh["7"]] = 1;
sanskrit.digits[etoh["8"]] = 1;
sanskrit.digits[etoh["9"]] = 1;

sanskrit.punctuations[etoh["."]] = 1;
sanskrit.punctuations[etoh[".."]] = 1;

sanskrit.matra_to_vowel = {};
sanskrit.matra_to_vowel[sanskrit.a] = sanskrit.A;
sanskrit.matra_to_vowel[sanskrit.i] = sanskrit.I;
sanskrit.matra_to_vowel[sanskrit.ii] = sanskrit.II;
sanskrit.matra_to_vowel[sanskrit.u] = sanskrit.U;
sanskrit.matra_to_vowel[sanskrit.oo] = sanskrit.UU;
sanskrit.matra_to_vowel[sanskrit.R] = sanskrit.RR;
sanskrit.matra_to_vowel[sanskrit.Rr] = sanskrit.LL;
sanskrit.matra_to_vowel[sanskrit.e] = sanskrit.E;
sanskrit.matra_to_vowel[sanskrit.ai] = sanskrit.AI;
sanskrit.matra_to_vowel[sanskrit.o] = sanskrit.O;
sanskrit.matra_to_vowel[sanskrit.ow] = sanskrit.OU;

sanskrit.startoffset = sanskrit.chandrabindu.charCodeAt(0);

sanskrit.setAsTypingLanguage = function() {
  language = sanskrit;
  languagemappings = etoh;
}

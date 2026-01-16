var ttss = [
		{
			word: "scam",
			clue: "詐欺: Grandma, don't buy those gift cards! It is a (詐欺)!",
		},
		{
			word: "scammer",
			clue: "詐欺師: The (詐欺師) tried to steal Grandma's money.",
		},
		{
			word: "to scam",
			clue: "詐欺をする: Many people try (詐欺をする) old people.",
		},
		{
			word: "pretend",
			clue: "〜ふりをする: He (〜ふりをした) to be a famous person.",
		},
		{
			word: "in trouble",
			clue: "困っている: She is (困っている) and needs money.",
		},
		{
			word: "it is easy to",
			clue: "〜するのは簡単だ: (〜するのは簡単だ) fall for scams.",
		},
		{
			word: "fake",
			clue: "偽物: This is a (偽物) product.",
		},
		{
			word: "product",
			clue: "製品: This (製品) is popular online.",
		},
		{
			word: "celebrity",
			clue: "有名人: Tom Cruise is a popular (有名人).",
		},
		{
			word: "steal",
			clue: "盗む: Hackers try to (盗む) private information.",
		},
		{
			word: "private information",
			clue: "個人情報: Never share (個人情報) on the internet.",
		},
		{
			word: "age of",
			clue: "〜の時代: We live in (〜の時代) of AI.",
		},
		{
			word: "lose",
			clue: "失う（失った）. He (失った) a lot of money to a scammer.",
		},
		{
			word: "better and better",
			clue: "ますます良くなる: Scams are getting (ますます巧妙になっている).",
		},
		{
			word: "even if",
			clue: "たとえ〜でも: Be careful (たとえ〜でも) the message looks real.",
		},
		{
			word: "keep off",
			clue: "〜に…を置かない: (を置かない) your password (〜に) public websites.",
		},
		{
			word: "does not stop at",
			clue: "〜にとどまらない: The danger of scams (〜にとどまらない) money loss.",
		},
		{
			word: "persona",
			clue: "人物像: The scammer created a fake (人物像) online.",
		},
		{
			word: "AI-powered",
			clue: "AI搭載: (AI搭載の) tools can make fake voices.",
		},
		{
			word: "romance scam",
			clue: "ロマンス詐欺: (ロマンス詐欺) often target lonely people.",
		},
		{
			word: "watch out",
			clue: "注意してください: (注意してください) for strange messages.",
		},
	],
	appdata = { maincolor: "#a3f7a", qcount: 15 };
function saveData() {
	localStorage.setItem("ttsasyik", JSON.stringify(appdata));
}
function startttsgame() {
	for (var e, t = [], o = [], a = 0; a < appdata.qcount; a++) {
		var n = ((e = ttss.length), Math.floor(Math.random() * e)),
			i = ttss[n];
		t.push(i.word), o.push(i.clue), ttss.splice(n, 1);
	}
	var r = new Crossword(t, o),
		s = r.getSquareGrid(10);
	if (null != s) {
		(document.getElementById("crossword").innerHTML = CrosswordUtils.toHtml(
			s,
			!0
		)),
			(function (e) {
				for (var t in e) {
					for (var o = [], a = 0; a < e[t].length; a++)
						o.push(
							"<li><strong>" +
								e[t][a].position +
								".</strong> " +
								e[t][a].clue +
								"</li>"
						);
					document.getElementById(t).innerHTML = o.join("\n");
				}
			})(r.getLegend(s));
	} else {
		var c = r.getBadWords(),
			d = [];
		for (a = 0; a < c.length; a++) d.push(c[a].word);
		location.reload();
	}
}
function setqcount(e) {
	(appdata.qcount = e), saveData(), location.reload();
}
function resetsettings() {
	localStorage.clear(), location.reload();
}
function tsep(e) {
	return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function vtext(e) {
	return !!e.match(/^[A-Za-z0-9]+$/);
}
function toggledrawer() {
	$("#drawer").toggle();
}
function removeads() {
	try {
		Android.removeAds();
	} catch (e) {
		console.log(e);
	}
}
function rateapp() {
	try {
		Android.rateApp();
	} catch (e) {
		console.log(e);
	}
}
null === localStorage.getItem("ttsasyik")
	? saveData()
	: (appdata = JSON.parse(localStorage.getItem("ttsasyik")));
var canswershown = !1;
function toggleAnswer() {
	canswershown
		? ($(".canswer").hide(), $(".uanswer").show(), (canswershown = !1))
		: ($(".canswer").show(), $(".uanswer").hide(), (canswershown = !0)),
		ciihuy.showAd();
}
function activatetts() {
	$("td").click(function () {
		"&nbsp;" != $(this).find(".canswer").html() &&
			null != $(this).find(".canswer").html() &&
			(console.log("Clicked: " + $(this).find(".canswer").html()),
			console.log($(this).find(".uanswer").attr("id")),
			(selectedua = $(this).find(".uanswer").attr("id")),
			$("#vkeyboard").show());
	});
}
var selectedua = -1;
function typechar(e) {
	$("#" + selectedua).html(e), $("#vkeyboard").hide();
}
function initvkeyboard() {
	for (
		var e = [
				"a",
				"b",
				"c",
				"d",
				"e",
				"f",
				"g",
				"h",
				"i",
				"j",
				"k",
				"l",
				"m",
				"n",
				"o",
				"p",
				"q",
				"r",
				"s",
				"t",
				"u",
				"v",
				"w",
				"x",
				"y",
				"z",
				"-",
				"\u00A0",
			],
			t = 0;
		t < e.length;
		t++
	)
		$("#kbtnlist").append(
			"<div class='kbtn' onclick=typechar('" + e[t] + "')>" + e[t] + "</div>"
		);
}
setTimeout(function () {
	startttsgame(),
		activatetts(),
		initvkeyboard(),
		$("#crossword").css({
			width: 32 * $("tbody:eq(0)").find("tr:eq(0)").find("td").length + "px",
		}),
		$("#game").show();
}, 1500);

var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {

	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});

	parallax.add($("#index"))
			.add($("#about"))
			.add($("#projects"))
			.add($("#contact"))
			.add($("#news"))
			.add($("#reprint"))
			.add($("#underground"))
			.add($("#comeGetIt"))
			.add($("#seduction"));

	parallax.background = $("body");

	//Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};


	//Setting up page navigation
	parallax.index.onload=function(){
		setRight("about","");
	};

	parallax.about.onload=function(){
		setLeft("index","");
		setRight("projects","")
	};

	parallax.projects.onload=function(){
		setLeft("about","");
		setRight("news","");
		setBottom("reprint","RePrint")
	};

	parallax.contact.onload=function(){
		setLeft("news","");
		setRight("index","");
	};

	parallax.news.onload=function(){
		setLeft("projects","");
		setRight("contact","");
	};
// Project pages
	parallax.reprint.onload=function(){
		setTop("projects","Projects");
		setBottom("underground","RePrint Underground");
	};

	parallax.underground.onload=function(){
		setTop("reprint","RePrint");
		setBottom("comeGetIt", "Come & Get It!");
	};	

	parallax.comeGetIt.onload=function(){
		setTop("underground","Underground");
		setBottom("seduction","Last Seduction");
	};

	parallax.seduction.onload=function(){
		setTop("comeGetIt","Come & Get It!");
		setBottom("projects","Projects");
	};


	//Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}

	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}

	function setTop(page, text){
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}

	function setBottom(page, text){
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){
			parallax[page].bottom();
		};
	}

	//The fadey bits
	$("#bottomControl").mouseenter(function(){
		$("#bottomArrow").fadeTo(500,1);
		$("#bottomText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#bottomArrow").stop().fadeTo(500,0.5);
		$("#bottomText").stop().fadeTo(500,0);
	});

	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.5);
		$("#leftText").stop().fadeTo(500,0);
	});

	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.5);
		$("#rightText").stop().fadeTo(500,0);
	});

	$("#topControl").mouseenter(function(){
		$("#topArrow").fadeTo(500,1);
		$("#topText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#topArrow").stop().fadeTo(500, 0.5);
		$("#topText").stop().fadeTo(500,0);
	});


	$(".control").hide();
	parallax.index.show();

});

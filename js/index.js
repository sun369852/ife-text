

const data = [
	{
		school:'Primary School',
		units:[
			{
				unitNum:'unit01',
				unitTitle:'Computing',
				unitBar:[
					{
						barName: 'What’s the algorithm?',
						title: 'What’s the algorithm?',
						content: ''
					},
					{
						barName: 'How to Express algorithm',
						title: 'How to Express algorithm',
						content: ''
					}
				]
			},
			{
				unitNum:'unit02',
				unitTitle:'Learning',
				unitBar:[
					{
						barName: 'How Machine learns.',
						title: 'How Machine learns.',
						content: 'Learning is the act of acquiring new or reinforcing existing knowledge, behaviors, skills or values. To rapidly make sense of a world, babies instinctively learn by observing elements of that world. The discrete pieces of information — faces, places, objects — are then rapidly transformed into concepts, forming a flexible framework that lets babies ask questions beginning with “what.” But babies aren’t just observers. By watching others, babies pick up essential skills, social rules and laws of nature. They then categorize them into concepts and combine these building blocks in new ways to invent new solutions. \n We do not code specific sets of rules — for example, what makes a cat a cat — to teach machines. Instead, the best approach currently is to provide the computer with thousands of examples and let the algorithm figure out the best solution. But unlike people, machines can not generalize what they have learned to new problems'
					},
					{
						barName: 'Learn under supervision',
						title: 'Learn under supervision',
						content: 'Learn under supervision can apply what has been learned using labeled examples to predict future events. Starting from the analysis of a known training dataset, the learning algorithm produces an inferred function to make predictions about the output values. The system is able to provide targets for any new input after sufficient training. The learning algorithm can also compare its output with the correct, intended output and find errors in order to modify the model accordingly.'
					},
					{
						barName: 'Learn without supervision',
						title: 'Learn without supervision',
						content: 'It is unsupervised learning that used when the information used to train is neither classified nor labeled. Unsupervised learning studies how systems can infer a function to describe a hidden structure from unlabeled data. The system doesn’t figure out the right output, but it explores the data and can draw inferences from datasets to describe hidden structures from unlabeled data.'
					},
					{
						barName: 'Learn with interaction with environment',
						title: 'Learn without supervision',
						content: 'Compute can learn trough interaction with its environment by producing actions and discovers errors or rewards. It helps us formulate reward-motivated behavior exhibited by living species. Let’s say, you want to make a kid sit down to study for an exam. It is very difficult to do so, but if you give him a bar of chocolate every time he finishes a chapter/topic he will understand that if he keeps on studying he will get more chocolate bars. So he will have some motivation to study for the exam. Now initially the kid has no sense of time or how to prepare (he might go through every line and ponder upon it). He might take up hours studying a topic and never finish the syllabus in time. So, let’s say if he finishes a topic within an hour we give him a huge bar, if he takes 1.5 hours a regular bar and a toffee if he takes longer than that. So, now not only does he study but his brain devises ways in which he can finish topics faster. The kid represents the Agent. The reward system and the exam represent the Environment. The topics are analogous to States in reinforcement learning. So, the kid has to decide which topics to give more importance to (i.e., to calculate the value of each topic). This will be the work of our Value-Function. So, every time he travels from one state to another he gets a Reward and the methods he uses to complete the topics within time is our Policy. This is carried out by our Dopamine system in our brain which takes care of reward-motivated behaviour. \n Trial and error search and delayed reward are the most relevant characteristics of reinforcement learning. This method allows machines and software agents to automatically determine the ideal behavior within a specific context in order to maximize its performance. Simple reward feedback is required for the agent to learn which action is best; this is known as the reinforcement signal.'
					}
				]
			},
			{
				unitNum:'unit03',
				unitTitle:'Machine Learning',
				unitBar:[
					{
						barName: 'What’s machine learning.',
						title: 'What’s machine learning.',
						content: 'Machine learning focuses on the development of computer programs that can access data and use it learn for themselves. The process of learning begins with observations or data, such as examples, direct experience, or instruction, in order to look for patterns in data and make better decisions in the future based on the examples that we provide. The primary aim is to allow the computers learn automatically without human intervention or assistance and adjust actions accordingly.'
					}
				]
			},
			{
				unitNum:'unit04',
				unitTitle:'Computer Vision',
				unitBar:[
					{
						barName: 'How computer see the world',
						title: 'How computer see the world',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					},
					{
						barName: 'Identify Objects',
						title: 'Identify Objects',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					},
					{
						barName: 'Identify Faces',
						title: 'Identify Faces',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					},
					{
						barName: 'Detect Objects in image',
						title: 'Detect Objects in image',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					}
				]
			},
			{
				unitNum:'unit05',
				unitTitle:'Movement',
				unitBar:[
					{
						barName: 'How a robot moves',
						title: 'How a robot moves',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					}
				]
			},
			{
				unitNum:'unit06',
				unitTitle:'Speech',
				unitBar:[
					{
						barName: 'Recognize speech',
						title: 'Recognize speech',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					},
					{
						barName: 'Synthesize speech',
						title: 'Synthesize speech',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					}
				]
			},
			{
				unitNum:'unit07',
				unitTitle:'Generative AI',
				unitBar:[
					{
						barName: 'transfer image style',
						title: 'transfer image style',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					},
					{
						barName: 'tell story from image',
						title: 'tell story from image',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					}
				]
			},
			{
				unitNum:'unit08',
				unitTitle:'Game',
				unitBar:[
					{
						barName: 'DeepBlue',
						title: 'DeepBlue',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					},
					{
						barName: 'AlphfaGo',
						title: 'AlphfaGo',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					}
				]
			},
			{
				unitNum:'unit09',
				unitTitle:'Intelligent agent',
				unitBar:[
					{
						barName: 'What’s a intelligent agent',
						title: 'What’s a intelligent agent',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					}
				]
			},
			{
				unitNum:'unit10',
				unitTitle:'Robot',
				unitBar:[
					{
						barName: 'what’s a Robot',
						title: 'what’s a Robot',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					},
					{
						barName: 'Perceptron, Decision and Action',
						title: 'Perceptron, Decision and Action',
						content: '花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花花'
					}
				]
			}
		]
	},
	{
		school: 'Middle School',
		units:[
			{
				unitNum:'unit01',
				unitTitle:'Computing',
				unitBar:[
					{
						barName: 'What’s the algorithm?',
						title: 'What’s the algorithm?',
						content: 'middle unit01 bar 1'
					},
					{
						barName: 'How to Express algorithm',
						title: 'How to Express algorithm',
						content: 'middle unit01 bar 2'
					}
				]
			}
		]
	},
	{
		school: 'High School',
		units:[
			{
				unitNum:'unit02',
				unitTitle:'Computing',
				unitBar:[
					{
						barName: 'What’s the algorithm?',
						title: 'What’s the algorithm?',
						content: 'High unit01 bar 1'
					},
					{
						barName: 'How to Express algorithm',
						title: 'How to Express algorithm',
						content: 'High unit01 bar 2'
					}
				]
			}
		]
	}
]
//hash
let dataIndex = getDateIndex();
//let defData = data[dataIndex.school];
function setHash(dataIndex){
	window.location.hash = 'school=' + dataIndex.school + '%unit=' + dataIndex.unit + '%bar=' + dataIndex.bar;
}
function getDateIndex(){
	let result = {};
	let pageHash = window.location.hash;
	let [schoolStr,unitStr,barStr] = pageHash.split('%');
	let [school,unit,bar] = [
		Number(schoolStr.substr(schoolStr.length-1,1)),
		Number(unitStr.substr(unitStr.length-1,1)),
		Number(barStr.substr(barStr.length-1,1))
	]
	result = {
		school,
		unit,
		bar
	}
	return result;
}
//左侧导航
function setAsideNav(schoolindex){
	let str = '';
//	let unitData = data[dataIndex.school].units[dataIndex.unit];
//	console.log(unitData)
//	let barData = unitData.unitBar;
//	let barStr = '';
//	$(barData).each(function(i,item){
//		barStr += "<li>" + item.barName + "</li>";
//	})
//	str += "<li class='unit'><h3 class='unit-item'><span>" + unitData.unitNum + "</span><span>" + unitData.unitTitle + "</span></h3><ul class='unit-bar-list'>" + barStr + "</ul></li>";
//	$('aside .nav').html(str);
	let schoolData = data[schoolindex];
	$(schoolData.units).each(function(i,term){
		let unitBars = term.unitBar;
//		console.log(unitBars)
		//bar-list
		let barStr = '';
		$(unitBars).each(function(y,item){
			barStr += "<li><a href='#school=" + dataIndex.school + "%unit=" + i + "%bar=" + y + "'>" + item.barName + "</a></li>";
		})
		str += "<li class='unit'><h3 class='unit-item'><span>" + term.unitNum + "</span><span>" + term.unitTitle + "</span></h3><ul class='unit-bar-list'>" + barStr + "</ul></li>";
	})
//	console.log(str)
	$('aside .nav').html(str);
	$('.unit-bar-list li:first-child').addClass('term');
}
//内容页面
function setArticle(dataIndex){
	let schoolIndex = dataIndex.school;
	let unitIndex = dataIndex.unit;
	let barIndex = dataIndex.bar;
	let artStr = '';
	let artData = data[schoolIndex].units[unitIndex].unitBar;
//	console.log(artData)
	$(artData).each(function(i,item){
		artStr+= "<li><h2 id='school=" + schoolIndex + "%unit=" + unitIndex + "%bar=" + i + "'>" + item.title + "</h2><p>" + item.content + "</p></li>"
	})
//	console.log(artStr)
	$('article ul').html(artStr);
	$('.unit-bar-list').eq(unitIndex).css("display","block")
}

function setHtml(dataIndex){
	let schoolIndex = dataIndex.school;
//	let unitIndex = index.unit;
//	let barIndex = index.bar;
	setAsideNav(schoolIndex);
	setArticle(dataIndex);
}

$('document').ready(function(){
	let dataIndex = getDateIndex();
	//生成dom
	$('.menu-btn').text(data[dataIndex.school].school)
	
	let menu = '';
	$(data).each(function(i){
		menu+= "<li>" + data[i].school +"</li>";
	})
	$('.menu').html(menu);
	$('.menu li').eq(dataIndex.school).addClass('selected');
	
	setHtml(dataIndex);
	
	//menu事件添加
	$('.menu-btn').click(function(){
		$('.menu').slideToggle('fast');
		$('body').toggleClass('body-gray');
	});
	$('.menu li').click(function(){
		let schoolIndex = $(this).index();
		$('.menu li').each(function(i,el){
			if($(el).hasClass('selected')){
				$(el).removeClass('selected');
			}
		})
		$(this).addClass('selected')
		$('.menu').slideUp('fast')
		$('body').removeClass('body-gray')
		dataIndex.school = schoolIndex;
		dataIndex.unit = 0;
		setHash(dataIndex);
		setHtml(dataIndex);
	})
	//aside事件添加
	$('.unit-item').click(function(ev){
		let unitIndex = $(this).parent().index();
		if($(this).next().css('display') == 'block'){
			$(this).next().slideUp('fast');
			return;
		}
		$('.unit-bar-list').each(function(i,el){
			$(el).slideUp('fast');
		})
		$(this).next().slideDown('fast')
		dataIndex.unit = unitIndex;
		setHash(dataIndex);
		setArticle(dataIndex);
	})
	//词条
//	$('.unit-bar-list li').click(function(){
//		
//	})
})


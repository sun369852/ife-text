'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var data = [{
	school: 'Primary School',
	units: [{
		unitNum: 'unit01',
		unitTitle: 'Computing',
		unitBar: [{
			barName: 'What’s the algorithm',
			title: 'What’s the algorithm',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'How to Express algorithm',
			title: 'How to Express algorithm',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit02',
		unitTitle: 'Learning',
		unitBar: [{
			barName: 'How Machine learns',
			title: 'How Machine learns',
			content: 'Learning is the act of acquiring new or reinforcing existing knowledge, behaviors, skills or values. To rapidly make sense of a world, babies instinctively learn by observing elements of that world. The discrete pieces of information — faces, places, objects — are then rapidly transformed into concepts, forming a flexible framework that lets babies ask questions beginning with “what.” But babies aren’t just observers. By watching others, babies pick up essential skills, social rules and laws of nature. They then categorize them into concepts and combine these building blocks in new ways to invent new solutions.<br/><br/>We do not code specific sets of rules — for example, what makes a cat a cat — to teach machines. Instead, the best approach currently is to provide the computer with thousands of examples and let the algorithm figure out the best solution. But unlike people, machines can not generalize what they have learned to new problems'
		}, {
			barName: 'Learn under supervision',
			title: 'Learn under supervision',
			content: 'Learn under supervision can apply what has been learned using labeled examples to predict future events. Starting from the analysis of a known training dataset, the learning algorithm produces an inferred function to make predictions about the output values. The system is able to provide targets for any new input after sufficient training. The learning algorithm can also compare its output with the correct, intended output and find errors in order to modify the model accordingly.'
		}, {
			barName: 'Learn without supervision',
			title: 'Learn without supervision',
			content: 'It is unsupervised learning that used when the information used to train is neither classified nor labeled. Unsupervised learning studies how systems can infer a function to describe a hidden structure from unlabeled data. The system doesn’t figure out the right output, but it explores the data and can draw inferences from datasets to describe hidden structures from unlabeled data.'
		}, {
			barName: 'Learn with interaction with environment',
			title: 'Learn with interaction with environment',
			content: 'Compute can learn trough interaction with its environment by producing actions and discovers errors or rewards. It helps us formulate reward-motivated behavior exhibited by living species. Let’s say, you want to make a kid sit down to study for an exam. It is very difficult to do so, but if you give him a bar of chocolate every time he finishes a chapter/topic he will understand that if he keeps on studying he will get more chocolate bars. So he will have some motivation to study for the exam. Now initially the kid has no sense of time or how to prepare (he might go through every line and ponder upon it). He might take up hours studying a topic and never finish the syllabus in time. So, let’s say if he finishes a topic within an hour we give him a huge bar, if he takes 1.5 hours a regular bar and a toffee if he takes longer than that. So, now not only does he study but his brain devises ways in which he can finish topics faster. The kid represents the Agent. The reward system and the exam represent the Environment. The topics are analogous to States in reinforcement learning. So, the kid has to decide which topics to give more importance to (i.e., to calculate the value of each topic). This will be the work of our Value-Function. So, every time he travels from one state to another he gets a Reward and the methods he uses to complete the topics within time is our Policy. This is carried out by our Dopamine system in our brain which takes care of reward-motivated behaviour. \n Trial and error search and delayed reward are the most relevant characteristics of reinforcement learning. This method allows machines and software agents to automatically determine the ideal behavior within a specific context in order to maximize its performance. Simple reward feedback is required for the agent to learn which action is best; this is known as the reinforcement signal.'
		}]
	}, {
		unitNum: 'unit03',
		unitTitle: 'Machine Learning',
		unitBar: [{
			barName: 'What’s machine learning',
			title: 'What’s machine learning',
			content: 'Machine learning focuses on the development of computer programs that can access data and use it learn for themselves. The process of learning begins with observations or data, such as examples, direct experience, or instruction, in order to look for patterns in data and make better decisions in the future based on the examples that we provide. The primary aim is to allow the computers learn automatically without human intervention or assistance and adjust actions accordingly.'
		}]
	}, {
		unitNum: 'unit04',
		unitTitle: 'Computer Vision',
		unitBar: [{
			barName: 'How computer see the world',
			title: 'How computer see the world',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Identify Objects',
			title: 'Identify Objects',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Identify Faces',
			title: 'Identify Faces',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Detect Objects in image',
			title: 'Detect Objects in image',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit05',
		unitTitle: 'Movement',
		unitBar: [{
			barName: 'How a robot moves',
			title: 'How a robot moves',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit06',
		unitTitle: 'Speech',
		unitBar: [{
			barName: 'Recognize speech',
			title: 'Recognize speech',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Synthesize speech',
			title: 'Synthesize speech',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit07',
		unitTitle: 'Generative AI',
		unitBar: [{
			barName: 'Transfer image style',
			title: 'Transfer image style',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Tell story from image',
			title: 'Tell story from image',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit08',
		unitTitle: 'Game',
		unitBar: [{
			barName: 'DeepBlue',
			title: 'DeepBlue',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Alpha go',
			title: 'Alpha go',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit09',
		unitTitle: 'Intelligent agent',
		unitBar: [{
			barName: 'What’s a intelligent agent',
			title: 'What’s a intelligent agent',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit10',
		unitTitle: 'Robot',
		unitBar: [{
			barName: 'What’s a Robot',
			title: 'What’s a Robot',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Perceptron, decision and action',
			title: 'Perceptron, decision and action',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}]
}, {
	school: 'Middle School',
	units: [{
		unitNum: 'unit01',
		unitTitle: 'Computing',
		unitBar: [{
			barName: 'What’s algorithm',
			title: 'What’s algorithm',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Component of algorithm',
			title: 'Component of algorithm',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'WChat’s artificial intelligence',
			title: 'What’s artificial intelligence',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit02',
		unitTitle: 'Learning',
		unitBar: [{
			barName: 'How Machine learns',
			title: 'How Machine learns',
			content: 'Learning is the act of acquiring new or reinforcing existing knowledge, behaviors, skills or values. To rapidly make sense of a world, babies instinctively learn by observing elements of that world. The discrete pieces of information — faces, places, objects — are then rapidly transformed into concepts, forming a flexible framework that lets babies ask questions beginning with “what.” But babies aren’t just observers. By watching others, babies pick up essential skills, social rules and laws of nature. They then categorize them into concepts and combine these building blocks in new ways to invent new solutions.<br/><br/>We do not code specific sets of rules — for example, what makes a cat a cat — to teach machines. Instead, the best approach currently is to provide the computer with thousands of examples and let the algorithm figure out the best solution. But unlike people, machines can not generalize what they have learned to new problems'
		}, {
			barName: 'Learn under supervision',
			title: 'Learn under supervision',
			content: 'Learn under supervision can apply what has been learned using labeled examples to predict future events. Starting from the analysis of a known training dataset, the learning algorithm produces an inferred function to make predictions about the output values. The system is able to provide targets for any new input after sufficient training. The learning algorithm can also compare its output with the correct, intended output and find errors in order to modify the model accordingly. '
		}, {
			barName: ' Learn without supervision',
			title: ' Learn without supervision',
			content: 'It is unsupervised learning that used when the information used to train is neither classified nor labeled. Unsupervised learning studies how systems can infer a function to describe a hidden structure from unlabeled data. The system doesn’t figure out the right output, but it explores the data and can draw inferences from datasets to describe hidden structures from unlabeled data.'
		}, {
			barName: 'Learn with interaction with environment',
			title: 'Learn with interaction with environment',
			content: 'Compute can learn trough interaction with its environment by producing actions and discovers errors or rewards. It helps us formulate reward-motivated behavior exhibited by living species. Let’s say, you want to make a kid sit down to study for an exam. It is very difficult to do so, but if you give him a bar of chocolate every time he finishes a chapter/topic he will understand that if he keeps on studying he will get more chocolate bars. So he will have some motivation to study for the exam. Now initially the kid has no sense of time or how to prepare (he might go through every line and ponder upon it). He might take up hours studying a topic and never finish the syllabus in time. So, let’s say if he finishes a topic within an hour we give him a huge bar, if he takes 1.5 hours a regular bar and a toffee if he takes longer than that. So, now not only does he study but his brain devises ways in which he can finish topics faster. The kid represents the Agent. The reward system and the exam represent the Environment. The topics are analogous to States in reinforcement learning. So, the kid has to decide which topics to give more importance to (i.e., to calculate the value of each topic). This will be the work of our Value-Function. So, every time he travels from one state to another he gets a Reward and the methods he uses to complete the topics within time is our Policy. This is carried out by our Dopamine system in our brain which takes care of reward-motivated behaviour.<br/><br/>Trial and error search and delayed reward are the most relevant characteristics of reinforcement learning. This method allows machines and software agents to automatically determine the ideal behavior within a specific context in order to maximize its performance. Simple reward feedback is required for the agent to learn which action is best; this is known as the reinforcement signal.'
		}]
	}, {
		unitNum: 'unit03',
		unitTitle: 'Machine learning',
		unitBar: [{
			barName: 'What’s machine learning',
			title: 'What’s machine learning',
			content: 'Machine learning focuses on the development of computer programs that can access data and use it learn for themselves. The process of learning begins with observations or data, such as examples, direct experience, or instruction, in order to look for patterns in data and make better decisions in the future based on the examples that we provide. The primary aim is to allow the computers learn automatically without human intervention or assistance and adjust actions accordingly.'
		}, {
			barName: 'Classification',
			title: 'Classification',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Regression',
			title: 'Regression',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Clustering',
			title: 'Clustering',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Neural network',
			title: 'Neural network',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit04',
		unitTitle: 'Computer Vision',
		unitBar: [{
			barName: 'How computer see the world',
			title: 'How computer see the world',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Image histogram equalization',
			title: 'Image histogram equalization',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Image filter',
			title: 'Image filter',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: ' Identify Objects',
			title: ' Identify Objects',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Identify Faces',
			title: 'Identify Faces',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Detect Objects in image',
			title: 'Detect Objects in image',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit05',
		unitTitle: 'Speech',
		unitBar: [{
			barName: 'Speech recognition',
			title: 'Speech recognition',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Synthesize speech',
			title: 'Synthesize speech',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit06',
		unitTitle: 'Movement',
		unitBar: [{
			barName: 'Robot’s planning',
			title: 'Robot’s planning',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit07',
		unitTitle: 'Emotion',
		unitBar: [{
			barName: 'Affective computing',
			title: 'Affective computing',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Facial expression recognition',
			title: 'Facial expression recognition',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Recognize emotion from text',
			title: 'Recognize emotion from text',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit08',
		unitTitle: 'Generative/Creative AI',
		unitBar: [{
			barName: 'Image style transform',
			title: 'Image style transform',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Image caption',
			title: 'Image caption',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit09',
		unitTitle: 'Intelligent agents',
		unitBar: [{
			barName: 'Intelligent agents',
			title: 'Intelligent agents',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Types of intelligent agents',
			title: 'Types of intelligent agents',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit10',
		unitTitle: 'Games',
		unitBar: [{
			barName: 'Deep Blue',
			title: 'Deep Blue',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Alpha go',
			title: 'Alpha go',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit11',
		unitTitle: 'Robot',
		unitBar: [{
			barName: 'What’s a Robot',
			title: 'What’s a Robot',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit12',
		unitTitle: 'Plants',
		unitBar: [{
			barName: 'Industrial robot',
			title: 'Industrial robot',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Collaborative robot ',
			title: 'Collaborative robot ',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit13',
		unitTitle: 'Autonomous Car',
		unitBar: [{
			barName: 'Autonomous car’s framework',
			title: 'Autonomous car’s framework',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Sensors',
			title: 'Sensors',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Perceptron ',
			title: 'Perceptron ',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}]
}, {
	school: 'High School',
	units: [{
		unitNum: 'unit01',
		unitTitle: 'Computing',
		unitBar: [{
			barName: 'Artificial Intelligence',
			title: 'Artificial Intelligence',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'History of AI',
			title: 'History of AI',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'AI research field',
			title: 'AI research field',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit02',
		unitTitle: 'Programming with python',
		unitBar: [{
			barName: 'Interpretable programming language',
			title: 'Interpretable programming language',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Data Types in Python',
			title: 'Data Types in Python',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'List, tuple and dict',
			title: 'List, tuple and dict',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Variable',
			title: 'Variable',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Conditional statement',
			title: 'Conditional statement',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Loop statement',
			title: 'Loop statement',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Function',
			title: 'Function',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Modular',
			title: 'Modular',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit03',
		unitTitle: 'Data',
		unitBar: []
	}, {
		unitNum: 'unit04',
		unitTitle: 'Machine Learning',
		unitBar: [{
			barName: 'How Machine learns',
			title: 'How Machine learns',
			content: 'Learning is the act of acquiring new or reinforcing existing knowledge, behaviors, skills or values. To rapidly make sense of a world, babies instinctively learn by observing elements of that world. The discrete pieces of information — faces, places, objects — are then rapidly transformed into concepts, forming a flexible framework that lets babies ask questions beginning with “what.” But babies aren’t just observers. By watching others, babies pick up essential skills, social rules and laws of nature. They then categorize them into concepts and combine these building blocks in new ways to invent new solutions.<br/><br/>We do not code specific sets of rules — for example, what makes a cat a cat — to teach machines. Instead, the best approach currently is to provide the computer with thousands of examples and let the algorithm figure out the best solution. But unlike people, machines can not generalize what they have learned to new problems'
		}, {
			barName: 'Learn under supervision',
			title: 'Learn under supervision',
			content: 'Learn under supervision can apply what has been learned using labeled examples to predict future events. Starting from the analysis of a known training dataset, the learning algorithm produces an inferred function to make predictions about the output values. The system is able to provide targets for any new input after sufficient training. The learning algorithm can also compare its output with the correct, intended output and find errors in order to modify the model accordingly.'
		}, {
			barName: 'Learn without supervision',
			title: 'Learn without supervision',
			content: 'It is unsupervised learning that used when the information used to train is neither classified nor labeled. Unsupervised learning studies how systems can infer a function to describe a hidden structure from unlabeled data. The system doesn’t figure out the right output, but it explores the data and can draw inferences from datasets to describe hidden structures from unlabeled data.'
		}, {
			barName: 'Learn with interaction with environment',
			title: 'Learn with interaction with environment',
			content: 'Compute can learn trough interaction with its environment by producing actions and discovers errors or rewards. It helps us formulate reward-motivated behavior exhibited by living species. Let’s say, you want to make a kid sit down to study for an exam. It is very difficult to do so, but if you give him a bar of chocolate every time he finishes a chapter/topic he will understand that if he keeps on studying he will get more chocolate bars. So he will have some motivation to study for the exam. Now initially the kid has no sense of time or how to prepare (he might go through every line and ponder upon it). He might take up hours studying a topic and never finish the syllabus in time. So, let’s say if he finishes a topic within an hour we give him a huge bar, if he takes 1.5 hours a regular bar and a toffee if he takes longer than that. So, now not only does he study but his brain devises ways in which he can finish topics faster. The kid represents the Agent. The reward system and the exam represent the Environment. The topics are analogous to States in reinforcement learning. So, the kid has to decide which topics to give more importance to (i.e., to calculate the value of each topic). This will be the work of our Value-Function. So, every time he travels from one state to another he gets a Reward and the methods he uses to complete the topics within time is our Policy. This is carried out by our Dopamine system in our brain which takes care of reward-motivated behaviour.<br/><br/>Trial and error search and delayed reward are the most relevant characteristics of reinforcement learning. This method allows machines and software agents to automatically determine the ideal behavior within a specific context in order to maximize its performance. Simple reward feedback is required for the agent to learn which action is best; this is known as the reinforcement signal'
		}, {
			barName: 'What’s machine learning.',
			title: 'What’s machine learning.',
			content: 'Machine learning focuses on the development of computer programs that can access data and use it learn for themselves. The process of learning begins with observations or data, such as examples, direct experience, or instruction, in order to look for patterns in data and make better decisions in the future based on the examples that we provide. The primary aim is to allow the computers learn automatically without human intervention or assistance and adjust actions accordingly.'
		}]
	}, {
		unitNum: 'unit05',
		unitTitle: 'Machine Learning Algorithms',
		unitBar: [{
			barName: 'K-Nearest Neighbor, KNN',
			title: 'K-Nearest Neighbor, KNN',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Decision Tree',
			title: 'Decision Tree',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Logistic Regression',
			title: 'Logistic Regression',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Support Vector Machine',
			title: 'Support Vector Machine',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Adaboosting',
			title: 'Adaboosting',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Linear Regression',
			title: 'Linear Regression',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit06',
		unitTitle: 'Deep Learning',
		unitBar: [{
			barName: 'Neural Network',
			title: 'Neural Network',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Gradient Descent',
			title: 'Gradient Descent',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Back-propagation',
			title: 'Back-propagation',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit07',
		unitTitle: 'Computer Vision',
		unitBar: [{
			barName: 'Image histogram equalization',
			title: 'Image histogram equalization',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Image filter',
			title: 'Image filter',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Convolutional Neural network',
			title: 'Convolutional Neural network',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'How computer see the world',
			title: 'How computer see the world',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Identify Objects',
			title: 'Identify Objects',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Identify Faces',
			title: 'Identify Faces',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Detect Objects in image',
			title: 'Detect Objects in image',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit08',
		unitTitle: 'Speech',
		unitBar: [{
			barName: 'Speech recognition',
			title: 'Speech recognition',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Synthesize speech',
			title: 'Synthesize speech',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Natural language processing',
			title: 'Natural language processing',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Recurrent neural network',
			title: 'Recurrent neural network',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Long-short term memory',
			title: 'Long-short term memory',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit09',
		unitTitle: 'Movement',
		unitBar: [{
			barName: 'Learning to walk',
			title: 'Learning to walk',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Genetic algorithm',
			title: 'Genetic algorithm',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit10',
		unitTitle: 'Emotion',
		unitBar: [{
			barName: 'Affective computing',
			title: 'Affective computing',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Facial expression recognition',
			title: 'Facial expression recognition',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit11',
		unitTitle: 'Generative/Creative AI',
		unitBar: [{
			barName: 'Image style transform',
			title: 'Image style transform',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Image caption',
			title: 'Image caption',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit12',
		unitTitle: 'Intelligent agents',
		unitBar: [{
			barName: 'Intelligent agents',
			title: 'Intelligent agents',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Types of intelligent agents',
			title: 'Types of intelligent agents',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Learning agents',
			title: 'Learning agents',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit13',
		unitTitle: 'Games',
		unitBar: [{
			barName: 'Deep Blue',
			title: 'Deep Blue',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Alpha go',
			title: 'Alpha go',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit14',
		unitTitle: 'Robot',
		unitBar: [{
			barName: 'What’s a Robot',
			title: 'What’s a Robot',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: '“see-think-act” structure',
			title: '“see-think-act” structure',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Visual navigation and location',
			title: 'Visual navigation and location',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'SLAM',
			title: 'SLAM',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit15',
		unitTitle: 'Plants',
		unitBar: [{
			barName: 'Industrial robot',
			title: 'Industrial robot',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Collaborative robot',
			title: 'Collaborative robot',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}, {
		unitNum: 'unit16',
		unitTitle: 'Autonomous Car',
		unitBar: [{
			barName: 'Autonomous car’s framework',
			title: 'Autonomous car’s framework',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Sensors',
			title: 'Sensors',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Perceptron',
			title: 'Perceptron',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Decision',
			title: 'Decision',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			barName: 'Action',
			title: 'Action',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}]
	}]
}];
window.notscroll = true;
window.asideNavPos = 0;
//hash
var dataIndex = getDateIndex();
function setHash(dataIndex) {
	window.location.hash = 'school=' + dataIndex.school + '%unit=' + dataIndex.unit + '%bar=' + dataIndex.bar;
}
function getDateIndex() {
	var result = {
		school: 0,
		unit: 0,
		bar: 0
	};
	var pageHash = window.location.hash;
	if (!pageHash) {
		return result;
	}

	var _pageHash$split = pageHash.split('%'),
	    _pageHash$split2 = _slicedToArray(_pageHash$split, 3),
	    schoolStr = _pageHash$split2[0],
	    unitStr = _pageHash$split2[1],
	    barStr = _pageHash$split2[2];

	var _ref = [Number(schoolStr.substr(schoolStr.length - 1, 1)), Number(unitStr.substr(unitStr.length - 1, 1)), Number(barStr.substr(barStr.length - 1, 1))],
	    school = _ref[0],
	    unit = _ref[1],
	    bar = _ref[2];

	result = {
		school: school,
		unit: unit,
		bar: bar
	};
	return result;
}
//scroll函数
function scrollChange() {
	var $nav = $('.unit-item.selected').next().children();
	var $article = $('article ul li');
	var $window = $(window);
	var $term = $('.unit-bar-list .term');
	console.log($term.offset().top);
	$window.scroll(function () {
		if (!window.notscroll) {
			return;
		}
		var scrollTop = $window.scrollTop();
		//		console.log(scrollTop)
		$article.each(function (i, el) {
			if (scrollTop >= $(el).position().top - 300) {
				$nav.removeClass('term').eq(i).addClass('term');
			}
		});
	});
}
function clickBar() {
	var $nav = $('.unit-item.selected').next().children();
	var $article = $('article ul li');
	var $window = $(window);
	$nav.click(function () {
		window.notscroll = false;
		var index = $(this).index();
		$window.scrollTop($article.eq(index).offset().top - 280);
		setTimeout(function () {
			console.log("1");
			window.notscroll = true;
		}, 300);
	});
}
//左侧导航
function setAsideNav(schoolindex) {
	var str = '';
	//	let unitData = data[dataIndex.school].units[dataIndex.unit];
	//	console.log(unitData)
	//	let barData = unitData.unitBar;
	//	let barStr = '';
	//	$(barData).each(function(i,item){
	//		barStr += "<li>" + item.barName + "</li>";
	//	})
	//	str += "<li class='unit'><h3 class='unit-item'><span>" + unitData.unitNum + "</span><span>" + unitData.unitTitle + "</span></h3><ul class='unit-bar-list'>" + barStr + "</ul></li>";
	//	$('aside .nav').html(str);
	var schoolData = data[schoolindex];
	$(schoolData.units).each(function (i, term) {
		var unitBars = term.unitBar;
		//bar-list
		var barStr = '';
		$(unitBars).each(function (y, item) {
			//			barStr += "<li><a href='#school=" + dataIndex.school + "%unit=" + i + "%bar=" + y + "'>" + item.barName + "</a></li>";
			barStr += "<li class='link'>" + item.barName + "</li>";
		});
		str += "<li class='unit'><h3 class='unit-item'><span>" + term.unitNum + "</span><span>" + term.unitTitle + "</span></h3><ul class='unit-bar-list'>" + barStr + "</ul></li>";
	});
	$('aside .nav').html(str);
	//dom添加完成
	//	console.log(dataIndex)
	$('.unit-item').eq(dataIndex.unit).addClass('selected');
	$('.unit-bar-list li').removeClass('term');
	$('.unit-bar-list li:first-child').addClass('term');
	//aside事件添加
	$('.unit-item').click(function (ev) {
		//获取当前点击课程index
		var unitIndex = $(this).parent().index();
		//若为自身 收起此词条
		if ($(this).next().css('display') == 'block') {
			$(this).next().slideUp('fast');
			return;
		}
		//		收起所有词条
		$('.unit-bar-list').each(function (i, el) {
			$(el).slideUp('fast');
		});
		$('.unit-item').each(function (i, el) {
			if ($(el).hasClass('selected')) {
				$(el).removeClass('selected');
			}
		});
		$(this).addClass('selected');
		$(this).next().slideDown('fast');
		//去除所有词条选中
		$('.unit-bar-list li').removeClass('term');
		//选中第一个词条
		$(this).next().children('li:first-child').addClass('term');
		dataIndex.unit = unitIndex;
		dataIndex.bar = 0;
		setHash(dataIndex);
		setArticle(dataIndex);
	});
	//词条
	$('.unit-bar-list .link').click(function () {
		var barIndex = $(this).index();
		console.log("aaaa", barIndex);
		$('.unit-bar-list .link').removeClass('term');
		dataIndex.bar = barIndex;
		setHash(dataIndex);
		$('.unit-item.selected').next().children().eq(barIndex).addClass('term');
		//		$(this).index()
		clickBar();
	});
	//	let nav = document.querySelector('aside .nav');
	//	nav.onmousewheel = function(ev){
	//		if(){
	//			
	//		}
	//	}
	//	$('aside .nav').on('mousewheel', function(event) {
	////	    console.log(event.deltaX, event.deltaY, event.deltaFactor);
	//		let winH = $(window).height();
	//		let navH = $(this).height();
	//		let max = navH-winH;
	//		console.log(max)
	//		if(event.deltaY == -1){
	//			window.asideNavPos -=20
	//		}else if(event.deltaY == 1){
	//			window.asideNavPos +=20
	//		}
	//		if(-max < window.asideNavPos){
	//			window.asideNavPos = max
	//		}
	//		if(window.asideNavPos > 0){
	//			window.asideNavPos = 0
	//		}
	//		$(this).css('top',window.asideNavPos);
	//	});
}
//内容页面
function setArticle(dataIndex) {
	var schoolIndex = dataIndex.school;
	var unitIndex = dataIndex.unit;
	var barIndex = dataIndex.bar;
	var artStr = '';
	var artData = data[schoolIndex].units[unitIndex].unitBar;
	//	console.log(artData)
	$(artData).each(function (i, item) {
		artStr += "<li><h2 id='school=" + schoolIndex + "%unit=" + unitIndex + "%bar=" + i + "'>" + item.title + "</h2><p>" + item.content + "</p></li>";
	});
	//	console.log(artStr)
	$('article ul').html(artStr);
	$('.unit-bar-list').eq(unitIndex).css("display", "block");
	scrollChange();
}

function setHtml(dataIndex) {
	var schoolIndex = dataIndex.school;
	//	let unitIndex = index.unit;
	//	let barIndex = index.bar;
	//console.log("school",dataIndex)
	setAsideNav(schoolIndex);
	setArticle(dataIndex);
}

$('document').ready(function () {
	dataIndex = getDateIndex();
	//生成dom
	$('.menu-btn').text(data[dataIndex.school].school);

	var menu = '';
	$(data).each(function (i) {
		menu += "<li>" + data[i].school + "</li>";
	});
	$('.menu').html(menu);
	$('.menu li').eq(dataIndex.school).addClass('selected');

	setHtml(dataIndex);

	//menu事件添加
	$('.menu-btn').click(function () {
		$(this).toggleClass('close');
		$('.menu').slideToggle('fast');
		$('body').toggleClass('body-gray');
	});
	$('.menu li').click(function () {
		//		console.log($(this)[0].innerHTML)
		var schoolIndex = $(this).index();
		$('.menu li').removeClass('selected');
		$(this).addClass('selected');
		$('.menu-btn').html($(this)[0].innerHTML);
		$('.menu').slideUp('fast');
		$('body').removeClass('body-gray');
		dataIndex.school = schoolIndex;
		dataIndex.unit = 0;
		dataIndex.bar = 0;
		setHash(dataIndex);
		dataIndex = getDateIndex();
		setHtml(dataIndex);
	});
});
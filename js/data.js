window.activities = {
	'hardware' : ['network.development', 'hardware.engineering'],
	'software' : ['coding.programming', 'web.development', 'software.engineering'],
	'product development' : ['product.management', 'data.science', 'user.experience.design'],
	'visual design' : ['graphic.multimedia.design', 'animation.3d']
};

window.filter_values = {'price':
			[2, [
			    {label: 'Free', normalized_list: ["Free"]},
			    {label: '$', normalized_list: ['$', '$ - $$', '$$', '$$ - $$$', '$$$$']},
			    {label: 'Show All', normalized_list: ['Free', '$', '$ - $$', '$$', '$$ - $$$', '$$$$', '$$$$$']}
			]],
			'skill_level' :
			[0, [
			    {label: 'Basic', normalized_list: ["Basic"]},
			    {label: 'Intermediate', normalized_list: ['Intermediate']},
			    {label: 'Advanced', normalized_list: ['Advanced']}
			]]
		       };

window.dd_choices =[{
    'id': 0,
    'dropdown_type' : 'learner taxonomy',
    'label': "I'm",
    'options': ['a kid (under 12)', ['a kid (under 12)', 'a teen (upto 17)', 'an adult (18+)']]
}, {
    'id': 1,
    'dropdown_type' : 'skill taxonomy',
    'label': "I want to learn",
    'options': ['software', ['software', 'hardware', 'product development', 'visual design']]
}];

